import { get, sum, total } from "../../../../std/op";
import { Character } from "../../../../std/types";
import { totalMainWeaponATK } from "../../../equipment";
import { totalAGI, totalDEX, totalINT, totalSTR } from "../../../growth";
import { flattenStatsFromEquipment, isDualWielder } from "../../../utils";

import * as pino from "@jmmaa/pino";

export const totalBaseATK = (character: Character) => {
  return isDualWielder(character)
    ? pino.dualWieldBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
        totalAGI(character)
      )
    : character.mainWeapon.type === "one-handed-sword"
    ? pino.oneHandedSwordBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "two-handed-sword"
    ? pino.twoHandedSwordBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bow"
    ? pino.bowBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bowgun"
    ? pino.bowgunBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "staff"
    ? pino.staffBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalINT(character)
      )
    : character.mainWeapon.type === "magic-device"
    ? pino.magicDeviceBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalAGI(character),
        totalINT(character)
      )
    : character.mainWeapon.type === "knuckle"
    ? pino.knuckleBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalAGI(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "halberd"
    ? pino.halberdBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalAGI(character)
      )
    : character.mainWeapon.type === "katana"
    ? pino.katanaBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character)
      )
    : pino.bareHandBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character)
      );
};

export const swordMasteryTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.blade.swordMastery.level;

  const total =
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const bushidoTotalPercentATK = (character: Character) => {
  const skillLevel = character.skills.mononofu.bushido.level;

  const total =
    character.mainWeapon.type === "katana"
      ? skillLevel >= 8
        ? 3
        : skillLevel >= 3
        ? 2
        : 1
      : 0;

  return total;
};

export const magicWarriorMasteryPenaltyNullifier = (
  character: Character
) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? character.mainWeapon.type === "one-handed-sword"
        ? skillLevel + 5
        : skillLevel
      : 0;

  return total;
};

export const subWeaponMagicDevicePercentATKPenalty = (
  character: Character
) => {
  const total =
    character.subWeapon.type === "magic-device"
      ? -15 + magicWarriorMasteryPenaltyNullifier(character)
      : 0;

  return total;
};

export const totalPercentATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentATK"))
    .reduce(sum, 0);

  const fromPenalties = subWeaponMagicDevicePercentATKPenalty(character);

  const fromSkills =
    swordMasteryTotalPercentATK(character) +
    bushidoTotalPercentATK(character);

  const total = fromEquipments + fromSkills + fromPenalties;

  return total;
};

// TODO: resonance total flat atk

export const totalFlatATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatATK"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalATK = (character: Character) => {
  return total(
    totalBaseATK(character),
    totalPercentATK(character),
    totalFlatATK(character)
  );
};
