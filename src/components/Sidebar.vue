<template>
  <v-navigation-drawer
    permanent
    color='secondary'
  >

  <v-select
    label="Build"
    :items="builds"
    item-text="name"
    v-model="build"
    return-object
  >
  </v-select>
  <v-select
    label="Content Type"
    :items="contentTypes"
    item-text="name"
    v-model="content"
    return-object
  ></v-select>
  <v-checkbox
    v-model="ultimate"
    label="Ultimate?"
  ></v-checkbox>
  <v-checkbox
    v-model="alts"
    label="Alts?"
  ></v-checkbox>

  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue'

import { BUILDS } from '@/enums/build.js'
import { CONTENT } from '@/enums/content.js'

/* Test */
 
export default Vue.extend({
  data() {
    return {
      build: BUILDS.PURE50,
      builds: Object.values(BUILDS),
      content: CONTENT.PvM,
      contentTypes: Object.values(CONTENT),
      ultimate: false,
      alts: false,
    }
  },
  computed: {
  },
  methods: {
  },
})
</script>