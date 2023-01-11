import { Authorization } from '/utils/authorization/index'

// Add bearer token to request header
const addTokenInterceptor = config => {
  const token = Authorization.get.token()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}

// reject interceptor
const rejectErrorInterceptor = error => Promise.reject(error)

export { addTokenInterceptor, rejectErrorInterceptor }
