<template>
  <div class="widget">
    <weather-cap
      v-if="!city"
    />
    <weather
      v-if="city"
    />
  </div>
</template>

<script>
import weatherCap from '@/components/AppWeatherCap'
import weather from '@/components/AppWeather'

export default {
  created() {
    this.geocodedAddress()
  },
  computed: {
    city() {
      return this.$store.state.city.name
    },
    code() {
      return this.$store.state.city.code
    },
    latitude() {
      return this.$store.state.city.lat
    },
    longitude() {
      return this.$store.state.city.lng
    }
  },
  methods: {
    geocodedAddress() {
      if(!window.localStorage.getItem('cityName')) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.$store.dispatch('locationCoord', {lat: position.coords.latitude, lng: position.coords.longitude})

          this.geocodedCity()
        })
      }
    },
    async geocodedCity() {
      const response = await fetch(`https://maps.google.com/maps/api/geocode/json?latlng=${this.latitude},${this.longitude}&key=AIzaSyAZCHWM_v_EF9RfghsssV9d4s001gHOKZE`)
        .then(response => response.json())
        .catch(err => console.error(err));
      
      if(response.results.length === 0) return false
      
      response.results.forEach(el => {
        if(el.types.includes('country')) {
          this.$store.dispatch('codeRename', el.address_components[0].short_name)
        }
      });
      this.$store.dispatch('cityRename', response.plus_code.compound_code.split(',')[1])
      this.$store.dispatch('citiesChange', [{name: this.city, code: this.code, lat:this.latitude, lng:this.longitude}])
    },

  },
  components: {
    weatherCap,
    weather
  }
}
</script>

<style lang="scss"></style>
