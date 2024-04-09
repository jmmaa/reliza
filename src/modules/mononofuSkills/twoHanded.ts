import { Character } from "../../types";
import { totalATK } from "../stats";
import { floor } from "../utils";

export const twoHandedTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.twoHanded.level;

  const isMainKTN = character.mainWeapon.type === "katana";
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainMD = character.mainWeapon.type === "magic-device";

  const isSubNone = character.subWeapon.type === "none";
  const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
  const isMaxNinjaSpirit =
    character.skills.ninjaSkills.ninjaSpirit.level === 10;

  const total =
    isMainKTN || isMainOHS || isMainMD
      ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
        ? skillLevel
        : 0
      : isSubNone
        ? skillLevel
        : 0;

  return total;
};

export const twoHandedTotalPercentAccuracy = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.twoHanded.level;

  const isMainKTN = character.mainWeapon.type === "katana";
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainMD = character.mainWeapon.type === "magic-device";

  const isSubNone = character.subWeapon.type === "none";
  const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
  const isMaxNinjaSpirit =
    character.skills.ninjaSkills.ninjaSpirit.level === 10;

  const total = isMainKTN
    ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
      ? skillLevel
      : isMainOHS || isMainMD
        ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
          ? skillLevel
          : isSubNone
            ? skillLevel
            : 0
        : 0
    : 0;

  return total;
};

export const twoHandedTotalFlatCriticalRate = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.twoHanded.level;

  const isMainKTN = character.mainWeapon.type === "katana";
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainMD = character.mainWeapon.type === "magic-device";

  const isSubNone = character.subWeapon.type === "none";
  const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
  const isMaxNinjaSpirit =
    character.skills.ninjaSkills.ninjaSpirit.level === 10;

  const total = isMainKTN
    ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
      ? skillLevel
      : isMainOHS || isMainMD
        ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
          ? floor(skillLevel * 0.5)
          : isSubNone
            ? floor(skillLevel * 0.5)
            : 0
        : 0
    : 0;

  return total;
};

export const twoHandedTotalStability = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.twoHanded.level;

  const isMainKTN = character.mainWeapon.type === "katana";
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainMD = character.mainWeapon.type === "magic-device";

  const isSubNone = character.subWeapon.type === "none";
  const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
  const isMaxNinjaSpirit =
    character.skills.ninjaSkills.ninjaSpirit.level === 10;

  const total = isMainKTN
    ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
      ? skillLevel
      : isMainOHS || isMainMD
        ? (isSubScroll && isMaxNinjaSpirit) || isSubNone
          ? floor(skillLevel * 0.5)
          : isSubNone
            ? floor(skillLevel * 0.5)
            : 0
        : 0
    : 0;

  return total;
};

export const twoHandedTotalATKOnCrit = (character: Character) => {
  const skillLevel = character.skills.mononofuSkills.twoHanded.level;

  const isMainKTN = character.mainWeapon.type === "katana";
  const isSubNone = character.subWeapon.type === "none";
  const isSubScroll = character.subWeapon.type === "ninjutsu-scroll";
  const isMaxNinjaSpirit =
    character.skills.ninjaSkills.ninjaSpirit.level === 10;

  const total =
    isMainKTN && (isSubNone || (isSubScroll && isMaxNinjaSpirit))
      ? totalATK(character) * floor((100 + 5 * skillLevel) / 100)
      : 0;

  return total;
};
