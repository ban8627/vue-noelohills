<template>
  <div>
    <!-- 모바일 메뉴 -->
    <MbDiv />
    <!-- 배너 -->
    <BannerView />
    <!-- 내용 -->
    <div class="wrap">
      <!-- 상단 -->
      <HeaderView />
      <!-- 비주얼 -->
      <VisualView />
      <!-- 제품 카테고리 -->
      <CategoryView />
      <!-- 사이트 맵 -->
      <SiteMap />
      <!-- 하단 -->
      <FooterView />
    </div>
  </div>
</template>
<script>
import {useStore} from 'vuex'
  import MbDiv from '@/components/MbDiv.vue';
  import BannerView from '@/components/BannerView.vue';
  import VisualView from '@/components/VisualView.vue';
  import CategoryView from '@/components/CategoryView.vue';
  import SiteMap from '@/components/SiteMap.vue';
  import HeaderView from '@/components/HeaderView.vue';
  import FooterView from '@/components/FooterView.vue';

  export default {
    name: 'App',
    components: {
      HeaderView,
      MbDiv,
      BannerView,
      VisualView,
      CategoryView,
      SiteMap,
      FooterView
    },
    setup() {
      const store = useStore()
      store.dispatch('fetchMenu')
      return {
      }
    }
  }
</script>

<style>
  @charset "UTF-8";
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul,
  li {
    list-style: none;
  }

  img {
    vertical-align: middle;
    border: 0;
  }

  a {
    color: #777;
    text-decoration: none;
  }

  html {
    font-size: 10px;
    overflow-x: hidden;
  }

  body {
    font-family: "Montserrat", "Noto Sans KR", "Malgun Gothic", "Dotum", "AppleGothic", sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.45px;
    font-style: normal;
    overflow-x: hidden;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-moz-selection {
    background: #1ABC9C;
    color: #fff;
  }

  ::-webkit-selection {
    background: #1ABC9C;
    color: #fff;
  }

  /* 공통클래스 */
  .clearfix::after {
    content: "";
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }

  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1320px;
    margin: 0 auto;
  }


  /* 레이아웃 */
  .wrap {
    position: relative;
    display: block;
  }



  /*# sourceMappingURL=main.css.map */
</style>