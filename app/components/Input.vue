<template>
    <div class="input-container">
        <input class="input" type="text" :placeholder="props.placeholder" />
    </div>
</template> 

<script setup lang="ts">
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    }
});
</script>

<style scoped>  
.input{
    border: 1px solid var(--color-border);
    border-radius: 5px;
    font-size: 14px;
    color: #333;
    height: 100%;
    width: 150px;
    margin: 0 1rem 0 1rem;
    justify-content: center;
    align-items: center;
}
.input-container{
    height: 25px;
}
</style>