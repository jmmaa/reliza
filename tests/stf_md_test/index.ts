import {
  battleSkills,
  calculateAll,
  character,
  magicArrowsDamage,
  magicSkills,
  skills,
  statMap,
} from "../../src";
import { totalMATK } from "../../src/modules/stats";

const sample = character({
  level: 1,
  mainWeapon: {
    type: "staff",
    ATK: 522,
    refinement: 15,
    stats: [
      statMap({
        flatCSPD: 3922,
      }),
    ],
    crystals: [],
    stability: 60,
  },

  skills: skills({
    magicSkills: magicSkills({ magicArrows: { level: 10 } }),
    // battleSkills: battleSkills({ spellBurst: { level: 10 } }),
  }),
});

const altoblepas = {
  MDEF: 174,
  DEF: 174,
  level: 174,
  element: "neutral",
  distanceFromPlayer: 6,
  isAffectedByArmorBreak: false,
  isAffectedByWeaken: false,
  physicalResistance: 6,
  magicResistance: 6,
  weaponResistance: 0,
  proration: 100,
} as const;

// TEST MAGIC ARROWS
console.log(totalMATK(sample));
console.log(magicArrowsDamage(sample)(altoblepas));

// console.log(calculateAll(sample));
