const { defineConfig } = require("@vue/cli-service")
let path = require("path")
const url = process.env.BASE_URL
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/": {
        target: url,
        ws: false,
        changeOrigin: true,
        secure: false
      }
    }
  }

  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       "@c": "@/component"
  //     }
  //   }
  // }
  // configureWebpac: (config) => {
  //   config.resovle.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     "c":'@/component'
  //   }
  // }
})
