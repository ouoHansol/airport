<template>
    <div class="terms-box-container">
        <div type="date" class="terms-box"/>
        ~
        <div type="date" class="terms-box"/>
    </div>
</template>

<script setup>
</script>

<style scoped>
.terms-box-container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.terms-box{
    width: 100%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>