<template>
    <div class="tap">
        <div class="tap-left-text">
            계획관리
        </div>
        <div style="cursor: pointer;" class="tap-left-close">
            X
        </div>
    </div>
    
    <div style="border-bottom: var(--color-primary) 1px solid;" class="tap">
        <div class="tap-left-text">
            비행검사 질의 게시판
        </div>
        <div style="cursor: pointer;" class="tap-left-close">
            X
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.tap {
    min-width: 14rem;
    min-height: 3rem;
    border-right: 1px solid var(--color-primary);
    border-top: 5px solid var(--color-primary);
    border-bottom: 1px solid var(--color-white);

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tap-left-text {
    padding-left: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
}
.tap-left-close {
    padding-right: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
}
</style>