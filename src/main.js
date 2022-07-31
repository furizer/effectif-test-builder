import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import Vuex from 'vuex'

import "./assets/styles/index.scss"


createApp(App)
.use(router)
.use(store)
.use(Vuex)
.mount('#app')

