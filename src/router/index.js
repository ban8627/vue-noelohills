import { createRouter, createWebHistory } from 'vue-router';
const router = createRouter({
  // 웹 브라우저 주소에서 #아이디 이동하는 흔적을 남기지 않음.
  history: createWebHistory(),
  // 컴포넌트 연결 정보
  // routes: [{ path: '/글자' , name:'path 의 이름',component:'연결시켜줄 컴퍼넌츠' }]
  // ex) routes:[{path:'/good',name:'Good',components:'GoodView'}]
  // 가능하면, router 에 사용하는 컴퍼넌츠는 src/view 폴더를 생성하고 
  // 여러 컴퍼넌츠를 포함하는 vue 파일을 생성한다.
  // 가능하면, 페이지이름View. 라고 생성 추천함!
  routes: [
    {
      path: '/',
      name: 'Home',
      component:''
    }
  ]
}); 
// router 라는 변수를 다른 파일에서 사용하기 위해
// router 변수를 내보냄.
// 메인페이지만 있기에 1개만 내보냄.
export default router;