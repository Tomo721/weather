<template>
  <div id="app">
    <weather-widget/>
  </div>
</template>

<script>
import weatherWidget from '@/views/AppWeatherWidget.vue'

export default {
  components: {
    weatherWidget
  },
}
</script>

<style lang="scss">
  html {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
  body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
</style>
