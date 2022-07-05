import { RKRquest } from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"

const request = new RKRquest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log("这是我自己配置的求情拦截器")
      return config
    }
  },
  isShowLoading:true
})

export { request }
