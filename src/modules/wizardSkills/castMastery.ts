import { Character, Entries } from "../../types";
import { floor } from "../utils";

export const castMasteryLevel = (character: Character) =>
  character.skills.wizardSkills.castMastery.level;

export const wizardSkillsLearned = (character: Character) =>
  (
    Object.entries(character.skills.wizardSkills) as Entries<
      typeof character.skills.wizardSkills
    >
  ).filter((skill) => skill[1].level > 0);

export const totalWizardSkillsLearned = (character: Character) =>
  wizardSkillsLearned(character).length;

export const totalWizardSkillsPoints = (character: Character) =>
  wizardSkillsLearned(character).reduce(
    (total, next) => total + next[1].level,
    0,
  );

export const castMasteryTotalPercentCSPD = (character: Character) =>
  floor(castMasteryLevel(character) * 1.5) +
  (totalWizardSkillsLearned(character) - 1) *
    floor(castMasteryLevel(character) / 2);

export const castMasteryTotalFlatCSPD = (character: Character) =>
  castMasteryLevel(character) * totalWizardSkillsPoints(character);

export const castMasteryTotalPercentATK = (character: Character) =>
  -Math.ceil(50 - 2.5 * castMasteryLevel(character));

// not yet added to stats!
// TODO: create a custom calculation for ATK% in wizard ATK
