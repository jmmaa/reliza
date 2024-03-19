import { Character } from "../../../../std/types";
import * as pino from "@jmmaa/pino";
import { totalVIT } from "../../../growth";
import { flattenStatsFromEquipment } from "../../../utils";
import { get, sum, total } from "../../../../std/op";

import { totalEquipmentDEF } from "../../../equipment";

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
  return flattenStatsFromEquipment(character)
    .map(get("percentDEF"))
    .reduce(sum, 0);
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
