import { character } from "../../..";
import { Character } from "../../../types";
import {
  attackUPTotalFlatATK,
  intimidatingPowerTotalFlatATK,
} from "../../battleSkills";
import { swordMasteryTotalPercentATK } from "../../bladeSkills";
import { warCryTotalPercentATK } from "../../bladeSkills";
import { halberdMasteryTotalPercentATK } from "../../halberdSkills";
import { hunterBowgunTotalBaseATK } from "../../hunterSkills";
import { martialMasteryTotalPercentATK } from "../../martialSkills";
import { bushidoTotalPercentATK } from "../../mononofuSkills";
import { physicalAttackBoostTotalFlatATK } from "../../regislets";
import { shotMasteryTotalPercentATK } from "../../shotSkills";
import {
  sum,
  floor,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
  get,
} from "../../utils";
import { totalAGI, totalDEX, totalINT, totalSTR } from "../basic";
import { totalMainWeaponATK } from "../equipment";
import {
  totalBaseATKValueFromATKDOWN,
  totalBaseATKValueFromATKUP,
} from "../special";
import { subWeaponMagicDevicePercentATKModifier } from "./modifiers";

export const totalDualWieldBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) +
  totalDEX(character) * 2 +
  totalAGI(character) +
  totalMainWeaponATK(character);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) * 2 +
  totalDEX(character) * 2 +
  totalMainWeaponATK(character);

export const totalTwoHandedSwordBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) * 3 +
  totalDEX(character) +
  totalMainWeaponATK(character);

export const totalBowBaseATK = (character: Character) =>
  character.level +
  totalDEX(character) * 3 +
  totalSTR(character) +
  totalMainWeaponATK(character);

export const totalBowgunBaseATK = (character: Character) =>
  character.level +
  totalDEX(character) * 4 +
  totalMainWeaponATK(character) +
  hunterBowgunTotalBaseATK(character);

export const totalStaffBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) * 3 +
  totalINT(character) +
  totalMainWeaponATK(character);

export const totalMagicDeviceBaseATK = (character: Character) =>
  character.level +
  totalINT(character) * 2 +
  totalAGI(character) * 2 +
  totalMainWeaponATK(character);

export const totalKnuckleBaseATK = (character: Character) =>
  floor(
    character.level +
      totalAGI(character) * 2 +
      totalDEX(character) * 0.5 +
      totalMainWeaponATK(character),
  );

export const totalHalberdBaseATK = (character: Character) =>
  floor(
    character.level +
      totalSTR(character) * 2.5 +
      totalAGI(character) * 1.5 +
      totalMainWeaponATK(character),
  );

export const totalKatanaBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) * 1.5 +
  totalDEX(character) * 2.5 +
  totalMainWeaponATK(character);

export const totalBareHandBaseATK = (character: Character) =>
  character.level +
  totalSTR(character) +
  1 +
  totalMainWeaponATK(character);

export const totalBaseATK = (character: Character) =>
  (isDualWielder(character) ? totalDualWieldBaseATK(character)
  : character.mainWeapon.type === "one-handed-sword" ?
    totalOneHandedSwordBaseATK(character)
  : character.mainWeapon.type === "two-handed-sword" ?
    totalTwoHandedSwordBaseATK(character)
  : character.mainWeapon.type === "bow" ? totalBowBaseATK(character)
  : character.mainWeapon.type === "bowgun" ? totalBowgunBaseATK(character)
  : character.mainWeapon.type === "staff" ? totalStaffBaseATK(character)
  : character.mainWeapon.type === "magic-device" ?
    totalMagicDeviceBaseATK(character)
  : character.mainWeapon.type === "knuckle" ?
    totalKnuckleBaseATK(character)
  : character.mainWeapon.type === "halberd" ?
    totalHalberdBaseATK(character)
  : character.mainWeapon.type === "katana" ? totalKatanaBaseATK(character)
  : totalBareHandBaseATK(character)) +
  totalBaseATKValueFromATKUP(character) +
  totalBaseATKValueFromATKDOWN(character);

export const totalPercentATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentATK"))
    .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

export const totalPercentATKFromSkills = (character: Character) =>
  swordMasteryTotalPercentATK(character) +
  shotMasteryTotalPercentATK(character) +
  martialMasteryTotalPercentATK(character) +
  halberdMasteryTotalPercentATK(character) +
  bushidoTotalPercentATK(character) +
  warCryTotalPercentATK(character);

export const totalPercentATK = (character: Character) =>
  totalPercentATKFromEquipment(character) +
  totalPercentATKFromSkills(character);

export const totalFlatATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatATK")).reduce(sum, 0) +
  physicalAttackBoostTotalFlatATK(character);

export const totalFlatATKFromSkills = (character: Character) =>
  attackUPTotalFlatATK(character) +
  intimidatingPowerTotalFlatATK(character);

export const totalFlatATK = (character: Character) =>
  totalFlatATKFromEquipment(character) + totalFlatATKFromSkills(character);

export const totalATK = (character: Character) =>
  total(
    totalBaseATK(character),
    totalPercentATK(character),
    totalFlatATK(character),
  );
