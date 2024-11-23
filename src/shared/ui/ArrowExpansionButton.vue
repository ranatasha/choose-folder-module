<template>
  <ChevronDownIcon
    :class="['w-1em h-1em d-flex flex-row align-items-center justify-content-center', props.isExpanded ? 'active' : 'non-active']"
    v-bind="props"
    @click="emit('update:is-expanded', !props.isExpanded)"
  />
</template>

<script
  setup
  lang="ts"
>
import { defineEmits, defineProps } from 'vue';
import ChevronDownIcon from '@shared/ui/icons/ChevronDownIcon.vue';

interface Props {
  isExpanded: boolean,
  size?: number,
  fillColor?: string,
}

const props = defineProps<Props>();

const emit = defineEmits(['update:is-expanded']);
</script>

<style
  lang="scss"
  scoped
>
.active {
  transform: rotate(180deg) translateY(5px) translateX(5px);
  transition: transform 0.3s ease-in-out;
}

.non-active {
  transform: rotate(360deg);
  transition: transform 0.3s ease-in-out;
}
</style>