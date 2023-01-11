<template>
  <Loader v-if="getMedicalOfficersLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Medical Officers</h4>
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
      <div class="prices_description">records of medical officers</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">name</div>
            <div class="prices__cell">email</div>
            <div class="prices__cell">type</div>
            <div class="prices__cell">roles</div>
            <div class="prices__cell">actions</div>
          </div>
          <template v-if="medicalOfficers.length">
            <div
              v-for="(officer, index) in medicalOfficers"
              class="prices__row"
              :key="index"
            >
              <div class="prices__cell">
                <a class="primary">{{ index + 1 }}</a>
              </div>
              <div class="prices__cell">{{ officer.name }}</div>
              <div class="prices__cell">{{ officer.email }}</div>
              <div class="prices__cell prices__description">
                <p>{{ officer.type }}</p>
              </div>
              <div class="prices__cell">
                {{
                  moment(String(officer.created_at)).format(
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
    <MedicalOfficerModal :show-modal="showModal" @triggerModal="triggerModal" />
  </div>
</template>
<script>
const numeral = require('numeral')
const moment = require('moment')
import Loader from '@/components/ui/Loaders/Loader'
import { mapGetters } from 'vuex'
import Button from '@/components/ui/Button'
import MedicalOfficerModal from '@/components/MedicalOfficerModal'

export default {
  name: 'Medical Officers',
  components: { Loader, Button, MedicalOfficerModal },
  data() {
    return {
      numeral: numeral,
      moment: moment,
      loading: false,
      showModal: false,
      medicalOfficers: [],
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllMedicalOfficers')
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
    },
  },
  computed: {
    ...mapGetters(['getMedicalOfficersData', 'getMedicalOfficersLoading']),
  },
  watch: {
    getMedicalOfficersData: {
      handler(value) {
        this.medicalOfficers = value.pagedList
      },
    },
  },
}
</script>
