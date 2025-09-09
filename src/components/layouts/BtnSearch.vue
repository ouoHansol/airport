<template>
    <div class="btn-search" :style="boxStyle">
        <div class="title">{{ title }}</div>
        <div class="main-line"></div>
        <div class="content-area">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: '검색'
  },
  width: {
    type: [String, Number],
    default: '100%'
  },
  height: {
    type: [String, Number],
    default: 'auto'
  }
});

const boxStyle = computed(() => {
  return {
    width: typeof props.width === 'number' ? `${props.width}px` : props.width,
    height: typeof props.height === 'number' ? `${props.height}px` : props.height
  };
});
</script>

<style scoped>
.btn-search{
    border: 1px solid #bbb;
    border-radius: 6px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
    text-align: left;
    padding: 10px 20px;
    box-sizing: border-box;
}
.main-line{
    border: none; 
    border-top: 1px solid #bbb; 
    margin: 10px 0;
}
.content-area {
    margin-top: 15px;
}
</style>