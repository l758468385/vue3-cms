import type { App } from "vue"
import { ElButton } from "element-plus"

const needComponents = [ElButton]
export const registElement = (app: App): void => {
  for (const component of needComponents) {
    app.component(component.name, component)
  }
}
