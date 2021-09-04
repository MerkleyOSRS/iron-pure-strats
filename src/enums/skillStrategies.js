import { BUILDS } from '@/enums/build.js'

export const SKILL_STRATEGIES = {
  CRAFTING: { 
    strategies: [
      {
        build: BUILDS.PURE50,
        strategy: '50 atk pure strat'
      },
      {
        build: BUILDS.PURE60,
        strategy: '60 atk pure strat'
      },
      {
        build: BUILDS.PURE75,
        strategy: '75+ atk pure strat'
      },
      {
        build: BUILDS.VOID,
        strategy: 'void/zerker strategy'
      }
    ]
  },
}