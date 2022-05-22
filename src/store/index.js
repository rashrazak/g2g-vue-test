import { createStore } from "vuex"
// import api from "../utils/api"

export default createStore({
  state: {
    bookmarks: [],
    brands: null
  },
  getters: {},
  mutations: {
    ADD_BOOKMARK(state, bookmark){
      state.bookmarks.push(bookmark)
    },
    REMOVE_BOOKMARK(state, bookmark){
      state.bookmarks = state.bookmarks.filter(v => {
        return v.keyword_id != bookmark.keyword_id
      })
    }
  },
  actions: {
    addBookmark({commit}, bookmark){
      commit('ADD_BOOKMARK', bookmark)
    },
    removeBookmark({commit}, bookmark){
      commit('REMOVE_BOOKMARK', bookmark)
    },
  },
  modules: {},
})
