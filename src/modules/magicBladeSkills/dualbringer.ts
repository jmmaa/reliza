import { Character, Entries } from "../../types";
import { totalATK, totalINT, totalMATK, totalSTR } from "../stats";
import { subWeaponMagicDevicePercentATKModifier } from "../stats/derived/modifiers";
import { flattenStatsFromEquipment, floor, get, sum } from "../utils";

export const dualBringer = (character: Character) =>
  character.skills.magicBladeSkills.dualBringer;
export const dualBringerLevel = (character: Character) =>
  dualBringer(character).level;
export const dualBringerIsActive = (character: Character) =>
  dualBringer(character).isActive;

export const totalNumberOfMagicBladeSkills = (character: Character) =>
  (
    Object.entries(character.skills.magicBladeSkills) as Entries<
      typeof character.skills.magicBladeSkills
    >
  ).filter((skill) => skill[1].level > 0).length;

export const totalNegativePercentATK = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentATK"))
    .filter((value) => value < 0)
    .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

export const totalNegativePercentMATK = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentATK"))
    .filter((value) => value < 0)
    .reduce(sum, 0);

// export const dualBringerTotalATK = (character: Character) => {
//   const magicBladeSkills = character.skills.magicBladeSkills;
//   const dualBringer = magicBladeSkills.dualBringer;
//   const skillLevel = dualBringer.level;
//   const isActive = dualBringer.isActive;
//   const isSubMD = character.subWeapon.type === "magic-device";

//   const totalNegativePercentB =
//     flattenStatsFromEquipment(character)
//       .map(get("percentATK"))
//       .filter((value) => value < 0)
//       .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

//   const totalNumberOfMagicBladeSkills = (
//     Object.entries(magicBladeSkills) as Entries<typeof magicBladeSkills>
//   ).filter((skill) => skill[1].level > 0).length;

//   const skillModifier = Math.min(
//     100,
//     skillLevel * totalNumberOfMagicBladeSkills,
//   );

//   const A = totalMATK(character);
//   const B = totalATK(character);

//   const total =
//     isActive && isSubMD ?
//       floor(
//         Math.max(
//           0,
//           (A - B) *
//             ((100 - Math.abs(totalNegativePercentB)) / 100) *
//             ((skillModifier - B * Math.abs(totalNegativePercentB)) / 100),
//         ),
//       )
//     : 0;

//   return total;
// };

export const dualBringerTotalATK = (character: Character) =>
  (
    dualBringerIsActive(character) &&
    character.subWeapon.type === "magic-device"
  ) ?
    floor(
      Math.max(
        0,
        (totalMATK(character) - totalATK(character)) *
          ((100 - Math.abs(totalNegativePercentATK(character))) / 100) *
          ((Math.min(
            100,
            dualBringerLevel(character) *
              totalNumberOfMagicBladeSkills(character),
          ) -
            totalATK(character) *
              Math.abs(totalNegativePercentATK(character))) /
            100),
      ),
    )
  : 0;

// export const dualBringerTotalMATK = (character: Character) => {
//   const magicBladeSkills = character.skills.magicBladeSkills;
//   const dualBringer = magicBladeSkills.dualBringer;
//   const skillLevel = dualBringer.level;
//   const isActive = dualBringer.isActive;
//   const isSubMD = character.subWeapon.type === "magic-device";

//   const totalNegativePercentB =
//     flattenStatsFromEquipment(character)
//       .map(get("percentMATK"))
//       .filter((value) => value < 0)
//       .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(character);

//   const totalNumberOfMagicBladeSkills = (
//     Object.entries(magicBladeSkills) as Entries<typeof magicBladeSkills>
//   ).filter((skill) => skill[1].level > 0).length;

//   const skillModifier = Math.min(
//     100,
//     skillLevel * totalNumberOfMagicBladeSkills,
//   );

//   const A = totalATK(character);
//   const B = totalMATK(character);

//   const total =
//     isActive && isSubMD ?
//       floor(
//         Math.max(
//           0,
//           (A - B) *
//             ((100 - Math.abs(totalNegativePercentB)) / 100) *
//             ((skillModifier - B * Math.abs(totalNegativePercentB)) / 100),
//         ),
//       )
//     : 0;

//   return total;
// };

export const dualBringerTotalMATK = (character: Character) =>
  (
    dualBringerIsActive(character) &&
    character.subWeapon.type === "magic-device"
  ) ?
    floor(
      Math.max(
        0,
        (totalATK(character) - totalMATK(character)) *
          ((100 - Math.abs(totalNegativePercentMATK(character))) / 100) *
          ((Math.min(
            100,
            dualBringerLevel(character) *
              totalNumberOfMagicBladeSkills(character),
          ) -
            totalMATK(character) *
              Math.abs(totalNegativePercentMATK(character))) /
            100),
      ),
    )
  : 0;

export const dualBringerTotalDuration = (character: Character) =>
  (
    dualBringerIsActive(character) &&
    character.subWeapon.type === "magic-device"
  ) ?
    Math.max(10, floor(character.subWeapon.ATK / 10))
  : 0;

export const dualBringerTotalMagicCriticalDamageConversion = (
  character: Character,
) =>
  (
    dualBringerIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    totalINT(character) > totalSTR(character)
  ) ?
    floor(dualBringerLevel(character) * 2.5)
  : 0;

export const dualBringerTotalMagicCriticalRateConversion = (
  character: Character,
) =>
  (
    dualBringerIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    totalSTR(character) > totalINT(character)
  ) ?
    floor(dualBringerLevel(character) * 2.5)
  : 0;
