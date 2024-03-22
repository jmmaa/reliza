import { Character } from "../../std/types";
// import { flattenStatsFromEquipment } from "../utils";
import { floor } from "../../std/op";

import { totalCSPD } from "../derived";

export const totalCastTimeReduction = (character: Character) => {
  const cspd = totalCSPD(character);

  const fromcCSPD = floor(
    cspd > 1000 ? 50 + (cspd - 1000) / 90 : cspd / 20
  );

  const total = fromcCSPD;

  return total;
};
