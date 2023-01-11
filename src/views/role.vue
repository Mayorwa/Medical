<template>
  <Loader v-if="getRolesLoading" />
  <div v-else class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Roles</h4>
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
      <div class="prices_description">records of roles</div>
      <hr class="prices__hr" />
      <div class="prices__container">
        <div class="prices__table">
          <div class="prices__row prices__row_head">
            <div class="prices__cell">#</div>
            <div class="prices__cell">name</div>
            <div class="prices__cell">email</div>
            <div class="prices__cell">office</div>
            <div class="prices__cell">job title</div>
            <div class="prices__cell">creation date</div>
            <div class="prices__cell">actions</div>
          </div>
          <div v-for="(role, index) in roles" class="prices__row" :key="index">
            <div class="prices__cell">
              <a class="primary">{{ role.id }}</a>
            </div>
            <div class="prices__cell">{{ role.name }}</div>
            <div class="prices__cell">{{ role.email }}</div>
            <div class="prices__cell">{{ role.office }}</div>
            <div class="prices__cell">{{ role.job_title }}</div>
            <div class="prices__cell">
              {{
                moment(String(role.created_at)).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )
              }}
            </div>
            <div class="prices__cell prices__btns">
              <a class="button button--blue-white">view details</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <RolesModal :show-modal="showModal" @triggerModal="triggerModal" />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Loader from '@/components/ui/Loaders/Loader'
import Button from '@/components/ui/Button'
import RolesModal from '@/components/RolesModal'

const moment = require('moment')
export default {
  name: 'role',
  components: { Loader, Button, RolesModal },
  data() {
    return {
      moment: moment,
      loading: false,
      roles: [],
      showModal: false,
    }
  },
  mounted() {
    this.$store.dispatch('handleGetAllRoles')
  },
  methods: {
    triggerModal(value) {
      this.showModal = value
    },
  },
  computed: {
    ...mapGetters(['getRolesData', 'getRolesLoading']),
  },
  watch: {
    getRolesData: {
      handler(value) {
        this.roles = value.pagedList
      },
    },
  },
}
</script>
