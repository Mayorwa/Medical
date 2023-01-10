import http from '../../config/axios'

export const loginUrls = {
  LOGIN_URL: 'Authentication/login',
}

/** Log user in */
const login = async params => {
  return await http.post(loginUrls.LOGIN_URL, params)
}

export { login }
