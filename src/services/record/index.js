import http from '../../config/axios'

export const recordUrls = {
  CREATE_URL: 'Records/create',
  GET_ALL_URL: 'Records/get-all',
  GET_BY_ID_URL: 'Records/get-by-id',
}

const createRecord = async params => {
  return await http.post(recordUrls.CREATE_URL, params)
}

const getAllRecords = async () => {
  return await http.get(recordUrls.GET_ALL_URL)
}

const getRecordsById = async id => {
  return await http.get(`recordUrls.GET_BY_ID_URL/${id}`)
}

export { createRecord, getAllRecords, getRecordsById }
