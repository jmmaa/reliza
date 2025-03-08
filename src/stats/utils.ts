import BitSet from "bitset";
import {
  MainWeaponTypeName,
  SubWeaponTypeName,
  type Stat,
  type StatCalcConfig,
} from "./types";

export const add = (a: number, b: number) => a + b;

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

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
  config.equipments.mainweapon.type === "MAIN_OHS";

export const isUsingSubOHS = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_OHS";

export const isUsingMainTHS = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_THS";

export const isUsingMainHAL = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_HAL";

export const isUsingMainBOW = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_BOW";

export const isUsingMainSTF = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_STF";

export const isUsingMainMD = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_MD";

export const isUsingMainKTN = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_KTN";

export const isUsingBareHand = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_BH";

export const isUsingDualSwords = (config: StatCalcConfig) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  dualSwordSkills(config).dualSwordMastery.level > 0;

export const isUsingMainBWG = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_BWG";

export const isUsingMainKN = (config: StatCalcConfig) =>
  config.equipments.mainweapon.type === "MAIN_KN";

export const isUsingSubMD = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_MD";

export const isUsingSubKN = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_KN";

export const isUsingSubArrow = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_ARROW";

export const isUsingSubDagger = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_DAGGER";

export const isUsingSubShield = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_SHIELD";

export const isUsingSubScroll = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_SCROLL";

export const isNotUsingSubWeapon = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_NONE";

export const isUsingHeavyArmor = (config: StatCalcConfig) =>
  config.equipments.armor.type === "HEAVY_ARMOR";

export const isUsingLightArmor = (config: StatCalcConfig) =>
  config.equipments.armor.type === "LIGHT_ARMOR";

export const isUsingSubKTN = (config: StatCalcConfig) =>
  config.equipments.subweapon.type === "SUB_KTN";

export const flattenedStatsFromMainWeapon = (config: StatCalcConfig) =>
  config.equipments.mainweapon.stats(config);

export const flattenedStatsFromMainWeaponCrystal1 = (
  config: StatCalcConfig,
) => config.equipments.mainweapon.crystal1(config);

export const flattenedStatsFromMainWeaponCrystal2 = (
  config: StatCalcConfig,
) => config.equipments.mainweapon.crystal2(config);

export const flattenedStatsFromSubWeapon = (config: StatCalcConfig) =>
  isUsingStatAccessibleSubWeapon(config) ?
    config.equipments.subweapon.stats(config)
  : [];

export const flattenedStatsFromArmor = (config: StatCalcConfig) =>
  config.equipments.armor.stats(config);

export const flattenedStatsFromArmorCrystal1 = (config: StatCalcConfig) =>
  config.equipments.armor.crystal1(config);

export const flattenedStatsFromArmorCrystal2 = (config: StatCalcConfig) =>
  config.equipments.armor.crystal2(config);

export const flattenedStatsFromAdditionalGear = (config: StatCalcConfig) =>
  config.equipments.additionalGear.stats(config);

export const flattenedStatsFromAdditionalGearCrystal1 = (
  config: StatCalcConfig,
) => config.equipments.additionalGear.crystal1(config);

export const flattenedStatsFromAdditionalGearCrystal2 = (
  config: StatCalcConfig,
) => config.equipments.additionalGear.crystal2(config);

export const flattenedStatsFromSpecialGear = (config: StatCalcConfig) =>
  config.equipments.specialGear.stats(config);

export const flattenedStatsFromSpecialGearCrystal1 = (
  config: StatCalcConfig,
) => config.equipments.specialGear.crystal1(config);

export const flattenedStatsFromSpecialGearCrystal2 = (
  config: StatCalcConfig,
) => config.equipments.specialGear.crystal2(config);

export const flattenedStats = (config: StatCalcConfig) =>
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

