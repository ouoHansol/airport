<template>
  <div class="about">
    <h1>About 페이지</h1>
    <p>이것은 새로 만든 페이지입니다.</p>
    <div class="info-card">
      <h2>프로젝트 정보</h2>
      <ul>
        <li>프레임워크: Vue 3</li>
        <li>빌드 도구: Vite</li>
        <li>라우터: Vue Router 4</li>
      </ul>
    </div>
    <nav>
      <router-link to="/" class="nav-link">홈으로 돌아가기</router-link>
    </nav>
  </div>
</template>

<script setup>
import { inject, onMounted } from 'vue';

const pageTitle = inject('pageTitle');

onMounted(() => {
  pageTitle.value = 'About';
});
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

p {
  color: #7f8c8d;
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.info-card {
  background-color: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  text-align: left;
}

.info-card h2 {
  color: #495057;
  margin-bottom: 1rem;
  text-align: center;
}

.info-card ul {
  list-style-type: none;
  padding: 0;
}

.info-card li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #dee2e6;
  color: #6c757d;
}

.info-card li:last-child {
  border-bottom: none;
}

.nav-link {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #28a745;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #218838;
}
</style>
