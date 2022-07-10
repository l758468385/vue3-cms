import type { App } from "vue"
import { registElement } from "./register-element"
const registFn = (app: App): void => {
  registElement(app)
}

export const register = {
  install(app: App): void {
    registFn(app)
  }
}
