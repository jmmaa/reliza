import { totalBaseCSPD } from ".";

import { character, stats } from "../../std/op";

test("totalBaseCSPD", () => {
  const sample = totalBaseCSPD(
    character({
      level: 275,
      DEX: 315,
      AGI: 220,
      mainWeapon: {
        type: "magic-device",
        ATK: 99,
        refinement: 0,
        stability: 25,
        stats: [
          stats({
            percentCSPD: 100,
          }),
        ],
        crystals: [],
      },
    })
  );

  expect(sample).toEqual(2912);
});
