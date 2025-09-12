<template>
<!-- 버튼모듈 생성 테스트 -->
<button class="sol-btn" :class="props.color">
    {{ props.name }}
</button>

</template> 

<script setup lang="ts">
import { COLORS, getTextColor, type ButtonColor } from '@/utils/colors.ts';

interface ButtonProps {
  name?: string;
  color?: ButtonColor;
  type?: "button" | "submit" | "reset";
  width?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  name: "생성",
  color: "primary",
  type: "button",
  width: "3rem",
});

</script>

<style scoped>
.sol-btn {
    display: flex;
    min-width: v-bind(width);
    min-height: 2rem;
    justify-content: center;
    align-items: center;
    /* 최종적으로는 css variables로 변경 */
    background-color: var(--backgroundColor);
    border: none;
    border-radius: 4px;
    color: var(--textColor);
}
.sol-btn.danger {
  --backgroundColor: var(--color-danger);
}
</style>