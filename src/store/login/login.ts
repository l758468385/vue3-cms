import { Module } from "module"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import localCache from "@/utils/cache"
import router from "@/router"
import { Account } from "@/service/login/types"
export default {
  namespaced: true,
  stat() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    chanegUserMenus(state, userMenus: any) {
      state.userMenus = userMenus
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: Account) {
      // 1.实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      localCache.setCache("token", token)
      // 2.请求用户信息
      const { data } = await requestUserInfoById(id)
      const userInfo = data
      commit("changeUserInfo", userInfo)
      localCache.setCache("userInfo", userInfo)
      // 3.请求用户菜单
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      localCache.setCache("userMenus", userMenus)
      requestUserInfoById(id)
      // 4.跳转到首页
      router.push("/main")
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = localCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        const userInfo = localCache.getCache("userInfo")
        if (userInfo) {
          commit("changeUserinfo", userInfo)
        }
        const userMenus = localCache.getCache("userMenus")
        if (userMenus) {
          commit("chanegUserMenus", userMenus)
        }
      }
    }
  }
}
