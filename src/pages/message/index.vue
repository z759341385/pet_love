<!--
 * @Author: your name
 * @Date: 2021-12-07 19:01:31
 * @LastEditTime: 2022-10-12 14:53:28
 * @LastEditors: zhc
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/pages/carTrail/index.vue
-->
<template>
  <view class="car-trail-page"> 消息ye </view>
</template>

<script>
export default {
  components: {},
  setup(props, context) {
    const data = reactive({})

    const refData = toRefs(data)

    return {
      ...refData,
    }
  },
}
</script>

<style lang="scss">
.car-trail-page {
  height: 100vh;
  .top-search-box {
    position: fixed;
    top: 10px;
    width: 343px;
    margin: auto;
    z-index: 9999;
    display: inline-block;
    background: #1e275e;
    border-radius: 5px;
    left: 0;
    right: 0;
  }
  .car-trail-map-box {
    height: 100vh;
    width: 100%;
  }
  .car-info-window-box {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($color: #000, $alpha: 0.6);
    z-index: 99;
  }
  .car-info-window {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 16px;
    right: 16px;
    bottom: 0;
    margin: auto;
    height: 279px;
    padding: 24px;
    background: #0d1e5e;
    border-radius: 5px;
    z-index: 99;
    .car-id {
      font-weight: 500;
      color: #ffffff;
      font-size: 14px;
      padding-bottom: 16px;
    }
    .car-info-top {
      .car-info-company-icon {
        width: 10px;
        height: 12px;
      }
      .car-info-company-text {
        font-size: 10px;
        color: #ccc;
        padding-left: 4px;
      }
      .car-info-user {
        // display: inline-block;
        // float: right;
        .car-info-user-icon {
          width: 10px;
          height: 12px;
          vertical-align: middle;
        }
        .car-info-user-text {
          padding-left: 4px;
          font-size: 10px;
          vertical-align: middle;

          color: #ccc;
        }
      }
    }
    .car-info-bottom-list {
      .title {
        font-size: 12px;
        font-weight: 500;
        color: #ffffff;
      }
      .value {
        font-size: 14px;
        padding-left: 8px;
        color: rgba($color: #fff, $alpha: 0.7);
      }
      .car-info-dianliang {
        width: 26px;
        height: 14px;

        margin-left: 24upx;
        margin-right: 8upx;
        vertical-align: middle;
      }
      .car-info-dianliang-num {
        font-size: 28upx;
        font-weight: 500;
        vertical-align: middle;
        &.green {
          color: #15bc84;
        }
        &.red {
          color: #ec3737;
        }
      }
    }
    .car-info-bottom {
      padding-top: 32px;

      .car-info-bottom-list {
        padding-bottom: 16px;
      }
    }
  }
  .bottom-btn {
    width: 223px;
    height: 40px;
    background: linear-gradient(270deg, #1be3f0 0%, #44a4ff 100%);
    border-radius: 22px;
    line-height: 40px;
    text-align: center;
    margin: auto;
    color: #fff;
    font-size: 14px;
    margin-top: 10px;
  }
}
</style>
