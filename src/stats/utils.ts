import Decimal from "decimal.js";
import { mergician } from "mergician";
import { defaultStatGroup } from ".";
import { StatGroup, StatMap, type StatCalcConfig } from "./types";

Decimal.set({ precision: 15, rounding: 1 });

export const D = Decimal;

export const merge = <L extends object, R extends object>(
  a: L,
  b: R,
): L & R => mergician(a, b) as L & R;

export const add = (a: number, b: number) => a + b;

export const total = (base: number, percent: number, flat: number) => {
  const BASE = D(base);
  const PERCENT = D(percent);
  const FLAT = D(flat);

  return D.round(BASE.times(D(100).plus(PERCENT)).dividedBy(D(100)))
    .plus(FLAT)
    .toNumber();
};

export const characterLevel = (config: StatCalcConfig) =>
  config.properties.level;

export const mainWeaponType = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type;
export const subWeaponType = (config: StatCalcConfig) =>
  config.equipments.subweapon.type;

export const isUsingStatAccessibleSubWeapon = (config: StatCalcConfig) =>
  isUsingSubArrow(config) ||
  isUsingSubDagger(config) ||
  isUsingSubScroll(config) ||
  isUsingSubShield(config);

export const isUsingMainOHS = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "OHS";

export const isUsingSubOHS = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "OHS";

export const isUsingMainTHS = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "THS";

export const isUsingMainHAL = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "HAL";

export const isUsingMainBOW = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "BOW";

export const isUsingMainSTF = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "STF";

export const isUsingMainMD = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MD";

export const isUsingMainKTN = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "KTN";

export const isUsingBareHand = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "BH";

export const isUsingDualSwords = (config: StatCalcConfig) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  dualSwordSkills(config).dualSwordMastery.level > 0;

export const isUsingMainBWG = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "BWG";

export const isUsingMainKN = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "KN";

export const isUsingSubMD = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "MD";

export const isUsingSubKN = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "KN";

export const isUsingSubArrow = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "ARROW";

export const isUsingSubDagger = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "DAGGER";

export const isUsingSubShield = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SHIELD";

export const isUsingSubScroll = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SCROLL";

export const isNotUsingSubWeapon = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "NONE";

export const isUsingHeavyArmor = (config: StatCalcConfig) =>
  config.equipments.armor.type === "HEAVY_ARMOR";

export const isUsingLightArmor = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR";

export const isUsingSubKTN = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "KTN";

export const collectStatGroupsFromStatMap = (
  config: StatCalcConfig,
  statMap: StatGroup,
) => {
  let accumulated = [];

  accumulated.push(statMap.default);

  if (isUsingMainBWG(config)) {
    accumulated.push(statMap.withBowguns);
  }

  if (isUsingMainBOW(config)) {
    accumulated.push(statMap.withBows);
  }

  if (isUsingSubArrow(config)) {
    accumulated.push(statMap.withArrow);
  }

  if (isUsingSubDagger(config)) {
    accumulated.push(statMap.withDagger);
  }

  if (isUsingMainHAL(config)) {
    accumulated.push(statMap.withHalberds);
  }

  if (isUsingMainKTN(config)) {
    accumulated.push(statMap.withKatanas);
  }

  if (isUsingMainOHS(config)) {
    accumulated.push(statMap.withOneHandedSwords);
  }

  if (isUsingMainTHS(config)) {
    accumulated.push(statMap.withTwoHandedSwords);
  }

  if (isUsingDualSwords(config)) {
    accumulated.push(statMap.withDualSwords);
  }

  if (isUsingMainSTF(config)) {
    accumulated.push(statMap.withStaffs);
  }

  if (isUsingSubShield(config)) {
    accumulated.push(statMap.withShield);
  }

  if (isUsingSubScroll(config)) {
    accumulated.push(statMap.withNinjutsuScroll);
  }

  if (isUsingHeavyArmor(config)) {
    accumulated.push(statMap.withHeavyArmor);
  }

  if (isUsingLightArmor(config)) {
    accumulated.push(statMap.withLightArmor);
  }

  if (isUsingMainMD(config) || isUsingSubMD(config)) {
    accumulated.push(statMap.withMagicTools);
  }

  if (isUsingMainKN(config) || isUsingSubKN(config)) {
    accumulated.push(statMap.withKnuckles);
  }

  return accumulated;
};

export const flattenedStatsFromMainWeapon = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(config, config.equipments.mainweapon.stats);

export const flattenedStatsFromMainWeaponCrystal1 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.mainweapon.crystal1,
  );

