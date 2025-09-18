<template>
    <div class="main-tap-wrapper">
        <div class="main-tap">
            <div class="main-tap-left-text">
                비행검사 질의 게시판
            </div>
            <div style="cursor: pointer;" class="main-tap-left-close">
                X
            </div>
        </div>
        <div style="border-bottom: #26b099 1px solid;" class="main-tap">
            <div class="main-tap-left-text">
                비행검사 질의 게시판
            </div>
            <div style="cursor: pointer;" class="main-tap-left-close">
                X
            </div>
        </div>
        <div class="main-tap-margin"></div>
    </div>

</template>
<script setup lang="ts">
</script>
<style scoped>
.main-tap-wrapper {
    display: flex;
    width: 100%;
}
.main-tap {
    min-width: 14rem;
    min-height: 3rem;
    border-right: 1px solid #26b099;
    border-top: 5px solid #26b099;
    border-bottom: 1px solid #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.main-tap-left-text {
    padding-left: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
}
.main-tap-left-close {
    padding-right: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
}
.main-tap-margin {
    width: 100%;
    border-bottom: 1px solid #26b099;
}
</style>