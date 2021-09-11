<template>
  <div class="settings">
    <div class="settings__head">
      <div class="settings__title">Settings</div>
      <div class="settings__close" @click="$emit('settingClose')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg>
      </div>
    </div>
    <div class="settings__body">
      <draggable class="settings__scroll"
        :list="cities"
        group="citiesDrag"
        handle=".handle"
      >
        <div
          :list="cities"
          class="wrap-cities"
          group="citiesDrag"
          handle=".handle"
          v-for="cityItem in cities"
          :key="cityItem.name"
        >
          <item-city
            :cityItem="cityItem"
            @deleteCity="(name) => deleteCity(name)"
          />
        </div>
      </draggable>

      <div class="new-location">
        <label>Add location:</label>
        <div class="new-location__container">
          <input
            v-model="newCity"
            type="text"
            placeholder="New York"
          >
          <div
            :class="{
              'new-location__icon': true,
              'new-location__icon_active': newCity.trim()
            }"
            @click="addCity"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496" ><path d="M248 0C111.033 0 0 111.033 0 248c.154 136.903 111.097 247.846 248 248 136.967 0 248-111.033 248-248S384.967 0 248 0zm0 480C119.87 480 16 376.13 16 248c.146-128.07 103.93-231.854 232-232 128.13 0 232 103.87 232 232S376.13 480 248 480z"/><path d="M400 240H256V96a8 8 0 0 0-16 0v144H96a8 8 0 0 0 0 16h144v144a8 8 0 0 0 16 0V256h144a8 8 0 0 0 0-16z"/></svg>
          </div>
        </div>
        <div class="new-location__error" v-if="errorsCity">{{dicsNewCity}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import itemCity from '@/components/AppItemCity'
import draggable from 'vuedraggable'

export default {
  data() {
    return {
      newCity: '',
      newCode: '',
      errorsCity: false,
      dicsNewCity: '',
    }
  },
  computed: {
    city() {
      return this.$store.state.city.name
    },
    code() {
      return this.$store.state.city.code
    },
    cities: {
      get() {
        return this.$store.state.cities;
      },
      
      set(val){
        return val
      } 
    } 
  },
  methods: {
    citiesList() {
      let currentCity = {name: this.city, code: this.code}

      this.cities = [
        ...this.cities,
        currentCity,
      ]

      this.$store.dispatch('citiesChange', this.cities);

    },
    async getCountryCode(name) {
      const response = await fetch(`https://maps.google.com/maps/api/geocode/json?address=${name}&key=AIzaSyAZCHWM_v_EF9RfghsssV9d4s001gHOKZE`)
        .then(response => response.json())
        .catch(err => console.error(err))

      if(response.results.length === 0) {
        this.errorsCity = true
        this.dicsNewCity = 'City search failed'
        return false
      }
      const coord = response.results[0].geometry.location

      response.results.forEach(arr => {
        arr.address_components.forEach(element => {
          if(element.types.includes('country')) {
            this.newCode = element.short_name
          }
        });
      });

      return coord
    },
    async addCity() {
      if(!this.newCity.trim()) return false
      
      const result = await this.getCountryCode(this.newCity)

      if(result) {
        let city = {
          name: this.newCity,
          code: this.newCode,
          lat: result.lat,
          lng: result.lng,
        }

        if (this.cities.some(e => e.name.toLowerCase() === this.newCity.toLowerCase())) {
          this.errorsCity = true
          this.dicsNewCity = 'The city has already been entered'
          return false
        } else {
          this.errorsCity = false
          this.dicsNewCity = ''
        }

        this.cities.push(city)
        this.$store.dispatch('citiesChange', this.cities);
        this.newCity = ''
      }
    },
    deleteCity(name) {
      if(this.cities.length === 1) {
        this.errorsCity = true
        this.dicsNewCity = 'The last city cannot be deleted'
        return false
      } else {
        this.errorsCity = false
        this.dicsNewCity = ''
      }

      let deleteCity = this.cities.filter(item => item.name !== name)
      this.$store.dispatch('citiesChange', deleteCity)
      
    },
    currentCityChange() {
      if(this.cities[0].name.toLowerCase() !== this.city.toLowerCase()) {
        this.$store.dispatch('cityRename', this.cities[0].name)
        this.$store.dispatch('codeRename', this.cities[0].code)
        this.$store.dispatch('locationCoord', {lat: this.cities[0].lat, lng: this.cities[0].lng})

        this.$emit('cityChange')
      }
    }
  },
  mounted() {
    this.citiesList()
  },
  watch: {
    cities() {
      this.currentCityChange()
      window.localStorage.setItem('cities', JSON.stringify(this.cities))
    }
  },
  components: {
    itemCity,
    draggable
  }
}
</script>

<style lang="scss" scoped>
  .settings {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 240px;
    z-index: 3;
    background-color: #fff;

    &__head {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

    }
    &__title {
      font-size: 16px;
      font-weight: 500;
    }
    &__close {
      width: 16px;
      height: 16px;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
    &__scroll {
      max-height: 120px;
      overflow: hidden;
      overflow-y: auto;
      padding-right: 4px;

      &::-webkit-scrollbar {
        width: 3px;
      }
      &::-webkit-scrollbar-track {
        background: #f6f6f6;
        background-color: #f6f6f6;
        border-radius: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #d4d4d4;
        background: #d4d4d4;
        border-radius: 5px;
      }
    }
  }
  .new-location {
    margin-top: 12px;
    label {
      display: block;
      font-size: 14px;
      font-weight: 500;
      padding-left: 6px;
      margin-bottom: 4px;
    }
    &__container {
      display: flex;
      align-items: center;

      input {
        width: 100%;
        height: 28px;
        max-width: 200px;
        margin-right: 12px;
        outline: none;
        border: 1px solid #b3b3b3;
        font-size: 12px;
        padding: 0 6px;

        &:focus {
          border-color: #baccff;
        }
        &::placeholder {
          color: #b3b3b3;
        }
      }
    }
    &__icon {
      width: 24px;
      height: 24px;

      svg {
        width: 100%;
        height: 100%;
        path {
          fill: #cdcdcd;
        }
      }

      &_active {
        cursor: pointer;
        svg path {
          fill: #21a430;
        }
      }
    }
    &__error {
      font-size: 10px;
      margin-top: 2px;
      color: red;
    }
  }
</style>