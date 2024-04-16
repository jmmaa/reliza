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
import {
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  floor,
} from "../../utils";
import { totalVIT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentDEFModifier } from "./modifiers";

export const normalArmorBaseDEF = (character: Character) =>
  character.level + totalVIT(character) + totalEquipmentDEF(character);

export const lightArmorBaseDEF = (character: Character) =>
  floor(
    character.level * 0.8 +
      totalVIT(character) * 0.25 +
      totalEquipmentDEF(character),
  );

export const heavyArmorBaseDEF = (character: Character) =>
  floor(
    character.level * 1.2 +
      totalVIT(character) * 2 +
      totalEquipmentDEF(character),
  );

export const noArmorBaseDEF = (character: Character) =>
  floor(
    character.level * 0.4 +
      totalVIT(character) * 0.1 +
      totalEquipmentDEF(character),
  );

export const totalBaseDEF = (character: Character) =>
  character.armor.type === "light" ? lightArmorBaseDEF(character)
  : character.armor.type === "heavy" ? heavyArmorBaseDEF(character)
  : character.armor.type === "normal" ? normalArmorBaseDEF(character)
  : noArmorBaseDEF(character);

export const totalPercentDEFFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentDEF"))
    .reduce(sum, 0) + subWeaponArrowPercentDEFModifier(character);

export const totalPercentDEFFromSkills = (character: Character) =>
  berserkTotalPercentDEF(character) +
  forceShieldTotalPercentDEF(character);

export const totalPercentDEF = (character: Character) =>
  totalPercentDEFFromEquipment(character) +
  totalPercentDEFFromSkills(character);

export const totalFlatDEFFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatDEF")).reduce(sum, 0);

export const totalFlatDEFFromSkills = (character: Character) =>
  forceShieldTotalFlatDEF(character) +
  defenseUPTotalFlatDEF(character) +
  defenseMasteryTotalFlatDEF(character);

export const totalFlatDEF = (character: Character) =>
  totalFlatDEFFromEquipment(character) + totalFlatDEFFromSkills(character);

export const totalDEF = (character: Character) =>
  total(
    totalBaseDEF(character),
    totalPercentDEF(character),
    totalFlatDEF(character),
  );
