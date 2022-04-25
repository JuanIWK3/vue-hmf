import { createStore } from 'vuex';
const store = createStore({
  state: {
    auth: localStorage.getItem('auth') == 'true' || false,
    user: JSON.parse(localStorage.getItem('user')!) || {},
  },
  mutations: {
    SIGN_IN(state, payload) {
      state.auth = true;
      state.user = payload.user;
      localStorage.setItem('auth', 'true');
      localStorage.setItem('token', payload.token);
      localStorage.setItem('user', JSON.stringify(payload.user));
    },

    SIGN_OUT(state) {
      state.auth = false;
      state.user = {};
      localStorage.removeItem('auth');
      localStorage.removeItem('user');
      location.reload();
    },
  },
  actions: {
    signIn({ commit }, payload) {
      commit('SIGN_IN', payload);
    },
    signOut({ commit }) {
      commit('SIGN_OUT');
    },
  },
  getters: {},
});

export default store;
