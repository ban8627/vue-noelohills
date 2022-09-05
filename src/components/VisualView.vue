<template>
  <section class="visual">

    <Swiper v-bind:modules="modules" v-bind:autoplay="{
          delay: 2000,
          disableOnIteraction: false,
        }" v-bind:loop="true" v-on:swiper="onSwiper" v-on:slideChange="onSlideChange" class="sw-visual">

      <swiper-slide class="swiper-slide" v-for="(item, index) in slideData" v-bind:key="index">
        <a v-bind:href="item.vlink">
          <div class="visual-img bg" :style="{backgroundImage:'url(' + require(`@/assets/images/${item.vimg}`) + ')'}">
          </div>
          <div class="visual-txt">
            <h3 class="visual-title">{{item.vtitle}}</h3>
            <span class="visual-desc" v-html="item.vtxt"></span>
            <span class="visual-bt">
              {{item.vbt}}
            </span>
          </div>
        </a>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<script>
  import {
    computed
  } from "vue";

  import {
    Autoplay,Pagination
  } from 'swiper';
  import {
    Swiper,
    SwiperSlide
  } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import {
    useStore
  } from 'vuex';

  export default {

    components: {
      Swiper,
      SwiperSlide
    },

    setup() {
      const store = useStore();
      const slideData = computed(() => store.getters.getSlideData);
      store.dispatch('fetchSlide')
      const onSwiper = () => {
      };
      const onSlideChange = () => {
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Autoplay,Pagination],
        slideData
      }
    }

  }
</script>

<style>
  /* 비주얼 */
  .visual {
    position: relative;
    display: block;
  }

  .visual .sw-visual {
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .swiper-slide a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }

  .visual .sw-visual .visual-img {
    position: relative;
    display: block;
    width: 100%;
    height: 600px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .visual .sw-visual .sw-visual-control {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 550px;
    display: block;
    z-index: 9;
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background-color: #fff;
    opacity: 1;
    margin: 0 4px;
  }

  .visual .sw-visual .sw-visual-control .sw-visual-pg .swiper-pagination-bullet-active {
    background-color: #ffcf42;
  }

  .visual .sw-visual .visual-txt {
    position: relative;
    display: block;
    text-align: center;
    padding: 50px 0;
  }

  .visual .sw-visual .visual-title {
    position: relative;
    display: block;
    font-size: 30px;
    color: #777;
    margin-bottom: 35px;
    font-weight: 500;
  }

  .visual .sw-visual .visual-desc {
    position: relative;
    display: block;
    font-size: 20px;
    color: #777;
    margin-bottom: 20px;
  }

  .visual .sw-visual .visual-bt {
    position: relative;
    display: inline-block;
    font-size: 20px;
    color: #fff;
    background-color: #ffcc00;
    padding: 10px 20px;
  }

  /* 비주얼 반응형 */
  @media all and (max-width: 1320px) {
    .visual-img {
      height: 45vw !important;
    }

    .sw-visual-control {
      top: 41.66vw !important;
    }

    .visual-txt {
      padding: 3.78vw 0 !important;
    }
  }

  @media all and (max-width: 800px) {
    .visual-img {
      height: 125vw !important;
    }

    /* .visual-1 {
      background: url("@/assets/images/M_minimal_new.png") no-repeat center !important;
    }

    .visual-2 {
      background: url("@/assets/images/M1_newborn.png") no-repeat center !important;
    }

    .visual-3 {
      background: url("@/assets/images/M2_BabyEssence.png") no-repeat center !important;
    }

    .visual-4 {
      background: url("@/assets/images/M3_Branding.png") no-repeat center !important;
    } */

    .sw-visual-control {
      top: 120vw !important;
    }
  }

  @media all and (max-width: 480px) {
    .visual-img {
      height: 124.375vw !important;
    }

    .visual-1 {
      background: url("@/assets/images/v_480_1.png") no-repeat center !important;
    }

    .visual-2 {
      background: url("@/assets/images/v_480_2.png") no-repeat center !important;
    }

    .visual-3 {
      background: url("@/assets/images/v_480_3.png") no-repeat center !important;
    }

    .visual-4 {
      background: url("@/assets/images/v_480_4.png") no-repeat center !important;
    }

    .sw-visual-control {
      top: 115vw !important;
    }
  }
</style>