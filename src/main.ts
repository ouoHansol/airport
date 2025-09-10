import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/main.css'

// 전역 CSS 변수 설정
import { getCSSVariables } from './utils/colors'

// CSS 변수를 document에 추가
const style = document.createElement('style')
style.textContent = `
  :root {
    ${getCSSVariables()}
  }
`
document.head.appendChild(style)

createApp(App).use(router).mount('#app')