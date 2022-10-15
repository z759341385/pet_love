<!--
 * @Author: your name
 * @Date: 2021-12-06 08:38:22
 * @LastEditTime: 2021-12-15 16:10:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/homeMapDiago.vue
-->
<template>
  <view class="home-map-dialog">
    <view class="dialog-box">
      <view class="dialog-top" @click="closeDialog">
        <oss-image
          src="dialog-close.png"
          class="dialog-close"
          style="height: 24px; width: 24px"
        />
      </view>
      <view class="dialog-context">
        <view class="context-title">{{ dialogInfo.hydrogenStation }}</view>
        <view class="context-address">
          <oss-image
            src="dialog-address-icon.png"
            class="dialog-address-icon"
          />
          <text class="dialog-address-text">{{
            dialogInfo.address || "暂无数据"
          }}</text>
        </view>
        <view class="context-list">
          <oss-image src="price-icon.png" class="list-icon" />
          <text class="list-text">今日氢价：{{ dialogInfo.todayPrice }} kg</text>
        </view>
        <view class="bottom-btn" @click="daohang">导航</view>
      </view>
    </view>
  </view>
</template>

<script>
import ossImage from "./ossImage.vue";
export default {
  props: {
    dialogInfo: {
      type: Object,
      default: {},
    },
  },
  components: { ossImage },
  setup(props, context) {
    const closeDialog = () => {
      context.emit("close");
    };
    const daohang = () => {
    uni.authorize({
    scope: 'scope.userLocation',
    success() {
       wx.getLocation({
        type: "gcj02", //返回可以用于wx.openLocation的经纬度
        success(res) {
          const latitude = res.latitude;
          const longitude = res.longitude;
          wx.openLocation({
            latitude:props.dialogInfo.latitude,
            longitude:props.dialogInfo.longitude,
            scale: 18,
          });
        },
      });
    }
})
     
    };
    return {
      closeDialog,
      daohang,
    };
  },
};
</script>

<style lang="scss">
.home-map-dialog {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99;
  .dialog-box {
    width: 343px;
    height: 216px;
    background: rgba(26, 43, 92, 0.8);
    box-shadow: 0px 0px 26px 0px rgba(18, 119, 210, 0.5) inset;
    margin: auto;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
    .bottom-btn {
      width: 223px;
      height: 40px;
      background: linear-gradient(270deg, #1be3f0 0%, #44a4ff 100%);
      border-radius: 22px;
      margin: auto;
    }
    .dialog-top {
      margin: 10px 10px 0 10px;
      text-align: right;
    }
    .dialog-context {
      padding-left: 24px;
      .context-title {
        font-weight: 500;
        color: #ffffff;
        font-size: 18px;
        line-height: 16px;
        margin-bottom: 14px;
      }
      .context-address {
        margin-bottom: 19px;
        .dialog-address-icon {
          vertical-align: middle;
          image {
            width: 13px;
            height: 16px;
          }
        }
        .dialog-address-text {
          font-weight: 400;
          color: #ccc;
          font-size: 14px;
          line-height: 16px;
          padding-left: 4px;
        }
      }
      .context-list {
        padding-bottom: 20px;
        .list-icon {
          vertical-align: middle;
          image {
            width: 16px;
            height: 16px;
          }
        }
        .list-text {
          color: #fff;
          font-size: 14px;
          padding-left: 4px;
        }
      }
    }
  }
}
</style>
