import { type Config, type Stat } from "./data";

export const add = (a: number, b: number) => a + b;

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const characterLevel = (config: Config) => config.properties.level;

export const isUsingStatAccessibleSubWeapon = (config: Config) =>
  isUsingSubArrow(config) ||
  isUsingSubDagger(config) ||
  isUsingSubScroll(config) ||
  isUsingSubShield(config);

export const isUsingMainOHS = (config: Config) =>
  config.equipments.mainweapon.type === "ONE_HANDED_SWORD";

export const isUsingSubOHS = (config: Config) =>
  config.equipments.subweapon.type === "ONE_HANDED_SWORD";

export const isUsingMainTHS = (config: Config) =>
  config.equipments.mainweapon.type === "TWO_HANDED_SWORD";

export const isUsingMainHAL = (config: Config) =>
  config.equipments.mainweapon.type === "HALBERD";

export const isUsingMainBOW = (config: Config) =>
  config.equipments.mainweapon.type === "BOW";

export const isUsingMainSTF = (config: Config) =>
  config.equipments.mainweapon.type === "STAFF";

export const isUsingMainMD = (config: Config) =>
  config.equipments.mainweapon.type === "MAGIC_DEVICE";

export const isUsingMainKTN = (config: Config) =>
  config.equipments.mainweapon.type === "KATANA";

export const isUsingDualSwords = (config: Config) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  config.skillTrees.dualSwordSkills.dualswordmastery.level > 0;

export const isUsingMainBWG = (config: Config) =>
  config.equipments.mainweapon.type === "BOWGUN";

export const isUsingMainKN = (config: Config) =>
  config.equipments.mainweapon.type === "KNUCKLES";

export const isUsingSubMD = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE";

export const isUsingSubKN = (config: Config) =>
  config.equipments.subweapon.type === "KNUCKLES";

export const isUsingSubArrow = (config: Config) =>
  config.equipments.subweapon.type === "ARROW";

export const isUsingSubDagger = (config: Config) =>
  config.equipments.subweapon.type === "DAGGER";

export const isUsingSubShield = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD";

export const isUsingSubScroll = (config: Config) =>
  config.equipments.subweapon.type === "NINJUTSU_SCROLL";

export const isNotUsingSubWeapon = (config: Config) =>
  config.equipments.subweapon.type === "NONE";

export const isUsingHeavyArmor = (config: Config) =>
  config.equipments.armor.type === "HEAVY_ARMOR";

export const isUsingLightArmor = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR";

export const flattenedStatsFromMainWeapon = (config: Config) =>
  config.equipments.mainweapon.stats(config);

export const flattenedStatsFromMainWeaponCrystal1 = (config: Config) =>
  config.equipments.mainweapon.crystal1(config);

export const flattenedStatsFromMainWeaponCrystal2 = (config: Config) =>
  config.equipments.mainweapon.crystal2(config);

export const flattenedStatsFromSubWeapon = (config: Config) =>
  isUsingStatAccessibleSubWeapon(config) ?
    config.equipments.subweapon.stats(config)
  : [];

export const flattenedStatsFromArmor = (config: Config) =>
  config.equipments.armor.stats(config);

export const flattenedStatsFromArmorCrystal1 = (config: Config) =>
  config.equipments.armor.crystal1(config);

export const flattenedStatsFromArmorCrystal2 = (config: Config) =>
  config.equipments.armor.crystal2(config);

export const flattenedStatsFromAdditionalGear = (config: Config) =>
  config.equipments.additionalGear.stats(config);

export const flattenedStatsFromAdditionalGearCrystal1 = (config: Config) =>
  config.equipments.additionalGear.crystal1(config);

export const flattenedStatsFromAdditionalGearCrystal2 = (config: Config) =>
  config.equipments.additionalGear.crystal2(config);

export const flattenedStatsFromSpecialGear = (config: Config) =>
  config.equipments.specialGear.stats(config);

export const flattenedStatsFromSpecialGearCrystal1 = (config: Config) =>
  config.equipments.specialGear.crystal1(config);

export const flattenedStatsFromSpecialGearCrystal2 = (config: Config) =>
  config.equipments.specialGear.crystal2(config);

export const flattenedStats = (config: Config) =>
  ([] as Stat[]).concat(
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
    config.consumables,
    config.foodBuffs,
  );

export const bladeSkills = (config: Config) =>
  config.skillTrees.bladeSkills;

// conditioning

export const If = <C>(
  condition: C,
): {
  then: <T>(v: T) => { else: (v: T) => T };
} => ({
  then: (a) => ({ else: (b) => (condition ? a : b) }),
});
