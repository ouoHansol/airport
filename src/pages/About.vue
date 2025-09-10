<template>
  <div class="felx-container">
    <div class="flex-item">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted } from 'vue';

const pageTitle = inject('pageTitle');

onMounted(() => {
  pageTitle.value = 'About';
});
</script>

<style scoped>
.flex-container{
  display: flex;
  flex-direction: row;
}
.flex-item{
  flex:1;
  
}
</style>
