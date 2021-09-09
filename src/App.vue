<template>
  <div id="app">
    <weather/>
  </div>
</template>

<script>
import weather from '@/views/AppWeather.vue'

export default {
  data () {
    return {
      
    }
  },
  methods: {
    
  },
  components: {
    weather
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
