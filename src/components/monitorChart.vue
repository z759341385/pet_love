<!--
 * @Author: your name
 * @Date: 2021-12-03 13:21:47
 * @LastEditTime: 2021-12-03 14:05:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /my-vue3-project/src/components/homeCharts.vue
-->
<template>
  <view class="charts-box">
  <qiun-data-charts
    type="column"
    :chartData="chartData"
    :errorShow="false"
    background="none"
  />
</view>
</template>

<script>
export default {
  data() {
    return {
      chartDataNumber:1,
      date:[
        ["2026", "2027", "2028", "2012", "2021", "2022"],
        ["2016", "2017", "2018", "2019", "2020", "2021"],
      ],
      chartDataArr:[
        [
          {
            name: "目标值",
            data: [35, 36, 31, 33, 13, 34],
          },
        ],
         [
          {
            name: "目标值",
            data: [3, 2, 1, 2, 9, 100],
          },
          
        ]
      ],
      chartData: {
        categories: ["2016", "2017", "2018", "2019", "2020", "2021"],
        series: [
          {
            name: "完成量",
            data: [18, 27, 21, 24, 6, 28],
          },
        ],
      },
    };
  },
  mounted(){
    setInterval(()=>{
      this.chartDataNumber++;
      if( this.chartDataNumber%2){
       
      this.chartData.categories= this.date[0]
       this.chartData.series = this.chartDataArr[0]

      }else{
      this.chartData.categories= this.date[1]
          this.chartData.series = this.chartDataArr[1]

      }
    },5000)
  }
};
</script>

<style>
/* 请根据需求修改图表容器尺寸，如果父容器没有高度图表则会显示异常 */
.charts-box{
  width: 100%;
  height:300px;
}</style>
