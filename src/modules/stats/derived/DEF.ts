import { Character } from "../../../types";
import * as pino from "@jmmaa/pino";
import { totalVIT } from "../basic";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentDEFModifier } from "./modifiers";

export const totalBaseDEF = (character: Character) => {
  return character.armor.type === "light"
    ? pino.lightArmorDefense(
        character.level,
        totalVIT(character),
        totalEquipmentDEF(character)
      )
    : character.armor.type === "heavy"
    ? pino.heavyArmorDefense(
        character.level,
        totalVIT(character),
        totalEquipmentDEF(character)
      )
    : character.armor.type === "none"
    ? pino.nakedDefense(
        character.level,
        totalVIT(character),
        totalEquipmentDEF(character)
      )
    : pino.normalArmorDefense(
        character.level,
        totalVIT(character),
        totalEquipmentDEF(character)
      );
};

export const totalPercentDEF = (character: Character) => {
  return (
    flattenStatsFromEquipment(character)
      .map(get("percentDEF"))
      .reduce(sum, 0) + subWeaponArrowPercentDEFModifier(character)
  );
};

export const totalFlatDEF = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("flatDEF"))
    .reduce(sum, 0);
};

export const totalDEF = (character: Character) => {
  return total(
    totalBaseDEF(character),
    totalPercentDEF(character),
    totalFlatDEF(character)
  );
};
