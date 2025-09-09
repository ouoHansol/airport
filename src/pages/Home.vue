<template>
  <div class="home">
    <BtnSearch title="검색" :width="800" :height="300">
      <div class="serach-group">
        <div class="search-item">
          <label class="label">점검일자</label>
          <TermsBox/>
        </div>
        
        <div class="search-item">
          <label class="label">시설명</label>
          <input type="text" class="input">
        </div>
        
        <div class="search-item">
          <label class="label">시설위치</label>
          <input type="text" class="input">
        </div>
        
        <div class="search-item">
          <label class="label">부서</label>
          <input type="text" class="input">
        </div>
        
      </div>
    </BtnSearch>
  </div>
</template>

<script setup>
import BtnSearch from '@/components/layouts/BtnSearch.vue';
import TermsBox from '@/components/layouts/TremsBox.vue';
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
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}
.search-item{
  display: flex;
  flex-direction: row;
  justify-content: right;
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
