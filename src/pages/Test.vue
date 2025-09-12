<template>
  <div class="learning-container">

    <section class="section">
      <h2>검색</h2>
      <div class="box-container">
        <div class="search-item">
          <label>시설위치</label> <input type="text" class="input"></input>
        </div>
      </div>
    </section>
    
    <section class="section">
      <div class="section-item">
        <button @click="listState = true" class="section-item-btn">점검표준관리 목록</button>
        <div class="section-item-btn-line"></div>
        <button @click="listState = false" class="section-item-btn">점검표준관리 상세</button>
      </div>
    </section>

    <div v-if="listState">
      <section class="section">
        <h2>정의 목록</h2>
        <div class="box-container">
          <div class="tap-container">
            <div class="tap-item">
              <label>전체</label>
              <label>최종버전</label>
            </div>   

            <div class="button-container">
              <Button name="생성"></Button>
              <Button name="Excel"></Button>
              <Button name="설정"></Button>
              <Button name="삭제" color="danger"></Button>
            </div>       
          </div>

          <div class="check-table">
            <CheckTable :headers="TABLE_HEADERS.DEFAULT_INSPECTION"></CheckTable>
          </div>
        </div>
      </section>
    </div>

    <div v-if="!listState">
      <section class="section">
        <h2>정의 상세</h2>
        <div class="box-container">
        </div>
      </section>
    </div>
  </div> 
</template>

<script setup lang="ts">
import Button from '@/components/form/Button.vue';
import CheckTable from '@/tables/CheckTable.vue';
import { TABLE_HEADERS } from '@/config/tableHeaders';
import {inject, onMounted, type Ref, ref} from 'vue';

const pageTitle = inject('pageTitle');

const listState = ref(true);

onMounted(() => {
  console.log(listState.value);
  const pageTitle = inject<Ref<string>>('pageTitle');
});

</script>

<style scoped>
.learning-container {
  max-width: 1600px;
  padding: 2rem;
}

.section {
  margin-bottom: 2rem;
}

h2 {
  font-size: 22px;
  color: #444;
  border-bottom: 1px solid #444;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.section-item {
  display: flex;
  justify-content: left;
  align-items: center;
  margin-right: 1rem;
}

.section-item-btn {
  font-size: 24px;
  font-weight: bold;
  color: #a4a4a4;
  padding: 0rem 1rem 0rem 1rem;
  border-right: 1px solid #444;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
}

.section-item-btn:first-child {
  padding: 0rem 1rem 0rem 0rem;
  color: #444;
}
.section-item-list:last-child {
  border-right: none;
}

.section-item-btn-line {
  width: 3px;
  height: 26px;
  background-color: #444;
}

.box-container {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

p {
  margin-bottom: 15px;
  color: #555;
}

.tap-container {
  margin: 0rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tap-item{
  min-width: 16rem;
  display: flex;
  gap:0.5rem;
}

.tap-item label{
  min-width: 8rem;
  padding: 0.5rem;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
}

.button-container {
  display: flex;
  gap: 0.2rem;
}

.check-table {
  display: flex;
  height: 100%;
  justify-content: center;
}

</style>
