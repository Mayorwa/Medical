<template>
  <div>
    <Modal
      :show-modal="showModal"
      class-list="sm:max-w-3xl"
      @triggerShowModal="value => $emit('triggerModal', value)"
    >
      <template #header>
        <h5 class="text-left m-0 mb-4">Create a Record</h5>
      </template>
      <template #body>
        <div class="sm:grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="mb-2">Record Name</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g James Agbabiaka'"
              v-model="createRecordData.name"
            />
          </div>
          <div>
            <label for="name" class="mb-2">Patient Id</label>
            <TextInput
              id="name"
              type="text"
              placeholder="'e.g 1000-2233-2332'"
              v-model="createRecordData.patientId"
            />
          </div>
        </div>
        <div class="sm:grid sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label for="name" class="mb-2">Next Appointment</label>
            <TextInput
              id="name"
              type="date"
              placeholder="'e.g john@gmail.com'"
              v-model="createRecordData.nextAppointment"
            />
          </div>
        </div>
        <div class="sm:grid mb-4">
          <div>
            <label for="name" class="mb-2"
              >Description on Patient Condition</label
            >
            <textarea
              name=""
              id=""
              class="field__input field__textarea"
              cols="30"
              rows="10"
              v-model="createRecordData.description"
            ></textarea>
          </div>
        </div>
        <div class="sm:grid mb-4">
          <div>
            <label for="name" class="mb-2">Remark</label>
            <textarea
              name=""
              id=""
              class="field__input field__textarea"
              cols="30"
              rows="10"
              v-model="createRecordData.remark"
            ></textarea>
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
            @click="createRecord"
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

const moment = require('moment')
export default defineComponent({
  name: 'RecordsModal',
  props: {
    showModal: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      loading: false,
      createRecordData: {
        name: '',
        description: '',
        patientId: '',
        medicalOfficerId: '',
        nextAppointment: '',
        remark: '',
      },
      ShowIcon: true,
      showNotification: false,
      NotificationMessage: '',
      NotificationType: null,
    }
  },
  methods: {
    createRecord() {
      this.loading = true
      this.createRecordData.nextAppointment = moment
        .parseZone(this.createRecordData.nextAppointment)
        .utc()
        .format()
      this.$store
        .dispatch('handleCreateRecord', this.createRecordData)
        .then(() => {
          this.loading = false
          this.activateNotification(
            'success',
            'Records created successfully',
            true,
            true
          )
          this.$store.dispatch('handleGetAllRecords')
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
  },
  computed: {
    allFilled() {
      const { name, description, patientId, nextAppointment, remark } =
        this.createRecordData
      return (
        name !== '' &&
        description !== '' &&
        patientId !== '' &&
        nextAppointment !== '' &&
        remark !== ''
      )
    },
  },
  components: { Modal, TextInput, Button, Notification },
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
