import { Character } from "../../types";
import { totalATK } from "../stats";
import { floor } from "../utils";

export const twoHandedLevel = (character: Character) =>
  character.skills.mononofuSkills.twoHanded.level;

export const isNinjaSpiritMaxed = (character: Character) =>
  character.skills.ninjaSkills.ninjaSpirit.level === 10;

export const twoHandedTotalPercentWeaponATK = (character: Character) =>
  (
    character.mainWeapon.type === "katana" ||
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    (
      (character.subWeapon.type === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(character)) ||
      character.subWeapon.type === "none"
    ) ?
      twoHandedLevel(character)
    : 0
  : character.subWeapon.type === "none" ? twoHandedLevel(character)
  : 0;

export const twoHandedTotalPercentAccuracy = (character: Character) =>
  (
    character.mainWeapon.type === "katana" ||
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    (
      (character.subWeapon.type === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(character)) ||
      character.subWeapon.type === "none"
    ) ?
      twoHandedLevel(character)
    : 0
  : character.subWeapon.type === "none" ? twoHandedLevel(character)
  : 0;

export const twoHandedTotalFlatCriticalRate = (character: Character) =>
  (
    character.mainWeapon.type === "katana" ||
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    (
      (character.subWeapon.type === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(character)) ||
      character.subWeapon.type === "none"
    ) ?
      character.mainWeapon.type === "katana" ? twoHandedLevel(character)
      : (
        character.mainWeapon.type === "one-handed-sword" ||
        character.mainWeapon.type === "magic-device"
      ) ?
        floor(twoHandedLevel(character) * 0.5)
      : 0
    : 0
  : character.subWeapon.type === "none" ?
    floor(twoHandedLevel(character) * 0.5)
  : 0;

// export const twoHandedTotalFlatCriticalRate = (character: Character) => {
//   const skillLevel = character.skills.mononofuSkills.twoHanded.level;

//   const isMainKTN = character.mainWeapon.type === "katana";
//   const isMainOHS = character.mainWeapon.type === "one-handed-sword";
//   const isMainMD = character.mainWeapon.type === "magic-device";

//   const isSubNone = character.subWeapon.type === "none";
//   const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
//   const isMaxNinjaSpirit =
//     character.skills.ninjaSkills.ninjaSpirit.level === 10;

//   const total =
//     isMainKTN ?
//       (isSubScroll && isMaxNinjaSpirit) || isSubNone ? skillLevel
//       : isMainOHS || isMainMD ?
//         (isSubScroll && isMaxNinjaSpirit) || isSubNone ?
//           floor(skillLevel * 0.5)
//         : isSubNone ? floor(skillLevel * 0.5)
//         : 0
//       : 0
//     : 0;

//   return total;
// };

// export const twoHandedTotalStability = (character: Character) => {
//   const skillLevel = character.skills.mononofuSkills.twoHanded.level;

//   const isMainKTN = character.mainWeapon.type === "katana";
//   const isMainOHS = character.mainWeapon.type === "one-handed-sword";
//   const isMainMD = character.mainWeapon.type === "magic-device";

//   const isSubNone = character.subWeapon.type === "none";
//   const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
//   const isMaxNinjaSpirit =
//     character.skills.ninjaSkills.ninjaSpirit.level === 10;

//   const total =
//     isMainKTN ?
//       (isSubScroll && isMaxNinjaSpirit) || isSubNone ? skillLevel
//       : isMainOHS || isMainMD ?
//         (isSubScroll && isMaxNinjaSpirit) || isSubNone ?
//           floor(skillLevel * 0.5)
//         : isSubNone ? floor(skillLevel * 0.5)
//         : 0
//       : 0
//     : 0;

//   return total;
// };

export const twoHandedTotalStability = (character: Character) =>
  (
    character.mainWeapon.type === "katana" ||
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "magic-device"
  ) ?
    (
      (character.subWeapon.type === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(character)) ||
      character.subWeapon.type === "none"
    ) ?
      character.mainWeapon.type === "katana" ? twoHandedLevel(character)
      : (
        character.mainWeapon.type === "one-handed-sword" ||
        character.mainWeapon.type === "magic-device"
      ) ?
        floor(twoHandedLevel(character) * 0.5)
      : 0
    : 0
  : character.subWeapon.type === "none" ?
    floor(twoHandedLevel(character) * 0.5)
  : 0;

export const twoHandedTotalATKOnCrit = (character: Character) =>
  (
    character.mainWeapon.type === "katana" &&
    (character.subWeapon.type === "none" ||
      (character.subWeapon.type === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(character)))
  ) ?
    totalATK(character) *
    floor((100 + 5 * twoHandedLevel(character)) / 100)
  : 0;
