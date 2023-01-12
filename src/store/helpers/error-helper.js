import { Authorization } from '/utils/authorization/index'
import router from '@/router'

export const formatError = error => {
  if (error.response) {
    const { data, status } = error.response
    //check if the user is not authenticated and call the pop up once
    if (status === 401) {
      Authorization.delete.token()
      router.push('/login')
    }
    if (status === 404) {
      router.push('/page-not-found')
    }
    const { errors, message } = data
    if (errors) {
      let errorMessages = ''
      for (const prop in errors) {
        errorMessages += `${errors[prop].message}\n`
      }
      return errorMessages
    }
    return message
  }
  return error
}
