import { calculate } from "../src";

// const myCharacter = calculate({
//   properties: {
//     level: 215,
//     STR: 247,
//     AGI: 355,
//   },

//   equipments: {
//     mainweapon: {
//       type: "MAIN_KN",
//     },
//   },

//   statModifiers: {},

//   consumables: [{ percentASPD: 82, flatASPD: 100 }],
// });

const myCharacter = calculate({
  properties: {
    level: 215,
    STR: 247,
    AGI: 355,
  },

  equipments: {
    mainweapon: {
      type: "MAIN_OHS",
    },
  },

  statModifiers: {
    regislets: {
      attackSpeedBoost: { level: 100 },
    },
  },

  consumables: [{ percentSTR: 10, flatSTR: 30 }],
});

console.log(myCharacter.totalASPD);
