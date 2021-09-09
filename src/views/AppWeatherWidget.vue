<template>
  <div class="widget">
    <weather-cap
      v-if="!city"
      :city="city"
    />

    <weather
      v-if="city"
      :latitude="latitude"
      :longitude="longitude"
      :city="city"
      :countryCode="countryCode"
    />
  </div>
</template>

<script>
import weatherCap from '@/components/AppWeatherCap'
import weather from '@/components/AppWeather'

export default {
  data() {
    return {
      city: '',
      countryCode: '',
      latitude: null,
      longitude: null,
    }
  },
  created() {
    this.geocodedAddress()
  },
  methods: {
    geocodedAddress() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.geocodedCity(position.coords.latitude, position.coords.longitude)
      });
    },
    async geocodedCity(latitude, longitude) {
      const response = await fetch(`https://maps.google.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyAZCHWM_v_EF9RfghsssV9d4s001gHOKZE`)
        .then(response => response.json())
        .catch(err => console.error(err));
      
      response.results.forEach(el => {
        if(el.types.includes('country')) {
          this.countryCode = el.address_components[0].short_name
        }
      });
      this.city = response.plus_code.compound_code.split(',')[1]
      this.latitude = latitude
      this.longitude = longitude
    },

  },
  components: {
    weatherCap,
    weather
  }
}
</script>

<style lang="scss"></style>
