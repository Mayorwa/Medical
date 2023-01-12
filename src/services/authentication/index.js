import http from '../../config/axios'

export const loginUrls = {
  LOGIN_URL: 'Authentication/login',
  GET_USER_URL: 'Users/get-logged-in-user',
}

/** Log user in */
const login = async params => {
  return await http.post(loginUrls.LOGIN_URL, params)
}

/** get logged in user */
const get_logged_in_user = async () => {
  return await http.get(loginUrls.GET_USER_URL)
}

export { login, get_logged_in_user }
