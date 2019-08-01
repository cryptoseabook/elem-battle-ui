
export default {
  setCurrentUser (state, payload) {
    state.currentUser = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  setError (state, payload) {
    state.error = payload
  },
  clearError (state) {
    state.error = ''
  }
}
