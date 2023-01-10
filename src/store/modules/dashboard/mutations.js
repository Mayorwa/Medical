import * as types from './types'

export default {
  [types.MEDICAL_OFFICERS_LOADING](state, payload) {
    state.medicalOfficersLoading = payload
  },
  [types.MEDICAL_OFFICERS_FAILURE](state, payload) {
    state.medicalOfficersFailure = payload
  },
  [types.MEDICAL_OFFICERS_INFO](state, payload) {
    state.medicalOfficersData = payload
  },

  [types.PATIENTS_LOADING](state, payload) {
    state.medicalOfficersLoading = payload
  },
  [types.PATIENTS_FAILURE](state, payload) {
    state.medicalOfficersFailure = payload
  },
  [types.PATIENTS_INFO](state, payload) {
    state.medicalOfficersData = payload
  },

  [types.ROLES_LOADING](state, payload) {
    state.medicalOfficersLoading = payload
  },
  [types.ROLES_FAILURE](state, payload) {
    state.medicalOfficersFailure = payload
  },
  [types.ROLES_INFO](state, payload) {
    state.medicalOfficersData = payload
  },

  [types.RECORDS_LOADING](state, payload) {
    state.medicalOfficersLoading = payload
  },
  [types.RECORDS_FAILURE](state, payload) {
    state.medicalOfficersFailure = payload
  },
  [types.RECORDS_INFO](state, payload) {
    state.medicalOfficersData = payload
  },
}
