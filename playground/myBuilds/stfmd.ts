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
      type: "MAIN_STF",
      ATK: 584,
      refinement: 15,
      stability: 60,
      stats: (config) => [
        ["FIRE_ELEMENT", 1],
        ["PERCENT_MATK", 10],
        ["FLAT_CRITICAL_DAMAGE", 23],
        ["DAMAGE_TO_EARTH", 23],
        ["FLAT_CRITICAL_RATE", 29],
      ],

      crystal1: diark,
      crystal2: vatudo,
    },

    subweapon: {
      type: "SUB_MD",
      stats: (config) => [["FIRE_ELEMENT", 1]],
    },
    additionalGear: {
      DEF: 0,
      refinement: 15,
      stats: cookieWings,
      crystal1: jibrilIII,
      crystal2: mieli,
    },

    armor: {
      DEF: 0,
      type: "LIGHT_ARMOR",
      stats: (config) => [
        ["DAMAGE_TO_EARTH", 22],
        ["PERCENT_CRITICAL_DAMAGE", 11],
        ["FLAT_CRITICAL_DAMAGE", 22],
        ["FLAT_CRITICAL_RATE", 28],
        ["PERCENT_ATK", -14],
        ["PHYSICAL_PIERCE", -8],
        ["FLAT_ACCURACY", -22],
        ["PERCENT_ACCURACY", -6],
      ],
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
    },

    // magicSkills: {
    //   magicburst: { level: 10 },
    //   magicmastery: { level: 10 },
    // },
    battleSkills: {
      // magicup: { level: 10 },
      // increasedenergy: { level: 10 },
      // criticalup: { level: 10 },
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
    },
  },

  consumables: [
    ["MAGIC_PIERCE", 10],
    ["PERCENT_MATK", 13],
    ["FLAT_MATK", 300], // from maximizer buff
    ["PERCENT_WEAPON_ATK", 30],
    ["FLAT_CRITICAL_DAMAGE", 12],
    ["FLAT_CSPD", 800],
    ["MAGIC_PIERCE", 23], // from ava
    ["MOTION_SPEED", 25], // from ebarrier
  ],

  foodBuffs: [
    ["FLAT_CRITICAL_RATE", 30],
    ["FLAT_MAX_MP", 1000],
    ["FLAT_STR", 30],
    ["DAMAGE_TO_EARTH", 15],
    ["FLAT_WEAPON_ATK", 100],
  ],
});

console.log(calculations);
