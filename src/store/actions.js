import ApiService from '../ApiService'

export default {
  login ({commit}, payload) {
    commit('setLoading', true)
    commit('clearError')

    ApiService.login(payload)
    .then(() => {
      commit('setCurrentUser', payload)
    })
    .catch(err => {
      commit('setError', err.toString())
    })
    .finally(() => {
      commit('setLoading', false)
    });
  },
}
