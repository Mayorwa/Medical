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
    state.patientsLoading = payload
  },
  [types.PATIENTS_FAILURE](state, payload) {
    state.patientsFailure = payload
  },
  [types.PATIENTS_INFO](state, payload) {
    state.patientsData = payload
  },

  [types.ROLES_LOADING](state, payload) {
    state.rolesLoading = payload
  },
  [types.ROLES_FAILURE](state, payload) {
    state.rolesFailure = payload
  },
  [types.ROLES_INFO](state, payload) {
    state.rolesData = payload
  },

  [types.RECORDS_LOADING](state, payload) {
    state.recordsLoading = payload
  },
  [types.RECORDS_FAILURE](state, payload) {
    state.recordsFailure = payload
  },
  [types.RECORDS_INFO](state, payload) {
    state.recordsData = payload
  },

  [types.USER_LOADING](state, payload) {
    state.recordsLoading = payload
  },
  [types.USER_FAILURE](state, payload) {
    state.recordsFailure = payload
  },
  [types.USER_INFO](state, payload) {
    state.recordsData = payload
  },
}
