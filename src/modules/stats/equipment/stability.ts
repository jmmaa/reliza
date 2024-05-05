import { Character } from "../../../types";
import { berserkTotalStability } from "../../bladeSkills/berserk";
import { twoHandedTotalStability } from "../../mononofuSkills";
import { samuraiArcheryTotalStability } from "../../shotSkills/samuraiArchery";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";
import { totalBaseStability } from "../derived";

export const totalStabilityFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("stability"))
    .reduce(sum, 0);

export const totalStabilityFromSkills = (character: Character) =>
  berserkTotalStability(character) +
  samuraiArcheryTotalStability(character) +
  twoHandedTotalStability(character);

export const totalStability = (character: Character) =>
  totalBaseStability(character) +
  totalStabilityFromEquipment(character) +
  totalStabilityFromSkills(character);

/** graze effect lacking here */
export const totalMinimumStability = (character: Character) =>
  totalStability(character);

/** graze effect lacking here */
export const totalMaximumStability = (character: Character) => 100;

export const totalMagicStability = (character: Character) =>
  floor((100 + totalStability(character)) / 2);

export const totalMinimumMagicStability = (character: Character) =>
  totalMagicStability(character);

export const totalMaximumMagicStability = (character: Character) =>
  totalMagicStability(character) > 90 ?
    totalMagicStability(character) - 90 + 100
  : 100;
