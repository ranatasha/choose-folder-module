import { ref } from 'vue'
import { defineStore } from 'pinia'
import { FolderNode } from '@/entities/folder/model/FolderNode';
import { mockFolders } from '@features/chooseFolder/constants/mockFolders';

/**
 * Стор реализован лишь для имитации фетча иерархии папок - для демонстрации навыков работы со стейт-менеджером Pinia
 */
export const useFolderNodesStore = defineStore('FolderNodes', () => {
  const children = ref<FolderNode[]>([]);
  const isLoading = ref(false);

  const fetchImitation = () => {
    isLoading.value = true;
    return new Promise((resolve) => {
      setTimeout(() => {
        children.value = structuredClone(mockFolders);
        resolve();
        isLoading.value = false;
      }, 1000);
    })
  }

  return { children, isLoading, fetchImitation }
})
