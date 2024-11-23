<template>
  <button
    type="button"
    :class="`btn btn-primary ${roundedSelector || 'rounded'}`"
    @click="emit('click')"
  >
    {{ props.text }}
  </button>
</template>

<script
  setup
  lang="ts"
>
import { defineProps, defineEmits } from 'vue';

interface Props {
  text: string;
  roundedSelector?: string;
}
const props = defineProps<Props>();
const emit = defineEmits(['click']);
</script>