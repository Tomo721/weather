<template>
  <div id="app" style="font-family: Arial, Helvetica, sans-serif;box-sizing: border-box;">
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
