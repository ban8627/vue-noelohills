  // 데이터 저장 객체
const state = {
    mbMenuData: [
      {
        menuType: 'S',
        mainText: 'SHOP',
        mainLink: '',
        subArr: [
          {link: '#', title: 'ALL PRODUCT'},
          {link: '#', title: 'NEWBORN'},
          {link: '#', title: 'BABY'},
          {link: '#', title: 'FAMILY'},
          {link: '#', title: 'BATH GOODS'},
          {link: '#', title: 'PRESENTS'}
        ]
      },
      {
        menuType: 'S',
        mainText: 'ABOUT',
        mainLink: '',
        subArr: [
          {link: '#', title: 'BRAND STORY'},
          {link: '#', title: 'WHO WE ARE'},
          {link: '#', title: 'MAKE A WISH'},
          {link: '#', title: 'PRESS'}
        ]
      },
      {
        menuType: 'S',
        mainText: 'TRUST',
        mainLink: '',
        subArr: [
          {link: '#', title: 'FOOD GRADE'},
          {link: '#', title: 'PENTACERA™'},
          {link: '#', title: 'BABY SKINCARE'},
          {link: '#', title: 'CERTIFICATIONS'},
          {link: '#', title: 'INGREDIENT'},
        ]
      },
      {
        menuType: 'A',
        mainText: 'STOCKISTS',
        mainLink: 'a.html',
        subArr: []
      },
      {
        menuType: 'A',
        mainText: 'REVIEW',
        mainLink: 'b.html',
        subArr: []
      },
      {
        menuType: 'S',
        mainText: 'BENEFITS',
        mainLink: '',
        subArr: [
          {link: '#', title: 'EVENTS'},
          {link: '#', title: 'MEMBERS'},
        ]
      },
    ],
    slideData: [{
            vimg: "PC_minimal_new.png",
            vtitle: "미니멀비 출시",
            vtxt: "아이부터 어른까지<br />클린 포뮬러 저자극 케어",
            vbt: "SHOP",
            vlink: '#'
          },
          {
            vimg: "PC1_newborn.png",
            vtitle: "SPECIAL OFFER",
            vtxt: "노엘로힐스가 제안하는<br />아기 스킨케어 출산준비물",
            vbt: "SHOP",
            vlink: '#'
          },
          {
            vimg: "PC2_BabyEssence.png",
            vtitle: "밀크 에센스 로션",
            vtxt: "아기 피부의 미래를 결정해주는 <br />베이비 에센스",
            vbt: "SHOP",
            vlink: '#'
          },
          {
            vimg: "PC3_Branding.png",
            vtitle: "8:23 PM",
            vtxt: "가족에게 행복을 선사하는<br />스킨케어 라이프스타일 브랜드",
            vbt: "SHOP",
            vlink: '#'
          }
    ]
  }

  // Request 호출 : 외부 서버(http 주소) 및 파일 (json, xml...) 호출
  // Response 를 통해서 결과 및 데이터를 받음
  // Response 가 결과 (Error) 라면 catch 처리를 mutations 에 위탁
  // Response 가 결과 (Success) 라면 then 처리를 mutations 에 위탁
const actions = {}

  // actions 로 부터 전달 받은 상황을 실제로 처리
  // 처리란? : state 를 업데이트 하게 됨.
const mutations = {}

  // state 즉 데이터를 컴퍼넌츠 (View 영역)에 넣어 화면을 갱신함.
  // 통상 getters 는 컴퍼넌츠에서 computed 로 받는 경우가 많음
  // computed 는 컴퍼넌츠 내용 갱신시 
const getters = {
    getSlideData(state) {
      // 여러가지 데이터를 원하는 값으로 정렬하는 과정 필요
      return state.slideData
    },
    getmbMenuData(state) {
      return state.mbMenuData
    }
  }

export default {state,actions,mutations,getters}