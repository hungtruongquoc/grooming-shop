<script setup lang="ts">
import { useRuleStore } from 'stores/rules';
import { onMounted, ref, reactive } from 'vue';
import { date } from 'quasar';
import { useServiceStore } from 'stores/services';

const store = useRuleStore();
const serviceStore = useServiceStore();

const hourOptions = ref<number[]>(Array.from({ length: 24 }, (_, i) => i));

const formData = reactive({
  firstName: '',
  lastName: '',
  appointmentDate: date.formatDate(Date.now(), 'YYYY/MM/DD'),
  appointmentTime: date.formatDate(Date.now(), 'H:m'),
  service: '',
});

onMounted(async () => {
  // Start both API calls at the same time
  await Promise.all([serviceStore.getServices(), store.getRules()]);
  updateDefaultDate();
  updateHourOptions();
  updateAppointmentTime();
});

function updateDefaultDate() {
  if (store.rules && store.rules.length > 0) {
    const [{ last_timestamp }] = store.rules;
    const currentTime = new Date();
    const lastTimestamp = new Date();
    const [hours, minutes] = last_timestamp.split(':').map(Number);

    lastTimestamp.setHours(hours, minutes, 0, 0);

    if (currentTime > lastTimestamp) {
      const tomorrow = new Date(currentTime);
      tomorrow.setDate(currentTime.getDate() + 1);
      formData.appointmentDate = date.formatDate(tomorrow, 'YYYY/MM/DD');
    }
  }
}

function updateHourOptions() {
  if (store.rules && store.rules.length > 0) {
    const rule = store.rules[0];
    const earliestTime = parseInt(rule.earliest_time.split(':')[0], 10);
    const lastTime = parseInt(rule.last_timestamp.split(':')[0], 10);

    hourOptions.value = Array.from(
      { length: lastTime - earliestTime + 1 },
      (_, i) => i + earliestTime
    );
  }
}

function updateAppointmentTime() {
  if (store.rules && store.rules.length > 0) {
    const [{ last_timestamp, earliest_time }] = store.rules;
    const [lastHour] = last_timestamp.split(':').map(Number);
    const [earliestHour] = earliest_time.split(':').map(Number);

    const currentTime = new Date();
    const currentHour = currentTime.getHours();

    if (currentHour >= lastHour) {
      // Set to 10:00 AM of the next day
      const tomorrow = new Date(currentTime);
      tomorrow.setDate(currentTime.getDate() + 1);
      tomorrow.setHours(earliestHour, 0, 0, 0);
      formData.appointmentTime = date.formatDate(tomorrow, 'HH:mm');
    } else if (currentHour >= earliestHour && currentHour < lastHour) {
      // Set to current time
      formData.appointmentTime = date.formatDate(currentTime, 'HH:mm');
    } else {
      // Set to 10:00 AM of the same day
      const today = new Date(currentTime);
      today.setHours(earliestHour, 0, 0, 0);
      formData.appointmentTime = date.formatDate(today, 'HH:mm');
    }
  }
}

function onReset() {
  formData.firstName = '';
  formData.lastName = '';
  updateDefaultDate();
  updateAppointmentTime();
}
</script>

<template>
  <q-page-container>
    <q-page class="mb-8 max-w-screen-md mx-auto p-2">
      <h1 class="text-4xl mb-8">Make an appointment</h1>
      <q-form class="q-gutter-md" @reset="onReset">
        <q-linear-progress
          :indeterminate="store.isLoading"
          color="secondary"
          class="q-mt-sm"
        />
        <q-input
          v-model="formData.firstName"
          fill
          label="First Name*"
          lazy-rules
          label-color="teal-10"
          clearable
          :rules="[
            (val) => (val && val.length > 0) || 'Please provide first name',
          ]"
        />
        <q-input
          v-model="formData.lastName"
          fill
          label="Last Name*"
          lazy-rules
          clearable
          label-color="teal-10"
          :rules="[
            (val) => (val && val.length > 0) || 'Please provide last name',
          ]"
        />
        <q-select
          filled
          v-model="formData.service"
          option-value="sys.id"
          option-label="name"
          label-color="teal-10"
          label="Packages*"
          :options="serviceStore.services"
          clearable
        />
        <div class="flex flex-row gap-10 justify-center">
          <div class="text-center">
            <p class="font-semibold text-xl mb-5 text-teal-700">
              Please choose a date for your appointment
            </p>
            <q-date v-model="formData.appointmentDate" color="pink-11" />
          </div>
          <div class="text-center">
            <p class="font-semibold text-xl mb-5 text-teal-700">
              Please choose your arrival time
            </p>
            <q-time
              color="pink-11"
              v-model="formData.appointmentTime"
              :hour-options="[10, 11, 12, 1, 2]"
            />
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-center mt-10">
          <q-btn
            label="Submit"
            type="submit"
            color="pink-11"
            no-caps
            class="text-base grow"
            :disable="store.isLoading"
          />
          <q-btn
            label="Reset"
            type="reset"
            color="secondary"
            flat
            class="md:ml-2 mt-2 md:mt-0 text-base grow"
            no-caps
            :disable="store.isLoading"
          />
        </div>
      </q-form>
    </q-page>
  </q-page-container>
</template>

<style scoped lang="scss"></style>
