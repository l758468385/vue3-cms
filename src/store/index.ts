import { createStore } from "vuex"

import login from "./login/login"
export const store = createStore({
  state: () => {
    return {}
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})
