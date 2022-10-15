/*
 * @description: 
 * @param: 
 * @author: Fei
 * @return: 
 * @Date: 2020-09-06 23:16:05
 */
// import { createStore } from 'vuex'

// // import app from './modules/app'
import user from './modules/user'
import global from './modules/global'
// // import home from './modules/home'
// // import video from './modules/video'
// // import live from './modules/live'
// // import getters from './getters'
// // import calendar from './modules/basicData/calendar'

// // 创建一个新的 store 实例
// const store = createStore({
//   state () {
//     return {
//       count: 0
//     }
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
// export default store

// export default new Vuex.Store({
//     modules: {
//         // app,
//         user 
//         // calendar,
//     },
//     state: {},
//     mutations: {},
//     actions: {},
//     // getters
// })
import { createStore } from 'vuex'
const store = createStore({
      modules: {
        // app,
        user,
        global
        // calendar,
    },
    state: {},
    getters:{
      getAccessToken(state){
        return user.state.accessToken
      },
      getStationList(state){
        return global.state.stationList
      },
    }
})
export default store