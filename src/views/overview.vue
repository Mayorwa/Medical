<template>
  <div class="page__container">
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
          <div
            class="col--md--6 col--lg--3"
            v-for="(stats, index) in statistics"
            :key="index"
          >
            <div class="card card_widget">
              <a type="button" class="card__next" href="/services">
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
                <div class="card__number h4">
                  {{ stats.count }} <span>records</span>
                </div>
                <router-link
                  class="card__btn button button--blue-white"
                  :to="stats.route"
                  >view records</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DashboardOverview',
  data() {
    return {
      statistics: [
        {
          name: 'Medical Officer',
          icon: 'medical-officer',
          route: '/medical-officer',
          count: 3,
        },
        {
          name: 'Patient',
          icon: 'medical-officer',
          route: '/patient',
          count: 3,
        },
        {
          name: 'Record',
          icon: 'record',
          route: '/record',
          count: 3,
        },
        {
          name: 'Role',
          icon: 'role',
          route: '/role',
          count: 3,
        },
      ],
    }
  },
}
</script>
