import { createApp } from 'vue'
import App from './App.vue'
// 라우터 연결
// 확장자 .js 는 생략 됨
import router from './router/index.js'
// vuex 연결
// 확장자 .js 는 생략 됨
import store from './store/store.js'

createApp(App).use(router).use(store).mount('#app')
// Vue 가 실행이 될 때 제일 처음 불러 실행되는  .js 파일
// Entry Point 역할을 함. Vue 어플리케이션에서 모두 참조가 됨.
