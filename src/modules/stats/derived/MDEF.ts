import { Character } from "../../../types";
import {
  defenseMasteryTotalFlatMDEF,
  defenseUPTotalFlatMDEF,
} from "../../battleSkills";
import { berserkTotalPercentMDEF } from "../../bladeSkills/berserk";
import {
  magicalShieldTotalFlatMDEF,
  magicalShieldTotalPercentMDEF,
} from "../../shieldSkills";
import { get, sum, total, flattenStatsFromEquipment } from "../../utils";
import { totalINT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentMDEFModifier } from "./modifiers";
import * as pino from "@jmmaa/pino";

export const totalBaseMDEF = (character: Character) => {
  return character.armor.type === "light"
    ? pino.lightArmorMagicDefense(
        character.level,
        totalINT(character),
        totalEquipmentDEF(character),
      )
    : character.armor.type === "heavy"
      ? pino.heavyArmorMagicDefense(
          character.level,
          totalINT(character),
          totalEquipmentDEF(character),
        )
      : character.armor.type === "none"
        ? pino.nakedMagicDefense(
            character.level,
            totalINT(character),
            totalEquipmentDEF(character),
          )
        : pino.normalArmorMagicDefense(
            character.level,
            totalINT(character),
            totalEquipmentDEF(character),
          );
};

export const totalPercentMDEF = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("percentMDEF"))
      .reduce(sum, 0) + subWeaponArrowPercentMDEFModifier(character);

  const fromSkills =
    berserkTotalPercentMDEF(character) +
    magicalShieldTotalPercentMDEF(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatMDEF = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatMDEF"))
    .reduce(sum, 0);

  const fromSkills =
    magicalShieldTotalFlatMDEF(character) +
    defenseUPTotalFlatMDEF(character) +
    defenseMasteryTotalFlatMDEF(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalMDEF = (character: Character) => {
  return total(
    totalBaseMDEF(character),
    totalPercentMDEF(character),
    totalFlatMDEF(character),
  );
};
