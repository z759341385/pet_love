<!--
 * @Author: your name
 * @Date: 2021-12-03 13:21:47
 * @LastEditTime: 2021-12-15 15:53:26
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/homeCharts.vue
-->
<template>
  <view class="charts-box">
    <qiun-data-charts
      type="area"
      :chartData="chartData"
      :errorShow="false"
      background="none"
      :legend="{ position: 'top' }"
    />
  </view>
</template>

<script>
export default {
  props: {
    chartDataObj: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      chartDataNumber: 0,
      chartData: {
        categories: [],
        series: [
          {
            name: "车辆能耗",
            data: [],
          },
        ],
        // series: [
        //   {
        //     name: "目标值22",
        //     data: [35, 36, 31, 33, 13, 34],
        //   },
        //   {
        //     name: "完成量22",
        //     data: [18, 27, 21, 24, 6, 28],
        //   },
        // ],
      },
    };
  },
  created(){
    this.init();
    setInterval(() => {
      this.init();
    }, 5000);
  },
  // mounted() {

  // },
  methods: {
    init() {
      if (this.chartDataNumber === this.chartDataObj.date.length) {
        this.chartDataNumber = 0;
      }
      this.chartData.categories = this.chartDataObj.date[this.chartDataNumber];
      this.chartData.series[0].data =
        this.chartDataObj.valuesList[this.chartDataNumber];
      this.chartDataNumber++;
    },
  },
};
</script>

<style>
/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
.charts-box {
  width: 100%;
  height: 440upx;
  background: rgba(0, 29, 89, 0.77);
  border-radius: 5px;
  border: 1px solid #3c7cff;
}
</style>
