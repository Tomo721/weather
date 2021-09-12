<template>
  <div class="item-city">
    <div class="item-city__wrap">
      <div class="item-city__burger handle">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="item-city__title">{{ cityItem.name }}, <span>{{ cityItem.code }}</span></div>
    </div>
    <div class="item-city__delete" @click="$emit('deleteCity', cityItem.name)">
      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="m424 64h-88v-16c0-26.467-21.533-48-48-48h-64c-26.467 0-48 21.533-48 48v16h-88c-22.056 0-40 17.944-40 40v56c0 8.836 7.164 16 16 16h8.744l13.823 290.283c1.221 25.636 22.281 45.717 47.945 45.717h242.976c25.665 0 46.725-20.081 47.945-45.717l13.823-290.283h8.744c8.836 0 16-7.164 16-16v-56c0-22.056-17.944-40-40-40zm-216-16c0-8.822 7.178-16 16-16h64c8.822 0 16 7.178 16 16v16h-96zm-128 56c0-4.411 3.589-8 8-8h336c4.411 0 8 3.589 8 8v40c-4.931 0-331.567 0-352 0zm313.469 360.761c-.407 8.545-7.427 15.239-15.981 15.239h-242.976c-8.555 0-15.575-6.694-15.981-15.239l-13.751-288.761h302.44z"/>
          <path d="m256 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
          <path d="m336 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
          <path d="m176 448c8.836 0 16-7.164 16-16v-208c0-8.836-7.164-16-16-16s-16 7.164-16 16v208c0 8.836 7.163 16 16 16z"/>
      </svg>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    cityItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="scss">
  .item-city {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding: 6px;
    background-color: #f1f1ff;

    &__wrap {
      display: flex;
      align-items: center;
    }

    &__title {
      font-size: 14px;
      font-weight: bold;

      span {
        text-transform: uppercase;
      }
    }
    &__burger {
      width: 14px;
      margin-right: 10px;
      cursor: pointer;

      div {
        width: 100%;
        height: 2px;
        margin-bottom: 2px;
        background-color: #000;
      }
    }
    &__delete {
      width: 14px;
      height: 14px;
      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        width: 100%;
        height: 100%;
      }
    }
  }
</style>