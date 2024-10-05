<template>
  <div class="w-full h-full">
    <div class="gp-shell">
      <relation-graph ref="graphRef" :options="options" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gp-shell {
  border: #efefef solid 1px;
  height: 90vh;
  width: 80vw;
}
</style>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import RelationGraph, { RGOptions } from 'relation-graph-vue3';
const graphRef = ref<RelationGraph>()
const options = ref<RGOptions>({
  defaultExpandHolderPosition: 'right'
})
onMounted(() => {
  const jsonData = {
    rootId: 'a',
    nodes: [
      { id: 'a', text: '初中数学', },
      { id: 'b', text: '分式方程', },
      { id: 'c', text: '一次函数', },
      { id: 'd', text: '勾股定理', },
      { id: 'e', text: '函数', },
      { id: 'f', text: '正比例函数', },
      { id: 'g', text: '一次函数', },
      { id: 'h', text: '一次函数与方程不等式的关系', },
    ],
    lines: [
      { from: 'a', to: 'b', },
      { from: 'a', to: 'c', },
      { from: 'a', to: 'd', },
      { from: 'c', to: 'e', },
      { from: 'c', to: 'f', },
      { from: 'c', to: 'g', },
      { from: 'c', to: 'h', },
    ],
  }
  if (graphRef.value) {
    graphRef.value.setJsonData(jsonData)
  }
})
</script>