<!--
 * @Author: your name
 * @Date: 2021-12-08 08:37:29
 * @LastEditTime: 2021-12-15 15:19:02
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/pages/login/index.vue
-->
<template>
  <view class="login-page">
    <view class="login-page-top">
      <image
        class="login-page-top-img"
        src="../../static/login-page-top-title.png"
      />
    </view>
    <view class="login-form-list">
      <uni-easyinput
        class="top-search"
        type="number"
        confirmType="完成"
        v-model="phone"
        placeholderStyle="color:#586A92"
        :styles="inputStyle"
        :maxlength="11"
        placeholder="请输入手机号"
        @confirm="search"
      ></uni-easyinput>
    </view>
    <view class="login-form-list">
      <uni-easyinput
        class="top-search"
        :styles="inputStyle"
        v-model="verificationCode"
        placeholderStyle="color:#586A92"
        type="text"
        placeholder="请输入验证码"
        :clearSize="0"
        :maxlength="6"
      ></uni-easyinput>
      <view
        class="verification-code-box"
        v-if="!sendTime"
        @click="getVerificationCodeFn"
        >获取验证码</view
      >
      <view class="verification-code-box disabled" v-if="sendTime"
        >重新获取({{ sendTime }}s)</view
      >
    </view>
    <view class="login-btn" @click="login">登录</view>
    <view class="login-bottom-check-box">
      <view
        class="check-model"
        :class="checkSelect ? 'select' : ''"
        @click="checkChange"
      ></view>
      <view class="check-model-right" @click="gotoPage">
        <text class="text">已阅读</text><text class="link">《服务协议》</text>
      </view>
    </view>
  </view>
</template>

