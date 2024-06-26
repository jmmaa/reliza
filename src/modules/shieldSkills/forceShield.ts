import { Character } from "../../types";

export const forceShieldTotalFlatDEF = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.forceShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel * 2 : 0;

  return total;
};

export const forceShieldTotalPercentDEF = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.forceShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel : 0;

  return total;
};

export const forceShieldTotalFlatMaxHP = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.forceShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel * 50 : 0;

  return total;
};

export const forceShieldTotalPhysicalResistance = (
  character: Character,
) => {
  const skillLevel = character.skills.shieldSkills.forceShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel : 0;

  return total;
};
