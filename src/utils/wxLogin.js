/*
 * @Author: your name
 * @Date: 2021-12-09 11:37:49
 * @LastEditTime: 2021-12-09 11:50:53
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/utils/wxLogin.js
 */
export const wxGrant = (openid) =>{
  wx.login({
    success (res) {
      if (res.code) {
        console.log('登录成功！',res)
        uni.getSetting({
          success(res) {
            // 已经获取了用户信息的授权
            if (res.authSetting["scope.userInfo"]) {
              console.log("已经获取了用户信息的授权");
              uni.getUserInfo({
                provider: "weixin",
                success: function (infoRes) {
                  console.log("用户昵称为：", infoRes.userInfo);
                  return infoRes.userInfo
                },
              });
            } else {
              // 未获取了用户信息的授权
              uni.authorize({
                scope: "scope.userInfo",
                success() {
                  uni.getUserInfo({
                    provider: "weixin",
                    success: function (infoRes) {
                      console.log("用户昵称为：", infoRes.userInfo);
                    return infoRes.userInfo

                    },
                  });
                },
  
                fail() {
                  console.log("获取授权失败");
                  context.emit("close");
                  return 'error'
                },
              });
            }
          },
        });
        //发起网络请求
        // wx.request({
        //   url: '自己的服务器请求接口',
        //   data: {
        //     code: res.code
        //   }
        // })
      } else {
        return 'error:登录失败！'
        console.log('登录失败！' + res.errMsg)
      }
    }
  })
}
