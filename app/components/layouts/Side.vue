<template>
    <div class="side-wrapper">
        <div class="side-container">
            <div class="main-menu"
                v-for="menu in currentMenus" 
                :key="menu.path"
                @click="handleNavigation(menu.path)"
                :class="{'active': pathSegments.length > 1 && pathSegments[1] === menu.path.split('/')[1]}">
                {{ menu.name }} 

                <div class="sub-menu"
                    v-if="menu.subMenu && menu.subMenu.length > 0"
                    v-for="subMenu in menu.subMenu" 
                    :key="subMenu.path"
                    @click.stop="handleNavigation(menu.path + subMenu.path)"
                    :class="{'active': pathSegments.length > 2 && pathSegments[2] === subMenu.path.split('/')[1]}">
                    {{ subMenu.name }}
                </div>
            </div>
        </div>        
    </div>
</template>

<script setup lang="ts">
import { getMenusByPath } from '~/utils/navigation'

const route = useRoute()
const pathSegments = computed(() => route.path.split('/').filter(segment => segment));

const currentMenus = computed(() => {
    return getMenusByPath(route.path);
})

const handleNavigation = async (path: string) => {
    // 현재 경로에서 첫 번째 세그먼트 추출 
    const currentBasePath = `/${pathSegments.value[0]}`;
    const fullPath = `${currentBasePath}${path}`;

    await navigateTo(fullPath)
}

onMounted(() => {

});

</script>
<style scoped>
.side-wrapper {
    width: 220px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--color-primary);
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
    color: var(--color-text);
}

.sub-menu{
    font-weight: normal;
    margin: 0.5rem 1rem;
    color: var(--color-text);
    font-size: 0.9rem;
}

.active {
    color: var(--color-active);
}

.active.sub-menu {
    color: var(--color-accent);
    font-weight: bold;
}

</style>