export const flattenedStatsFromMainWeaponCrystal2 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.mainweapon.crystal2,
  );

export const flattenedStatsFromSubWeapon = (config: StatCalcConfig) =>
  isUsingStatAccessibleSubWeapon(config) ?
    collectStatGroupsFromStatMap(config, config.equipments.subweapon.stats)
  : [];

export const flattenedStatsFromArmor = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(config, config.equipments.armor.stats);

export const flattenedStatsFromArmorCrystal1 = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(config, config.equipments.armor.crystal1);

export const flattenedStatsFromArmorCrystal2 = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(config, config.equipments.armor.crystal2);

export const flattenedStatsFromAdditionalGear = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.additionalGear.stats,
  );

export const flattenedStatsFromAdditionalGearCrystal1 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.additionalGear.crystal1,
  );

export const flattenedStatsFromAdditionalGearCrystal2 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.additionalGear.crystal2,
  );

export const flattenedStatsFromSpecialGear = (config: StatCalcConfig) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.specialGear.stats,
  );

export const flattenedStatsFromSpecialGearCrystal1 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.specialGear.crystal1,
  );

export const flattenedStatsFromSpecialGearCrystal2 = (
  config: StatCalcConfig,
) =>
  collectStatGroupsFromStatMap(
    config,
    config.equipments.specialGear.crystal2,
  );

export const flattenedStats = (config: StatCalcConfig) =>
  ([] as StatMap[]).concat(
    flattenedStatsFromMainWeapon(config),
    flattenedStatsFromMainWeaponCrystal1(config),
    flattenedStatsFromMainWeaponCrystal2(config),
    flattenedStatsFromSubWeapon(config),
    flattenedStatsFromArmor(config),
    flattenedStatsFromArmorCrystal1(config),
    flattenedStatsFromArmorCrystal2(config),
    flattenedStatsFromAdditionalGear(config),
    flattenedStatsFromAdditionalGearCrystal1(config),
    flattenedStatsFromAdditionalGearCrystal2(config),
    flattenedStatsFromSpecialGear(config),
    flattenedStatsFromSpecialGearCrystal1(config),
    flattenedStatsFromSpecialGearCrystal2(config),
    config.consumables.map((stat) => ({
      ...defaultStatGroup,
      ...stat,
    })),
    config.foodBuffs.map((stat) => ({
      ...defaultStatGroup,
      ...stat,
    })),
  );

export const bladeSkills = (config: StatCalcConfig) =>
  config.statModifiers.bladeSkills;

export const battleSkills = (config: StatCalcConfig) =>
  config.statModifiers.battleSkills;

export const ninjaSkills = (config: StatCalcConfig) =>
  config.statModifiers.ninjaSkills;

export const mononofuSkills = (config: StatCalcConfig) =>
  config.statModifiers.mononofuSkills;

export const halberdSkills = (config: StatCalcConfig) =>
  config.statModifiers.halberdSkills;

export const dualSwordSkills = (config: StatCalcConfig) =>
  config.statModifiers.dualSwordSkills;

export const magicBladeSkills = (config: StatCalcConfig) =>
  config.statModifiers.magicBladeSkills;

export const shotSkills = (config: StatCalcConfig) =>
  config.statModifiers.shotSkills;

export const martialSkills = (config: StatCalcConfig) =>
  config.statModifiers.martialSkills;
export const bareHandSkills = (config: StatCalcConfig) =>
  config.statModifiers.bareHandSkills;

export const wizardSkills = (config: StatCalcConfig) =>
  config.statModifiers.wizardSkills;

export const hunterSkills = (config: StatCalcConfig) =>
  config.statModifiers.hunterSkills;

export const shieldSkills = (config: StatCalcConfig) =>
  config.statModifiers.shieldSkills;

export const survivalSkills = (config: StatCalcConfig) =>
  config.statModifiers.survivalSkills;

export const supportSkills = (config: StatCalcConfig) =>
  config.statModifiers.supportSkills;

export const priestSkills = (config: StatCalcConfig) =>
  config.statModifiers.priestSkills;

export const magicSkills = (config: StatCalcConfig) =>
  config.statModifiers.magicSkills;

export const guardSkills = (config: StatCalcConfig) =>
  config.statModifiers.guardSkills;

export const regislets = (config: StatCalcConfig) =>
  config.statModifiers.regislets;

// TODO: MAKE SUBWEAPON RESTRICTIONS TO ALSO INCLUDE MAIN WEAPON
