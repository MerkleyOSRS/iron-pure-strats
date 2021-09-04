import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contentType: null,
    build: null,
    ultimate: null,
    alts: null,
    skill: null,
    boss: null
  },

  getters: {
    contentType(state) {
      return state.contentType
    },
    build(state) {
      return state.build
    },
    ultimate(state) {
      return state.ultimate
    },
    alts(state) {
      return state.alts
    },
    skill(state) {
      return state.skill
    },
    boss(state) {
      return state.boss
    }
  },

  mutations: {
    EDIT_CONTENT(state, data) {
      state.contentType = data
    },
    EDIT_BUILD(state, data) {
      state.build = data
    },
    EDIT_ULTIMATE(state, data) {
      state.ultimate = data
    },
    EDIT_ALTS(state, data) {
      state.alts = data
    },
    EDIT_SKILL(state, data) {
      state.skill = data
    },
    EDIT_BOSS(state, data) {
      state.boss = data
    }
  },

  actions: {
    setContent({ commit }, data) {
      commit('EDIT_CONTENT', data)
    },
    setBuild({ commit }, data) {
      commit('EDIT_BUILD', data)
    },
    setUltimate({ commit }, data) {
      commit('EDIT_ULTIMATE', data)
    },
    setAlts({ commit }, data) {
      commit('EDIT_ALTS', data)
    },
    setSkill({ commit }, data) {
      commit('EDIT_SKILL', data)
    },
    setBoss({ commit }, data) {
      commit('EDIT_BOSS', data)
    }
  }
})