<template>
  <input
    type="text"
    :class="['form-control', props.class || '']"
    :value="props.value"
    :placeholder="props.placeholder"
    :disabled="props.disabled"
  >
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
  value?: string | null,
  placeholder?: string,
  disabled?: boolean,
  class?: string,
}
const props = defineProps<Props>();
</script>