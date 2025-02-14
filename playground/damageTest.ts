import { calculateGenericDamage } from "../src/damageCalc";

import { calculate } from "../src";

const calculations = calculate({
  properties: {
    STR: 500,
    DEX: 247,
    level: 290,
  },
  equipments: {
    mainweapon: {
      type: "ONE_HANDED_SWORD",
      ATK: 582,
      refinement: 15,
      stability: 60,
      stats: (config) => [
        ["PERCENT_ATK", 14],
        ["PERCENT_STR", 10],
        ["PERCENT_CRITICAL_DAMAGE", 3],
        ["FLAT_CRITICAL_DAMAGE", 23],
        ["FLAT_CRITICAL_RATE", 23],
      ],

      crystal1: (config) => [
        ["PERCENT_ATK", 6],
        ["PHYSICAL_PIERCE", 20],
      ],
    },

    subweapon: {
      type: "MAGIC_DEVICE",
      stats: (config) => [["LIGHT_ELEMENT", 1]],
    },
  },

  skillTrees: {
    magicBladeSkills: {
      magicwarriormastery: { level: 10 },
    },

    battleSkills: {
      attackup: { level: 10 },
      whack: { level: 10 },
      criticalup: { level: 10 },
    },

    bladeSkills: {
      swordmastery: { level: 10 },
      quickslash: { level: 10 },
    },
  },
  regislets: {
    maxmpboost: 100,
    focusresonance: 9,
    magicspeedboost: 100,
    attackspeedboost: 100,
    physicalattackboost: 30,
  },

  consumables: [
    ["PHYSICAL_PIERCE", 24],
    ["FLAT_ATK", 12],
  ],

  foodBuffs: [
    ["FLAT_CRITICAL_RATE", 30],
    ["FLAT_MAX_MP", 1000],
    ["FLAT_WEAPON_ATK", 72],
  ],
});

console.log(calculations);

/* BUGS


*/

console.log(
  calculateGenericDamage({
    sourceLevel: 290,
    targetLevel: 1,
    defense: 1,
    resistance: 0,
    pierce: 44,

    base: 5078,
    // base: 6893 + 6666,
    // base: 6893,
    constant: 600,
    innateDamageMultiplier: 1350,

    flatUnsheatheAttack: 0,
    percentUnsheatheAttack: 100,
    stabilityDamageMultiplier: 100,
    elementRelatedDamageMultiplier: 100,
    prorationDamageMultiplier: 100,

    criticalDamageMultiplier: 301,

    skillRelatedDamageMultiplier: 100,
    lastDamageMultiplier: 100,
    comboRelatedDamageMultiplier: 110,

    distanceRelatedDamageMultiplier: 100,

    lethargyDamageMultiplier: 100,
    guardDamageMultiplier: 100,
    ultimaLionRageDamageMultiplier: 100,

    dropRateGemRelatedDamageMultiplier: 100,
  }),
);
