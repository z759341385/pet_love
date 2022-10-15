/*
 * @Author: your name
 * @Date: 2021-11-09 20:52:27
 * @LastEditTime: 2022-10-12 14:27:04
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/main.js
 */
import { createApp, h } from "vue"
import store from "../src/store"
import ossImage from "../src/components/ossImage"
import App from "./App.vue"
// Vue.prototype.$store = store

createApp(App).component("ossImage", ossImage).use(store).mount()
