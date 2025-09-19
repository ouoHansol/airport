<template>
    <div class="header-wrapper">
        <div class="header-wrapper-left"/>
        <div class="header-wrapper-right"/>
    </div>
    <div class="header-container">
        <img @click="$router.push('/')" src="/img/inc_logo.png" alt="로고" style="height: 3rem;" />
        <span v-for="menu in HeaderMenus" 
                :key="menu.path" 
                onclick="ff" 
                :class="{'active': pathSegments === menu.path.split('/')[1]}">
                {{ menu.name }}
        </span>        
    </div>
</template>

<script setup lang="ts">

const route = useRoute();

const pathSegments : Ref<string> = ref(route.path.split('/')[1] || '');

const HeaderMenus = 
    [{name: '기준정보', path: '/'}, 
    {name: '근무관리', path: '/'}, // work
    {name: '예방점검', path: '/inspection'}, 
    {name: '검사관리', path: '/validation'}, 
    {name: '장비관리', path: '/'}, //equipment
    {name: '정보관리', path: '/'}, //info 
    {name: '교육/자격', path: '/'}]; // education

const ff = computed(() => {
    pathSegments.value = route.path.split('/')[1] || '';
    console.log(pathSegments.value);
});

onMounted(() => {
    console.log(route.path.split('/')[1]);
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
    border-top: 5px solid #ffd17b;
}
.header-wrapper-right {
    border-top: 5px solid #26b099;
}
.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 5rem;
    padding-left: 1rem;
    border-bottom: 1px solid #9d9d9d;
    gap: 4rem;
}
.header-container span, img {
    cursor: pointer;
}

.active {
    color: #26b099;
    font-weight: bold;
}
</style>