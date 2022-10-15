<!--
 * @Author: your name
 * @Date: 2021-12-06 14:29:42
 * @LastEditTime: 2021-12-15 17:09:46
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /qiqing-weixin/src/components/carListItem.vue
-->
<template>
  <view class="car-item-box" @click="goToPage">
    <view class="item-top">
      <CarStatusIcon :status="carInfo.truckStatus" />
     
      <text class="car-info-id">{{carInfo.truckNo}} {{carInfo.vehicleTypeName}}</text>
    
      <!-- 电量100% -->
     <CarElectricQuantity :number="carInfo.remainingValue"/>

      <text class="car-info-dianliang-num" :class="dianliangColor(carInfo.remainingValue)?'green':'red'">{{carInfo.remainingValue||0}}%</text>
      <!-- <text class="car-info-dianliang-num red">100%</text> -->
      <!-- 监控开启 -->
      <image
        mode="widthFix"
        v-if="carInfo.monitoringStatus==='在线'"
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
    <view class="item-center">
      <view class="item-center-list">
        <view class="left">
          <view>
            <text class="title">剩余续航</text>
            <text class="context">{{carInfo.remainingMileage}} km</text>
          </view>
          <view>
            <text class="title">整车平均能耗</text>
            <text class="context">{{carInfo.averageEnergyConsumption}} kwh</text>
          </view>
        </view>
        <view class="right">
          <view>
            <text class="title">剩余氢气量</text>
            <text class="context">{{carInfo.remainingHydrogenQuantity}} kg</text>
          </view>
          <view>
            <text class="title">整车瞬时能耗</text>
            <text class="context">{{carInfo.instantEnergyConsumption}} kwh</text>
          </view>
        </view>
      </view>
    </view>
    <view class="item-bottom">
      <image
        src="../static/company-icon.png"
        mode="widthFix"
        class="car-info-company-icon"
      />
      <text class="car-info-company-text"
        >{{carInfo.companyName}}</text
      >
      <view class="car-info-user">
        <image
          src="../static/car-info-man-icon.png"
          mode="widthFix"
          class="car-info-user-icon"
        />
        <text class="car-info-user-text">{{carInfo.driverName}}</text>
      </view>
    </view>
  </view>
</template>

<script>
import CarStatusIcon from "../components/carStatusIcon.vue"
import CarElectricQuantity from "../components/carElectricQuantity.vue"
export default {
  props: {
    carInfo:{
      type:Object,
      default:{}
    }
  },
  components:{CarStatusIcon,CarElectricQuantity},
  setup(props) {
    const dianliangColor = (number) =>{
      if(number&&number>20){
        return true
      }else{
        return false

      }

    }
    const goToPage = () => {
      uni.navigateTo({
        url: `/pages/monitoringDetail/index?id=${props.carInfo.id}`,
      });
    };
    return {
      goToPage,
      dianliangColor,
    };
  },
};
</script>

<style lang="scss">
.car-item-box {
  min-height: 316upx;
  background: #0d1e5e;
  border-radius: 5px;
  margin-bottom: 32upx;
  padding: 32upx;
  .item-top {
    line-height: 14px;
  }
  .car-status-icon {
    width: 26px;
    height: 14px;
    margin-right: 8upx;
    vertical-align: middle;
  }
  .car-info-id {
    font-weight: 500;
    color: #ffffff;
    font-size: 28upx;
    vertical-align: middle;
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
  .car-info-camera {
    width: 12px;
    height: 15px;
    float: right;
    vertical-align: middle;
  }
  .item-center {
    .item-center-list {
      margin-top: 31px;
      margin-bottom: 31px;
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
    .car-info-company-icon {
      width: 10px;
      height: 12px;
        vertical-align: middle;
      
    }
    .car-info-company-text {
      font-size: 10px;
        padding-left: 4px;
      color: #ccc;
        vertical-align: middle;

    }
    .car-info-user {
      display: inline-block;
      float: right;
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
}
</style>
