<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserCircle } from '@fortawesome/pro-regular-svg-icons';
import { faUserCircle as faUserCircleSolid } from '@fortawesome/pro-solid-svg-icons';
import { faBars } from '@fortawesome/pro-solid-svg-icons';
import HoverAppearanceButton from 'components/HoverAppearanceButton.vue';
import LandingPageNavLink from 'components/LandingPageNavLink.vue';
import { useMediaQuery } from '../helpers/useMediaQuery';
import { ref } from 'vue';

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
const isMobile = useMediaQuery('(max-width: 768px)');
const showMobileMenu = ref(false);
</script>

<template>
  <q-layout view="lHh lpr lFf" container style="height: 400px" class="shadow-2">
    <q-header class="transparent-header w-full py-10">
      <q-toolbar inset class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <q-toolbar-title class="text-3xl text-teal-800">
          <router-link to="/" class="text-3xl text-teal-800 no-underline">
            HyBo Grooming
          </router-link>
        </q-toolbar-title>
        <q-space v-show="!isMobile"></q-space>
        <div v-show="!isMobile" class="flex space-x-4 md:flex md:space-x-4">
          <LandingPageNavLink
            v-for="item in toolbarItems"
            :key="item.label"
            :label="item.label"
            :to="item.to"
          />
        </div>
        <div>
          <q-btn flat dense class="md:hidden text-teal-800">
            <FontAwesomeIcon :icon="faBars" size="2x" />
          </q-btn>
          <q-menu v-show="showMobileMenu">
            <div class="flex-col flex gap-5 py-5">
              <LandingPageNavLink
                v-for="item in toolbarItems"
                :key="item.label"
                :label="item.label"
                :to="item.to"
              />
              <HoverAppearanceButton
                to="/login"
                text-color="text-teal-800"
                class="ml-5"
              >
                <template #icon-default>
                  <FontAwesomeIcon :icon="faUserCircle" size="2x" />
                </template>
                <template #icon-hover>
                  <FontAwesomeIcon :icon="faUserCircleSolid" size="2x" />
                </template>
              </HoverAppearanceButton>
            </div>
          </q-menu>
        </div>
        <HoverAppearanceButton
          to="/login"
          text-color="text-teal-800"
          v-show="!isMobile"
          class="ml-5"
        >
          <template #icon-default>
            <FontAwesomeIcon :icon="faUserCircle" size="2x" />
          </template>
          <template #icon-hover>
            <FontAwesomeIcon :icon="faUserCircleSolid" size="2x" />
          </template>
        </HoverAppearanceButton>
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
.section-nav {
  &:hover {
    background-color: #26a69a;
    color: white;
    border-radius: 5px;
  }
}
</style>
