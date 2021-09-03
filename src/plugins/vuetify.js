import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#c0a886',
        secondary: '#e2dbc8',
        success: '#7ed321',
        error: '#d5021c',
      },
    },
  },
}

export default new Vuetify(opts)
