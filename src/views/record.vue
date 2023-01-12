<template>
  <Loader v-if="getRecordsLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Records</h4>
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
      <div class="prices_description">records of records</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">service</div>
            <div class="prices__cell">customer email</div>
            <div class="prices__cell">employee email</div>
            <div class="prices__cell">payment status</div>
            <div class="prices__cell">amount</div>
            <div class="prices__cell">amount paid so far</div>
            <div class="prices__cell">date purchased</div>
            <div class="prices__cell">actions</div>
          </div>
          <template v-if="records.length">
            <div
              v-for="(record, index) in records"
              class="prices__row"
              :key="index"
            >
              <div class="prices__cell">
                <a class="primary">{{ order.id }}</a>
              </div>
              <div class="prices__cell">{{ order.service }}</div>
              <div class="prices__cell">{{ order.customer_email }}</div>
              <div class="prices__cell">{{ order.employee_email }}</div>
              <div class="prices__cell">
                <a
                  class="pill pill--blue"
                  v-if="order.status === 'installment'"
                  >{{ order.status }}</a
                >
                <a class="pill pill--green" v-else>{{ order.status }}</a>
              </div>
              <div class="prices__cell success">
                ₦ {{ numeral(order.amount).format('0,0.00') }}
              </div>
              <div class="prices__cell" v-if="order.amountPaid === null">
                null
              </div>
              <div class="prices__cell success" v-else>
                ₦ {{ numeral(order.amountPaid).format('0,0.00') }}
              </div>
              <div class="prices__cell">
                {{
                  moment(String(order.created_at)).format(
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
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllRecords')
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
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
