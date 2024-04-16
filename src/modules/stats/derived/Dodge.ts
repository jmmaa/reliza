import { Character } from "../../../types";
import { dodgeUPTotalFlatDodge } from "../../battleSkills";
import {
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  floor,
} from "../../utils";
import { totalAGI } from "../basic";

export const normalArmorBaseDodge = (character: Character) =>
  character.level + totalAGI(character);

export const lightArmorBaseDodge = (character: Character) =>
  floor(character.level * 1.25 + totalAGI(character) * 1.75) + 30;

export const heavyArmorBaseDodge = (character: Character) =>
  floor(character.level * 0.5 + totalAGI(character) * 0.75) - 15;

export const noArmorBaseDodge = (character: Character) =>
  floor(character.level * 1.5 + totalAGI(character) * 2) + 75;

export const totalBaseDodge = (character: Character) =>
  character.armor.type === "light" ? lightArmorBaseDodge(character)
  : character.armor.type === "heavy" ? heavyArmorBaseDodge(character)
  : character.armor.type === "normal" ? normalArmorBaseDodge(character)
  : noArmorBaseDodge(character);

export const totalPercentDodge = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentDodge"))
    .reduce(sum, 0);

export const totalFlatDodge = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatDodge"))
    .reduce(sum, 0) + dodgeUPTotalFlatDodge(character);

export const totalDodge = (character: Character) =>
  total(
    totalBaseDodge(character),
    totalPercentDodge(character),
    totalFlatDodge(character),
  );
