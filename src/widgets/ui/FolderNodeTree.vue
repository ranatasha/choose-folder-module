<template>
  <div
    class="accordion w-100"
    :id="`accordionPanelsStayOpenExample_${props.folderNode.id}`"
  >
    <div class="accordion-item pa-0 border-0">
      <div
        :class="['d-flex flex-row w-100 form-control', isSelected ? 'border-2 border-primary' : '']"
        data-bs-toggle="collapse"
        :data-bs-target="`#panelsStayOpen-collapseOne_${props.folderNode.id}`"
        style="cursor: pointer"
        @click.prevent="onClickFolder"
      >
        <ArrowExpansionButton
          v-if="props.folderNode.children.length"
          :size="iconSize"
          :is-expanded="isExpanded"
          aria-expanded="true"
          :aria-controls="`panelsStayOpen-collapseOne_${props.folderNode.id}`"
        />
        <div
          v-else
          :style="{ height: `${iconSize}px`, width: `${iconSize}px`}"
        />

        <div>
          {{ props.folderNode.name }}
        </div>
      </div>

      <div
        v-if="props.folderNode.children.length"
        :id="`panelsStayOpen-collapseOne_${props.folderNode.id}`"
        class="accordion-collapse collapse px-0"
      >
        <div class="accordion-body py-0 px-0 ms-4">
          <FolderNodeTree
            v-for="node in props.folderNode.children"
            :key="node.id"
            :folder-node="node"
            :selected-folder-id="props.selectedFolderId"
            @select-folder="onSelectNestedFolder"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { FolderNode } from '@/entities/folder/model/FolderNode';
import { computed, defineEmits, defineProps, ref } from 'vue';
import ArrowExpansionButton from '@shared/ui/ArrowExpansionButton.vue';

interface Props {
  folderNode: FolderNode;
  selectedFolderId: number | null;
}

const props = defineProps<Props>();
const emit = defineEmits(['selectFolder']);

const iconSize = 28;

const isExpanded = ref(false);

const isSelected = computed(() => {
  if (props.selectedFolderId) {
    return props.selectedFolderId === props.folderNode.id;
  }
  return false;
});

const onClickFolder = () => {
  isExpanded.value = !isExpanded.value;
  emit('selectFolder', props.folderNode);
};

const onSelectNestedFolder = (node: FolderNode) => {
  emit('selectFolder', node)
};
</script>