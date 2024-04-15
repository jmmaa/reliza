import { Character } from "../../types";
import { floor } from "../utils";

export const quickAuraTotalFlatASPD = (character: Character) => {
  const quickAura = character.skills.halberdSkills.quickAura;
  const skillLevel = quickAura.level;

  const isActive = quickAura.isActive;

  const total = isActive ? skillLevel * 50 : 0;

  return total;
};

export const quickAuraTotalPercentASPD = (character: Character) => {
  const quickAura = character.skills.halberdSkills.quickAura;
  const skillLevel = quickAura.level;

  const isActive = quickAura.isActive;

  const total = isActive ? floor(skillLevel * 2.5) : 0;

  return total;
};
