import { calculate } from "../../src";

import {
  bangrudom,
  cookieWings,
  diark,
  fullBlossomCharmstone,
  gegner,
  jibrilIII,
  mieli,
  screamShadow,
  starWizard,
  vatudo,
} from ".";

const calculations = calculate({
  properties: {
    INT: 510,
    STR: 252,
    level: 295,
  },
  equipments: {
    mainweapon: {
      type: "STF",
      ATK: 584,
      refinement: 15,
      stability: 60,
      stats: {
        default: {
          fireElement: 1,
          damageToEarth: 23,
          percentMATK: 10,
          flatCriticalDamage: 23,
          flatCriticalRate: 29,
        },
      },

      crystal1: diark,
      crystal2: vatudo,
    },

    subweapon: {
      type: "MD",
      stats: {
        default: { fireElement: 1 },
      },

      refinement: 15,
    },
    additionalGear: {
      DEF: 0,

      stats: cookieWings,
      crystal1: jibrilIII,
      crystal2: mieli,
    },

    armor: {
      DEF: 0,
      type: "LIGHT_ARMOR",
      stats: {
        default: {
          damageToEarth: 22,
          percentCriticalDamage: 11,
          flatCriticalDamage: 22,
          flatCriticalRate: 28,
        },
      },
      crystal1: bangrudom,
      crystal2: gegner,
    },

    specialGear: {
      DEF: 0,

      stats: fullBlossomCharmstone,
      crystal1: starWizard,
      crystal2: screamShadow,
    },
  },

  statModifiers: {
    magicBladeSkills: {
      magicWarriorMastery: { level: 10 },
      resonance: { level: 10, buffIsActive: true, set: "C" },
    },

    magicSkills: {
      magicMastery: { level: 10 },

      // maximizer: {}
    },

    battleSkills: {
      spellBurst: { level: 10 },
    },

    wizardSkills: {
      castMastery: {
        level: 10,
        numberOfskillPointsSpentOnWizardSkills: 150,
        numberOfWizardSkillsLearned: 15,
      },

      overlimit: { level: 10, buffIsActive: true },
      sorceryGuide: { level: 10 },
    },

    survivalSkills: {
      shortRest: { level: 10 },
    },

    regislets: {
      magicAttackBoost: { level: 30 },
      magicSpeedBoost: { level: 100 },
      attackSpeedBoost: { level: 100 },
      focusResonance: { level: 9 },
    },
  },

  consumables: [
    { magicPierce: 10 },
    { percentMATK: 10 },
    { flatMATK: 300 }, // from maximizer buff
    { percentWeaponATK: 30 },
    { flatCriticalDamage: 12 },
    { flatCSPD: 800 },
    { magicPierce: 23 }, // from ava
    { motionSpeed: 25 }, // from ebarrier
    { percentMATK: 3 },
  ],

  foodBuffs: [
    { flatCriticalRate: 30 },
    { flatMaxMP: 1000 },
    { flatSTR: 30 },
    { damageToEarth: 15 },
    { flatWeaponATK: 100 },
  ],
});

console.log(calculations);
