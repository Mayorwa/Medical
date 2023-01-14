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
        </div>
        <div class="w-fit ml-auto">
          <Button
            :loading="loading"
            :variant="'primary'"
            :disabled="!allFilled"
            :size="'md'"
            type="submit"
            name="requestDemo"
            @click="createRole"
          >
            <span class="ml-0">Create</span></Button
          >
        </div>
      </template>
    </Modal>
    <Notification
      :showIcon="ShowIcon"
      :show="showNotification"
      :message="NotificationMessage"
      :type="NotificationType"
      v-on:close-notification="!showNotification"
    />
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import Modal from '@/components/ui/Modal'
import TextInput from '@/components/ui/Inputs/TextInput'
import Button from '@/components/ui/Button'
import Notification from '@/components/ui/Notification'
export default defineComponent({
  name: 'CreateModal',
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  components: { Modal, TextInput, Button, Notification },
  data() {
    return {
      roleName: '',
      loading: false,
      ShowIcon: true,
      showNotification: false,
      NotificationMessage: '',
      NotificationType: null,
    }
  },
  methods: {
    removeNotificationAfterFewSeconds() {
      setTimeout(() => {
        this.showNotification = false
        this.NotificationMessage = ''
        this.NotificationType = null
      }, 3500)
    },
    activateNotification(
      notificationType,
      notificationMessage,
      showNotification,
      showIcon
    ) {
      this.NotificationType = notificationType
      this.NotificationMessage = notificationMessage
      this.showNotification = showNotification
      this.ShowIcon = showIcon
      this.removeNotificationAfterFewSeconds()
    },
    createRole() {
      this.loading = true
      this.$store
        .dispatch('handleCreateRole', { name: this.roleName })
        .then(() => {
          this.loading = false
          return this.activateNotification(
            'success',
            'Role created successfully',
            true,
            true
          )
        })
        .catch(() => {
          this.loading = false
          return this.activateNotification(
            'error',
            'an error occurred',
            true,
            true
          )
        })
    },
  },
  computed: {
    allFilled() {
      return this.roleName !== ''
    },
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
