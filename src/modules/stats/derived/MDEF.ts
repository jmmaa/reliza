import { Character } from "../../../types";
import * as pino from "@jmmaa/pino";
import { totalINT } from "../basic";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";

import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentMDEFModifier } from "./modifiers";

export const totalBaseMDEF = (character: Character) => {
  return character.armor.type === "light"
    ? pino.lightArmorMagicDefense(
        character.level,
        totalINT(character),
        totalEquipmentDEF(character)
      )
    : character.armor.type === "heavy"
    ? pino.heavyArmorMagicDefense(
        character.level,
        totalINT(character),
        totalEquipmentDEF(character)
      )
    : character.armor.type === "none"
    ? pino.nakedMagicDefense(
        character.level,
        totalINT(character),
        totalEquipmentDEF(character)
      )
    : pino.normalArmorMagicDefense(
        character.level,
        totalINT(character),
        totalEquipmentDEF(character)
      );
};

export const totalPercentMDEF = (character: Character) => {
  return (
    flattenStatsFromEquipment(character)
      .map(get("percentMDEF"))
      .reduce(sum, 0) + subWeaponArrowPercentMDEFModifier(character)
  );
};

export const totalFlatMDEF = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("flatMDEF"))
    .reduce(sum, 0);
};

export const totalMDEF = (character: Character) => {
  return total(
    totalBaseMDEF(character),
    totalPercentMDEF(character),
    totalFlatMDEF(character)
  );
};
