<template>
  <view class="mine-page">
    <view class="mine-info-content">
      <image src="../../static/defaultAvatar.png" mode="widthFix" class="mine-info-avatar" />
      <view class="mine-info-box">
        <text class="mine-info-name">{{ detailInfo.name || "暂无数据" }}</text>
        <view class="mine-info-id">{{ detailInfo.identityCard || "暂无数据" }}</view>
        <!-- <view class="mine-info-role">
          <text class="mine-info-text">管理员</text>
        </view> -->
      </view>
    </view>
    <view class="mine-list-content">
      <view class="mine-list-box">
        <view class="mine-list-each">
          <text class="title">手机号</text>
          <text class="context">{{ detailInfo.mobile || "暂无数据" }}</text>
        </view>
        <view class="mine-list-each">
          <text class="title">驾龄</text>
          <text class="context">{{ detailInfo.drivingAge || 0 }}年</text>
        </view>
        <view class="mine-list-each">
          <text class="title">准驾车型</text>
          <text class="context">{{ detailInfo.motorcycleType || "暂无数据" }}</text>
        </view>
        <view class="mine-list-each">
          <text class="title">驾驶证到期时间</text>
          <text class="context">{{ detailInfo.expirationTime || 0 }}</text>
        </view>
      </view>
    </view>
    <view class="mine-btn">
      <text class="mine-btn-text" @click="signOut">退出</text>
    </view>
  </view>
</template>

<script>
import { reactive, toRefs } from "vue"
import { useStore } from "vuex"
import { getDriverDetail } from "../../server/mine"
export default {
  setup() {
    const store = useStore()
    const driverId = uni.getStorageSync("driver_id")
    const data = reactive({
      detailInfo: {},
    })
    if (driverId) {
      getDriverDetail(driverId)
        .then((res) => {
          data.detailInfo = res
        })
        .catch((err) => {})
    }
    // 退出登录
    const signOut = () => {
      store.dispatch("user/setAccessToken", "")
      store.dispatch("user/setDriverId", "")
      store.dispatch("user/SetUserInfo", {})
      uni.removeStorage({ key: "driver_id" })
      uni.removeStorage({
        key: "access_token",
        success: function (res) {
          uni.reLaunch({
            url: "/pages/login/index",
          })
        },
      })
    }
    const refData = toRefs(data)
    return {
      ...refData,
      signOut,
    }
    // 跳转页面
  },
}
</script>

<style lang="scss">
.mine-page {
  background: linear-gradient(180deg, #051152 0%, #030524 100%);
  min-height: 100vh;
  padding-bottom: 40upx;
  .mine-info-content {
    display: flex;
    padding: 24px;
    .mine-info-avatar {
      width: 44px;
      height: 44px;
    }
    .mine-info-box {
      padding-left: 7px;
      .mine-info-name {
        font-size: 16px;
        color: #fff;
      }
      .mine-info-id {
        color: rgba($color: #fff, $alpha: 0.7);

        font-size: 12px;
      }
      .mine-info-role {
        width: 40px;
        height: 14px;
        background: #ffffff80;
        border-radius: 9px;
        margin-top: 6px;
        .mine-info-text {
          display: block;
          font-size: 10px;
          color: #fff;
          line-height: 14px;
          text-align: center;
        }
      }
    }
  }
  .mine-list-content {
    margin: 0 16px;
    background: #0d1e5e;
    border-radius: 5px;
    .mine-list-box {
      padding: 21px 16px;
      overflow: hidden;
      line-height: 50px;
      .mine-list-each {
        text-align: left;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        .title {
          font-weight: 500;
          color: #ffffff;
          vertical-align: bottom;

          font-size: 14px;
        }
        .context {
          vertical-align: bottom;
          color: rgba($color: #fff, $alpha: 0.7);
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
  .mine-btn {
    height: 40px;
    background: #0d1e5e;
    border-radius: 22px;
    margin: 96px 16px 0;
    .mine-btn-text {
      display: block;
      font-size: 14px;
      font-weight: 400;
      color: #ec3737;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>