enum WeaponFlags {
  MAIN_BH,
  MAIN_OHS,
  MAIN_THS,
  MAIN_BOW,
  MAIN_BWG,
  MAIN_STF,
  MAIN_MD,
  MAIN_KN,
  MAIN_HAL,
  MAIN_KTN,
  SUB_MD,
  SUB_ARROW,
  SUB_SHIELD,
  SUB_DAGGER,
  SUB_SCROLL,
  SUB_KN,
  SUB_OHS,
  SUB_KTN,
  SUB_NONE,
}

const convertWeaponRestrictionToBitSet = (
  restriction: MainWeaponTypeName | SubWeaponTypeName,
) => {
  let bitSet = new BitSet("0000000000000000000");

  if (restriction === "MAIN_BH") {
    bitSet.set(WeaponFlags.MAIN_BH);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SHIELD);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_MD);
    bitSet.set(WeaponFlags.SUB_KN);
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "MAIN_OHS") {
    bitSet.set(WeaponFlags.MAIN_OHS);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SHIELD);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_OHS);
    bitSet.set(WeaponFlags.SUB_MD);
    bitSet.set(WeaponFlags.SUB_KN);
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "MAIN_THS") {
    bitSet.set(WeaponFlags.MAIN_THS);

    bitSet.set(WeaponFlags.SUB_NONE);
  } else if (restriction === "MAIN_BOW") {
    bitSet.set(WeaponFlags.MAIN_BOW);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_KTN);
  } else if (restriction === "MAIN_BWG") {
    bitSet.set(WeaponFlags.MAIN_BWG);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SHIELD);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_MD);
    bitSet.set(WeaponFlags.SUB_KN);
  } else if (restriction === "MAIN_STF") {
    bitSet.set(WeaponFlags.MAIN_STF);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SHIELD);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_OHS);
    bitSet.set(WeaponFlags.SUB_MD);
    bitSet.set(WeaponFlags.SUB_KN);
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "MAIN_MD") {
    bitSet.set(WeaponFlags.MAIN_MD);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "MAIN_KN") {
    bitSet.set(WeaponFlags.MAIN_KN);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_SHIELD);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_ARROW);
    bitSet.set(WeaponFlags.SUB_MD);
  } else if (restriction === "MAIN_HAL") {
    bitSet.set(WeaponFlags.MAIN_HAL);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_ARROW);
  } else if (restriction === "MAIN_KTN") {
    bitSet.set(WeaponFlags.MAIN_KTN);

    bitSet.set(WeaponFlags.SUB_NONE);
    bitSet.set(WeaponFlags.SUB_DAGGER);
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "SUB_MD") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_KN);

    bitSet.set(WeaponFlags.SUB_MD);
  } else if (restriction === "SUB_SHIELD") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_KN);

    bitSet.set(WeaponFlags.SUB_SHIELD);
  } else if (restriction === "SUB_ARROW") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_BOW);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_KN);
    bitSet.set(WeaponFlags.MAIN_HAL);

    bitSet.set(WeaponFlags.SUB_ARROW);
  } else if (restriction === "SUB_DAGGER") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_KN);
    bitSet.set(WeaponFlags.MAIN_HAL);

    bitSet.set(WeaponFlags.SUB_DAGGER);
  } else if (restriction === "SUB_SCROLL") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_MD);
    bitSet.set(WeaponFlags.MAIN_KN);
    bitSet.set(WeaponFlags.MAIN_KTN);

    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (restriction === "SUB_KN") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);

    bitSet.set(WeaponFlags.SUB_KN);
  } else if (restriction === "SUB_OHS") {
    bitSet.set(WeaponFlags.MAIN_OHS);

    bitSet.set(WeaponFlags.SUB_OHS);
  } else if (restriction === "SUB_KTN") {
    bitSet.set(WeaponFlags.MAIN_BOW);

    bitSet.set(WeaponFlags.SUB_KTN);
  } else if (restriction === "SUB_NONE") {
    bitSet.set(WeaponFlags.MAIN_BH);
    bitSet.set(WeaponFlags.MAIN_OHS);
    bitSet.set(WeaponFlags.MAIN_THS);
    bitSet.set(WeaponFlags.MAIN_BOW);
    bitSet.set(WeaponFlags.MAIN_BWG);
    bitSet.set(WeaponFlags.MAIN_STF);
    bitSet.set(WeaponFlags.MAIN_MD);
    bitSet.set(WeaponFlags.MAIN_KN);
    bitSet.set(WeaponFlags.MAIN_HAL);
    bitSet.set(WeaponFlags.MAIN_KTN);

    bitSet.set(WeaponFlags.SUB_NONE);
  }

  return bitSet;
};

