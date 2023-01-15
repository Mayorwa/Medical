<template>
  <div>
    <Modal
      :show-modal="showModal"
      class-list="sm:max-w-3xl"
      @triggerShowModal="value => $emit('triggerModal', value)"
    >
      <template #header>
        <h5 class="text-left m-0 mb-4">Create a Medical Officer</h5>
      </template>
      <template #body>
        <div class="sm:grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="mb-2">Name</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g Titans Cup'"
              v-model="createMedicalOfficer.name"
            />
          </div>
          <div>
            <label for="name" class="mb-2">Phone Number</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g Titans Cup'"
              v-model="createMedicalOfficer.phoneNumber"
            />
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="mb-2">Email</label>
            <TextInput
              id="name"
              type="email"
              placeholder="'e.g john@gmail.com'"
              v-model="createMedicalOfficer.email"
            />
          </div>
          <div>
            <label for="name" class="mb-2">Password</label>
            <TextInput
              id="name"
              type="password"
              placeholder="'e.g *******'"
              v-model="createMedicalOfficer.password"
            />
          </div>
        </div>
        <div class="mb-4">
          <div>
            <label for="name" class="mb-2">Role</label>
            <div class="flex flex-wrap">
              <div
                v-for="(role, index) in roles"
                class="flex mr-4"
                :key="index"
              >
                <label for="" class="mr-2">{{ role.name }}</label>
                <div>
                  <input
                    class="field__checkbox"
                    type="checkbox"
                    :id="`checkbox1${index}`"
                    name="lesson"
                    :value="role.name"
                    v-model="createMedicalOfficer.roles"
                    autocomplete="off"
                    required
                  />
                  <label :for="`checkbox1${index}`"><span></span></label>
                </div>
              </div>
            </div>
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
            @click="createOfficer"
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
import Notification from '@/components/ui/Notification'
import Button from '@/components/ui/Button'
import { mapGetters } from 'vuex'
export default defineComponent({
  name: 'MedicalOfficersModal',
  components: { Modal, TextInput, Button, Notification },
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      roles: [],
      loading: false,
      createMedicalOfficer: {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        roles: [],
      },
      ShowIcon: true,
      showNotification: false,
      NotificationMessage: '',
      NotificationType: null,
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllRoles')
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
    createOfficer() {
      this.loading = true
      this.$store
        .dispatch('handleCreateMedicalOfficer', this.createMedicalOfficer)
        .then(() => {
          this.loading = false
          return this.activateNotification(
            'success',
            'Medical Officer created successfully',
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
      this.$emit('triggerModal', false)
    },
  },
  computed: {
    ...mapGetters(['getRolesData', 'getRolesLoading']),
    allFilled() {
      const { name, email, phoneNumber, password, roles } =
        this.createMedicalOfficer
      return (
        name !== '' &&
        email !== '' &&
        phoneNumber !== '' &&
        password !== '' &&
        roles.length
      )
    },
  },
  watch: {
    getRolesData: {
      handler(value) {
        this.roles = value
      },
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
