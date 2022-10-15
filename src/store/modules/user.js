/*
 * @description: 
 * @param: 
 * @author: Fei
 * @return: 
 * @Date: 2020-09-07 14:10:45
 */
import Vue from 'vue'
// import { ACCESS_TOKEN } from '@/store/mutation-types'

const user = {
    namespaced: true,
    state: {
        token: '',
        // routeType: 'outside',
        accessToken: '',     // 登陆之后的用户tooken
        driverId:"",
        userInfo:{},
        driverTruckList:[],
        selectDriverTruck:{}
        // openidpay:'',
        // usrAddInfo:{},
        // kfLink:[1,2,3],
    },

    mutations: {
        SET_ACCESS_TOKEN: (state, token) => {
            state.accessToken = token
        },
        SET_TOKEN: (state, token) => {
            state.token = token
            state.accessToken = token
        },
        SET_USERINFO: (state, data) => {
            state.userInfo = data
        },
        SET_USERINFOADDINFO: (state, data) => {
            state.usrAddInfo = data
        },
        SET_DRIVERID: (state, data) => {
            state.driverId = data
        },
        SER_DRIVER_TRUCKLIST:(state, data)=>{
            state.driverTruckList = data
        },
        SER_SELECT_DRIVER_TRUCK:(state, data)=>{
            state.selectDriverTruck = data
        }
    },

    actions: {
        setDriverId ({ commit }, data) {
            commit('SET_DRIVERID', data)
        },
     
        SetUserInfo ({ commit }, data) {
            commit('SET_USERINFO', data)
        },
        // set access token
        // SetAccessToken ({ commit }, token) {
        //     commit('SET_TOKEN', token)
        // },
        // 选中的车辆
        setSelectDriverTruck ({ commit }, data) {
            commit('SER_SELECT_DRIVER_TRUCK', data)
          },
        // 车辆列表
        setDriverTruckList ({ commit }, list) {
            commit('SER_DRIVER_TRUCKLIST', list)
          },
        // 设置token
        setAccessToken ({ commit }, token) {
          commit('SET_ACCESS_TOKEN', token)
        },
        
        // clear access token
        // clearAccessToken ({ commit }) {
        //     commit('SET_TOKEN', '')
        //     commit('SET_ROLES', [])
        //     Vue.ls.remove(ACCESS_TOKEN)
        // },
        
    }
}

export default user
