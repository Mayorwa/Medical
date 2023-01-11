<template>
  <Loader v-if="getPatientsLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Patients</h4>
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
      <div class="prices_description">records of offices by hallo labs</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">phone</div>
            <div class="prices__cell">address</div>
            <div class="prices__cell">city</div>
            <div class="prices__cell">state</div>
            <div class="prices__cell">country</div>
            <div class="prices__cell">date purchased</div>
            <div class="prices__cell">actions</div>
          </div>
          <template v-if="patients.length">
            <div
              v-for="(patient, index) in patients"
              class="prices__row"
              :key="index"
            >
              <div class="prices__cell">
                <a class="primary">{{ patient.id }}</a>
              </div>
              <div class="prices__cell">{{ patient.phone }}</div>
              <div class="prices__cell prices__description">
                <p>{{ patient.address }}</p>
              </div>
              <div class="prices__cell">{{ patient.city }}</div>
              <div class="prices__cell">{{ patient.state }}</div>
              <div class="prices__cell">{{ patient.country }}</div>
              <div class="prices__cell">
                {{
                  moment(String(patient.created_at)).format(
                    'MMMM Do YYYY, h:mm:ss a'
                  )
                }}
              </div>
              <div class="prices__cell prices__btns">
                <a class="button button--blue-white">view details</a>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="text-center">No record found</div>
          </template>
        </div>
      </div>
    </div>
    <PatientsModal :show-modal="showModal" @triggerModal="triggerModal" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Loader from '@/components/ui/Loaders/Loader'
import Button from '@/components/ui/Button'
import PatientsModal from '@/components/PatientsModal'

const moment = require('moment')
export default {
  name: 'DashboardPatients',
  components: { Loader, Button, PatientsModal },
  data() {
    return {
      moment: moment,
      loading: false,
      patients: [],
      showModal: false,
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllPatients')
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
    },
  },
  computed: {
    ...mapGetters(['getPatientsData', 'getPatientsLoading']),
  },
  watch: {
    getPatientsData: {
      handler(value) {
        this.patients = value.pagedList
      },
    },
  },
}
</script>
