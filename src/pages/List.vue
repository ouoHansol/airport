<template>
  <div class="learning-container">

    <section class="section">
        <h2>작업표준정의 목록</h2>
        <div class="box-container">
        </div>

    </section>
  </div>

</template>

<script setup >
import { inject, onMounted } from 'vue';

const pageTitle = inject('pageTitle');

onMounted(() => {
    pageTitle.value = '작업표준정의 목록';
});

</script>

<style scoped>
.learning-container {
  max-width: 1600px;
  padding: 2rem;
}
.section {
  margin-bottom: 1rem;
}
.box-container {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
</style>