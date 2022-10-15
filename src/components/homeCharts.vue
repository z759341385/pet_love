<!--
 * @Author: your name
 * @Date: 2021-12-03 13:21:47
 * @LastEditTime: 2021-12-09 18:03:04
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
    homeChartsData: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      chartDataNumber: 0,
      date: [
        [],
        []
        // ["2016", "2017", "2018", "2019", "2020", "2021"],
        // ["2026", "2027", "2028", "2012", "2021", "2022"],
      ],
      chartDataArr: [
        [
          {
            name: "冷藏车",
            data:[]
            // data: [35, 36, 31, 33, 13, 34],
          },
          {
             name: "渣土车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
          },
          {
             name: "小客车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
          },
        ],
        [
        {
            name: "冷藏车",
            data:[]
            // data: [35, 36, 31, 33, 13, 34],
          },
          {
             name: "渣土车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
          },
          {
             name: "小客车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
          },
        ],
      ],
      chartData: {
        // categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        categories: [],
        series: [
        {
            name: "冷藏车",
            data:[]
            // data: [35, 36, 31, 33, 13, 34],
          },
          {
             name: "渣土车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
          },
          {
             name: "小客车",
            data:[]
            // name: "完成量22",
            // data: [18, 27, 21, 24, 6, 28],
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
  mounted() {
    setInterval(() => {
      if (this.chartDataNumber===this.homeChartsData.date.length) {
        this.chartDataNumber=0
      }
        this.chartData.categories =
          this.homeChartsData.date[this.chartDataNumber];
        this.chartData.series =
          this.homeChartsData.chartDataArr[this.chartDataNumber];
      this.chartDataNumber++;
      
    }, 5000);
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
