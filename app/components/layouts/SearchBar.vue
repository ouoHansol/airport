<template>
  <div class="main-container">
    <div class="search-container-wrapper">
      <div class="search-container">
        <span>제목 <Input /></span>
        <span>작성자 <Input /></span>
        <span>구분 <Input /></span>
        <span>작성일자 <Input /></span>
      </div>
      <div class="search-container">
        <span>시설위치 <Input /></span>
        <span>장비명 <Input /></span>
        <span>계획일자 <Input /></span>
        <span>해결여부 <Input /></span>
      </div>
    </div>
    <div class="search-container-button">
      <div class="search-button">
        조회 
      </div>
      <div class="search-button search-button--alt">
        초기화
      </div>
    </div>
  </div>
</template> 
<script setup lang="ts">
</script>
<style scoped>  
.main-container{
    display: flex;
    align-items: center;
    background-color: var(--color-background-light);
    border-radius: 1rem;
}
.search-container-wrapper{
    display: grid;
    width: 100%;
    height: 100px;
    align-items: center;
    grid-template-rows: 1fr 1fr;
}

.search-container-button{
    display: grid;
    width: 100%;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr 1fr;
    gap: 0.5rem;
}

.search-container{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 0.5rem 1rem 0.5rem 1rem;
}
.search-container span{
    margin-right: 1rem;
    display: flex;
    width: 250px;
    justify-content: end;
}

.search-button{
  display: flex;
  width: 7rem;
  height: 2rem;
  color: var(--color-white);
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
  font-weight: bold;
  cursor: pointer;
}
.search-button--alt{
  background-color: var(--color-white);
  color: var(--color-black);
}
</style>
