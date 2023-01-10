import http from '../../config/axios'

export const roleUrls = {
  CREATE_URL: 'Roles/create',
  GET_ALL_URL: 'Roles/get-all',
}

const createRole = async params => {
  return await http.post(roleUrls.CREATE_URL, params)
}

const getAllRole = async () => {
  return await http.get(roleUrls.GET_ALL_URL)
}

export { createRole, getAllRole }
