<template>
    <div class="main-container">
        <div class="search-container">
            <Input />
        </div>
    </div>
</template> 
<script setup lang="ts">
</script>
<style scoped>  
.main-container{
    display: flex;
    width: 100%;
    height: 100px;
    background-color: var(--color-background-light);
    border-radius: 1rem;
}

.search-container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
</style>
