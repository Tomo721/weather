import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: [],
    city: {
      name: '',
      code: '',
      lat: null,
      lng: null,
    }
  },
  actions: {
    citiesChange({commit}, payload) {
      commit('CITIES_CHANGE', payload)
    },
    cityRename({commit}, payload) {
      commit('CITY_RENAME', payload)
    },
    locationCoord({commit}, payload) {
      commit('LOCATION_COORD', payload)
    },
  },
  mutations: {
    CITY_RENAME(state, payload) {
      state.city.name = payload
    },
    LOCATION_COORD(state, payload) {
      state.city.lat = payload.lat
      state.city.lng = payload.lng
    },
    CITIES_CHANGE(state, payload) {
      state.cities = payload
    }
  },
  getters: {
    cities(state) {
      return state.cities
    }
  },
})
