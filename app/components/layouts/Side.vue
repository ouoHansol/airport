<template>
    <div class="side-wrapper">
        <div class="side-container">
            <div class="main-menu"
                v-for="menu in currentMenus" 
                :key="menu.path"
                @click="handleNavigation(menu.path)">
                {{ menu.name }} 

                <div class="sub-menu"
                    v-if="menu.subMenu && menu.subMenu.length > 0"
                    v-for="subMenu in menu.subMenu" 
                    :key="subMenu.path"
                    @click="handleNavigation(menu.path + subMenu.path)">
                    {{ subMenu.name }}
                </div>

            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { getMenusByPath } from '~/utils/navigation'

const route = useRoute()

// 현재 route에 따라 메뉴 결정 (간단해짐!)
const currentMenus = computed(() => {
    return getMenusByPath(route.path)
})

const handleNavigation = (path: string) => {
    // 현재 경로에서 첫 번째 세그먼트 추출 (예: /validation/flight/plan -> /validation)
    const pathSegments = route.path.split('/').filter(segment => segment)
    const currentBasePath = pathSegments.length > 0 ? `/${pathSegments[0]}` : ''
    
    // 상대 경로로 이동
    const fullPath = `${currentBasePath}${path}`
    navigateTo(fullPath)
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

.side-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem;
}

.side-container div {
    cursor: pointer;
}

.main-menu {
    font-weight: bold;
    font-size: 1rem;
}

.sub-menu{
    font-weight: normal;
    margin: 0.5rem 1rem;
    color: #666;
    font-size: 0.9rem;
}

</style>