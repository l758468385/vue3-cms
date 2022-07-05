<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ $store.state.name }}</h2>
    <el-button type="primary">全局引入element-plus</el-button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({

})
</script>
