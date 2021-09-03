<template>
  <v-app-bar
    app
    color="primary"
    dark
  >
    <div class="d-flex align-center">
      <HeaderLogo/>
      <v-app-bar-title class="ml-2">Iron Pure Strats Beta</v-app-bar-title>
    </div>

    <v-spacer></v-spacer>

  </v-app-bar>

</template>

<script>
import Vue from 'vue'

import HeaderLogo from '@/components/HeaderLogo.vue'

export default Vue.extend({
  data() {
    return {

    }
  },
  computed: {
  },
  methods: {
  },
  components: {
    HeaderLogo
  }
})
</script>
