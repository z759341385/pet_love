<!--
 * @Author: your name
 * @Date: 2021-12-06 14:29:42
 * @LastEditTime: 2021-12-15 17:39:25
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/carListItem.vue
-->
<template>
  <view class="car-item-box">
    <view class="item-top">
      <view class="car-info-id-box" @click="goToPage">
        <CarStatusIcon :status="detailInfo.truckStatus" />
        <text class="car-info-id"
          >{{ detailInfo.truckNo || "" }}
          {{ detailInfo.vehicleTypeName || "" }}</text
        >
        <image
          src="../static/address-detail-siteright-icon.png"
          class="address-detail-icon"
          v-show="carList.length > 0"
        />
        <!-- 电量100% -->
        <CarElectricQuantity :number="detailInfo.remainingValue" />
        <text
          class="car-info-dianliang-num"
          :class="dianliangColor(detailInfo.remainingValue) ? 'green' : 'red'"
          >{{ detailInfo.remainingValue || 0 }}%</text
        >
        <!-- 监控开启 -->
        <image
          mode="widthFix"
          v-if="detailInfo.monitoringStatus === '在线'"
          src="../static/camera-on.png"
          class="car-info-camera"
        />
        <!-- 监控关闭 -->
        <image
          v-else
          mode="widthFix"
          src="../static/camera-off.png"
          class="car-info-camera"
        />
      </view>

      <view class="car-info-user">
        <image
          src="../static/car-info-man-icon.png"
          mode="widthFix"
          class="car-info-user-icon"
        />

        <text class="car-info-user-text">{{ detailInfo.driver }}</text>
      </view>
      <view class="item-bottom">
        <image
          src="../static/company-icon.png"
          mode="widthFix"
          class="car-info-company-icon"
        />
        <text class="car-info-company-text">{{ detailInfo.companyName }}</text>
      </view>
      <view class="item-center">
        <view class="item-center-list">
          <view class="left">
            <view>
              <text class="title">剩余续航</text>
              <text class="context"
                >{{ detailInfo.remainingMileage || 0 }} km</text
              >
            </view>

            <view>
              <text class="title">整车平均能耗</text>
              <text class="context"
                >{{ detailInfo.averageEnergyConsumption || 0 }} kwh</text
              >
            </view>
            <view>
              <text class="title">剩余氢气量</text>
              <text class="context"
                >{{ detailInfo.remainingHydrogenQuantity || 0 }} kg</text
              >
            </view>

            <view>
              <text class="title">燃料电池功率</text>
              <text class="context">{{ detailInfo.fuelCellPower || 0 }}</text>
            </view>
          </view>

          <view class="right">
            <view>
              <text class="title">总里程数</text>
              <text class="context">{{ detailInfo.mileage || 0 }} km</text>
            </view>
            <view>
              <text class="title">整车瞬时能耗</text>
              <text class="context"
                >{{ detailInfo.instantEnergyConsumption || 0 }} kwh</text
              >
            </view>

            <view>
              <text class="title">氢气气压</text>
              <text class="context">{{
                detailInfo.hydrogenPressure || 0
              }}</text>
            </view>
            <view>
              <text class="title">燃料电池电压</text>
              <text class="context">{{ detailInfo.fuelCellVoltage || 0 }}</text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CarStatusIcon from "../components/carStatusIcon.vue";
import CarElectricQuantity from "../components/carElectricQuantity.vue";
export default {
  components: {
    CarStatusIcon,
    CarElectricQuantity,
  },
  props: {
    detailInfo: {
      typeof: Object,
      default: {},
    },
    carList: {
      typeof: Object,
      default: [],
    },
  },
  setup(props) {
    // const goToPage = () => {
    //   uni.navigateTo({
    //     url: "/pages/monitoringDetail/index?id=1&name=uniapp",
    //   });
    // };
    const goToPage = () => {
      if (props.carList.length > 0) {
        uni.navigateTo({
          url: "/pages/carSelect/index",
        });
      }
    };
    const dianliangColor = (number) => {
      if (number && number > 20) {
        return true;
      } else {
        return false;
      }
    };
    return {
      dianliangColor,
      goToPage,
    };
  },
};
</script>

<style lang="scss">
.car-item-box {
  // min-height: 316upx;
  background: #0d1e5e;
  border-radius: 5px;
  padding: 32upx 32upx 0rpx 32upx;
  .address-detail-icon {
    width: 13px;
    height: 16px;
    vertical-align: middle;
  }
  // .car-info-id-box{
  //   display: inline-block;
  // }
  .item-top {
    line-height: 14px;
  }
  .car-status-icon {
    width: 26px;
    margin-right: 8upx;
    vertical-align: middle;
  }
  .car-info-id {
     display: inline-block;
    font-weight: 500;
    color: #ffffff;
    font-size: 28upx;
    vertical-align: middle;
  }
  .car-info-dianliang {
    width: 26px;
    margin-left: 24upx;
    margin-right: 8upx;
    vertical-align: middle;
  }
  .car-info-dianliang-num {
    font-size: 28upx;
    font-weight: 500;
    display: inline-block;
    vertical-align: middle;
    &.green {
      color: #15bc84;
    }
    &.red {
      color: #ec3737;
    }
  }
  .car-info-camera {
    width: 12px;
    height: 15px;
    float: right;
    vertical-align: middle;
  }
  .item-center {
    .item-center-list {
      margin-top: 60upx;
      padding-bottom: 30upx;
      .left,
      .right {
        display: inline-block;

        line-height: 30px;
      }
      .left {
        margin-right: 32upx;
      }
      .title {
        font-weight: 500;
        color: #ffffff;
        font-size: 24upx;
        padding-right: 16upx;
      }
      .context {
        font-weight: 400;
        color: #ccc;
        font-size: 24upx;
      }
    }
  }
  .item-bottom {
    padding-top: 12px;

    .car-info-company-icon {
      width: 10px;
      height: 12px;
    }
    .car-info-company-text {
      padding-left: 4px;
      font-size: 10px;
      color: #ccc;
    }
  }
  .car-info-user {
    padding-top: 16px;
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
</style>
