import { Character } from "../../../types";
import { totalMainWeaponATK } from "../equipment";
import { totalAGI, totalDEX, totalINT } from "../basic";

import {
  totalFlatMATKValueFromMATKDOWN,
  totalFlatMATKValueFromMATKUP,
} from "../special";

import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
} from "../../utils";

import * as pino from "@jmmaa/pino";

export const totalBaseMATK = (character: Character) => {
  return isDualWielder(character)
    ? pino.dualWieldBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "one-handed-sword"
    ? pino.oneHandedSwordBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "two-handed-sword"
    ? pino.twoHandedSwordBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bow"
    ? pino.bowBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bowgun"
    ? pino.bowgunBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "staff"
    ? pino.staffBaseMagicAttack(
        character.level,
        totalMainWeaponATK(character),
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "magic-device"
    ? pino.magicDeviceBaseMagicAttack(
        character.level,
        totalMainWeaponATK(character),
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "knuckle"
    ? pino.knuckleBaseMagicAttack(
        character.level,
        totalMainWeaponATK(character),
        totalINT(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "halberd"
    ? pino.halberdBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character),
        totalAGI(character)
      )
    : character.mainWeapon.type === "katana"
    ? pino.katanaBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      )
    : pino.bareHandBaseMagicAttack(
        character.level,
        totalINT(character),
        totalDEX(character)
      );
};

export const subWeaponKnucklePercentMATKPenalty = (
  character: Character
) => {
  const total = character.subWeapon.type === "knuckle" ? -15 : 0;

  return total;
};

export const totalPercentMATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentMATK"))
    .reduce(sum, 0);

  const fromPenalties = subWeaponKnucklePercentMATKPenalty(character);

  const fromSkills = 0;

  const total = fromEquipments + fromSkills + fromPenalties;

  return total;
};

export const magicWarriorMasteryTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 2 + (skillLevel - 5 > 0 ? skillLevel - 5 : 0)
      : 0;

  return total;
};

export const magicUPTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battle.magicUP.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};

export const increasedEnergyTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.battle.increasedEnergy.level;

  const total = (character.level * (2.5 * skillLevel)) / 100;

  return total;
};

export const conversionTotalFlatMATK = (character: Character) => {
  const skillLevel = character.skills.magicBlade.conversion.level;

  const isAllowed =
    character.mainWeapon.type === "two-handed-sword" ||
    character.mainWeapon.type === "bowgun" ||
    character.mainWeapon.type === "knuckle" ||
    character.mainWeapon.type === "one-handed-sword";

  const total = isAllowed
    ? floor(
        ((skillLevel * skillLevel) / 100) *
          (character.mainWeapon.type === "knuckle"
            ? totalMainWeaponATK(character) * 0.5
            : totalMainWeaponATK(character))
      )
    : 0;
  // const bonusFlatMATK = skillLevel * 2; // this doesn't seem to work, need confirmation

  return total;
};

// TODO: resonance flat MATK

export const totalFlatMATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatMATK"))
    .reduce(sum, 0);

  const fromModifiers =
    totalFlatMATKValueFromMATKUP(character) +
    totalFlatMATKValueFromMATKDOWN(character);

  const fromSkills =
    magicUPTotalFlatMATK(character) +
    increasedEnergyTotalFlatMATK(character) +
    magicWarriorMasteryTotalFlatMATK(character) +
    conversionTotalFlatMATK(character);

  const total = fromEquipments + fromSkills + fromModifiers;

  return total;
};

export const totalMATK = (character: Character) => {
  return total(
    totalBaseMATK(character),
    totalPercentMATK(character),
    totalFlatMATK(character)
  );
};
