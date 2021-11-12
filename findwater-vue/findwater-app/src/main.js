import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import 'mdb-vue-ui-kit/css/mdb.min.css'
import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import axios from 'axios'
import router from './router'
//import Vue from 'vue'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import VueMeta from 'vue-meta';

// Create a new store instance.
const store = createStore({
  state () {
    return {
      count: 0
    }
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

createApp(App).use(router).use(VueAxios, axios, Vuex, store, VueMeta).mount('#app')