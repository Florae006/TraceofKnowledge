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

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import * as echarts from 'echarts';

const chart = ref();

onMounted(() => {
  console.log('Accuracy mounted');
  const myChart = echarts.init(chart.value);
  const options = {
    title: {
      text: '准确率预测',
      subtext: '数据来自模型预测',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      left: 'left',
      data: [
        '平均准确率',
        '我的准确率',
      ]
    },
    radar: [
      {
        indicator: [
          { name: '输入输出流', max: 100 },
          { name: '数组', max: 100 },
          { name: '函数', max: 100 },
          { name: '字符串', max: 100 },
          { name: '循环', max: 100 }
        ],
        center: ['50%', '50%'],
        radius: 80
      }
    ],
    series: [
      {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        areaStyle: { type: 'default' },
        data: [
          {
            value: [85, 90, 90, 95, 95],
            name: '平均准确率'
          },
          {
            value: [60, 73, 85, 40, 82],
            name: '我的准确率'
          },
        ]
      }
    ]
  };
  myChart.setOption(options);
})

</script>