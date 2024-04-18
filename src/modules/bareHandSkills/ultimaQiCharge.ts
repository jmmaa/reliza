import { Character } from "../../types";
import { floor } from "../utils";

export const ultimaQiChargeLevel = (character: Character) =>
  character.skills.bareHandSkills.ultimaQiCharge.level;

export const ultimaQiChargeTotalFlatAMPR = (character: Character) =>
  (
    character.mainWeapon.type === "bare-hand" &&
    character.subWeapon.type === "none"
  ) ?
    floor(ultimaQiChargeLevel(character) * 0.5)
  : 0;

export const ultimaQiChargeTotalCostQiReductionForNonBareHandSkills = (
  character: Character,
) =>
  (
    character.mainWeapon.type === "bare-hand" &&
    character.subWeapon.type === "none"
  ) ?
    20 - ultimaQiChargeLevel(character)
  : 0;
