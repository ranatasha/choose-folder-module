<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.size"
    :height="props.size"
    :fill="props.fillColor || '#0D6EFD'"
    :style="{display: 'block'}"
  >
    <title>chevron-down</title>
    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
  </svg>
</template>

<script
  setup
  lang="ts"
>
import { defineProps } from 'vue';

interface Props {
  size?: number,
  fillColor?: string,
}

const props = defineProps<Props>();
</script>