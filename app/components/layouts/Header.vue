<template>
    <div class="header-wrapper">
        <div class="header-wrapper-left"/>
        <div class="header-wrapper-right"/>
    </div>
    <div class="header-container">
        <img @click="$router.push('/')" src="/img/inc_logo.png" alt="로고" style="height: 3rem;" />
        <div>기준정보</div>
        <div>근무관리</div>
        <div @click="$router.push('/inspection')">예방점검</div>
        <div @click="$router.push('/validation')">검사관리</div>
        <div>장비관리</div>
        <div>정보관리</div>
        <div>교육/자격</div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.header-wrapper {
    display: grid;
    grid-template-columns: 220px auto;
    width: 100vw;
    max-width: 100vw;
}
.header-wrapper-left {
    border-top: 5px solid #ffd17b;
}
.header-wrapper-right {
    border-top: 5px solid #26b099;
}
.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    padding-left: 1rem;
    border-bottom: 1px solid #9d9d9d;
    gap: 4rem;
}
.header-container div, img {
    cursor: pointer;
}
</style>