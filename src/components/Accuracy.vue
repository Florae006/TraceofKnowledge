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
          { name: '平行四边形判定', max: 100 },
          { name: '三角形的中位线', max: 100 },
          { name: '平行四边形定义', max: 100 },
          { name: '平行四边形性质', max: 100 },
          { name: '两条平行线之间的距离', max: 100 },
          { name: '特殊平行四边形', max: 100 }
        ],
        center: ['50%', '50%'],
        radius: 120
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
            value: [95, 95, 95, 75, 95, 80],
            name: '平均准确率'
          },
          {
            value: [85, 80, 90, 95, 95, 90],
            name: '我的准确率'
          },
        ]
      }
    ]
  };
  myChart.setOption(options);
})

</script>