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
      <div class="wrap-cities">
        <item-city/>
      </div>
    </div>
  </div>
</template>

<script>
import itemCity from '@/components/AppItemCity'

export default {
  props: {
    // city: {
    //   type: String,
    //   required: true,
    // },
  },
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    itemCity
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
  }
</style>