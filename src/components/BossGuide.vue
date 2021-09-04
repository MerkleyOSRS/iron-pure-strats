<template>
  <v-container class="ma-2">
    <h1>{{ this.boss.name }}</h1>
    <h2>{{ this.buildStrategy.strategy }}</h2>
    <h4 v-if="this.ultimate">you are an ult</h4>
    <h4 v-if="this.alts"> you are a cheating fuck</h4>
  </v-container>
</template>

<script>
import Vue from 'vue'

import { mapGetters } from 'vuex'

import { BOSS_STRATEGIES } from '@/enums/bossStrategies.js'


export default Vue.extend({
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'build',
      'boss',
      'ultimate',
      'alts'
    ]),
    strategies() {
      return BOSS_STRATEGIES[this.boss.name.toUpperCase()].strategies
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
