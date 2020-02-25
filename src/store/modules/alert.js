const state = {
  alertList: []
}
const getters = {
  alertList: state => state.alertList
}
const mutations = {
  openAlert(state, payload){
    state.push({
      id:'1111',
      header:""
    })
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
