import authMutations from './mutations'
import authActions from './actions'
export default {
  state: {
    medicalOfficersData: [],
    medicalOfficersLoading: false,
    medicalOfficersFailure: null,

    patientsData: [],
    patientsLoading: false,
    patientsFailure: null,

    recordsData: [],
    recordsLoading: false,
    recordsFailure: null,

    userData: [],
    userLoading: false,
    userFailure: null,

    rolesData: [],
    rolesLoading: false,
    rolesFailure: null,
  },
  actions: { ...authActions },
  mutations: { ...authMutations },
  getters: {
    getUserLoading: state => state.userLoading,
    getUserData: state => state.userData,
    getUserFailure: state => state.userFailure,

    getMedicalOfficersLoading: state => state.medicalOfficersLoading,
    getMedicalOfficersData: state => state.medicalOfficersData,
    getMedicalOfficersFailure: state => state.medicalOfficersFailure,

    getPatientsLoading: state => state.patientsLoading,
    getPatientsData: state => state.patientsData,
    getPatientsFailure: state => state.patientsFailure,

    getRolesLoading: state => state.rolesLoading,
    getRolesData: state => state.rolesData,
    getRolesFailure: state => state.rolesFailure,

    getRecordsLoading: state => state.recordsLoading,
    getRecordsData: state => state.recordsData,
    getRecordsFailure: state => state.recordsFailure,
  },
}
