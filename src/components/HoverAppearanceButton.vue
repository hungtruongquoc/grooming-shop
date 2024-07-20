<template>
  <q-btn
    flat
    v-bind="$attrs"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
    :ripple="false"
    round
    :class="[textColor]"
    :to="to"
  >
    <slot name="icon-default" v-if="!isHovered"></slot>
    <slot name="icon-hover" v-else></slot>
  </q-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  to: {
    type: String,
    required: true,
  },
  textColor: {
    type: String,
    default: 'text-teal-800',
  },
  hoverTextColor: {
    type: String,
    default: 'text-green-800', // Default hover color
  },
});

const isHovered = ref(false);

defineOptions({
  inheritAttrs: false,
});
</script>

<style scoped lang="scss"></style>
