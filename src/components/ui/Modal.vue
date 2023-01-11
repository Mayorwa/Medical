<template>
  <div>
    <transition name="fade" mode="out-in">
      <div
        v-if="showModal"
        class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-10"
        @click="$emit('triggerShowModal', !showModal)"
      ></div>
    </transition>
    <transition name="slide-up" mode="out-in">
      <div
        v-if="showModal"
        class="fixed top-0 bottom-0 right-0 left-0 h-fit w-fit m-auto bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:w-full sm:p-6 z-20"
        :class="classList"
      >
        <div class="flex flex-cols space-x-5 w-full">
          <slot name="header" />
          <div class="modal-icon" @click="$emit('triggerShowModal', false)">
            <svg width="24px" height="24px" viewBox="0 0 24 24" class="icon">
              <use xlink:href="/sprite.svg#icon-close"></use>
            </svg>
          </div>
        </div>
        <slot name="body" />
        <slot name="footer" />
      </div>
    </transition>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Modal-UI',
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
    classList: {
      type: String,
      required: true,
    },
  },
  emits: ['triggerShowModal'],
})
</script>
