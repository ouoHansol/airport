<script setup lang="ts">
import Header from './components/layouts/Header.vue';
import Side from './components/layouts/Side.vue';
import MainTap from './components/layouts/MainTap.vue';
</script>

<template>
  <div class="app-layout">
    <NuxtRouteAnnouncer />
    <Header class="header" />
    <div class="content-area">
      <Side class="sidebar" />
      <tap class="tap-content">
        <MainTap />
          <main class="main-content">
            <NuxtPage />
          </main>
      </tap>
    </div>
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  width: 100%;
}

.content-area {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 220px;
}

.tap-content {
  flex: 1;
}

.main-content {
  margin: 2rem;
}

</style>
