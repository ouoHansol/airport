import { ref, computed } from 'vue'

/**
 * 카운터 기능을 제공하는 composable 함수
 * @param {number} initialValue - 초기값 (기본값: 0)
 * @returns {object} 카운터 관련 함수들과 상태
 */
export function useCounter(initialValue = 0) {
  const count = ref(initialValue)
  
  const increment = () => {
    count.value++
  }
  
  const decrement = () => {
    count.value--
  }
  
  const reset = () => {
    count.value = initialValue
  }
  
  const doubleCount = computed(() => count.value * 2)
  
  return {
    count,
    increment,
    decrement,
    reset,
    doubleCount
  }
}
