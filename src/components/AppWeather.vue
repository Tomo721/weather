<template>
  <div class="weather" v-if="city">
    <div class="weather__head">
      <div class="weather__city">{{ city }}, <span>{{ code }}</span></div>
      <div class="set">
        <div class="set__icon" @click="settings=true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368 368">
              <path d="M344 144h-29.952c-2.512-8.2-5.8-16.12-9.792-23.664l21.16-21.16c4.528-4.528 7.024-10.56 7.024-16.984 0-6.416-2.496-12.448-7.024-16.976l-22.64-22.64c-9.048-9.048-24.888-9.072-33.952 0l-21.16 21.16A135.753 135.753 0 00224 53.944V24c0-13.232-10.768-24-24-24h-32c-13.232 0-24 10.768-24 24v29.952c-8.2 2.52-16.12 5.8-23.664 9.792l-21.168-21.16c-9.36-9.36-24.592-9.36-33.952 0l-22.648 22.64c-9.352 9.36-9.352 24.592 0 33.952l21.16 21.168a135.753 135.753 0 00-9.792 23.664H24c-13.232 0-24 10.768-24 24v32C0 213.232 10.768 224 24 224h29.952c2.52 8.2 5.8 16.12 9.792 23.664l-21.16 21.168c-9.36 9.36-9.36 24.592 0 33.952l22.64 22.648c9.36 9.352 24.592 9.352 33.952 0l21.168-21.16a135.753 135.753 0 0023.664 9.792V344c0 13.232 10.768 24 24 24h32c13.232 0 24-10.768 24-24v-29.952c8.2-2.52 16.128-5.8 23.664-9.792l21.16 21.168c9.072 9.064 24.912 9.048 33.952 0l22.64-22.64c4.528-4.528 7.024-10.56 7.024-16.976 0-6.424-2.496-12.448-7.024-16.976l-21.16-21.168A135.753 135.753 0 00314.056 224H344c13.232 0 24-10.768 24-24v-32c0-13.232-10.768-24-24-24zm8 56c0 4.408-3.584 8-8 8h-36a8.002 8.002 0 00-7.744 6c-2.832 10.92-7.144 21.344-12.832 30.976a8.01 8.01 0 001.232 9.72l25.44 25.448a7.948 7.948 0 012.336 5.664c0 2.152-.832 4.16-2.336 5.664l-22.64 22.64c-3.008 3.008-8.312 3.008-11.328 0l-25.44-25.44c-2.576-2.584-6.576-3.08-9.728-1.232-9.616 5.68-20.04 10-30.968 12.824A7.988 7.988 0 00208 308v36c0 4.408-3.584 8-8 8h-32c-4.408 0-8-3.592-8-8v-36a8.002 8.002 0 00-6-7.744 119.948 119.948 0 01-30.976-12.824 7.915 7.915 0 00-4.064-1.112c-2.072 0-4.12.8-5.664 2.344l-25.44 25.44a8.025 8.025 0 01-11.328 0l-22.64-22.64c-3.128-3.128-3.128-8.208 0-11.328l25.44-25.44a7.99 7.99 0 001.232-9.72c-5.68-9.632-10-20.048-12.824-30.976A7.986 7.986 0 0060 208H24c-4.408 0-8-3.592-8-8v-32c0-4.408 3.592-8 8-8h36a8.002 8.002 0 007.744-6 119.948 119.948 0 0112.824-30.976 7.988 7.988 0 00-1.232-9.72l-25.44-25.44c-3.12-3.12-3.12-8.2 0-11.328l22.64-22.64c3.128-3.128 8.2-3.12 11.328 0l25.44 25.44a7.978 7.978 0 009.72 1.232c9.632-5.68 20.048-10 30.976-12.824A8.002 8.002 0 00160 60V24c0-4.408 3.592-8 8-8h32c4.416 0 8 3.592 8 8v36a8.002 8.002 0 006 7.744 119.827 119.827 0 0130.968 12.824c3.152 1.856 7.152 1.36 9.728-1.232l25.44-25.44c3.016-3.024 8.32-3.016 11.328 0l22.64 22.64c1.504 1.504 2.336 3.52 2.336 5.664s-.832 4.16-2.336 5.664l-25.44 25.44a8.002 8.002 0 00-1.232 9.72c5.688 9.632 10 20.048 12.832 30.976a7.986 7.986 0 007.736 6h36c4.416 0 8 3.592 8 8v32z"/>
              <path d="M184 112c-39.696 0-72 32.304-72 72s32.304 72 72 72c39.704 0 72-32.304 72-72s-32.296-72-72-72zm0 128c-30.88 0-56-25.12-56-56s25.12-56 56-56c30.872 0 56 25.12 56 56s-25.128 56-56 56z"/>
          </svg>
        </div>
        <settings-city
          v-if="settings"
          :city="city"
          @settingClose="settingClose"
          @cityChange="cityChange"
        />
      </div>
    </div>

    <div class="weather__content">
      <div class="weather-mark">
        <div class="weather-mark__img">
          <img :src="weatherImg ? `https://openweathermap.org/img/wn/${weatherImg}` : ''" alt="">
        </div>
        <div class="weather-mark__params">
          {{ calcCelsius(temp) }}
          <span>&deg;C</span>
        </div>
      </div>
      <div class="weather__text">Feels like {{ calcCelsius(feelsLike) }}<span>&deg;C</span> {{ dics }}. {{ calcWind(wind) }}</div>
      <div class="weather__line">
        <div class="weather__params">
          <div class="weather__params-icon" :style='`transform: rotate(${windDdeg}deg)`'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
              <path d="M 15.035156 1.9628906 C 14.779406 1.9628906 14.523625 2.0623125 14.328125 2.2578125 L 7.2578125 9.328125 C 7.0668125 9.519125 6.9648438 9.7751563 6.9648438 10.035156 C 6.9648437 10.164156 6.9870625 10.293969 7.0390625 10.417969 C 7.1930625 10.791969 7.5608438 11.035156 7.9648438 11.035156 L 12.035156 11.035156 L 12.035156 26.035156 C 12.035156 27.140156 12.930156 28.035156 14.035156 28.035156 L 16.035156 28.035156 C 17.140156 28.035156 18.035156 27.140156 18.035156 26.035156 L 18.035156 11.035156 L 22.105469 11.035156 C 22.509469 11.035156 22.875297 10.791969 23.029297 10.417969 C 23.185297 10.043969 23.0985 9.615125 22.8125 9.328125 L 15.742188 2.2578125 C 15.546688 2.0623125 15.290906 1.9628906 15.035156 1.9628906 z"></path>
            </svg>
          </div>
          <div class="weather__params-text">{{wind}}<span>.0m/s</span> {{windDirec}}</div>
        </div>
        <div class="weather__params">
          <div class="weather__params-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 20.28125 10.28125 L 16.5 14.0625 C 16.339844 14.019531 16.171875 14 16 14 C 14.90625 14 14 14.90625 14 16 C 14 16.171875 14.019531 16.339844 14.0625 16.5 L 12.28125 18.28125 C 11.875 18.09375 11.4375 18 11 18 C 10.230469 18 9.457031 18.292969 8.875 18.875 L 10.28125 20.28125 C 10.679688 19.882813 11.320313 19.882813 11.71875 20.28125 L 11.71875 20.3125 C 12.09375 20.710938 12.109375 21.328125 11.71875 21.71875 L 13.125 23.125 C 14.039063 22.210938 14.238281 20.832031 13.71875 19.71875 L 15.5 17.9375 C 15.660156 17.980469 15.828125 18 16 18 C 17.09375 18 18 17.09375 18 16 C 18 15.828125 17.980469 15.660156 17.9375 15.5 L 21.71875 11.71875 Z"></path>
            </svg>
          </div>
          <div class="weather__params-text">{{ hPa }}<span>hPa</span></div>
        </div>
      </div>

      <div class="weather__line">
        <div class="weather__params">
          <div class="weather__params-text">Humidity: {{ humidity }}<span>%</span></div>
        </div>
        <div class="weather__params">
          <div class="weather__params-text">Dew point: {{ dewPoint }}<span>&deg;C</span></div>
        </div>
      </div>

      <div class="weather__line">
        <div class="weather__params">
          <div class="weather__params-text">Visibility: {{ calcVisible(visibil) }}<span>km</span></div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import settingsCity from '@/components/AppSettingsCity'

