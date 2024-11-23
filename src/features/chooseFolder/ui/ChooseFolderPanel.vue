<template>
  <ButtonTriggeredModal
    modal-title="Выберите папку"
    action-btn-text="Ок"
    toggle-btn-text="Открыть"
    @confirm="onSave"
  >
    <template #modal-body>
      <BaseSpinner
        v-if="treeStore.isLoading"
      />

      <div
        class="d-flex flex-column justify-content-center align-items-center"
        v-else
      >
        <div class="d-flex flex-row w-100 mb-3">
          <div class="d-flex flex-row align-items-center px-2 fw-bold">
            Выбрана:
          </div>
          <BaseInput
            class="w-100 fw-bold"
            :value="selectedFolderName || null"
            placeholder="Не выбрано"
            disabled
          />
        </div>

        <FolderNodeTree
          v-for="node in treeStore.children"
          :key="node.id"
          :folder-node="node"
          :selected-folder-id="selectedFolderId || null"
          @select-folder="onSelectFolder"
        />
      </div>
    </template>
  </ButtonTriggeredModal>
</template>

<script
  setup
  lang="ts"
>
import ButtonTriggeredModal from '@shared/ui/ButtonTriggeredModal.vue';
import { useFolderNodesStore } from '@features/chooseFolder/store/useFolderNodesStore';
import { defineEmits, onMounted, ref } from 'vue';
import BaseSpinner from '@shared/ui/BaseSpinner.vue';
import FolderNodeTree from '@widgets/ui/FolderNodeTree.vue'
import { FolderNode } from '@/entities/folder/model/FolderNode';
import BaseInput from '@shared/ui/BaseInput.vue';

const emit= defineEmits(['saveFolder']);

/**
 * Стор реализован лишь для имитации фетча "дерева" папок - для демонстрации навыков работы с Pinia-сторами
 */
const treeStore = useFolderNodesStore();

onMounted(async () => {
  await treeStore.fetchImitation();
});

const selectedFolderId = ref<number | null>(null);
const selectedFolderName = ref<string | null>(null);

const onSelectFolder = (folderNode: FolderNode) => {
  selectedFolderId.value = folderNode.id;
  selectedFolderName.value = folderNode.name;
};

const onSave = () => {
  emit('saveFolder', selectedFolderId.value, selectedFolderName.value)
};
</script>