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

// enum WeaponFlags {
//   BH,
//   OHS,
//   THS,
//   BOW,
//   MAIN_BWG,
//   MAIN_STF,
//   MAIN_MD,
//   MAIN_KN,
//   MAIN_HAL,
//   MAIN_KTN,
//   MD,
//   ARROW,
//   SHIELD,
//   DAGGER,
//   SCROLL,
//   KN,
//   OHS,
//   KTN,
//   NONE,
// }

// const convertWeaponRestrictionToBitSet = (
//   restriction: MainWeaponTypeName | SubWeaponTypeName,
// ) => {
//   let bitSet = new BitSet("0000000000000000000");

//   if (restriction === "MAIN_BH") {
//     bitSet.set(WeaponFlags.MAIN_BH);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SHIELD);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.MD);
//     bitSet.set(WeaponFlags.KN);
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "MAIN_OHS") {
//     bitSet.set(WeaponFlags.MAIN_OHS);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SHIELD);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.OHS);
//     bitSet.set(WeaponFlags.MD);
//     bitSet.set(WeaponFlags.KN);
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "MAIN_THS") {
//     bitSet.set(WeaponFlags.MAIN_THS);

//     bitSet.set(WeaponFlags.NONE);
//   } else if (restriction === "MAIN_BOW") {
//     bitSet.set(WeaponFlags.MAIN_BOW);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.KTN);
//   } else if (restriction === "MAIN_BWG") {
//     bitSet.set(WeaponFlags.MAIN_BWG);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SHIELD);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.MD);
//     bitSet.set(WeaponFlags.KN);
//   } else if (restriction === "MAIN_STF") {
//     bitSet.set(WeaponFlags.MAIN_STF);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SHIELD);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.OHS);
//     bitSet.set(WeaponFlags.MD);
//     bitSet.set(WeaponFlags.KN);
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "MAIN_MD") {
//     bitSet.set(WeaponFlags.MAIN_MD);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "MAIN_KN") {
//     bitSet.set(WeaponFlags.MAIN_KN);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.SHIELD);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.ARROW);
//     bitSet.set(WeaponFlags.MD);
//   } else if (restriction === "MAIN_HAL") {
//     bitSet.set(WeaponFlags.MAIN_HAL);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.ARROW);
//   } else if (restriction === "MAIN_KTN") {
//     bitSet.set(WeaponFlags.MAIN_KTN);

//     bitSet.set(WeaponFlags.NONE);
//     bitSet.set(WeaponFlags.DAGGER);
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "MD") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_KN);

//     bitSet.set(WeaponFlags.MD);
//   } else if (restriction === "SHIELD") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_KN);

//     bitSet.set(WeaponFlags.SHIELD);
//   } else if (restriction === "ARROW") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_BOW);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_KN);
//     bitSet.set(WeaponFlags.MAIN_HAL);

//     bitSet.set(WeaponFlags.ARROW);
//   } else if (restriction === "DAGGER") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_KN);
//     bitSet.set(WeaponFlags.MAIN_HAL);

//     bitSet.set(WeaponFlags.DAGGER);
//   } else if (restriction === "SCROLL") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_MD);
//     bitSet.set(WeaponFlags.MAIN_KN);
//     bitSet.set(WeaponFlags.MAIN_KTN);

//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (restriction === "KN") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);

//     bitSet.set(WeaponFlags.KN);
//   } else if (restriction === "OHS") {
//     bitSet.set(WeaponFlags.MAIN_OHS);

//     bitSet.set(WeaponFlags.OHS);
//   } else if (restriction === "KTN") {
//     bitSet.set(WeaponFlags.MAIN_BOW);

