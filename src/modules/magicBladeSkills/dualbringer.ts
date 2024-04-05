import { Character, Entries } from "../../types";
import { totalATK, totalINT, totalMATK, totalSTR } from "../stats";
import { subWeaponMagicDevicePercentATKModifier } from "../stats/derived/modifiers";
import { flattenStatsFromEquipment, floor, get, sum } from "../utils";

export const dualBringerTotalATK = (character: Character) => {
  const magicBladeSkills = character.skills.magicBladeSkills;
  const dualBringer = magicBladeSkills.dualBringer;
  const skillLevel = dualBringer.level;
  const isActive = dualBringer.isActive;
  const isSubMD = character.subWeapon.type === "magic-device";

  const totalNegativePercentB =
    flattenStatsFromEquipment(character)
      .map(get("percentATK"))
      .filter((value) => value < 0)
      .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

  const totalNumberOfMagicBladeSkills = (
    Object.entries(magicBladeSkills) as Entries<typeof magicBladeSkills>
  ).filter((skill) => skill[1].level > 0).length;

  const skillModifier = Math.min(
    100,
    skillLevel * totalNumberOfMagicBladeSkills
  );

  const A = totalMATK(character);
  const B = totalATK(character);

  console.log((100 - Math.abs(totalNegativePercentB)) / 100);
  console.log(skillModifier);

  const total =
    isActive && isSubMD
      ? floor(
          Math.max(
            0,
            (A - B) *
              ((100 - Math.abs(totalNegativePercentB)) / 100) *
              ((skillModifier - B * Math.abs(totalNegativePercentB)) / 100)
          )
        )
      : 0;

  return total;
};

export const dualBringerTotalMATK = (character: Character) => {
  const magicBladeSkills = character.skills.magicBladeSkills;
  const dualBringer = magicBladeSkills.dualBringer;
  const skillLevel = dualBringer.level;
  const isActive = dualBringer.isActive;
  const isSubMD = character.subWeapon.type === "magic-device";

  const totalNegativePercentB =
    flattenStatsFromEquipment(character)
      .map(get("percentMATK"))
      .filter((value) => value < 0)
      .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

  const totalNumberOfMagicBladeSkills = (
    Object.entries(magicBladeSkills) as Entries<typeof magicBladeSkills>
  ).filter((skill) => skill[1].level > 0).length;

  const skillModifier = Math.min(
    100,
    skillLevel * totalNumberOfMagicBladeSkills
  );

  const A = totalATK(character);
  const B = totalMATK(character);

  const total =
    isActive && isSubMD
      ? floor(
          Math.max(
            0,
            (A - B) *
              ((100 - Math.abs(totalNegativePercentB)) / 100) *
              ((skillModifier - B * Math.abs(totalNegativePercentB)) / 100)
          )
        )
      : 0;

  return total;
};

export const dualBringerTotalDuration = (character: Character) => {
  const subweapon = character.subWeapon;
  const isSubMD = subweapon.type === "magic-device";
  const isActive = character.skills.magicBladeSkills.dualBringer.isActive;

  const total =
    isActive && isSubMD ? Math.max(10, floor(subweapon.ATK / 10)) : 0;

  return total;
};

export const dualBringerTotalMagicCriticalDamageConversion = (
  character: Character
) => {
  const subweapon = character.subWeapon;
  const dualBringer = character.skills.magicBladeSkills.dualBringer;
  const skillLevel = dualBringer.level;
  const isSubMD = subweapon.type === "magic-device";
  const isActive = dualBringer.isActive;

  const total =
    isActive && isSubMD && totalINT(character) > totalSTR(character)
      ? floor(skillLevel * 2.5)
      : 0;

  return total;
};

export const dualBringerTotalMagicCriticalRateConversion = (
  character: Character
) => {
  const subweapon = character.subWeapon;
  const dualBringer = character.skills.magicBladeSkills.dualBringer;
  const skillLevel = dualBringer.level;
  const isSubMD = subweapon.type === "magic-device";
  const isActive = dualBringer.isActive;

  const total =
    isActive && isSubMD && totalSTR(character) > totalINT(character)
      ? floor(skillLevel * 2.5)
      : 0;

  return total;
};
