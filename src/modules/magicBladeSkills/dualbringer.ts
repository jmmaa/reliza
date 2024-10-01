import { type IntermediateConfig } from "../../types";
import { totalATK, totalINT, totalMATK, totalSTR } from "../stats";
import { subWeaponMagicDevicePercentATKModifier } from "../stats/derived/modifiers";
import { StatId } from "../utils";
import { flattenedStats, floor, get, sum } from "../utils";

export const dualBringerLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.dualBringer.level"];
export const dualBringerIsActive = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.dualBringer.isActive"];

// refactor this
export const totalNumberOfMagicBladeSkills = (
  config: IntermediateConfig,
) =>
  [
    (
      config[
        "character.skills.magicBladeSkills.magicWarriorMastery.level"
      ] > 0
    ) ?
      1
    : 0,
    config["character.skills.magicBladeSkills.conversion.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.resonance.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.enchantedSpell.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.dualBringer.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.etherFlare.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.elementSlash.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.enchantSword.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.enchantedBurst.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.unionSword.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.siphonBarrier.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.teleport.level"] > 0 ? 1 : 0,
    config["character.skills.magicBladeSkills.siphonRecall.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.floatDash.level"] > 0 ?
      1
    : 0,
    config["character.skills.magicBladeSkills.magicSkin.level"] > 0 ?
      1
    : 0,
  ].reduce(sum, 0);

export const totalNegativePercentATK = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentATK && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalNegativePercentMATK = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMATK && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const dualBringerTotalSkillModifier = (
  config: IntermediateConfig,
) =>
  Math.min(
    100,
    dualBringerLevel(config) * totalNumberOfMagicBladeSkills(config),
  );

export const dualBringerTotalATK = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config["character.subweapon.type"] === "magic-device"
  ) ?
    floor(
      Math.max(
        0,
        (totalMATK(config) - totalATK(config)) *
          ((100 - Math.abs(totalNegativePercentATK(config))) / 100) *
          (dualBringerTotalSkillModifier(config) / 100) -
          (totalATK(config) * Math.abs(totalNegativePercentATK(config))) /
            100,
      ),
    )
  : 0;

export const dualBringerTotalMATK = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config["character.subweapon.type"] === "magic-device"
  ) ?
    floor(
      Math.max(
        0,
        (totalATK(config) - totalMATK(config)) *
          ((100 - Math.abs(totalNegativePercentMATK(config))) / 100) *
          (dualBringerTotalSkillModifier(config) / 100) -
          (totalMATK(config) *
            Math.abs(totalNegativePercentMATK(config))) /
            100,
      ),
    )
  : 0;

export const dualBringerTotalDuration = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config["character.subweapon.type"] === "magic-device"
  ) ?
    Math.max(10, floor(config["character.subweapon.ATK"] / 10))
  : 0;

export const dualBringerTotalMagicCriticalDamageConversion = (
  config: IntermediateConfig,
) =>
  (
    dualBringerIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    totalINT(config) > totalSTR(config)
  ) ?
    floor(dualBringerLevel(config) * 2.5)
  : 0;

export const dualBringerTotalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) =>
  (
    dualBringerIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    totalSTR(config) > totalINT(config)
  ) ?
    floor(dualBringerLevel(config) * 2.5)
  : 0;
