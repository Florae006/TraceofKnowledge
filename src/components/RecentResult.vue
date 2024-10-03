<template>
  <div class="w-full h-full">
    <div class="gp-shell">
      <div ref="chart" class="chart"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gp-shell {
  border: #efefef solid 1px;
  height: 90vh;
  width: 80vw;
}

.chart {
  height: 100%;
  width: 100%;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

import * as echarts from 'echarts';

const chart = ref();

onMounted(() => {
  console.log('Resuult Result mounted');
  const myChart = echarts.init(chart.value);
  const options = {
    title: {
      text: '最近答题情况',
      subtext: '数据来自模型预测',
      left: 'left'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
    },
    toolbox: {
      show: true,
      feature: {
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['平行四边形的面积', '对数', '除法', '三角形的面积', '将小数转换为百分比', '将百分比转换为小数', '复数的加法和减法', '复平面', '绘制抛物线', '配方法'],
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value} %'
      }
    },
    series: [
      {
        name: '我的准确率',
        type: 'line',
        data: [90, 80, 20, 10, 70, 50, 60, 80, 30],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      },
      {
        name: '平均准确率',
        type: 'line',
        data: [80, 40, 30, 70, 60, 50, 20, 10, 80],
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        }
      }
    ]
  };
  myChart.setOption(options);
})

</script>