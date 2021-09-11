import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    cities: JSON.parse(localStorage.getItem("cities") || "[]"),
    city: {
      name: window.localStorage.getItem('cityName') || '',
      code: window.localStorage.getItem('code') || '',
      lat: window.localStorage.getItem('cityLat') || null,
      lng: window.localStorage.getItem('cityLng') || null,
    }
  },
  actions: {
    citiesChange({commit}, payload) {
      commit('CITIES_CHANGE', payload)
    },
    cityRename({commit}, payload) {
      commit('CITY_RENAME', payload)
    },
    codeRename({ commit }, payload) {
      commit('CODE_RENAME', payload)
    },
    locationCoord({commit}, payload) {
      commit('LOCATION_COORD', payload)
    },
  },
  mutations: {
    CITY_RENAME(state, payload) {
      state.city.name = payload

      window.localStorage.setItem('cityName', payload)
    },
    CODE_RENAME(state, payload) {
      state.city.code = payload

      window.localStorage.setItem('code', payload)
    },
    LOCATION_COORD(state, payload) {
      state.city.lat = payload.lat
      state.city.lng = payload.lng

      window.localStorage.setItem('cityLat', payload.lat)
      window.localStorage.setItem('cityLng', payload.lng)
    },
    CITIES_CHANGE(state, payload) {
      state.cities = payload

      window.localStorage.setItem('cities', JSON.stringify(payload))
    }
  },
  getters: {
    cities(state) {
      return state.cities
    }
  },
})
