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
import { shotMasteryTotalPercentATK } from "../../shotSkills";
import {
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
} from "../../utils";
import { totalAGI, totalDEX, totalINT, totalSTR } from "../basic";
import { totalMainWeaponATK } from "../equipment";
import { subWeaponMagicDevicePercentATKModifier } from "./modifiers";
import * as pino from "@jmmaa/pino";

export const totalBaseATK = (character: Character) => {
  if (isDualWielder(character)) {
    return pino.dualWieldBaseAttack(
      character.level,
      totalMainWeaponATK(character),
      totalSTR(character),
      totalDEX(character),
      totalAGI(character),
    );
  } else {
    if (character.mainWeapon.type === "one-handed-sword") {
      return pino.oneHandedSwordBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
      );
    } else if (character.mainWeapon.type === "two-handed-sword") {
      return pino.twoHandedSwordBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
      );
    } else if (character.mainWeapon.type === "bow") {
      return pino.bowBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
      );
    } else if (character.mainWeapon.type === "bowgun") {
      return (
        pino.bowgunBaseAttack(
          character.level,
          totalMainWeaponATK(character),
          totalDEX(character),
        ) + hunterBowgunTotalBaseATK(character)
      );
    } else if (character.mainWeapon.type === "staff") {
      return pino.staffBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalINT(character),
      );
    } else if (character.mainWeapon.type === "magic-device") {
      return pino.magicDeviceBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalAGI(character),
        totalINT(character),
      );
    } else if (character.mainWeapon.type === "knuckle") {
      return pino.knuckleBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalAGI(character),
        totalDEX(character),
      );
    } else if (character.mainWeapon.type === "halberd") {
      return pino.halberdBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalAGI(character),
      );
    } else if (character.mainWeapon.type === "katana") {
      return pino.katanaBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
      );
    } else {
      return pino.bareHandBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
      );
    }
  }
};

export const totalPercentATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentATK"))
    .reduce(sum, 0);

  const fromPenalties = subWeaponMagicDevicePercentATKModifier(character);

  const fromSkills =
    swordMasteryTotalPercentATK(character) +
    shotMasteryTotalPercentATK(character) +
    martialMasteryTotalPercentATK(character) +
    halberdMasteryTotalPercentATK(character) +
    bushidoTotalPercentATK(character) +
    warCryTotalPercentATK(character);

  const total = fromEquipments + fromSkills + fromPenalties;

  return total;
};

export const totalFlatATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatATK"))
    .reduce(sum, 0);

  const fromSkills =
    attackUPTotalFlatATK(character) +
    intimidatingPowerTotalFlatATK(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalATK = (character: Character) => {
  return total(
    totalBaseATK(character),
    totalPercentATK(character),
    totalFlatATK(character),
  );
};
