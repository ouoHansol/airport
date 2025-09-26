<template>
    <div v-for="tap in taps" :key="tap.path" class="tap" :class="{ 'active': tap.active }">
        <div class="tap-left-text">
            {{ tap.name }}
        </div>
        <div style="cursor: pointer;" class="tap-left-close">
            X
        </div>
    </div>
</template>

<script setup lang="ts">

const taps = ref<Tap[]>([
    {
        name: '계획관리',
        path: '/plan',
        active: false
    },
    {
        name: '비행검사관리',
        path: '/flight-result',
        active: true
    },
    {
        name: '비행검사 데이터이력',
        path: '/flight-history',
        active: false
    },
    {
        name: '질의게시판',
        path: '/qna',
        active: false
    },
]);

interface Tap {
    name: string;
    path: string;
    active: boolean;
}

const props = defineProps({
    tap_name: {
        type: String,
        default: ''
    }
});

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
}
.tap-left-close {
    padding-right: 1rem;
    font-size: 0.8rem;
    font-weight: bold;
}
.active {
    color: var(--color-active);
    border-bottom: 1px solid var(--color-white);
}
</style>