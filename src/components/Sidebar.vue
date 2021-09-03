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

  <hr>

  <v-select
    label="Skill"
    :items="skills"
    item-text="name"
    v-model="selectedSkill"
    :disabled="pvm"
    return-object
  ></v-select>
  <v-select
    label="Boss"
    :items="bosses"
    item-text="name"
    v-model="selectedBoss"
    :disabled="!pvm"
    return-object
  ></v-select>

  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue'

import { BOSSES } from '@/enums/bosses.js'
import { BUILDS } from '@/enums/build.js'
import { CONTENT } from '@/enums/content.js'
import { SKILLS } from '@/enums/skills.js'
 
export default Vue.extend({
  data() {
    return {
      build: BUILDS.PURE50,
      builds: Object.values(BUILDS),
      content: CONTENT.PVM,
      contentTypes: Object.values(CONTENT),
      skills: Object.values(SKILLS),
      bosses: Object.values(BOSSES),
      ultimate: false,
      alts: false,
      selectedSkill: null,
      selectedBoss: null
    }
  },
  computed: {
    pvm() {
      return this.content === CONTENT.PVM ? true : false
    }
  },
  methods: {
  },
})
</script>