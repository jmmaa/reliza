import { Character } from "../../types";
import { floor } from "../utils";

export const hiddenTalentTotalBaseGuardPower = (character: Character) => {
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";
  const skillLevel = character.skills.bareHandSkills.hiddenTalent.level;

  const total = isMainBareHand && isSubNone ? skillLevel * 500 : 0;

  return total;
};

export const hiddenTalentTotalBaseGuardRecharge = (
  character: Character,
) => {
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";
  const skillLevel = character.skills.bareHandSkills.hiddenTalent.level;

  const total = isMainBareHand && isSubNone ? 5 + 2 * skillLevel : 0;

  return total;
};

export const hiddenTalentTotalEvasionCount = (character: Character) => {
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";
  const skillLevel = character.skills.bareHandSkills.hiddenTalent.level;

  const total =
    isMainBareHand && isSubNone ? floor(2 + skillLevel * 0.4) : 0;

  return total;
};

export const hiddenTalentTotalBaseEvasionRecharge = (
  character: Character,
) => {
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";
  const skillLevel = character.skills.bareHandSkills.hiddenTalent.level;

  const total =
    isMainBareHand && isSubNone && skillLevel < 10
      ? 0.1 * skillLevel
      : isMainBareHand && isSubNone && skillLevel === 10
        ? 10
        : 0;

  return total;
};

export const hiddenTalentTotalCostQiReductionForNonBareHandSkills = (
  character: Character,
) => {
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";
  const skillLevel = character.skills.bareHandSkills.hiddenTalent.level;

  const total = isMainBareHand && isSubNone ? floor(0.5 * skillLevel) : 0;

  return total;
};

// NOTE: This is not added in main status calculation (for now) cuz idk how is this thing calculated with other stats lol
