<template>
  <div class="h-100 d-flex flex-row align-items-center justify-content-center">
    <div class="input-group mb-3 rounded w-50">
      <BaseInput
        class="fw-bold"
        :value="inputValue || null"
        placeholder="Выберите папку"
        disabled
      />
      <ChooseFolderPanel
        @save-folder="onSaveFolder"
      />
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import ChooseFolderPanel from '@features/chooseFolder/ui/ChooseFolderPanel.vue';
import { computed, ref } from 'vue';
import BaseInput from '@shared/ui/BaseInput.vue';

const selectedFolderId = ref<number | null>(null);
const selectedFolderName = ref<string | null>(null);

const inputValue = computed(() => {
  if (selectedFolderId.value && selectedFolderName.value) {
    return `${selectedFolderName.value} (id: ${selectedFolderId.value})`;
  }
  return null;
});

const onSaveFolder = (id: number, name: string) => {
  selectedFolderId.value = id;
  selectedFolderName.value = name;
}
</script>

<style lang="scss" scoped>
.form-control {
  min-width: 100px;
}
</style>
