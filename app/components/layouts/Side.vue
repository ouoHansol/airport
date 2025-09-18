<template>
    <div class="side-wrapper">
        <div class="side-container">
            <div 
                v-for="menu in currentMenus" 
                :key="menu.path"
                @click="handleNavigation(menu.path)"
            >
                {{ menu.name }} 
                <!-- sub tap 필요 밑으로? 옆으로? -->
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { inspectionMenus, ValidationMenus } from '~/utils/navigation'

const route = useRoute()

// 현재 route에 따라 메뉴 결정
const currentMenus = computed(() => {
    const path = route.path
  
    if (path.startsWith('/inspection')) {
        return inspectionMenus
    } else if (path.startsWith('/validation')) {
        return ValidationMenus
    }
    
    return ValidationMenus
})

const handleNavigation = (path: string) => {
    navigateTo(path)
}
</script>
<style scoped>
.side-wrapper {
    width: 220px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #26b099;
}

/* 사이드바 컨테이너 스타일 */
.side-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
    font-weight: bold;
}

/* 메뉴 항목 스타일 */
.side-container div {
    cursor: pointer;
}
</style>