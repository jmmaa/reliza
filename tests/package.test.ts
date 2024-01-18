import * as reliza from "reliza";

import * as reliza_experimental from "../lib";

test("package", () => {
  expect(reliza.calculateBaseMaxHP(275, 1)).toEqual(2238);

  const baseCastSpeed = reliza.calculateBaseCastSpeed(275, 15, 247);
  const castSpeedWithMwarrMastery = baseCastSpeed * 1.15 + 100;
  expect(castSpeedWithMwarrMastery).toEqual(1272);
});

test("lib", () => {
  expect(reliza_experimental.calculateCastingTime(10000)).toEqual(1);
});
