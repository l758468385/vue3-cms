const { defineConfig } = require("@vue/cli-service")
let path = require("path")
module.exports = defineConfig({
  transpileDependencies: true,
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
