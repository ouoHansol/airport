<template>
  <div class="home">
    <BtnSearch title="검색" :width="800" :height="300">
      <div class="serach-group">
        <div class="search-item">
          <label class="label">장애번호</label>
          <input type="text" class="input">
        </div>
        
        <div class="search-item">
          <label class="label">시설명</label>
          <input type="text" class="input">
        </div>
        
      </div>
    </BtnSearch>
  </div>
</template>

<script setup>
import BtnSearch from '@/components/layouts/BtnSearch.vue';
import { ref, provide, onMounted } from 'vue';

const pageTitle = ref('');
const userName = ref('');

provide('pageTitle', pageTitle);
provide('userName', userName);

onMounted(() => {
  pageTitle.value = 'NOTAM';
  userName.value = '홍길동';
});
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}
.serach-group{
  display: flex;
  flex-direction: row;
}
.search-item{
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0px 10px;
}
.label{
  text-align: left;
  margin: 10px;
}
.input{
  width: auto;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0px 10px;
}
</style>
