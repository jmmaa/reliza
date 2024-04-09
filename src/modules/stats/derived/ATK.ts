import { Character } from "../../../types";
import {
  attackUPTotalFlatATK,
  intimidatingPowerTotalFlatATK,
} from "../../battleSkills";
import { swordMasteryTotalPercentATK } from "../../bladeSkills";
import { warCryTotalPercentATK } from "../../bladeSkills";
import { halberdMasteryTotalPercentATK } from "../../halberdSkills";
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
  return isDualWielder(character)
    ? pino.dualWieldBaseAttack(
        character.level,
        totalMainWeaponATK(character),
        totalSTR(character),
        totalDEX(character),
        totalAGI(character),
      )
    : character.mainWeapon.type === "one-handed-sword"
      ? pino.oneHandedSwordBaseAttack(
          character.level,
          totalMainWeaponATK(character),
          totalSTR(character),
          totalDEX(character),
        )
      : character.mainWeapon.type === "two-handed-sword"
        ? pino.twoHandedSwordBaseAttack(
            character.level,
            totalMainWeaponATK(character),
            totalSTR(character),
            totalDEX(character),
          )
        : character.mainWeapon.type === "bow"
          ? pino.bowBaseAttack(
              character.level,
              totalMainWeaponATK(character),
              totalSTR(character),
              totalDEX(character),
            )
          : character.mainWeapon.type === "bowgun"
            ? pino.bowgunBaseAttack(
                character.level,
                totalMainWeaponATK(character),
                totalDEX(character),
              )
            : character.mainWeapon.type === "staff"
              ? pino.staffBaseAttack(
                  character.level,
                  totalMainWeaponATK(character),
                  totalSTR(character),
                  totalINT(character),
                )
              : character.mainWeapon.type === "magic-device"
                ? pino.magicDeviceBaseAttack(
                    character.level,
                    totalMainWeaponATK(character),
                    totalAGI(character),
                    totalINT(character),
                  )
                : character.mainWeapon.type === "knuckle"
                  ? pino.knuckleBaseAttack(
                      character.level,
                      totalMainWeaponATK(character),
                      totalAGI(character),
                      totalDEX(character),
                    )
                  : character.mainWeapon.type === "halberd"
                    ? pino.halberdBaseAttack(
                        character.level,
                        totalMainWeaponATK(character),
                        totalSTR(character),
                        totalAGI(character),
                      )
                    : character.mainWeapon.type === "katana"
                      ? pino.katanaBaseAttack(
                          character.level,
                          totalMainWeaponATK(character),
                          totalSTR(character),
                          totalDEX(character),
                        )
                      : pino.bareHandBaseAttack(
                          character.level,
                          totalMainWeaponATK(character),
                          totalSTR(character),
                        );
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
