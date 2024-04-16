import { Character } from "../../../types";
import {
  hiddenTalentTotalBaseGuardPower,
  hiddenTalentTotalBaseGuardRecharge,
} from "../../bareHandSkills";
import { heavyArmorMasteryTotalGuardRecharge } from "../../guardSkills";
import {
  flattenStatsFromEquipment,
  floor,
  get,
  min,
  sum,
} from "../../utils";

export const totalBaseGuardPower = (character: Character) =>
  min(
    [
      character.armor.type === "heavy" ? 5000 : 0,
      character.subWeapon.type === "shield" ? 7500 : 0,
      character.mainWeapon.type === "two-handed-sword" ? 5000 : 0,
      character.mainWeapon.type === "halberd" ? 2500 : 0,
      hiddenTalentTotalBaseGuardPower(character),
    ].reduce(sum),
    10000,
  );

export const totalPercentGuardPower = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("guardPower"))
    .reduce(sum, 0);

export const totalGuardPower = (character: Character) =>
  totalBaseGuardPower(character) *
  (totalPercentGuardPower(character) / 100);

export const totalBaseGuardRecharge = (character: Character) =>
  [
    character.armor.type === "heavy" ? 25 : 0,
    character.subWeapon.type === "shield" ? 75 : 0,
    character.mainWeapon.type === "two-handed-sword" ? 50 : 0,
    character.mainWeapon.type === "halberd" ? 25 : 0,
    hiddenTalentTotalBaseGuardRecharge(character),
  ].reduce(sum);

export const totalPercentGuardRecharge = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("guardRecharge"))
    .reduce(sum, 0) + heavyArmorMasteryTotalGuardRecharge(character);

export const totalGuardRecharge = (character: Character) =>
  floor(
    (totalBaseGuardRecharge(character) *
      totalPercentGuardRecharge(character)) /
      100,
  );
