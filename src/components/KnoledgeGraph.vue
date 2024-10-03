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
      { id: 'a', text: 'a', },
      { id: 'b', text: 'b', },
      { id: 'c', text: 'c', },
      { id: 'd', text: 'd', },
      { id: 'e', text: 'e', },
      { id: 'f', text: 'f', },
    ],
    lines: [
      { from: 'a', to: 'b', },
      { from: 'a', to: 'c', },
      { from: 'a', to: 'd', },
      { from: 'a', to: 'e', },
      { from: 'a', to: 'f', },
    ],
  }
  if (graphRef.value) {
    graphRef.value.setJsonData(jsonData)
  }
})
</script>