<script setup lang="ts">
import { useRuleStore } from 'stores/rules';

const store = useRuleStore();
</script>

<template>
  <q-page-container>
    <q-page class="mb-8">
      <p>Make an appointment</p>
      <p>{{ store.counter }}</p>
    </q-page>
  </q-page-container>
</template>

<style scoped lang="scss"></style>
