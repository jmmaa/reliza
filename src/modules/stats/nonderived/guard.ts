import { Character } from "../../../types";
import {
  hiddenTalentTotalBaseGuardPower,
  hiddenTalentTotalBaseGuardRecharge,
} from "../../bareHandSkills";
import { heavyArmorMasteryTotalGuardRecharge } from "../../guardSkills";
import { flattenStatsFromEquipment, floor, get, sum } from "../../utils";

export const totalBaseGuardPower = (character: Character) => {
  const sources = [
    character.armor.type === "heavy" ? 5000 : 0,
    character.subWeapon.type === "shield" ? 7500 : 0,
    character.mainWeapon.type === "two-handed-sword" ? 5000 : 0,
    character.mainWeapon.type === "halberd" ? 2500 : 0,
    hiddenTalentTotalBaseGuardPower(character),
  ];

  const totalBaseFromSources = sources.reduce(sum);
  const total =
    totalBaseFromSources > 10000 ? 10000 : totalBaseFromSources;

  return total;
};

export const totalPercentGuardPower = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("guardPower"))
    .reduce(sum, 0);

  const defaultValue = 100;
  const total = fromEquipments;

  return total;
};

export const totalGuardPower = (character: Character) => {
  const total =
    totalBaseGuardPower(character) *
    (totalPercentGuardPower(character) / 100);

  return total;
};

export const totalBaseGuardRecharge = (character: Character) => {
  const sources = [
    character.armor.type === "heavy" ? 25 : 0,
    character.subWeapon.type === "shield" ? 75 : 0,
    character.mainWeapon.type === "two-handed-sword" ? 50 : 0,
    character.mainWeapon.type === "halberd" ? 25 : 0,
    hiddenTalentTotalBaseGuardRecharge(character),
  ];

  const totalBaseFromSources = sources.reduce(sum);

  const total = totalBaseFromSources;

  return total;
};

export const totalPercentGuardRecharge = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("guardRecharge"))
    .reduce(sum, 0);

  const fromSkills = heavyArmorMasteryTotalGuardRecharge(character);

  const defaultValue = 100;

  const total = defaultValue + fromEquipments + fromSkills;

  return total;
};

export const totalGuardRecharge = (character: Character) => {
  const total = floor(
    (totalBaseGuardRecharge(character) *
      totalPercentGuardRecharge(character)) /
      100,
  );

  return total;
};
