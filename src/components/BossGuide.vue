<template>
  <v-container class="d-flex flex-row justify-space-between">
    <v-card 
      class="ma-2 d-flex flex-column align-center"
      color='secondary'
      elevation=0
    >
      <v-card-title>Relevant Pictures and Video</v-card-title>
      <v-container class="d-flex flex-row justify-center">
        <v-img
          :src="this.buildStrategy.strategy.equipmentImage"
          max-width=400
          max-height=400
        ></v-img>
        <v-img
          :src="this.buildStrategy.strategy.inventoryImage"
          max-width=200
          max-height=400
        ></v-img>
      </v-container>
      <youtube :video-id="this.buildStrategy.strategy.videoLink" ref="youtube"></youtube>
    </v-card>
    <v-card
      class="ma-2 d-flex flex-column align-center"
      color='secondary'
      elevation=0
    >
      <v-card-title>{{ this.boss.name }}</v-card-title>
      <v-container class="d-flex flex-column">
        <v-list dense color="secondary">
          <v-list-item
            v-for="(slot, key, index) in this.buildStrategy.strategy.equipment"
            :key="index"
          >
          {{ key + ' : ' + parseEquipmentSlot(slot) }}
          </v-list-item>
        </v-list>
      </v-container>
      <v-container class="d-flex flex-column">
        <v-text-area>
          {{ this.buildStrategy.strategy.method }}
          <v-spacer></v-spacer><v-spacer></v-spacer>
          {{ this.buildStrategy.strategy.additionalNotes }}
        </v-text-area>
      </v-container>
    </v-card>
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
      return BOSS_STRATEGIES[this.boss.alias].strategies
    },
    buildStrategy() {
      let strat = null
      this.strategies.forEach(strategy => {
        if (strategy.build === this.build && strategy.alts === this.alts && strategy.ultimate === this.ultimate) {
          strat = strategy
        }
      })
      return strat
    }
  },
  methods: {
    parseEquipmentSlot(slot) {
      return slot.join(' > ')
    }
  },
  components: {
  },
})
</script>
