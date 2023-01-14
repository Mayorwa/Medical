<template>
  <Loader v-if="getPatientsLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Patients</h4>
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
      <div class="prices_description">records of offices by hallo labs</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">name</div>
            <div class="prices__cell">email</div>
            <div class="prices__cell">Type</div>
            <div class="prices__cell">date created</div>
            <!--            <div class="prices__cell">actions</div>-->
          </div>
          <template v-if="patients.length">
            <div
              v-for="(patient, index) in patients"
              class="prices__row"
              :key="index"
            >
              <div class="prices__cell">
                <a class="primary">{{ index + 1 }}</a>
              </div>
              <div class="prices__cell">{{ patient.name }}</div>
              <div class="prices__cell">{{ patient.email }}</div>
              <div class="prices__cell">{{ patient.userType }}</div>
              <div class="prices__cell">
                {{
                  moment(String(patient.dateCreated)).format(
                    'MMMM Do YYYY, h:mm:ss a'
                  )
                }}
              </div>
              <!--                            <div class="prices__cell prices__btns">
                              <Button
                                :loading="false"
                                :variant="'primary'"
                                :size="'md'"
                                type="submit"
                                name="requestDemo"
                                @click="''"
                              >
                                <span class="ml-0">View Details</span></Button
                              >
                            </div>-->
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
      isAllowed: false,
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllPatients')
    this.checkIfUserIsAllowed()
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
    },
    checkIfUserIsAllowed() {
      let getUserData = this.$store.getters.getUserData
      let roles = getUserData.roles
      let needles = ['Role2', 'Admin']
      needles.forEach(val => {
        if (roles.includes(val)) {
          this.isAllowed = true
          return ''
        }
      })
    },
  },
  computed: {
    ...mapGetters(['getPatientsData', 'getPatientsLoading']),
  },
  watch: {
    getPatientsData: {
      handler(value) {
        this.patients = value
      },
    },
  },
}
</script>