//     bitSet.set(WeaponFlags.KTN);
//   } else if (restriction === "NONE") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//     bitSet.set(WeaponFlags.MAIN_OHS);
//     bitSet.set(WeaponFlags.MAIN_THS);
//     bitSet.set(WeaponFlags.MAIN_BOW);
//     bitSet.set(WeaponFlags.MAIN_BWG);
//     bitSet.set(WeaponFlags.MAIN_STF);
//     bitSet.set(WeaponFlags.MAIN_MD);
//     bitSet.set(WeaponFlags.MAIN_KN);
//     bitSet.set(WeaponFlags.MAIN_HAL);
//     bitSet.set(WeaponFlags.MAIN_KTN);

//     bitSet.set(WeaponFlags.NONE);
//   }

//   return bitSet;
// };

// const convertWeaponRestrictionsToBitSets = (
//   restrictions: (MainWeaponTypeName | SubWeaponTypeName)[],
// ) => {
//   let weaponRestrictionBitSets: Array<BitSet> = new Array();

//   restrictions.forEach((restriction) => {
//     weaponRestrictionBitSets.push(
//       convertWeaponRestrictionToBitSet(restriction),
//     );
//   });

//   return weaponRestrictionBitSets;
// };

// const createWeaponBitSet = (
//   weapon: MainWeaponTypeName | SubWeaponTypeName,
// ) => {
//   let bitSet = new BitSet("0000000000000000000");

//   if (weapon === "MAIN_BH") {
//     bitSet.set(WeaponFlags.MAIN_BH);
//   } else if (weapon === "MAIN_OHS") {
//     bitSet.set(WeaponFlags.MAIN_OHS);
//   } else if (weapon === "MAIN_THS") {
//     bitSet.set(WeaponFlags.MAIN_THS);
//   } else if (weapon === "MAIN_BOW") {
//     bitSet.set(WeaponFlags.MAIN_BOW);
//   } else if (weapon === "MAIN_BWG") {
//     bitSet.set(WeaponFlags.MAIN_BWG);
//   } else if (weapon === "MAIN_STF") {
//     bitSet.set(WeaponFlags.MAIN_STF);
//   } else if (weapon === "MAIN_MD") {
//     bitSet.set(WeaponFlags.MAIN_MD);
//   } else if (weapon === "MAIN_KN") {
//     bitSet.set(WeaponFlags.MAIN_KN);
//   } else if (weapon === "MAIN_HAL") {
//     bitSet.set(WeaponFlags.MAIN_HAL);
//   } else if (weapon === "MAIN_KTN") {
//     bitSet.set(WeaponFlags.MAIN_KTN);
//   } else if (weapon === "MD") {
//     bitSet.set(WeaponFlags.MD);
//   } else if (weapon === "SHIELD") {
//     bitSet.set(WeaponFlags.SHIELD);
//   } else if (weapon === "ARROW") {
//     bitSet.set(WeaponFlags.ARROW);
//   } else if (weapon === "DAGGER") {
//     bitSet.set(WeaponFlags.DAGGER);
//   } else if (weapon === "SCROLL") {
//     bitSet.set(WeaponFlags.SCROLL);
//   } else if (weapon === "KN") {
//     bitSet.set(WeaponFlags.KN);
//   } else if (weapon === "OHS") {
//     bitSet.set(WeaponFlags.OHS);
//   } else if (weapon === "KTN") {
//     bitSet.set(WeaponFlags.KTN);
//   } else if (weapon === "NONE") {
//     bitSet.set(WeaponFlags.NONE);
//   }

//   return bitSet;
// };

// export const createRestrictionFrom = (
//   restrictions: (MainWeaponTypeName | SubWeaponTypeName)[],
// ) => ({
//   satisfies: (main: MainWeaponTypeName, sub: SubWeaponTypeName) => {
//     const restrictionBitSets =
//       convertWeaponRestrictionsToBitSets(restrictions);

//     const weaponPairBitSet = createWeaponBitSet(main).or(
//       createWeaponBitSet(sub),
//     );

//     for (let k = 0; k < restrictionBitSets.length; k++) {
//       if (
//         restrictionBitSets[k].equals(
//           restrictionBitSets[k].or(weaponPairBitSet),
//         )
//       ) {
//         return true;
//       }
//     }

//     return false;
//   },
// });
