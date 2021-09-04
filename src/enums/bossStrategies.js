import { BUILDS } from '@/enums/build.js'

export const BOSS_STRATEGIES = {
  GROTESQUE_GUARDIANS: { 
    strategies: [
      {
        build: BUILDS.PURE50,
        strategy: '50 atk pure strat - do i focus offense or defense??? for fucks sake. thralls? dwh? lbs?'
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
  SHAMANS: {
    strategies: [
      {
        build: BUILDS.PURE50,
        ultimate: false,
        alts: false,
        strategy: {
          equipmentImage: require('@/assets/strategies/equipment/Shamans/pure_50atk.png'),
          equipment: {
            Helmet: ['Robin Hood Hat', 'Halo', 'Coif'],
            Amulet: ['Fury', 'Glory'],
            Body: ['Rangers Tunic', 'Leather Body'],
            Legs: ['Blessed dragonhide chaps', 'Black dragonhide chaps'],
            Weapon: ['Bow of DEEZ NUTS', 'Blowpipe', 'Crystal Bow'],
            Boots: ['Ranger Boots', 'Holy Sandals', 'Climbing Boots'],
            Hands: ['Black dragonhide vambraces'],
            Ammo: ['Any blessing'],
            Cape: ['Ava'],
            Shield: ['None'],
            Ring: ['Archer\'s Ring', 'Ring of the Gods', 'Ring of Wealth']
          },
          inventoryImage: require('@/assets/strategies/inventory/Shamans/pure_50atk.png'),
          videoLink: 'ZRKFYyfnbN8',
          method: 'Lure the shaman in the west canyon into the boxed in yellow area, then run to the marked tile to trap it.',
          additionalNotes: 'After luring the first shaman, waiting 10 minutes for your aggro timer makes it a lot easier since the small lizardmen won\'t attack you'
        }
      },
      {
        build: BUILDS.PURE60,
        strategy: {
          equipmentImage: require('@/assets/strategies/equipment/Shamans/pure_50atk.png'),
          equipment: {
            Helmet: ['Robin Hood Hat', 'Halo', 'Coif'],
            Amulet: ['Fury', 'Glory'],
            Body: ['Rangers Tunic', 'Leather Body'],
            Legs: ['Blessed dragonhide chaps', 'Black dragonhide chaps'],
            Weapon: ['Bow of DEEZ NUTS', 'Blowpipe', 'Crystal Bow'],
            Boots: ['Ranger Boots', 'Holy Sandals', 'Climbing Boots'],
            Hands: ['Black dragonhide vambraces'],
            Ammo: ['Any blessing'],
            Cape: ['Ava'],
            Shield: ['None'],
            Ring: ['Archer\'s Ring', 'Ring of the Gods', 'Ring of Wealth']
          },
          inventoryImage: require('@/assets/strategies/inventory/Shamans/pure_50atk.png'),
          videoLink: 'ZRKFYyfnbN8',
          method: 'Lure the shaman in the west canyon into the boxed in yellow area, then run to the marked tile to trap it.',
          additionalNotes: 'After luring the first shaman, waiting 10 minutes for your aggro timer makes it a lot easier since the small lizardmen won\'t attack you'
        }
      },
      {
        strategy: {
          equipmentImage: require('@/assets/strategies/equipment/Shamans/pure_50atk.png'),
          equipment: {
            Helmet: ['Robin Hood Hat', 'Halo', 'Coif'],
            Amulet: ['Fury', 'Glory'],
            Body: ['Rangers Tunic', 'Leather Body'],
            Legs: ['Blessed dragonhide chaps', 'Black dragonhide chaps'],
            Weapon: ['Bow of DEEZ NUTS', 'Blowpipe', 'Crystal Bow'],
            Boots: ['Ranger Boots', 'Holy Sandals', 'Climbing Boots'],
            Hands: ['Black dragonhide vambraces'],
            Ammo: ['Any blessing'],
            Cape: ['Ava'],
            Shield: ['None'],
            Ring: ['Archer\'s Ring', 'Ring of the Gods', 'Ring of Wealth']
          },
          inventoryImage: require('@/assets/strategies/inventory/Shamans/pure_50atk.png'),
          videoLink: 'ZRKFYyfnbN8',
          method: 'Lure the shaman in the west canyon into the boxed in yellow area, then run to the marked tile to trap it.',
          additionalNotes: 'After luring the first shaman, waiting 10 minutes for your aggro timer makes it a lot easier since the small lizardmen won\'t attack you'
        }
      },
      {
        build: BUILDS.VOID,
        strategy: 'void shamans'
      }
    ]
  }
}

// with alts shamans: https://www.youtube.com/watch?v=MNWUb-NcxZM