import { Character } from "../../../types";
import { dodgeUPTotalFlatDodge } from "../../battleSkills";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";
import { totalAGI } from "../basic";
import * as pino from "@jmmaa/pino";

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
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatDodge"))
    .reduce(sum, 0);

  const fromSkills = dodgeUPTotalFlatDodge(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalDodge = (character: Character) => {
  return total(
    totalBaseDodge(character),
    totalPercentDodge(character),
    totalFlatDodge(character),
  );
};
