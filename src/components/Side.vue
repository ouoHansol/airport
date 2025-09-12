<template>
  <div class="side" :class="{ 'collapsed': !isOpen }">
    <div class="sidebar-header">
      <h1 v-show="isOpen">Side</h1>
      <button @click="toggleSidebar" class="toggle-btn">
        {{ isOpen ? '←' : '→' }}
      </button>
    </div>
    <div class="sidebar-content" v-show="isOpen">
      <p>예방점검</p>
      <p style="margin-left: 1rem;">ㄴ 점검표준</p>
      <p style="margin-left: 1rem;">ㄴ 평상점검</p>
      <p style="margin-left: 1rem;">ㄴ 정기(성능)점검</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

// App.vue에서 제공하는 사이드바 상태와 토글 함수를 inject
const isOpen = inject('isSidebarOpen')
const toggleSidebar = inject('toggleSidebar')
</script>

<style scoped>
.side {
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #34495e;
  color: white;
  transition: width 0.3s ease;
  z-index: 1000;
}

.side.collapsed {
  width: 60px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-header h1 {
  margin: 0;
  font-size: 1.2rem;
}

.toggle-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-content {
  padding: 1rem;
  flex: 1;
}

.sidebar-content p {
  margin: 0;
  opacity: 0.8;
}
</style>