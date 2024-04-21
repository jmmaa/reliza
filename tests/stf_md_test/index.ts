import { calculateAll, character, statMap } from "../../src";

const sample = character({
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
});

console.log(calculateAll(sample));
