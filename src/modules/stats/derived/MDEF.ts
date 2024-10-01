import { type IntermediateConfig } from "../../../types";
import {
  defenseMasteryTotalFlatMDEF,
  defenseUPTotalFlatMDEF,
} from "../../battleSkills";
import { berserkTotalPercentMDEF } from "../../bladeSkills";
import {
  magicalShieldTotalFlatMDEF,
  magicalShieldTotalPercentMDEF,
} from "../../shieldSkills";
import { StatId } from "../../utils";
import { get, sum, total, floor, flattenedStats } from "../../utils";
import { totalINT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentMDEFModifier } from "./modifiers";

export const normalArmorBaseMDEF = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) + totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: IntermediateConfig) =>
  floor(
    config["character.level"] * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: IntermediateConfig) =>
  config["character.armor.type"] === "light" ? lightArmorBaseMDEF(config)
  : config["character.armor.type"] === "heavy" ? heavyArmorBaseMDEF(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMDEF)
    .map((stat) => stat[1])
    .reduce(sum, 0) + subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: IntermediateConfig) =>
  berserkTotalPercentMDEF(config) + magicalShieldTotalPercentMDEF(config);

export const totalPercentMDEF = (config: IntermediateConfig) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatMDEF)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatMDEFFromSkills = (config: IntermediateConfig) =>
  magicalShieldTotalFlatMDEF(config) +
  defenseUPTotalFlatMDEF(config) +
  defenseMasteryTotalFlatMDEF(config);

export const totalFlatMDEF = (config: IntermediateConfig) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: IntermediateConfig) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );
