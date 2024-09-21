<template>
    <el-calendar v-model="value" />
</template>

<script>
export default {
    name:'calendar'
}
</script>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref(new Date())

</script>
  