import { Character } from "../../types";
import { floor } from "../utils";

export const intimidatingPowerLevel = (character: Character) =>
  character.skills.battleSkills.intimidatingPower.level;

export const intimidatingPowerTotalFlatATK = (character: Character) =>
  floor(
    (character.level * (2.5 * intimidatingPowerLevel(character))) / 100,
  );
