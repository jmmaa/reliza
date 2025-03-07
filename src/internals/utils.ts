import BitSet from "bitset";
import {
  MainWeaponTypeName,
  SubWeaponTypeName,
  type Config,
  type Stat,
} from "./data";

export const add = (a: number, b: number) => a + b;

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const characterLevel = (config: Config) => config.properties.level;

export const mainWeaponType = (config: Config) =>
  config.equipments.mainweapon.type;
export const subWeaponType = (config: Config) =>
  config.equipments.subweapon.type;

export const isUsingStatAccessibleSubWeapon = (config: Config) =>
  isUsingSubArrow(config) ||
  isUsingSubDagger(config) ||
  isUsingSubScroll(config) ||
  isUsingSubShield(config);

export const isUsingMainOHS = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_OHS";

export const isUsingSubOHS = (config: Config) =>
  config.equipments.subweapon.type === "SUB_OHS";

export const isUsingMainTHS = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_THS";

export const isUsingMainHAL = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_HAL";

export const isUsingMainBOW = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_BOW";

export const isUsingMainSTF = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_STF";

export const isUsingMainMD = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_MD";

export const isUsingMainKTN = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_KTN";

export const isUsingBareHand = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_BH";

export const isUsingDualSwords = (config: Config) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  dualSwordSkills(config).dualSwordMastery.level > 0;

export const isUsingMainBWG = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_BWG";

export const isUsingMainKN = (config: Config) =>
  config.equipments.mainweapon.type === "MAIN_KN";

export const isUsingSubMD = (config: Config) =>
  config.equipments.subweapon.type === "SUB_MD";

export const isUsingSubKN = (config: Config) =>
  config.equipments.subweapon.type === "SUB_KN";

export const isUsingSubArrow = (config: Config) =>
  config.equipments.subweapon.type === "SUB_ARROW";

export const isUsingSubDagger = (config: Config) =>
  config.equipments.subweapon.type === "SUB_DAGGER";

export const isUsingSubShield = (config: Config) =>
  config.equipments.subweapon.type === "SUB_SHIELD";

export const isUsingSubScroll = (config: Config) =>
  config.equipments.subweapon.type === "SUB_SCROLL";

export const isNotUsingSubWeapon = (config: Config) =>
  config.equipments.subweapon.type === "SUB_NONE";

export const isUsingHeavyArmor = (config: Config) =>
  config.equipments.armor.type === "HEAVY_ARMOR";

export const isUsingLightArmor = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR";

export const isUsingSubKTN = (config: Config) =>
  config.equipments.subweapon.type === "SUB_KTN";

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
  config.statModifiers.bladeSkills;

export const battleSkills = (config: Config) =>
  config.statModifiers.battleSkills;

export const ninjaSkills = (config: Config) =>
  config.statModifiers.ninjaSkills;

export const mononofuSkills = (config: Config) =>
  config.statModifiers.mononofuSkills;

export const halberdSkills = (config: Config) =>
  config.statModifiers.halberdSkills;

export const dualSwordSkills = (config: Config) =>
  config.statModifiers.dualSwordSkills;

export const magicBladeSkills = (config: Config) =>
  config.statModifiers.magicBladeSkills;

export const shotSkills = (config: Config) =>
  config.statModifiers.shotSkills;

export const martialSkills = (config: Config) =>
  config.statModifiers.martialSkills;
export const bareHandSkills = (config: Config) =>
  config.statModifiers.bareHandSkills;

export const wizardSkills = (config: Config) =>
  config.statModifiers.wizardSkills;

export const hunterSkills = (config: Config) =>
  config.statModifiers.hunterSkills;

export const shieldSkills = (config: Config) =>
  config.statModifiers.shieldSkills;

export const survivalSkills = (config: Config) =>
  config.statModifiers.survivalSkills;

export const supportSkills = (config: Config) =>
  config.statModifiers.supportSkills;

export const priestSkills = (config: Config) =>
  config.statModifiers.priestSkills;

export const magicSkills = (config: Config) =>
  config.statModifiers.magicSkills;

export const guardSkills = (config: Config) =>
  config.statModifiers.guardSkills;

export const regislets = (config: Config) =>
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
