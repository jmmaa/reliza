import { Character } from "../../../types";
import { get, sum, floor, flattenStatsFromEquipment } from "../../utils";
import { totalASPD } from "../derived";

export const totalMotionSpeed = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("motionSpeed"))
    .reduce(sum, 0) + floor((totalASPD(character) - 1000) / 180);
