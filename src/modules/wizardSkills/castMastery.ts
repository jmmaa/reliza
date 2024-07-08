import type { Entries, IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const castMasteryLevel = (config: IntermediateConfig) =>
  config["character.skills.wizardSkills.castMastery.level"];

export const wizardSkillsLearned = (config: IntermediateConfig) =>
  (Object.entries(config) as Entries<typeof config>)
    .filter((entry) => entry[0].slice(17, 29) === "wizardSkills")
    .filter(
      (entry) =>
        entry[0].slice(-5) === "level" && (entry[1] as number) > 0,
    );

export const totalWizardSkillsLearned = (config: IntermediateConfig) =>
  wizardSkillsLearned(config).length;

export const totalWizardSkillsPoints = (config: IntermediateConfig) =>
  wizardSkillsLearned(config).reduce(
    (total, next) => total + (next[1] as number),
    0,
  );

export const castMasteryTotalPercentCSPD = (config: IntermediateConfig) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.mainweapon.type"] === "staff") &&
    castMasteryLevel(config) > 0
  ) ?
    floor(castMasteryLevel(config) * 1.5) +
    (totalWizardSkillsLearned(config) - 1) *
      floor(castMasteryLevel(config) / 2)
  : 0;

export const castMasteryTotalFlatCSPD = (config: IntermediateConfig) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.mainweapon.type"] === "staff") &&
    castMasteryLevel(config) > 0
  ) ?
    castMasteryLevel(config) * totalWizardSkillsPoints(config)
  : 0;

export const castMasteryTotalPercentATK = (config: IntermediateConfig) =>
  (
    (config["character.mainweapon.type"] === "magic-device" ||
      config["character.mainweapon.type"] === "staff") &&
    castMasteryLevel(config) > 0
  ) ?
    -Math.ceil(50 - 2.5 * castMasteryLevel(config))
  : 0;

// not yet added to stats!
// TODO: create a custom calculation for ATK% in wizard ATK
