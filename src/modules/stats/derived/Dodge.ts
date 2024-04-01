import { Character } from "../../../types";
import * as pino from "@jmmaa/pino";
import { totalAGI } from "../basic";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

export const totalBaseDodge = (character: Character) => {
  return character.armor.type === "light"
    ? pino.lightArmorDodge(character.level, totalAGI(character))
    : character.armor.type === "heavy"
    ? pino.heavyArmorDodge(character.level, totalAGI(character))
    : character.armor.type === "none"
    ? pino.nakedDodge(character.level, totalAGI(character))
    : pino.normalArmorDodge(character.level, totalAGI(character));
};

export const totalPercentDodge = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentDodge"))
    .reduce(sum, 0);
};

export const totalFlatDodge = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("flatDodge"))
    .reduce(sum, 0);
};

export const totalDodge = (character: Character) => {
  return total(
    totalBaseDodge(character),
    totalPercentDodge(character),
    totalFlatDodge(character)
  );
};
