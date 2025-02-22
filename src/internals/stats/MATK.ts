import { type Config } from "../data";
import {
  add,
  flattenedStats,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainHAL,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainSTF,
  isUsingMainTHS,
  total,
} from "../utils";

import { subWeaponKnucklePercentMATKModifier } from "./equipmenModifiers";

import {
  totalBaseMATKValueFromMATKDOWN,
  totalBaseMATKValueFromMATKUP,
} from "./derivativeMATK";

import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";
import { totalINT } from "./INT";

import { totalMainWeaponATK } from "./weaponATK";

import { increasedEnergyTotalFlatMATK, magicUPTotalFlatMATK } from "..";

import { magicMasteryTotalPercentMATK } from "..";

import { prayerTotalPercentMATK } from "..";

import {
  conversionTotalFlatMATK,
  magicWarriorMasteryTotalFlatMATK,
} from "..";

import { magicAttackBoostTotalFlatMATK } from "..";

export const totalDualWieldBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config);

export const totalOneHandedSwordBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config);

export const totalTwoHandedSwordBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config);

export const totalBowBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config);

export const totalBowgunBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config);

export const totalStaffBaseMATK = (config: Config) =>
  config.properties.level +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseMATK = (config: Config) =>
  config.properties.level +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalKnuckleBaseMATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalINT(config) * 4 +
      totalDEX(config) +
      totalMainWeaponATK(config) * 0.5,
  );

export const totalHalberdBaseMATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalINT(config) * 2 +
      totalDEX(config) +
      totalAGI(config),
  );

export const totalKatanaBaseMATK = (config: Config) =>
  Math.floor(
    config.properties.level + totalINT(config) * 1.5 + totalDEX(config),
  );

export const totalBareHandBaseMATK = (config: Config) =>
  config.properties.level + totalINT(config) * 3 + totalDEX(config) + 1;

export const totalBaseMATK = (config: Config) =>
  (isUsingDualSwords(config) ? totalDualWieldBaseMATK(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseMATK(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseMATK(config)
  : isUsingMainBOW(config) ? totalBowBaseMATK(config)
  : isUsingMainBOW(config) ? totalBowgunBaseMATK(config)
  : isUsingMainSTF(config) ? totalStaffBaseMATK(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseMATK(config)
  : isUsingMainKN(config) ? totalKnuckleBaseMATK(config)
  : isUsingMainHAL(config) ? totalHalberdBaseMATK(config)
  : isUsingMainKTN(config) ? totalKatanaBaseMATK(config)
  : totalBareHandBaseMATK(config)) +
  totalBaseMATKValueFromMATKUP(config) +
  totalBaseMATKValueFromMATKDOWN(config);

export const totalPercentMATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponKnucklePercentMATKModifier(config);

export const totalPercentMATKFromSkills = (config: Config) =>
  magicMasteryTotalPercentMATK(config) + prayerTotalPercentMATK(config);

export const totalPercentMATK = (config: Config) =>
  totalPercentMATKFromEquipment(config) +
  totalPercentMATKFromSkills(config);

export const totalFlatMATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + magicAttackBoostTotalFlatMATK(config);

export const totalFlatMATKFromSkills = (config: Config) =>
  magicUPTotalFlatMATK(config) +
  increasedEnergyTotalFlatMATK(config) +
  magicWarriorMasteryTotalFlatMATK(config) +
  conversionTotalFlatMATK(config);

export const totalFlatMATK = (config: Config) =>
  totalFlatMATKFromEquipment(config) + totalFlatMATKFromSkills(config);

export const totalMATK = (config: Config) =>
  total(
    totalBaseMATK(config),
    totalPercentMATK(config),
    totalFlatMATK(config),
  );

export const calculateMATK = (config: Config) => ({
  totalBaseMATK: totalBaseMATK(config),
  totalPercentMATK: totalPercentMATK(config),
  totalFlatMATK: totalFlatMATK(config),
  totalMATK: totalMATK(config),
});
