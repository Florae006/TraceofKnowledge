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
import { onMounted, ref, watch } from 'vue'
import RelationGraph, { RGOptions } from 'relation-graph-vue3';
const graphRef = ref<RelationGraph>()
const options = ref<RGOptions>({
  defaultExpandHolderPosition: 'right'
})

const relationType = defineModel('relationType', {
  type: String,
  default: 'brother'
})

watch(() => relationType.value, () => {
  fetchJsonData();
})

const relationJsonUrl = new Map([
  ['brother', '/src/static/json/brothor.json'],
  ['parallel', '/src/static/json/parallel.json'],
  ['prepost', '/src/static/json/prepost.json'],
  ['similar', '/src/static/json/similar.json']
])

const fetchJsonData = () => {
  const url = relationJsonUrl.get(relationType.value);
  console.log(url)
  if (!url) {
    return;
  }
  fetch(url).then(response => response.json())
    .then(data => {
      const jsonData = data;
      jsonData.layouts = [
        {
          layoutName: 'center'
        }
      ];
      jsonData.allowSwitchJunctionPoint = true;
      jsonData.scale = 1.5;
      console.log(jsonData)
      if (graphRef.value) {
        graphRef.value.setJsonData(jsonData)
      }
    });
}

onMounted(() => {
  fetchJsonData();
})
// fetchJsonData();

</script>