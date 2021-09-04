<template>
  <v-navigation-drawer
    permanent
    color='secondary'
    class="pa-3"
  >

  <v-select
    label="Build"
    :items="builds"
    item-text="name"
    @change='setBuild'
    return-object
  >
  </v-select>
  <v-select
    label="Content Type"
    :items="contentTypes"
    item-text="name"
    @change="setContent"
    return-object
  ></v-select>

  <v-select
    label="Skill"
    :items="skills"
    item-text="name"
    @change='setSkill'
    :disabled="!skilling"
    return-object
  ></v-select>
  <v-select
    label="Boss"
    :items="bosses"
    item-text="name"
    @change='setBoss'
    :disabled="skilling"
    return-object
  ></v-select>

  <v-checkbox
    label="Ultimate?"
    @change='setUltimate'
  ></v-checkbox>
  <v-checkbox
    label="Alts?"
    @change='setAlts'
  ></v-checkbox>

  </v-navigation-drawer>
</template>

<script>
import Vue from 'vue'
import { mapActions, mapGetters } from 'vuex'

import { BOSSES } from '@/enums/bosses.js'
import { BUILDS } from '@/enums/build.js'
import { CONTENT } from '@/enums/content.js'
import { SKILLS } from '@/enums/skills.js'
 
export default Vue.extend({
  data() {
    return {
      builds: Object.values(BUILDS),
      contentTypes: Object.values(CONTENT),
      skills: Object.values(SKILLS),
      bosses: Object.values(BOSSES)
    }
  },
  computed: {
    ...mapGetters([
      'contentType',
      'build',
      'ultimate',
      'alts',
      'skill',
      'boss'
    ]),
    skilling() {
      return this.contentType === CONTENT.SKILLING ? true : false
    }
  },
  methods: {
    ...mapActions([
      'setContent',
      'setBuild',
      'setUltimate',
      'setAlts',
      'setSkill',
      'setBoss'
    ])
  },
})
</script>