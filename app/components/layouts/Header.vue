<template>
    <div class="header-wrapper">
        <div class="header-wrapper-left"/>
        <div class="header-wrapper-right"/>
    </div>
    <div class="header-container">
        <img @click="$router.push('/')" src="/img/inc_logo.png" alt="로고" style="height: 3rem;" />
        <span v-for="menu in headerMenus" 
                :key="menu.path" 
                @click="handleNavigation(menu.path)" 
                :class="{'active': pathSegments === menu.path.split('/')[1]}">
                {{ menu.name }}
        </span>
        <button @click="addTab">탭 추가</button>
    </div>
</template>

<script setup lang="ts">

const route = useRoute();

const pathSegments : Ref<string> = ref(route.path.split('/')[1] || '');

const headerMenus = ref([
    {name: '기준정보', path: '/'}, 
    {name: '근무관리', path: '/'}, // work
    {name: '예방점검', path: '/inspection'}, 
    {name: '검사관리', path: '/validation'}, 
    {name: '장비관리', path: '/'}, //equipment
    {name: '정보관리', path: '/'}, //info 
    {name: '교육/자격', path: '/'}]); // education

const handleNavigation = (menu: string) => {
    pathSegments.value = menu.split('/')[1] || '';

    navigateTo(menu);
};

const addTab = () => {
    headerMenus.value.push({name: 'new-' + headerMenus.value.length + 1, path: '/'});
}

onMounted(() => {
});

</script>

<style scoped>
.header-wrapper {
    display: grid;
    grid-template-columns: 220px auto;
    width: 100vw;
    max-width: 100vw;
}
.header-wrapper-left {
    border-top: 5px solid var(--color-secondary);
}
.header-wrapper-right {
    border-top: 5px solid var(--color-primary);
}
.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    padding-left: 1rem;
    border-bottom: 1px solid var(--color-border);
    gap: 4rem;
}
.header-container span, img {
    cursor: pointer;
}

.active {
    color: var(--color-active);
    font-weight: bold;
}
</style>