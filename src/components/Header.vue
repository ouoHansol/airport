<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">{{ pageTitle }}</h1>
      <nav class="nav">
        <span class="nav-item">홍길동님</span>
        <span class="nav-item">LogOut</span>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { inject, type Ref } from 'vue';

const pageTitle = inject<Ref<string>>('pageTitle');

</script>

<style scoped>
.header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

.logo {
  margin: 0;
  font-size: 1.5rem;
  font-weight: bold;
}

.nav {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  background-color: #34495e;
}
</style>
