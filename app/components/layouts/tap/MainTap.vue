<template>
    <div class="main-tap-wrapper">
        <Tap />
        <div class="main-tap-margin"></div>
    </div>

</template>
<script setup lang="ts">
import Tap from './Tap.vue';

const taps = ref([]);

const props = defineProps({
    tap_name: {
        type: String,
        default: ''
    }
});


</script>
<style scoped>
.main-tap-wrapper {
    display: flex;
    width: 100%;
}
.main-tap-margin {
    width: 100%;
    border-bottom: 1px solid var(--color-primary);
}
</style>