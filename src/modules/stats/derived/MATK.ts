import { Character } from "../../../types";
import {
  increasedEnergyTotalFlatMATK,
  magicUPTotalFlatMATK,
} from "../../battleSkills";
import {
  conversionTotalFlatMATK,
  magicWarriorMasteryTotalFlatMATK,
} from "../../magicBladeSkills";
import { magicMasteryTotalPercentMATK } from "../../magicSkills/magicMastery";
import { magicAttackBoostTotalFlatMATK } from "../../regislets";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
} from "../../utils";
import { totalAGI, totalDEX, totalINT } from "../basic";
import { totalMainWeaponATK } from "../equipment";
import {
  totalFlatMATKValueFromMATKDOWN,
  totalFlatMATKValueFromMATKUP,
} from "../special";
import { subWeaponKnucklePercentMATKModifier } from "./modifiers";

export const totalDualWieldBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character);

export const totalOneHandedSwordBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character);

export const totalTwoHandedSwordBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character);

export const totalBowBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character);

export const totalBowgunBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character);

export const totalStaffBaseMATK = (character: Character) =>
  character.level +
  totalINT(character) * 4 +
  totalDEX(character) +
  totalMainWeaponATK(character);

export const totalMagicDeviceBaseMATK = (character: Character) =>
  character.level +
  totalINT(character) * 4 +
  totalDEX(character) +
  totalMainWeaponATK(character);

export const totalKnuckleBaseMATK = (character: Character) =>
  floor(
    character.level +
      totalINT(character) * 4 +
      totalDEX(character) +
      totalMainWeaponATK(character) * 0.5,
  );

export const totalHalberdBaseMATK = (character: Character) =>
  floor(
    character.level +
      totalINT(character) * 2 +
      totalDEX(character) +
      totalAGI(character),
  );

export const totalKatanaBaseMATK = (character: Character) =>
  floor(character.level + totalINT(character) * 1.5 + totalDEX(character));

export const totalBareHandBaseMATK = (character: Character) =>
  character.level + totalINT(character) * 3 + totalDEX(character) + 1;

export const totalBaseMATK = (character: Character) =>
  isDualWielder(character) ? totalDualWieldBaseMATK(character)
  : character.mainWeapon.type === "one-handed-sword" ?
    totalOneHandedSwordBaseMATK(character)
  : character.mainWeapon.type === "two-handed-sword" ?
    totalTwoHandedSwordBaseMATK(character)
  : character.mainWeapon.type === "bow" ? totalBowBaseMATK(character)
  : character.mainWeapon.type === "bowgun" ? totalBowgunBaseMATK(character)
  : character.mainWeapon.type === "staff" ? totalStaffBaseMATK(character)
  : character.mainWeapon.type === "magic-device" ?
    totalMagicDeviceBaseMATK(character)
  : character.mainWeapon.type === "knuckle" ?
    totalKnuckleBaseMATK(character)
  : character.mainWeapon.type === "halberd" ?
    totalHalberdBaseMATK(character)
  : character.mainWeapon.type === "katana" ? totalKatanaBaseMATK(character)
  : totalBareHandBaseMATK(character);

export const totalPercentMATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentMATK"))
    .reduce(sum, 0) + subWeaponKnucklePercentMATKModifier(character);

export const totalPercentMATKFromSkills = (character: Character) =>
  magicMasteryTotalPercentMATK(character);

export const totalPercentMATK = (character: Character) =>
  totalPercentMATKFromEquipment(character) +
  totalPercentMATKFromSkills(character);

export const totalFlatMATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatMATK"))
    .reduce(sum, 0) +
  magicAttackBoostTotalFlatMATK(character) +
  totalFlatMATKValueFromMATKUP(character) +
  totalFlatMATKValueFromMATKDOWN(character);

export const totalFlatMATKFromSkills = (character: Character) =>
  magicUPTotalFlatMATK(character) +
  increasedEnergyTotalFlatMATK(character) +
  magicWarriorMasteryTotalFlatMATK(character) +
  conversionTotalFlatMATK(character);

export const totalFlatMATK = (character: Character) =>
  totalFlatMATKFromEquipment(character) +
  totalFlatMATKFromSkills(character);

export const totalMATK = (character: Character) =>
  total(
    totalBaseMATK(character),
    totalPercentMATK(character),
    totalFlatMATK(character),
  );
