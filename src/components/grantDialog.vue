<!--
 * @Author: your name
 * @Date: 2021-12-06 08:38:22
 * @LastEditTime: 2021-12-10 10:43:21
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/homeMapDiago.vue
-->
<template>
  <view class="home-grant-dialog">
    <view class="dialog-box">
      <view class="dialog-context">
        <view class="title">授权微信</view>
        <view class="content"
          >授权后将免登录，同时可以在公众号中接收到异常信息提醒</view
        >
      </view>
      <view class="bottom">
        <view class="close-btn" @click="closeWindow">取消</view
        ><button class="grant-btn" @click="userGrant">授权</button>
      </view>
    </view>
  </view>
</template>

<script>
import {wxGrant} from '../utils/wxLogin'
export default {
  props: {
    dialogInfo: {
      type: Object,
      default: {},
    },
  },
  setup(props, context) {
    const closeDialog = () => {
      context.emit("close");
    };
    const userGrant =async () => {
      const req =await wxGrant();
    //   wx.login({
    //   success (res) {
    //     if (res.code) {
    //       console.log('登录成功！',res)

    //       //发起网络请求
    //       // wx.request({
    //       //   url: '自己的服务器请求接口',
    //       //   data: {
    //       //     code: res.code
    //       //   }
    //       // })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
    //   uni.getSetting({
    //     success(res) {
    //       // 已经获取了用户信息的授权
    //       if (res.authSetting["scope.userInfo"]) {
    //         console.log("已经获取了用户信息的授权");
    //         uni.getUserInfo({
    //           provider: "weixin",
    //           success: function (infoRes) {
    //             console.log("用户昵称为：", infoRes.userInfo);
    //           },
    //         });
    //       } else {
    //         // 未获取了用户信息的授权
    //         uni.authorize({
    //           scope: "scope.userInfo",
    //           success() {
    //             uni.getUserInfo({
    //               provider: "weixin",
    //               success: function (infoRes) {
    //                 console.log("用户昵称为：", infoRes.userInfo);
    //               },
    //             });
    //           },

    //           fail() {
    //             console.log("获取授权失败");
    //             context.emit("close");

    //           },
    //         });
    //       }
    //     },
    //   });
    };
    const closeWindow = () => {
      context.emit("close");
    };
    return {
      closeDialog,
      userGrant,
      closeWindow,
    };
  },
};
</script>

<style lang="scss">
.home-grant-dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  .dialog-box {
    width: 343px;
    height: 220px;
    background: #0d1e5e;
    border-radius: 5px;
    margin: auto;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
    .dialog-context {
      padding: 24px 24px 40px 24px;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      color: #ffffff;
      text-align: center;
    }
    .content {
      font-size: 14px;
      color: #ffffff;
      text-align: center;
      padding-top: 30px;
    }
    .bottom {
      text-align: center;
      .close-btn {
        display: inline-block;
        width: 133px;
        height: 38px;
        border-radius: 22px;
        border: 1px solid #17eeff;
        font-size: 14px;
        color: #17eeff;
        line-height: 38px;
        text-align: center;
        vertical-align: top;
      }
      .grant-btn {
        display: inline-block;
        width: 135px;
        margin-left: 25px;
        height: 40px;
        background: linear-gradient(270deg, #1be3f0 0%, #44a4ff 100%);
        border-radius: 22px;
        color: #fff;
        line-height: 40px;
        text-align: center;
        vertical-align: top;
      }
    }
  }
}
</style>
