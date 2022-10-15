/*
 * @description: 
 * @param: 
 * @author: Fei
 * @return: 
 * @Date: 2020-09-07 14:10:45
 */
import Vue from 'vue'
// import { ACCESS_TOKEN } from '@/store/mutation-types'

const global = {
    namespaced: true,
    state: {
      stationList: [],
      stationDetail: {},
      hydrogenPlantVO:{},
      monitoringCenterTabsIndex:false
    },

    mutations: {
        SET_STATION_LIST: (state, data) => {
            state.stationList = data
            console.log('SET_STATION_LIST',state)
        },
        SET_STATION_DETAIL: (state, data) => {
          state.stationDetail = data
          console.log('SET_STATION_DETAIL',state)
        },
        SET_HYDROGEN_PLAN_VO: (state, data) => {
          state.hydrogenPlantVO = data
          console.log('hydrogenPlantVO',state)
        },
        SET_MONITORING_CENTER_TABS_INDEX: (state, data) => {
          state.monitoringCenterTabsIndex = data
          console.log('hydrogenPlantVO',state)
        },
    },

    actions: {
        SetStationList ({ commit }, data) {
          commit('SET_STATION_LIST', data)
        },
        SetStationDetail({ commit }, data) {
          commit('SET_STATION_DETAIL', data)
        },
        SetHydrogenPlantVO({ commit }, data) {
          commit('SET_HYDROGEN_PLAN_VO', data)
        },
        SetMonitoringCenterTabsIndex({ commit }, data) {
          commit('SET_MONITORING_CENTER_TABS_INDEX', data)
        },
    }
}

export default global
