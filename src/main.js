import Vue from 'vue'
import VueYoutube from 'vue-youtube'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from '@/store'

Vue.config.productionTip = false

Vue.use(VueYoutube)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