<script>
import {
  loginBySocial,
  getCaptcha,
  sendValidate,
  getUserCheck,
} from "../../server/login";
import { useStore } from "vuex";
import { computed, toRefs, reactive } from "vue";
// import { getStationListFn } from "../../utils/global";
import { getDriverTruckListFn } from "../../utils/global";
export default {
  setup() {
    const store = useStore();
    // 如果有token直接跳转
    const accessToken = uni.getStorageSync("access_token");
    if (accessToken) {
      store.dispatch("user/setAccessToken", accessToken);
      const driverId = uni.getStorageSync("driver_id");
      // const userInfo = uni.getStorageSync("userInfo");
      // store.dispatch("user/SetUserInfo", userInfo);

      if (driverId) {
        // 查询司机名下的所有车辆
        getDriverTruckListFn(driverId);
      }

      uni.switchTab({
        url: "/pages/index/index",
      });
    }
    const data = reactive({
      value: "",
      placeholderStyle: {
        color: "#586A92",
      },
      inputStyle: {
        borderColor: "transparent",
        color: "#fff",
      },
      checkSelect: false,

      phone: 15610555335,
      verificationCode: undefined,
      verificationCodeObj: {},
      accountExisted: true,
      sendTime: 0,
    });
    // 获取的验证码
    let verificationCodeObj = {};
    const getVerificationCodeFn = () => {
      if (!data.phone) {
        uni.showToast({
          title: "请输入手机号码",
          icon: "error",
        });
        return false;
      }
      sendValidateFn();
    };
   // 判定账号是否正确
    const getUserCheckFn = () => {
      try {
        const status = getUserCheck(data.phone);
        console.log("status", status);
        return status;
      } catch (err) {
        console.log(err);
      }
      // getCaptcha().then((res) => {
      //   console.log(res);
      //   data.captchaImg = res.image;
      //   data.captchaKey = res.key;
      // });
    };
    // 发送短信验证码
    const sendValidateFn = async () => {
      // 判定账号是否正确
      let res = await getUserCheckFn();
      let { accountExisted } = res;
      if (!accountExisted) {
        uni.showToast({ title: "账号不存在", icon: "none" });
        return false;
      }
      //  console.log(userTrue)
      sendValidate(data.phone, "login_code").then((res) => {
        console.log(res);
        verificationCodeObj = res;
        // verificationCodeObj = res;
        if (res.success) {
          uni.showToast({
            title: "短信发送成功",
            icon: "success",
          });
          data.sendTime = 60;
          const timeIntervalObj = setInterval(() => {
            if (data.sendTime === 0) {
              clearInterval(timeIntervalObj);
              data.sendTime = 0;
            } else {
              data.sendTime--;
            }
          }, 1000);
        }
      });
    };
    // const getUserCheckFn=()=>{
    //      getUserCheck(data.username)
    //       .then((res) => {
    //         let { accountExisted, loginFailRecord } = res;
    //           return accountExisted
    //       })
    //   }
    const checkChange = () => {
      data.checkSelect = !data.checkSelect;
    };
    const token = computed(() => {
      console.log("store.getters.getAccessToken");
      return store.getters.getAccessToken;
    });

    // 登录
    const login = async () => {
      if (!data.checkSelect) {
        // uni.showModal({
        //   content: "请阅读服务协议",
        //   showCancel: false,
        // });
                uni.showToast({ title: "请阅读服务协议", icon: "none" });

        return;
      }
      if (!data.phone||data.phone.length!=11) {
        uni.showToast({
          title: "请输入正确的手机号",
          icon: "error",
        });
        uni.showToast({ title: "请输入正确的手机号", icon: "none" });

        return;
      }
      if (!data.verificationCode) {
        uni.showToast({
          title: "请输入验证码",
         icon: "none" 
        });
        return;
      }
      if (!verificationCodeObj.id) {
        uni.showToast({
          title: "请先获取验证码",
          icon: "error",
        });
        return;
      }
      if (data.verificationCode !== verificationCodeObj.value) {
        uni.showToast({
          title: "验证码输入错误",
          icon: "error",
        });
        return;
      }
      let params = {
        codeValue: data.verificationCode,
        codeId: verificationCodeObj.id,
        phone: data.phone,
        // password: data.password,
        // grantType: "password",
      };
       // 判定账号是否正确
      let res = await getUserCheckFn();
      let { accountExisted } = res;
      if (!accountExisted) {
        uni.showToast({ title: "账号不存在", icon: "none" });
        return false;
      }
      // console.log("data.username, data.password", data.username, data.password);
      await loginBySocial(params)
        .then((res) => {
          let { access_token, driver_id } = res;
          if (access_token) {
            uni.setStorageSync("access_token", access_token);
          }
          if (driver_id) {
            uni.setStorageSync("driver_id", driver_id);
            // 查询司机名下的所有车辆
            getDriverTruckListFn(driver_id);
          }
          store.dispatch("user/setAccessToken", access_token);
          store.dispatch("user/setDriverId", driver_id);
          store.dispatch("user/SetUserInfo", res);
          uni.switchTab({
            url: "/pages/index/index",
          });
        })
        .catch((err) => {
          if (err && err.data) {
            let errMessage = err.data;

            wx.showModal({
              title: "提示",
              content: errMessage.error_description,
              success(res) {
                if (res.confirm) {
                  console.log("用户点击确定");
                } else if (res.cancel) {
                  console.log("用户点击取消");
                }
              },
            });
          }
          // console.log(err)
        });
    };
    // 查询司机名下的所有车辆

    const gotoPage = () => {
      uni.navigateTo({
        url: "/pages/serviceAgreement/index",
      });
    };

    const refData = toRefs(data);

    return {
      login,
      gotoPage,
      token,
      ...refData,
      checkChange,
      // getCaptchaFn,
      // getUserCheckFn,

      getVerificationCodeFn,
    };
  },
};
</script>

<style lang="scss">
.login-page {
  height: 100vh;
  background: linear-gradient(180deg, #051152 0%, #0a0e38 100%);
  .login-form-list {
    margin: 0 16px;
    padding: 25px 0 8px 0;

    border-bottom: 1px solid #3670ea;
    position: relative;
  }
  .login-page-top {
    color: #ffffff;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    .login-page-top-img {
      width: 233px;
      height: 25px;
    }
    // background: angular-gradient(270deg, #1be3f0 0%, #44a4ff 100%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
  }
  .verification-code-box {
    position: absolute;
    right: 0;
    top: 27px;
    z-index: 999;
    height: 35px;
    line-height: 35px;
    color: #17eeff;
    font-size: 14px;
    &.disabled {
      color: #586a92;
    }
  }
  .login-btn {
    margin: 64px auto 0 auto;
    width: 343px;
    height: 40px;
    background: linear-gradient(270deg, #1be3f0 0%, #44a4ff 100%);
    border-radius: 22px;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #fff;
  }
  .login-bottom-check-box {
    margin: 24px 16px;
    .check-model {
      display: inline-block;
      height: 14px;
      width: 14px;
      border-radius: 1.8px;
      background: #fff;
      vertical-align: middle;
      &.select {
        background: url(../../static/check-select-icon.png) no-repeat center;
        background-size: 100% 100%;
      }
    }
    .check-model-right {
      vertical-align: middle;
      display: inline-block;
      color: #fff;
      margin-left: 2px;
      .text {
        font-size: 14px;
      }
      .link {
        font-size: 14px;
        color: #17eeff;
      }
    }
  }
}
</style>
