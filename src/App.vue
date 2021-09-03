<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].secondary }">
    <v-main>
      <Header/>
      <Sidebar/>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'

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
    Header,
    Sidebar
  }
})
</script>
