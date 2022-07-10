import { request } from "../index"

import type { Account } from "./types"

enum LoginApi {
  AccountLogin = "/login",
  LoginUserInfo = "users",
  UserMenus = "/role"
}

export function accountLoginRequest(data: Account) {
  return request.post({
    data,
    url: LoginApi.AccountLogin
  })
}
export function requestUserInfoById(id: number) {
  return request.get({
    url: LoginApi.LoginUserInfo + "/" + id,
    isShowLoading: false
  })
}
export function requestUserMenusByRoleId(id: number) {
  return request.get({
    url: LoginApi.UserMenus + "/" + id + "/menu",
    isShowLoading: false
  })
}
