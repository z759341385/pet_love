/*
 * @Author: your name
 * @Date: 2021-12-02 20:23:28
 * @LastEditTime: 2021-12-14 10:06:19
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/utils/request.js
 */
import axios from 'axios'
import { Base64 } from 'js-base64'

const ERR_OK = 200

const service = axios.create({
  baseURL: '',
  timeout: 20000
})
const codeMessage = {
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户信息失效，请重新登录',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

 

service.interceptors.request.use((config) => {
  // config.url = combineURL(prefix, config.url)
  config.headers['Authorization'] = `Basic ${Base64.encode(`lscreen:lscreen_secret`)}`
  return config
})

service.interceptors.response.use(
  async (response) => {
    const {
      request,
      status,
      data: { code, data, msg }
    } = response
    const { responseType } = request
    // console.log(1111111111111)
    // 权限问题  token 401
    if (status === 200) {
      // 导出文件时 responseType 为 blob
      if (responseType === 'blob') {
        return Promise.resolve(response.data)
      }
      if (!code && code !== ERR_OK) {
        return Promise.resolve(response.data)
      }
      if (code === ERR_OK) {
        return Promise.resolve(data)
      }
      // message.error(msg || '请求失败')
      return Promise.reject(response.data)
    }
    // message.error(codeMessage[status])
    return Promise.reject(response.data)
  },
  (e) => {
    // const { status } = e.response
    // // token失效
    // if (status === ERR_TOKEN) {
    //   removeLocalToken()
    //   window.location.href = combineURL(__webpack_public_path__, '/user/login')
    //   message.error(codeMessage[ERR_TOKEN])
    //   return Promise.reject(e)
    // }
    // message.error(codeMessage[status])
    return Promise.reject(e)
  }
)
const base_url = {
	PROD: '', // 生产环境地址
	DEV: 'http://api-qiqing.95szkj.com'   // 开发环境地址
}


const request = (obj) => {
  
  obj.url = obj.url || '';
	obj.method = obj.method || 'GET';
	obj.data = obj.data || {};
	obj.header = obj.header || {};
 
	// let token = store.getters.token || ''; // 登录获得的 token
  return new Promise((resolve, reject) => {
    uni.request({
			url: (process.env.NODE_ENV === 'development' ? base_url.DEV : base_url.PROD) + obj.url,
			method: obj.method,
			data: obj.data,
			header: {
				'Authorization': `Basic YXBwbGV0X2RyaXZlcjphcHBsZXRfZHJpdmVyX3NlY3JldA==`,
        ...obj.header
			},
			success: res => { // 服务器成功返回的回调函数
        // console.log(res)
        const {
          request,
          statusCode,
          data: { code, data, msg }
        } = res
        if (statusCode === 200) {
          // 导出文件时 responseType 为 blob
          // if (responseType === 'blob') {
          //   return resolve(data.data)
          // }
          if (!code && code !== ERR_OK) {
            // return resolve(data.data)
            if(data&&data.data){
              return resolve(data.data)

            }else if(res.data){
              return resolve(res.data)

            }
            return resolve(res)

          }
          if (code === ERR_OK) {
            return resolve(data)
          }
          // message.error(msg || '请求失败')
          return reject(res)
        }
        // message.error(codeMessage[status])
        return reject(res)
			},
			fail: (err) => { // 接口调用失败的回调函数
				// if (obj.loading) uni.hideLoading();
        console.error(err);
				// if (err.errMsg != 'request:fail abort') {
				// 	showToast('连接超时，请检查您的网络。');
				// 	reject('连接超时，请检查您的网络。');
				// }
			}
		})
	})
 
}
uni.addInterceptor('request', {
  invoke(args) {
    try {
      const value = uni.getStorageSync('access_token');
      if (value) {
        args.header["bootybay-auth"] =`bearer ${value}`
        // console.log(args.header)

      }
  } catch (e) {
      // error
  }
    // uni.getStorage({
    //   key: 'access_token',
    //   success: function (res) {
    //     args.header["bootybay-auth"] =res.data
    //     // console.log('获取token',res.data,args)
    //   }
    // });
    // args.header["bootybay-auth"]="1123213123213"
    // request 触发前拼接 url 
    // args.url = 'https://www.example.com/'+args.url
  },
  success(args) {
    // 请求成功后，修改code值为1
    // console.log("addInterceptor-----success",args)
  }, 
})

export default request 
