<template>
  <div class="page">
    <Sidebar />
    <main class="main">
      <div class="page__content">
        <Header />
        <router-view />
      </div>
    </main>
  </div>
</template>
<script>
import Header from '@/components/header.vue'
import Sidebar from '@/components/sidebar.vue'
export default {
  name: 'DashboardHome',
  components: {
    Header,
    Sidebar,
  },
  mounted() {
    this.$store.dispatch('handleGetLoggedInUser')
  },
}
</script>
