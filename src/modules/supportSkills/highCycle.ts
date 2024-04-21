import { Character } from "../../types";
import { floor } from "../utils";

// TODO
export const highCycle = (character: Character) =>
  character.skills.supportSkills.highCycle;

export const highCycleIsActive = (character: Character) =>
  highCycle(character).isActive;

export const highCycleLevel = (character: Character) =>
  highCycle(character).level;

export const highCycleTotalFlatCSPD = (character: Character) =>
  highCycleIsActive(character) ? 50 + highCycleLevel(character) * 50 : 0;

export const highCycleTotalPercentCSPD = (character: Character) =>
  highCycleIsActive(character) ? highCycleLevel(character) * 25 : 0;

export const highCycleTotalPercentNMPR = (character: Character) =>
  highCycleIsActive(character) ?
    floor(-50.5 - highCycleLevel(character) * 2.5)
  : 0;

export const highCycleTotalPercentAMPR = (character: Character) =>
  highCycleIsActive(character) ?
    floor(-90.5 - highCycleLevel(character) * 1.5)
  : 0;