export default {
  data() {
    return {
      weatherKey: '6db234b958faf96691daa8f5a43ff55e',

      temp: null,
      weatherImg: '',
      feelsLike: '',
      wind: null,
      windDdeg: null,
      dics: '',
      hPa: '',
      windDirec: '',
      humidity: '',
      dewPoint: 0,
      visibil: null,
      
      settings: false,
    }
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
    arrowWind() {
      let deg = this.windDdeg
      let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];

      deg = deg * 8 / 360;
      deg = Math.round(deg, 0);
      deg = (deg + 8) % 8

      this.windDirec = directions[deg]
    },
    async getWeather() {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=hourly,daily,minutely&units=metric&appid=${this.weatherKey}`)
        .then(response => response.json())
        .catch(err => console.error(err))
      
      if(!response) return false

      this.feelsLike = response.current.feels_like
      this.weatherImg = response.current.weather[0].icon + '@2x.png'
      this.temp = response.current.temp
      this.dics = response.current.weather[0].description
      this.wind = response.current.wind_speed
      this.windDdeg = response.current.wind_deg
      this.hPa = response.current.pressure
      this.humidity = response.current.humidity
      this.visibil = response.current.visibility
      this.dewPoint = response.current.dew_point

      this.arrowWind()
    },
    calcCelsius(temp) {
      return Math.round(temp)
    },
    calcVisible(value) {
      const km = value / 1000;
      return km.toFixed(1)
    },
    calcWind(value) {
      if(value <=5 ) {
        return 'Light breeze'
      } else if(value >= 6 && value <=14) {
        return 'Medium wind'
      } else {
        return 'High wind'
      }
    },
    settingClose() {
      this.settings = !this.settings
    },
    cityChange() {
      this.getWeather()
    },
  },
  mounted () {
    this.getWeather()
  },
  components: {
    settingsCity
  }
}
</script>

<style lang="scss">
  .weather {
    width: 260px;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    &__city {
      font-weight: bold;

      span {
        text-transform: uppercase;
      }
    }
    &__text {
      font-size: 14px;
      margin-bottom: 8px;
    }
    &__line {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
    }
    &__params {
      margin-right: 20px;
      display: flex;
      min-width: 90px;

      &:last-child {
        margin-right: 0;
      }
    }
    &__params-text {
      font-size: 14px;
    }
    &__params-icon {
      position: relative;
      width: 16px;
      height: 16px;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }

  .set {
    width: 16px;
    height: 16px;

    &__icon {
      cursor: pointer;
      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
  .weather-mark {
    display: flex;
    align-items: center;

    &__img {
      margin-right: 10px;
    }
    &__params {
      font-weight: 700;
      font-size: 30px;
      letter-spacing: -2px;

      span {
        letter-spacing: 0;
        font-weight: bold;
      }
    }
  }
  @keyframes showElem {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0.8;
    }
  }
</style>
