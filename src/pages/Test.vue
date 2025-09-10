<template>
  <div class="learning-container">
    <section class="section">
      <h2>표준점검항목</h2>
      <div class="box-container">

        <div class="button-container">
          <Button name="생성"></Button>
          <Button name="Excel"></Button>
          <Button name="설정"></Button>
          <Button name="삭제" color="danger"></Button>
        </div>

        <div class="check-table">
          <Table></Table>
        </div>

        <div class="flex-container">
          <div class="flex-item">Item 1</div>
          <div class="flex-item">Item 2</div>
          <div class="flex-item">Item 3</div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/layouts/Button.vue';
import Table from '@/components/layouts/Table.vue';
import {inject, onMounted, type Ref} from 'vue';

const pageTitle = inject('pageTitle');

onMounted(() => {
  const pageTitle = inject<Ref<string>>('pageTitle');
});

</script>

<style scoped>
.learning-container {
  max-width: 1600px;
  padding: 3rem;
}

.section {
  margin-bottom: 40px;
}

h2 {
  font-size: 20px;
  color: #444;
  border-bottom: 2px solid #007bff;
  padding-bottom: 10px;
  margin-bottom: 20px;
}


.box-container {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

p {
  margin-bottom: 15px;
  color: #555;
}

.button-container {
  display: flex;
  flex-direction: row;
  gap: 0.2rem;
  justify-content: right;
}

/* 기본 Flexbox 스타일 */
.flex-container {
  display: flex;
  background-color: #e3f2fd;
  padding: 15px;
  border: 2px solid #2196f3;
  border-radius: 4px;
}

.flex-item {
  background-color: #ff9800;
  color: white;
  padding: 15px;
  margin: 5px;
  text-align: center;
  border-radius: 4px;
  min-width: 80px;
}

.check-table {
  display: flex;
  height: 100%;
  justify-content: center;
}

</style>
