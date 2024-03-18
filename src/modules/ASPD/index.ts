import { Character } from "../../std/types";

import * as pino from "@jmmaa/pino";

import { flattenStatsFromEquipment } from "../utils";

import { totalAGI, totalDEX, totalINT, totalSTR } from "../growthStats";
import { floor, get, sum, total } from "../../std/op";

// TODO: erase pino and implement an explicit calculation instead!
export const totalBaseASPD = (character: Character) => {
  return character.mainWeapon.type === "one-handed-sword" &&
    character.subWeapon.type === "one-handed-sword" &&
    character.skills.dualSword.dualSwordMastery.level > 0 // resolve this later on DS calcs
    ? pino.dualWieldBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character)
      )
    : character.mainWeapon.type === "one-handed-sword"
    ? pino.oneHandedSwordBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character)
      )
    : character.mainWeapon.type === "two-handed-sword"
    ? pino.twoHandedSwordBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character)
      )
    : character.mainWeapon.type === "bow"
    ? pino.bowBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bowgun"
    ? pino.bowgunBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "staff"
    ? pino.staffBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalINT(character)
      )
    : character.mainWeapon.type === "magic-device"
    ? pino.magicDeviceBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalINT(character)
      )
    : character.mainWeapon.type === "knuckle"
    ? pino.knuckleBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "katana"
    ? pino.katanaBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character)
      )
    : character.mainWeapon.type === "halberd"
    ? pino.halberdBaseAttackSpeed(
        character.level,
        totalAGI(character),
        totalSTR(character)
      )
    : character.mainWeapon.type === "bare-hand"
    ? pino.bareHandBaseAttackSpeed(character.level, totalAGI(character))
    : 0;
};

export const armorASPDModifier = (character: Character) => {
  return character.armor.type === "light"
    ? 50
    : character.armor.type === "heavy"
    ? -50
    : 0;
};

export const totalPercentASPD = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("percentASPD"))
      .reduce(sum, 0) + armorASPDModifier(character);

  const total = fromEquipments;

  return total;
};

export const totalFlatASPD = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatASPD"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalASPD = (character: Character) => {
  return total(
    totalBaseASPD(character),
    totalPercentASPD(character),
    totalFlatASPD(character)
  );
};

export const totalMotionSpeed = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("motionSpeed"))
    .reduce(sum, 0);

  const fromASPD = floor((totalASPD(character) - 1000) / 180);

  const total = fromEquipments + fromASPD;

  return total;
};
