import { calculate } from "../src";

const calculations = calculate({
  properties: {
    INT: 500,
    STR: 247,
    level: 290,
  },
  equipments: {
    mainweapon: {
      type: "STAFF",
      ATK: 584,
      refinement: 15,
      stats: (config) => [
        ["FIRE_ELEMENT", 1],
        ["PERCENT_MATK", 10],
        ["FLAT_CRITICAL_DAMAGE", 23],
        ["DAMAGE_TO_EARTH", 23],
        ["FLAT_CRITICAL_RATE", 29],
      ],

      crystal1: (config) => [
        ["PERCENT_MATK", 8],
        ["PERCENT_CSPD", -16],
        ["MAGIC_PIERCE", 20],
      ],
      crystal2: (config) => [
        ["PERCENT_MATK", 10],
        ["PERCENT_MDEF", -30],
        ["AGGRO", -11],
        ["MAGIC_PIERCE", 7],
      ],
    },

    subweapon: {
      type: "MAGIC_DEVICE",
      stats: (config) => [["FIRE_ELEMENT", 1]],
    },
    additionalGear: {
      DEF: 0,
      stats: (config) => [
        (
          config.equipments.subweapon.type === "MAGIC_DEVICE" ||
          config.equipments.mainweapon.type === "MAGIC_DEVICE"
        ) ?
          ["MAGIC_PIERCE", 25]
        : ["MAGIC_PIERCE", 0],

        ["PERCENT_DEX", 5],
        ["LONG_RANGE_DAMAGE", 10],
      ],
      refinement: 15,
      crystal1: (config) => [
        ["LONG_RANGE_DAMAGE", 11],
        ["SHORT_RANGE_DAMAGE", 9],
        ["FLAT_CRITICAL_RATE", 16],
        ["FLAT_NATURAL_MP_REGEN", 6],
        ["PERCENT_NATURAL_MP_REGEN", 12],
        ["FLAT_MAX_MP", 100],
        ["ANTICIPATE", 3],
      ],
      crystal2: (config) => [
        ["FLAT_CSPD", 400],
        ["FLAT_ASPD", 400],
        ["PERCENT_CRITICAL_RATE", 20],
        ["PERCENT_MAX_HP", -20],
        ["MAGIC_PIERCE", 10],
      ],
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
      crystal1: (config) => [
        ["PERCENT_MAX_HP", -20],
        ["PERCENT_ATK", 10],
        ["PERCENT_MATK", 10],
        ["PERCENT_ASPD", 10],
        ["PERCENT_CSPD", 10],

        config.equipments.subweapon.type === "SHIELD" ?
          ["PERCENT_DEX", 5]
        : ["PERCENT_DEX", 0],
        config.equipments.armor.type === "LIGHT_ARMOR" ?
          ["MAGIC_PIERCE", 5]
        : ["MAGIC_PIERCE", 0],
      ],

      crystal2: (config) => [
        ["PERCENT_INT", 6],
        ["PERCENT_MATK", 10],
        ["PERCENT_CSPD", 40],
        ["PERCENT_ATTACK_MP_RECOVERY", 10],
      ],
    },

    specialGear: {
      DEF: 0,

      stats: (config) => [
        ["FLAT_CSPD", 750],
        ["FLAT_ASPD", 750],
        ["FLAT_MAX_MP", 200],
        ["AILMENT_RESISTANCE", -8],
      ],

      crystal1: (config) => [
        ["PERCENT_MATK", 9],
        ["PERCENT_CSPD", 9],
        ["ANTICIPATE", 9],
        config.equipments.mainweapon.type === "STAFF" ?
          ["AGGRO", -9]
        : ["AGGRO", 0],
        config.equipments.subweapon.type === "SHIELD" ?
          ["AGGRO", 9]
        : ["AGGRO", 0],
      ],
      crystal2: (config) => [
        ["FLAT_MAX_MP", 300],
        ["PERCENT_DEF", -40],
        ["FLAT_CSPD", 1000],
        ["PERCENT_CRITICAL_RATE", 20],
      ],
    },
  },

  skillTrees: {
    magicBladeSkills: {
      magicwarriormastery: { level: 10 },
    },

    magicSkills: {
      magicburst: { level: 10 },
      magicmastery: { level: 10 },
    },
    battleSkills: {
      magicup: { level: 10 },
      increasedenergy: { level: 10 },
      criticalup: { level: 10 },
      spellburst: { level: 10 },
    },

    wizardSkills: {
      familia: { level: 10 },
      advancedfamilia: { level: 10 },
      blizzard: { level: 10 },
      lightning: { level: 10 },
      meteorstrike: { level: 10 },
      imperialray: { level: 10 },
      crystallaser: { level: 10 },
      manacrystal: { level: 10 },
      overlimit: { level: 10, isActive: true },
      sorceryguide: { level: 10 },
      castmastery: { level: 10 },
      stonebarrier: { level: 10 },
    },
  },
  regislets: {
    maxmpboost: 100,
    focusresonance: 9,
    magicspeedboost: 100,
    attackspeedboost: 100,
  },

  consumables: [
    ["MAGIC_PIERCE", 10],
    ["PERCENT_MATK", 13],
    ["FLAT_MATK", 300],
    ["PERCENT_WEAPON_ATK", 30],
    ["FLAT_CRITICAL_DAMAGE", 12],
    ["FLAT_CSPD", 800],
    ["FLAT_ASPD", 1000],
    ["FLAT_CSPD", 300], // from new wiz skills
    ["PERCENT_CSPD", 15], // from new wiz skills
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

/* BUGS


*/
