import { StatId, type Config } from "../../../types";
import { dodgeUPTotalFlatDodge } from "../../battleSkills";
import { get, sum, total, flattenedStats, floor } from "../../utils";
import { totalAGI } from "../basic";

export const normalArmorBaseDodge = (config: Config) =>
  config["character.level"] + totalAGI(config);

export const lightArmorBaseDodge = (config: Config) =>
  floor(config["character.level"] * 1.25 + totalAGI(config) * 1.75) + 30;

export const heavyArmorBaseDodge = (config: Config) =>
  floor(config["character.level"] * 0.5 + totalAGI(config) * 0.75) - 15;

export const noArmorBaseDodge = (config: Config) =>
  floor(config["character.level"] * 1.5 + totalAGI(config) * 2) + 75;

export const totalBaseDodge = (config: Config) =>
  config["character.armor.type"] === "light" ? lightArmorBaseDodge(config)
  : config["character.armor.type"] === "heavy" ?
    heavyArmorBaseDodge(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentDodge)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatDodge)
    .map((stat) => stat[1])
    .reduce(sum, 0) + dodgeUPTotalFlatDodge(config);

export const totalDodge = (config: Config) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );
