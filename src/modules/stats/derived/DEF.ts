import { Config } from "../../../types";
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

export const normalArmorBaseDEF = (config: Config) =>
  config["character.level"] + totalVIT(config) + totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: Config) =>
  floor(
    config["character.level"] * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: Config) =>
  floor(
    config["character.level"] * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: Config) =>
  floor(
    config["character.level"] * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: Config) =>
  config["character.armor.type"] === "light" ? lightArmorBaseDEF(config)
  : config["character.armor.type"] === "heavy" ? heavyArmorBaseDEF(config)
  : config["character.armor.type"] === "normal" ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentDEF")).reduce(sum, 0) +
  subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: Config) =>
  berserkTotalPercentDEF(config) + forceShieldTotalPercentDEF(config);

export const totalPercentDEF = (config: Config) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatDEF")).reduce(sum, 0);

export const totalFlatDEFFromSkills = (config: Config) =>
  forceShieldTotalFlatDEF(config) +
  defenseUPTotalFlatDEF(config) +
  defenseMasteryTotalFlatDEF(config);

export const totalFlatDEF = (config: Config) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: Config) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );
