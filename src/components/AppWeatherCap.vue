<template>
  <div
    :class="{
      'cap': true,
      'cap_active': !city
    }"
  >
    <div class="cap__title">Widget weather</div>
    <div class="cap__text">Allow to define the location for the widget open</div>
  </div>
</template>

<script>

export default {
  props: {
    city: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
  .cap {
    border: 1px solid #ececec;
    width: 260px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    opacity: 0;

    &_active {
      animation: 1s showElem linear;
      opacity: 1;
    }

    &__title {
      font-size: 18px;
      margin-bottom: 16px;
    }
    &__text {
      font-size: 14px;
      text-align: center;
    }
  }

</style>