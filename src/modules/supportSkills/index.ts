import { Character } from "../../types";

export const braveAuraTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.support.braveAura.level;
  const isActive = character.skills.support.braveAura.isActive;

  const total = isActive ? 10 + skillLevel * 2 : 0;

  return total;
};
