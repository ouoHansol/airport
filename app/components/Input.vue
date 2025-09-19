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
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    padding: 0 10px;
    font-size: 16px;
    color: #333;
}
.input-container{
    display: flex;
    width: 10px;
    height: 10xpx;
    background-color: #dcdcdc;
}
</style>