import axios from 'axios'

// 데이터 저장 객체
const state = {
  mbMenuData: [],
  slideData: []
}

// Request 호출 : 외부 서버(http 주소) 및 파일 (json, xml...) 호출
// Response 를 통해서 결과 및 데이터를 받음
// Response 가 결과 (Error) 라면 catch 처리를 mutations 에 위탁
// Response 가 결과 (Success) 라면 then 처리를 mutations 에 위탁
const actions = {
  //  ./data/menu.json 호출
  fetchMenu({
    commit
  }) {
    axios.get('./data/menu.json')
      .then(response => {
        // console.log(response.data)
        commit('UPDATE_MENU', response.data)
      })
      .catch(err => console.log(err))
  },
  fetchSlide({
    commit
  }) {
    axios.get('./data/slide.json')
      .then(response => {
        // console.log(response.data)
        commit('UPDATE_SLIDE', response.data)
      })
      .catch(err => console.log(err))
  }
}

// actions 로 부터 전달 받은 상황을 실제로 처리
// 처리란? : state 를 업데이트 하게 됨.
const mutations = {
  UPDATE_MENU(state, payload) {
    state.mbMenuData = payload
  },
  UPDATE_SLIDE(state, payload) {
    state.slideData = payload
  }
}

// state 즉 데이터를 컴퍼넌츠 (View 영역)에 넣어 화면을 갱신함.
// 통상 getters 는 컴퍼넌츠에서 computed 로 받는 경우가 많음
// computed 는 컴퍼넌츠 내용 갱신시 
const getters = {
  getmbMenuData(state) {
    return state.mbMenuData
  },
  getSlideData(state) {
    // 여러가지 데이터를 원하는 값으로 정렬하는 과정 필요
    return state.slideData
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}