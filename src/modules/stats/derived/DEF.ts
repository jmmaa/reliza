import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import {
  defenseMasteryTotalFlatDEF,
  defenseUPTotalFlatDEF,
} from "../../battleSkills";
import { berserkTotalPercentDEF } from "../../bladeSkills/berserk";
import {
  forceShieldTotalFlatDEF,
  forceShieldTotalPercentDEF,
} from "../../shieldSkills";
import { get, sum, total, flattenedStats, floor } from "../../utils";
import { totalVIT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentDEFModifier } from "./modifiers";

export const normalArmorBaseDEF = (config: IntermediateConfig) =>
  config["character.level"] + totalVIT(config) + totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: IntermediateConfig) =>
  config["character.armor.type"] === "light" ? lightArmorBaseDEF(config)
  : config["character.armor.type"] === "heavy" ? heavyArmorBaseDEF(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentDEF)
    .map((stat) => stat[1])
    .reduce(sum, 0) + subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: IntermediateConfig) =>
  berserkTotalPercentDEF(config) + forceShieldTotalPercentDEF(config);

export const totalPercentDEF = (config: IntermediateConfig) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatDEF)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatDEFFromSkills = (config: IntermediateConfig) =>
  forceShieldTotalFlatDEF(config) +
  defenseUPTotalFlatDEF(config) +
  defenseMasteryTotalFlatDEF(config);

export const totalFlatDEF = (config: IntermediateConfig) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: IntermediateConfig) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );
