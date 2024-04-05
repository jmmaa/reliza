import {
  dualBringerTotalATK,
  resonanceTotalFlatATK,
  totalATK,
  totalMATK,
  statMap,
  character,
  regislets,
  skills,
  magicBladeSkills,
} from "reliza";

const myCharacter = character({
  mainWeapon: {
    type: "one-handed-sword",
    ATK: 200,
    refinement: 15,
    stability: 0,
    stats: [
      statMap({
        percentATK: -19,
      }),
    ],
    crystals: [],
  },

  subWeapon: {
    type: "magic-device",
    ATK: 200,
    DEF: 0,
    refinement: 15,
    stability: 0,
    scrollCastTimeReduction: 0,
    scrollMPReduction: 0,
    stats: [],
    crystals: [],
  },

  skills: skills({
    magicBladeSkills: magicBladeSkills({
      magicWarriorMastery: {
        level: 10,
      },

      conversion: {
        level: 10,
        isActive: true,
      },

      resonance: {
        level: 10,
        isActive: true,
        currentSetActive: "ASPD/CSPD",
      },

      enchantedSpell: {
        level: 10,
      },

      dualBringer: {
        level: 10,
        isActive: true,
      },

      etherFlare: {
        level: 10,
      },

      elementSlash: {
        level: 10,
      },

      enchantSword: {
        level: 10,
      },

      enchantedBurst: {
        level: 10,
      },

      unionSword: {
        level: 10,
      },
    }),
  }),

  regislets: regislets({
    focusResonance: { level: 1 },
    speedResonance: { level: 1 },
    powerResonance: { level: 9 },
  }),
});

const myTotalMATK = totalMATK(myCharacter);
const myTotalATK = totalATK(myCharacter);
const myDualBringerTotalATK = dualBringerTotalATK(myCharacter);

console.log(`
  total ATK:              ${myTotalATK}
  total MATK:             ${myTotalMATK}
  total DualBringer ATK:  ${myDualBringerTotalATK}
  total Effective ATK:    ${myTotalATK + myDualBringerTotalATK}
  `);
