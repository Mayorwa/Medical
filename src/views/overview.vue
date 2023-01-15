<template>
  <div v-if="!getUserLoading && checkIfUserIsAllowed" class="page__container">
    <div class="prices">
      <div class="prices__head">
        <h4 class="prices__title">Overview</h4>
      </div>
      <div class="prices_description">
        statistics of records in the medical application
      </div>
      <hr class="prices__hr" />
      <div class="container">
        <div class="row">
          <svg class="icon" width="30px" height="30px" viewBox="0 0 24 24">
            <use xlink:href="/sprite.svg#icon-open-right"></use>
          </svg>
          <template v-for="(stats, index) in statistics">
            <div
              v-if="stats.permitted"
              :key="index"
              class="col--md--6 col--lg--3"
            >
              <div class="card card_widget">
                <a
                  type="button"
                  class="card__next flex items-center justify-center"
                  href="#"
                >
                  <svg
                    class="icon icon-arrow-up-right"
                    id="icon-arrow-up-right"
                    viewBox="0 0 10 10"
                  >
                    <use xlink:href="/sprite.svg#icon-open-in-tab"></use>
                  </svg>
                </a>

                <div class="card__inner">
                  <div class="card__img card__img-blue">
                    <svg
                      class="icon text-white"
                      width="30px"
                      height="30px"
                      viewBox="0 0 24 24"
                    >
                      <use :xlink:href="`/sprite.svg#icon-${stats.icon}`"></use>
                    </svg>
                  </div>
                  <div class="card__title h6">{{ stats.name }}</div>
                  <router-link
                    class="card__btn button button--blue-white"
                    :to="stats.route"
                    >view records</router-link
                  >
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
  <Loader v-else />
</template>
<script>
import Loader from '@/components/ui/Loaders/Loader'
import { mapGetters } from 'vuex'

export default {
  name: 'DashboardOverview',
  components: { Loader },
  data() {
    return {
      isAllowed: false,
      statistics: [
        {
          name: 'Medical Officer',
          icon: 'medical-officer',
          route: '/medical-officer',
          permitted: false,
        },
        {
          name: 'Patient',
          icon: 'medical-officer',
          route: '/patients',
          permitted: true,
        },
        {
          name: 'Record',
          icon: 'record',
          route: '/records',
          permitted: false,
        },
        {
          name: 'Role',
          icon: 'role',
          route: '/role',
          permitted: false,
        },
      ],
    }
  },
  computed: {
    ...mapGetters({ user: 'getUserData', getUserLoading: 'getUserLoading' }),
    checkIfUserIsAllowed() {
      if (!this.getUserLoading) {
        let roles = this.user.roles
        let needles = ['Role2', 'Role3', 'Admin']
        needles.forEach(val => {
          if (roles.includes(val)) {
            this.statistics[0].permitted = true
            return ''
          }
        })

        let needles2 = ['Role4', 'Role7', 'Admin']
        needles2.forEach(val => {
          if (roles.includes(val)) {
            this.statistics[2].permitted = true
            return ''
          }
        })

        let needles3 = ['Admin']
        needles3.forEach(val => {
          if (roles.includes(val)) {
            this.statistics[3].permitted = true
            return ''
          }
        })
        return true
      }
      return false
    },
  },
}
</script>
