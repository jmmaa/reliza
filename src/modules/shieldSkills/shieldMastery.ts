import { Character } from "../../types";

export const shieldMasteryLevel = (character: Character) =>
  character.skills.shieldSkills.shieldMastery.level;

export const shieldMasteryPercentASPDPenaltyReduction = (
  character: Character,
) =>
  character.subWeapon.type === "shield" ?
    shieldMasteryLevel(character) * 5
  : 0;
