import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { dodgeUPTotalFlatDodge } from "../../battleSkills";
import { get, sum, total, flattenedStats, floor } from "../../utils";
import { totalAGI } from "../basic";

export const normalArmorBaseDodge = (config: IntermediateConfig) =>
  config["character.level"] + totalAGI(config);

export const lightArmorBaseDodge = (config: IntermediateConfig) =>
  floor(config["character.level"] * 1.25 + totalAGI(config) * 1.75) + 30;

export const heavyArmorBaseDodge = (config: IntermediateConfig) =>
  floor(config["character.level"] * 0.5 + totalAGI(config) * 0.75) - 15;

export const noArmorBaseDodge = (config: IntermediateConfig) =>
  floor(config["character.level"] * 1.5 + totalAGI(config) * 2) + 75;

export const totalBaseDodge = (config: IntermediateConfig) =>
  config["character.armor.type"] === "light" ? lightArmorBaseDodge(config)
  : config["character.armor.type"] === "heavy" ?
    heavyArmorBaseDodge(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentDodge)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatDodge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatDodge)
    .map((stat) => stat[1])
    .reduce(sum, 0) + dodgeUPTotalFlatDodge(config);

export const totalDodge = (config: IntermediateConfig) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );
