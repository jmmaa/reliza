import type { Entries, Config } from "../../types";
import { floor } from "../utils";

export const castMasteryLevel = (config: Config) =>
  config["character.skills.wizardSkills.castMastery.level"];

// TODO REFACTOR THIS LATER
export const wizardSkillsLearned = (config: Config) =>
  (Object.entries(config) as Entries<typeof config>)
    .filter((entry) => entry[0].slice(17, 29) === "wizardSkills")
    .filter(
      (entry) =>
        entry[0].slice(-5) === "level" && (entry[1] as number) > 0,
    );

export const totalWizardSkillsLearned = (config: Config) =>
  wizardSkillsLearned(config).length;

export const totalWizardSkillsPoints = (config: Config) =>
  wizardSkillsLearned(config).reduce(
    (total, next) => total + (next[1] as number),
    0,
  );

export const castMasteryTotalPercentCSPD = (config: Config) =>
  floor(castMasteryLevel(config) * 1.5) +
  (totalWizardSkillsLearned(config) - 1) *
    floor(castMasteryLevel(config) / 2);

export const castMasteryTotalFlatCSPD = (config: Config) =>
  castMasteryLevel(config) * totalWizardSkillsPoints(config);

export const castMasteryTotalPercentATK = (config: Config) =>
  -Math.ceil(50 - 2.5 * castMasteryLevel(config));

// not yet added to stats!
// TODO: create a custom calculation for ATK% in wizard ATK
