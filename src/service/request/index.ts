import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import { ElLoading } from "element-plus"

interface RKInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => void
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (err: any) => void
}

interface RKRequestConfig extends AxiosRequestConfig {
  interceptors?: RKInterceptors
  isShowLoading?: boolean
}

const DEFALUE_LOADING_VALUE = true

class RKRquest {
  instance: AxiosInstance
  interceptors?: RKInterceptors
  loadingInstance?: any
  isShowLoading: boolean
  constructor(config: RKRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config?.interceptors
    this.isShowLoading = config.isShowLoading || DEFALUE_LOADING_VALUE
    // 全局处理拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.isShowLoading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: "加载中..."
          })
          console.log("全局处理拦截器，响应成功")
        }
        return config
      },
      () => {
        this.loadingInstance?.close()
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()
        console.log("全局响应拦截器，成功！！！！！", res)
      },
      (error) => {
        this.loadingInstance?.close()
        console.log("全局处理失败", error)
      }
    )

    // 自主传入的拦截器处理
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
  }
  // 本来传入 AxiosRequestConfig就够了，但是传入RKRequestConfig 就可以自定义单独的接口的拦截器操作
  request(config: RKRequestConfig) {
    // 处理手动传入的拦截器
    if (config?.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }

    if (config.isShowLoading === false) {
      this.loadingInstance?.close()
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          if (config?.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          this.isShowLoading = DEFALUE_LOADING_VALUE
          resolve(res)
        })
        .catch((err) => {
          this.isShowLoading = DEFALUE_LOADING_VALUE
          reject(err)
          return err
        })
    })
  }
}

export { RKRquest }
