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

export const totalMagicStability = (character: Character) =>
  floor((100 + totalStability(character)) / 2);
