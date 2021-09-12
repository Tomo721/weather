import Vue from 'vue'
import App from './App.vue'

import store from './store/index'

import './assets/css/main.scss'

import 'document-register-element/build/document-register-element'

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

Vue.config.productionTip = false

App.store = store
Vue.customElement('weather-widget', App, {
  shadow: true,
  beforeCreateVueInstance(root) {
    const rootNode = root.el.getRootNode();

    if (rootNode instanceof ShadowRoot) {
      root.shadowRoot = rootNode;
    } else {
      root.shadowRoot = document.head;
    }
    return root;
  },
})
