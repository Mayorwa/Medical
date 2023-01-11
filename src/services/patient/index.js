import http from '../../config/axios'

export const patientUrls = {
  CREATE_URL: 'Patients/create',
  GET_ALL_URL: 'Patients/get-all',
  GET_BY_ID_URL: 'Patients/get-by-id',
}

const createPatient = async params => {
  return await http.post(patientUrls.CREATE_URL, params)
}

const getAllPatients = async () => {
  return await http.get(patientUrls.GET_ALL_URL)
}

const getPatientsById = async id => {
  return await http.get(`${patientUrls.GET_BY_ID_URL}/${id}`)
}

export { createPatient, getAllPatients, getPatientsById }