const convertWeaponRestrictionsToBitSets = (
  restrictions: (MainWeaponTypeName | SubWeaponTypeName)[],
) => {
  let weaponRestrictionBitSets: Array<BitSet> = new Array();

  restrictions.forEach((restriction) => {
    weaponRestrictionBitSets.push(
      convertWeaponRestrictionToBitSet(restriction),
    );
  });

  return weaponRestrictionBitSets;
};

const createWeaponBitSet = (
  weapon: MainWeaponTypeName | SubWeaponTypeName,
) => {
  let bitSet = new BitSet("0000000000000000000");

  if (weapon === "MAIN_BH") {
    bitSet.set(WeaponFlags.MAIN_BH);
  } else if (weapon === "MAIN_OHS") {
    bitSet.set(WeaponFlags.MAIN_OHS);
  } else if (weapon === "MAIN_THS") {
    bitSet.set(WeaponFlags.MAIN_THS);
  } else if (weapon === "MAIN_BOW") {
    bitSet.set(WeaponFlags.MAIN_BOW);
  } else if (weapon === "MAIN_BWG") {
    bitSet.set(WeaponFlags.MAIN_BWG);
  } else if (weapon === "MAIN_STF") {
    bitSet.set(WeaponFlags.MAIN_STF);
  } else if (weapon === "MAIN_MD") {
    bitSet.set(WeaponFlags.MAIN_MD);
  } else if (weapon === "MAIN_KN") {
    bitSet.set(WeaponFlags.MAIN_KN);
  } else if (weapon === "MAIN_HAL") {
    bitSet.set(WeaponFlags.MAIN_HAL);
  } else if (weapon === "MAIN_KTN") {
    bitSet.set(WeaponFlags.MAIN_KTN);
  } else if (weapon === "SUB_MD") {
    bitSet.set(WeaponFlags.SUB_MD);
  } else if (weapon === "SUB_SHIELD") {
    bitSet.set(WeaponFlags.SUB_SHIELD);
  } else if (weapon === "SUB_ARROW") {
    bitSet.set(WeaponFlags.SUB_ARROW);
  } else if (weapon === "SUB_DAGGER") {
    bitSet.set(WeaponFlags.SUB_DAGGER);
  } else if (weapon === "SUB_SCROLL") {
    bitSet.set(WeaponFlags.SUB_SCROLL);
  } else if (weapon === "SUB_KN") {
    bitSet.set(WeaponFlags.SUB_KN);
  } else if (weapon === "SUB_OHS") {
    bitSet.set(WeaponFlags.SUB_OHS);
  } else if (weapon === "SUB_KTN") {
    bitSet.set(WeaponFlags.SUB_KTN);
  } else if (weapon === "SUB_NONE") {
    bitSet.set(WeaponFlags.SUB_NONE);
  }

  return bitSet;
};

export const createRestrictionFrom = (
  restrictions: (MainWeaponTypeName | SubWeaponTypeName)[],
) => ({
  satisfies: (main: MainWeaponTypeName, sub: SubWeaponTypeName) => {
    const restrictionBitSets =
      convertWeaponRestrictionsToBitSets(restrictions);

    const weaponPairBitSet = createWeaponBitSet(main).or(
      createWeaponBitSet(sub),
    );

    for (let k = 0; k < restrictionBitSets.length; k++) {
      if (
        restrictionBitSets[k].equals(
          restrictionBitSets[k].or(weaponPairBitSet),
        )
      ) {
        return true;
      }
    }

    return false;
  },
});
