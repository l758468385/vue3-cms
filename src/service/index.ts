import { RKRquest } from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

import localCache from "@/utils/cache"

export const request = new RKRquest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = localCache.getCache("token")
      if (token) {
        config.headers && (config.headers.Authorization = "Bearer " + token)
      }
      return config
    }
  },
  isShowLoading: true
})
