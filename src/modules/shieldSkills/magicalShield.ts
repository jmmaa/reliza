import { Character } from "../../types";

export const magicalShieldTotalFlatMDEF = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.magicalShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel * 2 : 0;

  return total;
};

export const magicalShieldTotalPercentMDEF = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.magicalShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel : 0;

  return total;
};

export const magicalShieldTotalFlatMaxHP = (character: Character) => {
  const skillLevel = character.skills.shieldSkills.magicalShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel * 50 : 0;

  return total;
};

export const magicalShieldTotalMagicResistance = (
  character: Character,
) => {
  const skillLevel = character.skills.shieldSkills.magicalShield.level;
  const isSubShield = character.subWeapon.type === "shield";

  const total = isSubShield ? skillLevel : 0;

  return total;
};
