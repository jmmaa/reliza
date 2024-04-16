import { Character } from "../../../types";
import {
  defenseMasteryTotalFlatMDEF,
  defenseUPTotalFlatMDEF,
} from "../../battleSkills";
import { berserkTotalPercentMDEF } from "../../bladeSkills";
import {
  magicalShieldTotalFlatMDEF,
  magicalShieldTotalPercentMDEF,
} from "../../shieldSkills";
import {
  get,
  sum,
  total,
  floor,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalINT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentMDEFModifier } from "./modifiers";

export const normalArmorBaseMDEF = (character: Character) =>
  character.level + totalINT(character) + totalEquipmentDEF(character);

export const lightArmorBaseMDEF = (character: Character) =>
  floor(
    character.level * 0.8 +
      totalINT(character) * 0.25 +
      totalEquipmentDEF(character),
  );

export const heavyArmorBaseMDEF = (character: Character) =>
  floor(
    character.level * 1.2 +
      totalINT(character) * 2 +
      totalEquipmentDEF(character),
  );

export const noArmorBaseMDEF = (character: Character) =>
  floor(
    character.level * 0.4 +
      totalINT(character) * 0.1 +
      totalEquipmentDEF(character),
  );

export const totalBaseMDEF = (character: Character) =>
  character.armor.type === "light" ? lightArmorBaseMDEF(character)
  : character.armor.type === "heavy" ? heavyArmorBaseMDEF(character)
  : character.armor.type === "normal" ? normalArmorBaseMDEF(character)
  : noArmorBaseMDEF(character);

export const totalPercentMDEFFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentMDEF"))
    .reduce(sum, 0) + subWeaponArrowPercentMDEFModifier(character);

export const totalPercentMDEFFromSkills = (character: Character) =>
  berserkTotalPercentMDEF(character) +
  magicalShieldTotalPercentMDEF(character);

export const totalPercentMDEF = (character: Character) =>
  totalPercentMDEFFromEquipment(character) +
  totalPercentMDEFFromSkills(character);

export const totalFlatMDEFFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatMDEF")).reduce(sum, 0);

export const totalFlatMDEFFromSkills = (character: Character) =>
  magicalShieldTotalFlatMDEF(character) +
  defenseUPTotalFlatMDEF(character) +
  defenseMasteryTotalFlatMDEF(character);

export const totalFlatMDEF = (character: Character) =>
  totalFlatMDEFFromEquipment(character) +
  totalFlatMDEFFromSkills(character);

export const totalMDEF = (character: Character) =>
  total(
    totalBaseMDEF(character),
    totalPercentMDEF(character),
    totalFlatMDEF(character),
  );
