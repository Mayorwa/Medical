import * as types from './types'
import {
  get_logged_in_user,
  login,
} from '../../../services/authentication/index'
import { getAllOfficers } from '@/services/medical-officer'
import { formatError } from '../../helpers/error-helper'
import { Authorization } from '/utils/authorization'
import { getAllPatients } from '@/services/patient'
import { getAllRecords } from '@/services/record'
import { getAllRole } from '@/services/role'

export default {
  // eslint-disable-next-line no-unused-vars
  handleLogin({ commit }, loginData) {
    return new Promise((resolve, reject) => {
      login(loginData)
        .then(response => {
          const { token } = response.data.data
          Authorization.set.token(token)
          resolve(token)
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  handleGetAllMedicalOfficers({ commit }) {
    commit(types.MEDICAL_OFFICERS_LOADING, true)
    commit(types.MEDICAL_OFFICERS_FAILURE, '')
    getAllOfficers()
      .then(response => {
        commit(types.MEDICAL_OFFICERS_INFO, response.data.data)
        commit(types.MEDICAL_OFFICERS_LOADING, false)
      })
      .catch(error => {
        commit(types.MEDICAL_OFFICERS_FAILURE, formatError(error))
        commit(types.MEDICAL_OFFICERS_LOADING, false)
      })
  },
  handleGetAllPatients({ commit }) {
    commit(types.PATIENTS_LOADING, true)
    commit(types.PATIENTS_FAILURE, '')
    getAllPatients()
      .then(response => {
        commit(types.PATIENTS_INFO, response.data.data)
        commit(types.PATIENTS_LOADING, false)
      })
      .catch(error => {
        commit(types.PATIENTS_FAILURE, formatError(error))
        commit(types.PATIENTS_LOADING, false)
      })
  },
  handleGetAllRecords({ commit }) {
    commit(types.RECORDS_LOADING, true)
    commit(types.RECORDS_FAILURE, '')
    getAllRecords()
      .then(response => {
        commit(types.RECORDS_INFO, response.data.data)
        commit(types.RECORDS_LOADING, false)
      })
      .catch(error => {
        commit(types.RECORDS_FAILURE, formatError(error))
        commit(types.RECORDS_LOADING, false)
      })
  },
  handleGetAllRoles({ commit }) {
    commit(types.ROLES_LOADING, true)
    commit(types.ROLES_FAILURE, '')
    getAllRole()
      .then(response => {
        commit(types.ROLES_INFO, response.data.data)
        commit(types.ROLES_LOADING, false)
      })
      .catch(error => {
        commit(types.ROLES_FAILURE, formatError(error))
        commit(types.ROLES_LOADING, false)
      })
  },
  handleGetLoggedInUser({ commit }) {
    commit(types.USER_LOADING, true)
    commit(types.USER_FAILURE, '')
    get_logged_in_user()
      .then(response => {
        commit(types.USER_INFO, response.data.data)
        commit(types.USER_LOADING, false)
      })
      .catch(error => {
        commit(types.USER_FAILURE, formatError(error))
        commit(types.USER_LOADING, false)
      })
  },
}

// OB: onboarding,
