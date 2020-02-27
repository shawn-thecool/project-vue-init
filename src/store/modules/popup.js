const state = {
  popups: []
}
const getters = {
  popups: state => state.popups,
  hasPopup: state => state.popups.length > 0
}
const mutations = {
  createPopup(state, payload) {
    // payload 반드시 id, type 가 있어야 한다
    // 


    state.popups.push(payload)
  },
  removePopup(state, payload) {
    // 삭제전 next callback 실행 
    // payload id
    // 삭제전 state.popups.target.next()

    state.popups = state.popups.filter(popup => popup.id !== payload.id)
  },
  removeLastPopup(state){
    // 삭제전 state.popups.target.next()
    state.popups.pop()
  }
}
const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

// popups: state => state.popups,
//   hasPopup: state => state.popups.length > 0,
//   zIndex: state => state.zIndex
// }
// const mutations = {
//   increaseZIndex(state) {
//     return state.zIndex
//   },
//   addPopup(state, payload) {
//     const id = `popup-id-${uuidv4()}`
//     const zIndex = (state.zIndex += 1)
//     const opts = payload || {}
//     const newPopup = { id, zIndex, ...opts }
//     state.popups.push(newPopup)
//   },
//   removePopup(state, payload) {
//     state.popups = state.popups.filter(popup => popup.id !== payload.id)
//   },
//   removeLastPopup(state) {
//     state.popups.pop()
//   }
