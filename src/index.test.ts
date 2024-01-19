import * as reliza from ".";

test("speed related", () => {
  const actionTimeReduction = reliza.calculateActionTimeReduction(9341);

  expect(actionTimeReduction).toEqual(46);

  const maxActionTimeReduction =
    reliza.calculateActionTimeReduction(100000);

  expect(maxActionTimeReduction).toEqual(50);
});
