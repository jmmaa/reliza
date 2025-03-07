import { type Config } from "../data";
import {
  add,
  battleSkills,
  flattenedStats,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainBWG,
  isUsingMainHAL,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainSTF,
  isUsingMainTHS,
  isUsingSubMD,
  magicBladeSkills,
  magicSkills,
  priestSkills,
  regislets,
  total,
} from "../utils";

import { subWeaponKnucklePercentMATKModifier } from "./equipmentModifiers";

import {
  totalBaseMATKValueFromMATKDOWN,
  totalBaseMATKValueFromMATKUP,
} from "./derivativeMATK";

import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";
import { totalINT } from "./INT";

import { totalMainWeaponATK } from "./weaponATK";

export const magicUPFlatMATKPassive = (config: Config) =>
  Math.floor(
    (config.properties.level *
      (2.5 * battleSkills(config).magicUP.level)) /
      100,
  );
export const increasedEnergyFlatMATKPassive = (config: Config) =>
  (config.properties.level *
    (2.5 * battleSkills(config).increasedEnergy.level)) /
  100;

export const magicMasteryPercentMATKPassive = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    magicSkills(config).magicMastery.level >= 8 ? 3
    : magicSkills(config).magicMastery.level >= 3 ? 2
    : 1
  : 0;

export const prayerPercentMATKBuff = (config: Config) =>
  priestSkills(config).prayer.buffIsActive ?
    isUsingMainMD(config) || isUsingSubMD(config) ?
      priestSkills(config).prayer.level + 5
    : priestSkills(config).prayer.level
  : 0;

export const magicWarriorMasteryFlatMATKPassive = (config: Config) =>
  isUsingSubMD(config) ?
    magicBladeSkills(config).magicWarriorMastery.level * 2 +
    (magicBladeSkills(config).magicWarriorMastery.level - 5 > 0 ?
      magicBladeSkills(config).magicWarriorMastery.level - 5
    : 0)
  : 0;

export const conversionFlatMATKPassive = (config: Config) =>
  (
    isUsingMainTHS(config) ||
    isUsingMainBWG(config) ||
    isUsingMainKN(config) ||
    isUsingMainOHS(config)
  ) ?
    Math.floor(
      (magicBladeSkills(config).conversion.level ** 2 / 100) *
        (isUsingMainKN(config) ?
          totalMainWeaponATK(config) * 0.5
        : totalMainWeaponATK(config)),
    )
  : 0;

export const regisletMagicAttackBoostFlatMATK = (config: Config) =>
  regislets(config).magicAttackBoost.level;

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
  magicMasteryPercentMATKPassive(config) + prayerPercentMATKBuff(config);

export const totalPercentMATK = (config: Config) =>
  totalPercentMATKFromEquipment(config) +
  totalPercentMATKFromSkills(config);

export const totalFlatMATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + regisletMagicAttackBoostFlatMATK(config);

export const totalFlatMATKFromSkills = (config: Config) =>
  magicUPFlatMATKPassive(config) +
  increasedEnergyFlatMATKPassive(config) +
  magicWarriorMasteryFlatMATKPassive(config) +
  conversionFlatMATKPassive(config);

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
