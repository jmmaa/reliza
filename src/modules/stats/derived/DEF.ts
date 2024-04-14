import { Character } from "../../../types";
import {
  defenseMasteryTotalFlatDEF,
  defenseUPTotalFlatDEF,
} from "../../battleSkills";
import { berserkTotalPercentDEF } from "../../bladeSkills/berserk";
import {
  forceShieldTotalFlatDEF,
  forceShieldTotalPercentDEF,
} from "../../shieldSkills";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";
import { totalVIT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentDEFModifier } from "./modifiers";
import * as pino from "@jmmaa/pino";

export const totalBaseDEF = (character: Character) => {
  return character.armor.type === "light"
    ? pino.lightArmorDefense(
        character.level,
        totalVIT(character),
        totalEquipmentDEF(character),
      )
    : character.armor.type === "heavy"
      ? pino.heavyArmorDefense(
          character.level,
          totalVIT(character),
          totalEquipmentDEF(character),
        )
      : character.armor.type === "none"
        ? pino.nakedDefense(
            character.level,
            totalVIT(character),
            totalEquipmentDEF(character),
          )
        : pino.normalArmorDefense(
            character.level,
            totalVIT(character),
            totalEquipmentDEF(character),
          );
};

export const totalPercentDEF = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("percentDEF"))
      .reduce(sum, 0) + subWeaponArrowPercentDEFModifier(character);

  const fromSkills =
    berserkTotalPercentDEF(character) +
    forceShieldTotalPercentDEF(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatDEF = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatDEF"))
    .reduce(sum, 0);

  const fromSkills =
    forceShieldTotalFlatDEF(character) +
    defenseUPTotalFlatDEF(character) +
    defenseMasteryTotalFlatDEF(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalDEF = (character: Character) => {
  return total(
    totalBaseDEF(character),
    totalPercentDEF(character),
    totalFlatDEF(character),
  );
};
