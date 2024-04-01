import { Character } from "../../../types";
import { get, sum, floor, flattenStatsFromEquipment } from "../../utils";
import { totalASPD } from "../derived";

export const totalMotionSpeed = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("motionSpeed"))
    .reduce(sum, 0);

  const fromASPD = floor((totalASPD(character) - 1000) / 180);

  const total = fromEquipments + fromASPD;

  return total;
};
