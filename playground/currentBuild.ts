import { calculate } from "reliza";

const calculations = calculate({
  properties: {
    INT: 500,
    STR: 247,
  },
  equipments: {
    mainweapon: {
      type: "STAFF",
      stats: (config) => [
        ["FIRE_ELEMENT", 1],
        ["PERCENT_MATK", 10],
        ["FLAT_CRITICAL_DAMAGE", 23],
        ["DAMAGE_TO_EARTH", 23],
        ["FLAT_CRITICAL_RATE", 29],
      ],
    },

    subweapon: {
      type: "MAGIC_DEVICE",
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
      crystal1: (config) => [],
      crystal2: (config) => [
        ["FLAT_CSPD", 400],
        ["FLAT_ASPD", 400],
        ["PERCENT_CRITICAL_RATE", 20],
        ["PERCENT_MAX_HP", -20],
        ["MAGIC_PIERCE", 10],
      ],
    },
  },

  skillTrees: {
    wizardSkills: {
      familia: { level: 10 },
      castmastery: { level: 0 },
    },
  },
});

console.log(calculations);

/* BUGS


*/
