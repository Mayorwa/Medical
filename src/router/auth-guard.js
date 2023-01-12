import { Authorization } from '../../utils/authorization'
import store from '../store'

export default (to, from, next) => {
  console.log('hjdd')
  if (Authorization.check.isAuthenticated()) {
    if (!store.getters.getUserLoading) {
      store.dispatch('handleGetLoggedInUser')
    }
    next()
  } else {
    // Store existing location in local_storage
    localStorage.setItem('FROM', to.fullPath)
    next({ path: '/login' })
  }
}
