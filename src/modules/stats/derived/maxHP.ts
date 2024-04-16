import { Character } from "../../../types";
import { bushidoTotalFlatMaxHP } from "../../mononofuSkills";
import {
  forceShieldTotalFlatMaxHP,
  magicalShieldTotalFlatMaxHP,
} from "../../shieldSkills";
import {
  HPBoostTotalFlatMaxHP,
  HPBoostTotalPercentMaxHP,
} from "../../survivalSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalVIT } from "../basic";

export const totalBaseMaxHP = (character: Character) =>
  93 + Math.round((totalVIT(character) + 22.4) * (character.level / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentMaxHP"))
    .reduce(sum, 0);

export const totalPercentMaxHPFromSkills = (character: Character) =>
  HPBoostTotalPercentMaxHP(character);

export const totalPercentMaxHP = (character: Character) =>
  totalPercentMaxHPFromEquipment(character) +
  totalPercentMaxHPFromSkills(character);

export const totalFlatMaxHPFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatMaxHP"))
    .reduce(sum, 0);

export const totalFlatMaxHPFromSkills = (character: Character) =>
  bushidoTotalFlatMaxHP(character) +
  HPBoostTotalFlatMaxHP(character) +
  forceShieldTotalFlatMaxHP(character) +
  magicalShieldTotalFlatMaxHP(character);

export const totalFlatMaxHP = (character: Character) =>
  totalFlatMaxHPFromEquipment(character) +
  totalFlatMaxHPFromSkills(character);

export const totalMaxHP = (character: Character) =>
  total(
    totalBaseMaxHP(character),
    totalPercentMaxHP(character),
    totalFlatMaxHP(character),
  );
