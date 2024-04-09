import { Character } from "../../types";
import { floor } from "../utils";

export const ultimaQiChargeTotalFlatAMPR = (character: Character) => {
  const skillLevel = character.skills.bareHandSkills.ultimaQiCharge.level;
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";

  const total = isMainBareHand && isSubNone ? floor(skillLevel * 0.5) : 0;

  return total;
};

export const ultimaQiChargeTotalCostQiReductionForNonBareHandSkills = (
  character: Character,
) => {
  const skillLevel = character.skills.bareHandSkills.unarmedMastery.level;
  const isMainBareHand = character.mainWeapon.type === "bare-hand";
  const isSubNone = character.subWeapon.type === "none";

  const total = isMainBareHand && isSubNone ? 20 - skillLevel : 0;

  return total;
};
