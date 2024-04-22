import { Character } from "../../types";
import { floor } from "../utils";

export const familia = (character: Character) =>
  character.skills.wizardSkills.familia;

export const familiaIsActive = (character: Character) =>
  familia(character).isActive;

export const familiaLevel = (character: Character) =>
  familia(character).level;

export const familiaTotalFlatMATK = (character: Character) =>
  familiaIsActive(character) ?
    floor(character.level / (10 - familiaLevel(character) * 0.6))
  : 0;

export const familiaTotalFlatMaxMP = (character: Character) =>
  familiaIsActive(character) ? 100 + familiaLevel(character) * 10 : 0;

export const familiaTotalAdditionalMagic = (character: Character) =>
  familiaIsActive(character) ? 5 * familiaLevel(character) : 0;

// not yet added to stats!
