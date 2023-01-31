<template>
  <Loader v-if="getRecordsLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Records</h4>
        <div v-if="isAllowed">
          <Button
            :loading="loading"
            :variant="'primary'"
            :size="'md'"
            type="submit"
            name="requestDemo"
            @click="triggerModal(true)"
          >
            <span class="ml-0">Create</span></Button
          >
        </div>
      </div>
      <div class="prices_description">records of records</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">Patient Name</div>
            <div class="prices__cell">Medical Officer</div>
            <div class="prices__cell">Description</div>
            <div class="prices__cell">Next Appointment</div>
          </div>
          <template v-if="records.length">
            <div
              v-for="(record, index) in records"
              class="prices__row"
              :key="index"
            >
              <div class="prices__cell">
                <a class="primary">{{ index + 1 }}</a>
              </div>
              <div class="prices__cell">{{ record.patient.name }}</div>
              <div class="prices__cell">{{ record.medicalOfficer.name }}</div>
              <div class="prices__cell">{{ record.description }}</div>
              <div class="prices__cell">
                {{
                  moment(String(record.nextAppointment)).format(
                    'MMMM Do YYYY, h:mm:ss a'
                  )
                }}
              </div>
            </div>
          </template>
          <template v-else>
            <div class="text-center">No record found</div>
          </template>
        </div>
      </div>
    </div>
    <RecordsModal :show-modal="showModal" @triggerModal="triggerModal" />
  </div>
</template>
<script>
import Loader from '@/components/ui/Loaders/Loader'
import Button from '@/components/ui/Button'
import { mapGetters } from 'vuex'
import RecordsModal from '@/components/RecordsModal'

const numeral = require('numeral')
const moment = require('moment')
export default {
  name: 'DashboardRecord',
  components: { Loader, Button, RecordsModal },
  data() {
    return {
      numeral: numeral,
      moment: moment,
      loading: false,
      records: [],
      showModal: false,
      isAllowed: false,
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllRecords')
    this.checkIfUserIsAllowed()
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
    },
    checkIfUserIsAllowed() {
      let getUserData = this.$store.getters.getUserData
      let roles = getUserData.roles
      let needles = ['Role3', 'Role6', 'Admin']
      needles.forEach(val => {
        if (roles.includes(val)) {
          this.isAllowed = true
          return ''
        }
      })
    },
  },
  computed: {
    ...mapGetters(['getRecordsData', 'getRecordsLoading']),
  },
  watch: {
    getRecordsData: {
      handler(value) {
        this.records = value
      },
    },
  },
}
</script>
