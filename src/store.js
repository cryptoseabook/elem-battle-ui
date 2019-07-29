import Vuex from 'vuex'
import Vue from 'vue'
import ApiService from './ApiService'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      name: '',
      win_count: 0,
      lost_count: 0,
      game: null // Users current game state
    }
  },
  
  getters: {
    getCurrentUser(state) {
      return state.currentUser;
    }
  },
  
  mutations: {
    async LOGIN(state, payload) {
      await ApiService.login(payload);
      state.currentUser.push(payload);
    }
  },
  
  actions: {
    login(context, {username, key}) {
      context.commit("LOGIN", {username, key});
    }
  }
});
