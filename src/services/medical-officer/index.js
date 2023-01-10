import http from '../../config/axios'

export const medicalOfficerUrls = {
  CREATE_URL: 'Authentication/login',
  GET_ALL_URL: 'Medicalofficers/get-all',
  GET_BY_ID_URL: 'Authentication/login',
  GET_ALL_RECORDS_URL: 'Authentication/login',
  GET_RECORDS_BY_PATIENTS_URL: 'Authentication/login',
}

const createOfficer = async params => {
  return await http.post(medicalOfficerUrls.CREATE_URL, params)
}

const getAllOfficers = async () => {
  return await http.get(medicalOfficerUrls.GET_ALL_URL)
}

const getOfficerById = async () => {
  return await http.get(medicalOfficerUrls.GET_BY_ID_URL)
}

const getAllOfficersRecords = async () => {
  return await http.get(medicalOfficerUrls.GET_ALL_RECORDS_URL)
}

const getAllRecordsByPatient = async () => {
  return await http.get(medicalOfficerUrls.GET_RECORDS_BY_PATIENTS_URL)
}

export {
  createOfficer,
  getAllOfficers,
  getOfficerById,
  getAllOfficersRecords,
  getAllRecordsByPatient,
}
