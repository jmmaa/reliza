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
import * as pino from "@jmmaa/pino";

export const totalBaseMATK = (character: Character) => {
  return isDualWielder(character)
    ? pino.dualWieldBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character),
      )
    : character.mainWeapon.type === "one-handed-sword"
      ? pino.oneHandedSwordBaseMagicAttack(
          character.level,
          totalINT(character),
          totalDEX(character),
        )
      : character.mainWeapon.type === "two-handed-sword"
        ? pino.twoHandedSwordBaseMagicAttack(
            character.level,
            totalINT(character),
            totalDEX(character),
          )
        : character.mainWeapon.type === "bow"
          ? pino.bowBaseMagicAttack(
              character.level,
              totalINT(character),
              totalDEX(character),
            )
          : character.mainWeapon.type === "bowgun"
            ? pino.bowgunBaseMagicAttack(
                character.level,
                totalINT(character),
                totalDEX(character),
              )
            : character.mainWeapon.type === "staff"
              ? pino.staffBaseMagicAttack(
                  character.level,
                  totalMainWeaponATK(character),
                  totalINT(character),
                  totalDEX(character),
                )
              : character.mainWeapon.type === "magic-device"
                ? pino.magicDeviceBaseMagicAttack(
                    character.level,
                    totalMainWeaponATK(character),
                    totalINT(character),
                    totalDEX(character),
                  )
                : character.mainWeapon.type === "knuckle"
                  ? pino.knuckleBaseMagicAttack(
                      character.level,
                      totalMainWeaponATK(character),
                      totalINT(character),
                      totalDEX(character),
                    )
                  : character.mainWeapon.type === "halberd"
                    ? pino.halberdBaseMagicAttack(
                        character.level,
                        totalINT(character),
                        totalDEX(character),
                        totalAGI(character),
                      )
                    : character.mainWeapon.type === "katana"
                      ? pino.katanaBaseMagicAttack(
                          character.level,
                          totalINT(character),
                          totalDEX(character),
                        )
                      : pino.bareHandBaseMagicAttack(
                          character.level,
                          totalINT(character),
                          totalDEX(character),
                        );
};

export const totalPercentMATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentMATK"))
    .reduce(sum, 0);

  const fromPenalties = subWeaponKnucklePercentMATKModifier(character);

  const fromSkills = magicMasteryTotalPercentMATK(character);

  const total = fromEquipments + fromSkills + fromPenalties;

  return total;
};

export const totalFlatMATK = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("flatMATK"))
      .reduce(sum, 0) + magicAttackBoostTotalFlatMATK(character);

  const fromModifiers = [
    totalFlatMATKValueFromMATKUP(character),
    totalFlatMATKValueFromMATKDOWN(character),
  ].reduce(sum);

  const fromSkills = [
    magicUPTotalFlatMATK(character),
    increasedEnergyTotalFlatMATK(character),
    magicWarriorMasteryTotalFlatMATK(character),
    conversionTotalFlatMATK(character),
  ].reduce(sum);

  const total = fromEquipments + fromSkills + fromModifiers;

  return total;
};

export const totalMATK = (character: Character) => {
  return total(
    totalBaseMATK(character),
    totalPercentMATK(character),
    totalFlatMATK(character),
  );
};
