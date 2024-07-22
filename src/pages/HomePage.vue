<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faCheckCircle, faDog } from '@fortawesome/pro-solid-svg-icons';
import { faPaw } from '@fortawesome/pro-light-svg-icons';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToAppointmentCreate = () => {
  router.push({ path: '/appointment-create' });
};
</script>

<template>
  <q-page-container>
    <q-page class="mb-8">
      <div class="w-full bg-pink-200 py-16">
        <div class="max-w-screen-md mx-auto text-center px-4">
          <h1 class="text-5xl mb-4 text-pink-400" style="font-family: pacifico">
            Welcome to HyBo Grooming
          </h1>
          <div
            class="flex flex-col md:flex-row justify-center items-center mb-8 mt-8"
          >
            <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 20 Q 95 10 180 20"
                stroke="#064e3b"
                stroke-width="2"
                fill="transparent"
              />
            </svg>
            <span class="text-teal-900 font-bold mx-2"
              ><FontAwesomeIcon :icon="faPaw" size="4x"
            /></span>
            <svg height="30" width="200" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 20 Q 95 10 180 20"
                stroke="#064e3b"
                stroke-width="2"
                fill="transparent"
              />
            </svg>
          </div>
          <p
            class="text-xl mb-12 text-teal-900 font-semibold leading-relaxed"
            style="font-family: poppins"
          >
            Discover the
            <span class="text-3xl text-pink-400" style="font-family: pacifico"
              >ultimate</span
            >
            in pet grooming! Our meticulously tailored packages ensure the
            <span class="text-4xl text-pink-400" style="font-family: pacifico"
              >utmost care</span
            >
            and
            <span class="text-4xl text-pink-400" style="font-family: pacifico"
              >comfort</span
            >
            for your furry friend, delivering an unmatched grooming experience.
          </p>
          <p
            class="text-lg mb-6 text-teal-800 font-semibold"
            style="font-family: poppins"
          >
            Ready to pamper your pet? Click below to book the ultimate grooming
            experience now!
          </p>
          <q-btn
            color="pink"
            class="q-pa-md"
            rounded
            no-caps
            @click="navigateToAppointmentCreate"
          >
            <p>
              <FontAwesomeIcon :icon="faDog" size="2x" />
            </p>
            <p class="mx-2 text-2xl">Book Now</p>
          </q-btn>
        </div>
      </div>
      <div class="max-w-screen-md mx-auto text-center my-8 px-4">
        <h2 class="text-4xl font-bold mb-6 text-teal-800">
          Our Grooming Packages
        </h2>
        <p class="text-2xl mb-8 text-teal-800">
          At HyBo Grooming, we offer two packages tailored to meet your pet's
          needs. The
          <span
            class="font-semibold text-pink-400"
            style="font-family: pacifico"
            >Basic Package</span
          >
          includes essential grooming services, while the
          <span
            class="font-semibold text-pink-400"
            style="font-family: pacifico"
            >Deluxe Package</span
          >
          adds a full-body custom haircut for a luxurious experience.
        </p>
      </div>
      <div class="overflow-x-auto">
        <table
          class="w-full max-w-screen-md border border-gray-300 divide-y divide-gray-200 mx-auto"
        >
          <thead class="bg-green-200">
            <tr>
              <th
                class="px-6 py-4 text-left text-sm font-medium text-teal-900 uppercase tracking-wider"
              ></th>
              <th
                class="px-6 py-4 text-center text-2xl font-medium text-pink-400 tracking-wider"
                style="font-family: pacifico"
              >
                Basic
              </th>
              <th
                class="px-6 py-4 text-center text-pink-400 text-2xl font-medium tracking-wider"
                style="font-family: pacifico"
              >
                Deluxe
              </th>
            </tr>
          </thead>
          <tbody class="bg-light-green-100 divide-y divide-gray-200">
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-base md:text-2xl text-teal-900"
                style="font-family: poppins"
              >
                Nail File
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-base md:text-2xl text-teal-900"
                style="font-family: poppins"
              >
                Ear Cleaning
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-base md:text-2xl text-teal-900"
                style="font-family: poppins"
              >
                Anal Gland Check
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
            </tr>
            <tr>
              <td
                class="px-6 py-4 whitespace-nowrap text-base md:text-2xl text-teal-900"
                style="font-family: poppins"
              >
                Full-body custom hair cut
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              ></td>
              <td
                class="px-6 py-4 whitespace-nowrap text-center text-lg text-teal-900"
              >
                <FontAwesomeIcon
                  :icon="faCheckCircle"
                  class="text-pink-400"
                  aria-label="Included"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="max-w-screen-md mx-auto text-center my-8 px-4" id="groomers">
        <h2 class="text-4xl font-bold mb-6 text-teal-800">Our Groomers</h2>
        <q-img
          src="/images/groomer.jpg"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </div>
    </q-page>
  </q-page-container>
</template>

<style scoped lang="scss">
.centralized-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.bg-pastel-teal {
  background-color: #a7d5c9;
}
</style>
