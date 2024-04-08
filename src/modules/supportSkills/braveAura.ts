import { Character } from "../../types";

export const braveAuraTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.supportSkills.braveAura.level;
  const isActive = character.skills.supportSkills.braveAura.isActive;

  const total = isActive ? 10 + skillLevel * 2 : 0;

  return total;
};

export const braveAuraTotalDamageBonus = (character: Character) => {
  const skillLevel = character.skills.supportSkills.braveAura.level;
  const isActive = character.skills.supportSkills.braveAura.isActive;

  const total = isActive ? skillLevel * 2 : 0;

  return total;
};
