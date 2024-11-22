import { calculate, stat } from "reliza";

const calculations = calculate({
  properties: {
    AGI: 1,
    DEX: 500,
    VIT: 247,
  },
  equipments: {
    mainweapon: {
      stats: (config) => [stat("FIRE_ELEMENT", 1)],
    },
    additionalGear: {
      DEF: 0,
      stats: (config) => [],
      refinement: 15,
      crystal1: (config) => [],
      crystal2: (config) => [],
    },
  },
});

console.log(calculations);

// arrange code
