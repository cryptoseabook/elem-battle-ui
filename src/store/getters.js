export default {
  getCurrentUser (state) {
    return state.currentUser
  },
  loading (state) {
    return state.loading
  },
  getError(state) {
    return state.error
  }
}
