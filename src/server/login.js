/*
 * @Author: your name
 * @Date: 2021-12-02 20:24:58
 * @LastEditTime: 2021-12-14 10:10:14
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/server/login.js
 */
import request from '../utils/request'
export const loginBySocial = ({phone, codeValue,codeId}) =>
  request({
    url: `/bootybay-auth/oauth/token?tenantId=000000&phone=${phone}&code_value=${codeValue}&code_id=${codeId}&grant_type=sms&scope=all`,
    // url: '/bootybay-auth/oauth/token?tenantId=000000&username=admin&password=admin&grant_type=password&scope=all&type=account',
    method: 'POST',
    // header:{
    //   "captcha-code":captchaCode,
    //   "captcha-key":captchaKey,
    // },
    data: {
      tenantId: '000000',
      phone,
      'code_value':codeValue,
      'code_id':codeId,
      "grant_type":'sms',
      scope: 'all',
    }
  })
export const vehicleMapData = (username, password) =>
  request({
    url: '/bootybay-plateform/statistics/vehicle-map-data',
    method: 'GET',
    
})
export const getCaptcha = (username, password) =>
  request({
    url: '/bootybay-auth/oauth/captcha',
    method: 'GET',
    
})
export const getUserCheck = (account) =>
  request({
    url: '/bootybay-user/user-check',
    method: 'GET',
    data:{
      account
    }
})  

// 获取短信验证码
export const sendValidate = (phone,code) =>
  request({
    url: `/bootybay-plateform/sms/endpoint/send-validate?phone=${phone}&code=${code}`,
    method: 'post',
    data:{
      phone,code
    }
})  
