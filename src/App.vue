<template>
  <v-app :style="{ background: $vuetify.theme.themes['light'].secondary }">
    <v-main>
      <Header/>
      <v-container style="height: 100%" class="ma-0 pa-0 d-flex flex-row">
        <Sidebar/>
        <SkillGuide v-if="showSkillGuide"/>
        <BossGuide v-if="showBossGuide"/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue'

import { mapGetters } from 'vuex'

import { CONTENT } from '@/enums/content.js'

import BossGuide from '@/components/BossGuide.vue'
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import SkillGuide from '@/components/SkillGuide.vue'

export default Vue.extend({
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'contentType',
      'skill',
      'boss'
    ]),
    showSkillGuide() {
      if (this.contentType === CONTENT.SKILLING && this.skill != null) {
        return true
      } else {
        return false
      }
    },
    showBossGuide() {
      if (this.contentType === CONTENT.PVM && this.boss != null) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
  },
  components: {
    Header,
    Sidebar,
    BossGuide,
    SkillGuide
  }
})
</script>
