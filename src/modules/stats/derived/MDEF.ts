import type { Config } from "../../../types";
import {
  defenseMasteryTotalFlatMDEF,
  defenseUPTotalFlatMDEF,
} from "../../battleSkills";
import { berserkTotalPercentMDEF } from "../../bladeSkills";
import {
  magicalShieldTotalFlatMDEF,
  magicalShieldTotalPercentMDEF,
} from "../../shieldSkills";
import { get, sum, total, floor, flattenedStats } from "../../utils";
import { totalINT } from "../basic";
import { totalEquipmentDEF } from "../equipment";
import { subWeaponArrowPercentMDEFModifier } from "./modifiers";

export const normalArmorBaseMDEF = (config: Config) =>
  config["character.level"] + totalINT(config) + totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: Config) =>
  floor(
    config["character.level"] * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: Config) =>
  floor(
    config["character.level"] * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: Config) =>
  floor(
    config["character.level"] * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: Config) =>
  config["character.armor.type"] === "light" ? lightArmorBaseMDEF(config)
  : config["character.armor.type"] === "heavy" ? heavyArmorBaseMDEF(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentMDEF")).reduce(sum, 0) +
  subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: Config) =>
  berserkTotalPercentMDEF(config) + magicalShieldTotalPercentMDEF(config);

export const totalPercentMDEF = (config: Config) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatMDEF")).reduce(sum, 0);

export const totalFlatMDEFFromSkills = (config: Config) =>
  magicalShieldTotalFlatMDEF(config) +
  defenseUPTotalFlatMDEF(config) +
  defenseMasteryTotalFlatMDEF(config);

export const totalFlatMDEF = (config: Config) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: Config) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );
