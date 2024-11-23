<template>
  <BaseButton
    :text="props.toggleBtnText || 'Открыть'"
    rounded-selector="rounded-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  />

  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
  >
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            {{ props.modalTitle || 'Модальное окно' }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <div class="modal-body">
          <slot name="modal-body"><p>Содержимое модального окна</p></slot>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            {{ props.closeBtnText || 'Закрыть' }}
          </button>

          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="emit('confirm')"
          >
            {{ props.actionBtnText || 'Сохранить' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script
  setup
  lang="ts"
>
import { defineEmits, defineProps } from 'vue';
import BaseButton from '@shared/ui/BaseButton.vue';

interface Props {
  modalTitle: string,
  toggleBtnText?: string;
  closeBtnText?: string,
  actionBtnText?: string;
}

const props = defineProps<Props>();
const emit = defineEmits(['confirm']);
</script>