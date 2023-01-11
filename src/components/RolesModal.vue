<template>
  <div>
    <Modal
      :show-modal="showModal"
      class-list="sm:max-w-3xl"
      @triggerShowModal="value => $emit('triggerModal', value)"
    >
      <template #header>
        <h5 class="text-left m-0 mb-4">Create a Role</h5>
      </template>
      <template #body>
        <div class="sm:grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="mb-2">Name</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g Titans Cup'"
              v-model="name"
            />
          </div>
          <div>
            <label for="name" class="mb-2">Phone Number</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g Titans Cup'"
              v-model="name"
            />
          </div>
        </div>
        <div class="w-fit ml-auto">
          <Button
            :loading="loading"
            :variant="'primary'"
            :size="'md'"
            type="submit"
            name="requestDemo"
            @click="''"
          >
            <span class="ml-0">Create</span></Button
          >
        </div>
      </template>
    </Modal>
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Modal from '@/components/ui/Modal'
import TextInput from '@/components/ui/Inputs/TextInput'
import Button from '@/components/ui/Button'
export default defineComponent({
  name: 'CreateModal',
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  components: { Modal, TextInput, Button },
  setup() {
    const loading = ref(false)
    return { loading }
  },
})
</script>
<style lang="scss" scoped>
.preference-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}
.icon {
  transition: 0.5s all;
  &.rotate {
    transform: rotate(180deg);
  }
}
</style>
