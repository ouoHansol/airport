<script setup>
import { provide, ref } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Side from './components/Side.vue'

// 전역적으로 pageTitle을 provide
const pageTitle = ref('')
provide('pageTitle', pageTitle)

// 사이드바 상태를 App.vue에서 직접 관리
const isSidebarOpen = ref(true)
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 사이드바 상태와 토글 함수를 provide
provide('isSidebarOpen', isSidebarOpen)
provide('toggleSidebar', toggleSidebar)
</script>

<template>
  <div id="app">
    <Side/>
    <div class="content-wrapper" :class="{ 'sidebar-collapsed': !isSidebarOpen }">
      <Header />
      <main class="main-content">
        <router-view />
      </main>
      <Footer />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #333;
}

#app {
  min-width: 1270px;
  min-height: 650px;
  display: flex;
}

.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 220px;
  transition: margin-left 0.3s ease;
}

.content-wrapper.sidebar-collapsed {
  margin-left: 60px;
}

.main-content {
  flex: 1;
  padding: 0.5rem 0;
}
</style>