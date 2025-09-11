<template>
  <div class="check-group">
    <div class="check-item">
      <label>항목번호</label> 
      <input type="text" class="input"></input>
    </div>
    <div class="check-item">
      <label>점검순서</label> 
      <input type="text" class="input"></input>
    </div>
    <div class="check-item">
      <label>점검방법</label> 
      <input type="text" class="input"></input>
    </div>
  </div>
</template>

<style scoped>

.check-group{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.2rem;
}

.check-item{
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

label{
  margin: 0.5rem;
  text-align: left;
  font-size: 14px;
}

</style>
