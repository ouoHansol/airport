<template>
    <div v-for="tap in taps" :key="tap.path" class="tap" :class="{ 'tap_active': tap.active }">
        <div class="tap-left-text" :class="{'sub_active':tap.active}">
            <span @click="handleTap(tap.path)">{{ tap.name }}</span>
        </div>
        <div class="tap-left-close">
            X
        </div>
    </div>
</template>

<script setup lang="ts">

const taps = ref<Tap[]>([
    {
        name: '계획관리',
        path: '/validation/flight/plan',
        active: false
    },
    {
        name: '비행검사관리',
        path: '/validation/',
        active: true
    },
    {
        name: '비행검사 데이터이력',
        path: '/inspection',
        active: false
    },
    {
        name: '질의게시판',
        path: '/validation/flight',
        active: false
    },
]);

interface Tap {
    name: string;
    path: string;
    active: boolean;
}

const setActiveByPath = (path: string) => {
    taps.value.forEach(tap => {
        tap.active = tap.path === path;
    });
}

const handleTap = async (path: string) => {

  setActiveByPath(path);

  await navigateTo(path);
};

const route = useRoute();
watch(() => route.path, (p) => setActiveByPath(p), { immediate: true });

</script>

<style scoped>
.tap {
    min-width: 14rem;
    min-height: 3rem;
    border-right: 1px solid var(--color-primary);
    border-top: 5px solid var(--color-primary);
    border-bottom: 1px solid var(--color-primary);

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.tap-left-text {
    padding-left: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
}
.tap-left-close {
    padding-right: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
    cursor: pointer;
}
.tap_active {
    border-bottom: 1px solid var(--color-white);
}
.sub_active {
    color: var(--color-primary);
}
</style>