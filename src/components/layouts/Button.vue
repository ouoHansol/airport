<template>
<!-- 버튼모듈 생성 테스트 -->
<button class="sol-btn">
    {{ props.name }}
</button>

</template> 

<script setup lang="ts">
import { COLORS, getTextColor, type ButtonColor } from '@/utils/colors';

interface ButtonProps {
  name?: string;
  color?: ButtonColor;
  type?: "button" | "submit" | "reset";
  size?: number;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  name: "생성",
  color: "primary",
  type: "button",
  size: 48
});

// 색상 값 계산
const backgroundColor = COLORS[props.color];
const textColor = getTextColor(props.color);

</script>

<style scoped>
.sol-btn{
    display: flex;
    min-width: 3rem;
    min-height: 2rem;
    justify-content: center;
    align-items: center;
    /* background-color: v-bind('backgroundColor'); */
    /* 최종적으로는 css variables로 변경 */
    background-color: var(--backgroundColor);
    border: none;
    border-radius: 4px;
    /* color: v-bind('textColor'); */
    color: var(--textColor);
}

</style>