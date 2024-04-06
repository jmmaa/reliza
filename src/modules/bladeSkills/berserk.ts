import { Character } from "../../types";
import { floor, isDualWielder } from "../utils";

export const berserkTotalPercentASPD = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;

  const total = berserk.isActive ? berserk.level * 10 : 0;

  return total;
};

export const berserkTotalFlatASPD = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;

  const total = berserk.isActive ? berserk.level * 100 : 0;

  return total;
};

export const berserkTotalFlatCriticalRate = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;

  const total = berserk.isActive ? floor(berserk.level * 2.5) : 0;

  return total;
};

export const berserkTotalStability = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;

  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isMainTHS = character.mainWeapon.type === "two-handed-sword";

  const total = berserk.isActive
    ? isMainOHS || isMainTHS
      ? floor(berserk.level * 2.5)
      : berserk.level * 5
    : 0;

  return total;
};

export const berserkTotalPercentDEF = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isNotDualWield = !isDualWielder(character);

  const total = berserk.isActive
    ? isMainOHS && isNotDualWield
      ? floor((100 - berserk.level) / 2)
      : 100 - berserk.level
    : 0;

  return total;
};

export const berserkTotalPercentMDEF = (character: Character) => {
  const berserk = character.skills.bladeSkills.berserk;
  const isMainOHS = character.mainWeapon.type === "one-handed-sword";
  const isNotDualWield = !isDualWielder(character);

  const total = berserk.isActive
    ? isMainOHS && isNotDualWield
      ? floor((100 - berserk.level) / 2)
      : 100 - berserk.level
    : 0;

  return total;
};
