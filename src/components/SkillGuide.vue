<template>
  <v-container class="ma-2">
    <h1>{{ this.skill.name }}</h1>
    <h2>{{ this.buildStrategy.strategy }}</h2>
    <h4 v-if="this.ultimate">you are an ult</h4>
    <h4 v-if="this.alts"> you are a cheating fuck</h4>
  </v-container>
</template>

<script>
import Vue from 'vue'

import { mapGetters } from 'vuex'

import { SKILL_STRATEGIES } from '@/enums/skillStrategies.js'


export default Vue.extend({
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'build',
      'skill',
      'ultimate',
      'alts'
    ]),
    strategies() {
      return SKILL_STRATEGIES[this.skill.name.toUpperCase()].strategies
    },
    buildStrategy() {
      let strat = null
      this.strategies.forEach(strategy => {
        if (strategy.build === this.build) {
          strat = strategy
        }
      })
      return strat
    }
  },
  methods: {
  },
  components: {
  },
})
</script>
