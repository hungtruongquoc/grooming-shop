<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons';

defineOptions({
  name: 'GlobalLayout',
});

const toolbarItems = [
  {
    label: 'Services',
    to: '/#services',
  },
  {
    label: 'Groomers',
    to: '/#groomers',
  },
];
</script>

<template>
  <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2">
    <q-header
      class="transparent-header mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl py-10"
    >
      <q-toolbar inset>
        <q-toolbar-title class="text-3xl text-teal-800">
          <router-link to="/" class="text-3xl text-teal-800 no-underline">
            HyBo Grooming
          </router-link>
        </q-toolbar-title>
        <q-space></q-space>
        <q-btn
          v-for="item in toolbarItems"
          :key="item.label"
          flat
          dense
          class="text-teal-800 text-2xl"
          no-caps
        >
          <router-link :to="item.to" class="text-teal-800 no-underline">
            {{ item.label }}
          </router-link>
        </q-btn>
        <q-btn flat dense class="ml-5 text-teal-800">
          <router-link to="/login" class="text-teal-800 no-underline">
            <FontAwesomeIcon :icon="faUserCircle" size="2x" />
          </router-link>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <q-page class="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-xl">
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped lang="scss">
.transparent-header {
  background-color: transparent;
  box-shadow: none; /* Remove shadow if needed */
  color: black;
}
</style>
