<template>
  <router-link :to="to" class="text-teal-800 text-2xl section-nav mx-2 px-2">
    {{ label }}
  </router-link>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.section-nav {
  &:hover {
    background-color: #26a69a;
    color: white;
    border-radius: 5px;
  }
}
</style>
