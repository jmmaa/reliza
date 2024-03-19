import { Character } from "../../std/types";
import { flattenStatsFromEquipment } from "../utils";
import { get, sum, floor } from "../../std/op";

import { totalASPD } from "../derived/weaponDependent";

export const totalMotionSpeed = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("motionSpeed"))
    .reduce(sum, 0);

  const fromASPD = floor((totalASPD(character) - 1000) / 180);

  const total = fromEquipments + fromASPD;

  return total;
};
