/*
 * @Author: your name
 * @Date: 2021-11-09 20:52:27
 * @LastEditTime: 2021-12-02 20:27:57
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/vue.config.js
 */
process.env.UNI_USING_VUE3 = true
process.env.UNI_USING_VUE3_OPTIONS_API = true
module.exports = {
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://api-qiqing.95szkj.com/', // dev
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
}
