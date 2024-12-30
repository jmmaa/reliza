import { type Config, type Stat } from "./data";
import { isUsingMainKTN, isUsingMainMD, isUsingMainSTF } from "./utils";

export const add = (a: number, b: number) => a + b;

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

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

export const isUsingDualSwords = (config: Config) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  config.skillTrees.dualSwordSkills.dualswordmastery.level > 0;

export const isUsingMainBWG = (config: Config) =>
  config.equipments.mainweapon.type === "BOWGUN";

export const isUsingMainKN = (config: Config) =>
  config.equipments.mainweapon.type === "KNUCKLES";

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

// ---------- BASIC STATS --------------

// AGI
export const totalPercentAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_AGI")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAGI = (config: Config) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_AGI")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAGI = (config: Config) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: Config) =>
  total(
    config.properties.AGI,
    totalPercentAGI(config),
    totalFlatAGI(config),
  );

// DEX
export const totalPercentDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentDEX = (config: Config) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEX")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEX = (config: Config) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: Config) =>
  total(
    config.properties.DEX,
    totalPercentDEX(config),
    totalFlatDEX(config),
  );

// STR

export const totalPercentSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentSTR = (config: Config) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_STR")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatSTR = (config: Config) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: Config) =>
  total(
    config.properties.STR,
    totalPercentSTR(config),
    totalFlatSTR(config),
  );

// INT

export const totalPercentINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentINT = (config: Config) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_INT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatINT = (config: Config) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: Config) =>
  total(
    config.properties.INT,
    totalPercentINT(config),
    totalFlatINT(config),
  );

// VIT

export const totalPercentVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentVIT = (config: Config) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_VIT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatVIT = (config: Config) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: Config) =>
  total(
    config.properties.VIT,
    totalPercentVIT(config),
    totalFlatVIT(config),
  );

// ---------- DERIVED STATS --------------

// accuracy
export const totalBaseAccuracy = (config: Config) =>
  Math.floor(config.properties.level + totalDEX(config));

export const totalPercentAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAccuracyFromSkills = (config: Config) =>
  dualSwordMasteryTotalPercentAccuracy(config) +
  dualSwordControlTotalPercentAccuracy(config) +
  samuraiArcheryTotalPercentAccuracy(config) +
  twoHandedTotalPercentAccuracy(config);

export const totalPercentAccuracy = (config: Config) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAccuracyFromSkills = (config: Config) =>
  bushidoTotalFlatAccuracy(config) + accuracyUPTotalFlatAccuracy(config);

export const totalFlatAccuracy = (config: Config) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: Config) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );

export const totalAnticipate = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "ANTICIPATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

// ailment resistance

export const totalAilmentResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "AILMENT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalAilmentResistanceFromMTL = (config: Config) =>
  config.properties.personalStatName === "MTL" ?
    Math.floor(config.properties.personalStatValue / 3.4)
  : 0;

export const totalAilmentResistance = (config: Config) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);

// ASPD

export const totalDualWieldBaseASPD = (config: Config) =>
  Math.floor(
    100 +
      config.properties.level +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalOneHandedSwordBaseASPD = (config: Config) =>
  Math.floor(
    100 +
      config.properties.level +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalTwoHandedSwordBaseASPD = (config: Config) =>
  Math.floor(
    50 +
      config.properties.level +
      totalAGI(config) * 2 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalBowBaseASPD = (config: Config) =>
  Math.floor(
    75 +
      config.properties.level +
      totalAGI(config) * 3 +
      (totalAGI(config) + totalDEX(config) * 2 - 1) / 10,
  );

export const totalBowgunBaseASPD = (config: Config) =>
  Math.floor(
    30 +
      config.properties.level +
      totalAGI(config) * 2.2 +
      totalDEX(config) * 0.2,
  );

export const totalStaffBaseASPD = (config: Config) =>
  Math.floor(
    60 +
      config.properties.level +
      totalAGI(config) +
      (totalAGI(config) + totalINT(config) - 1) / 5,
  );

export const totalMagicDeviceBaseASPD = (config: Config) =>
  Math.floor(
    90 +
      config.properties.level +
      totalAGI(config) * 4 +
      (totalINT(config) - 1) / 5,
  );

export const totalKnuckleBaseASPD = (config: Config) =>
  Math.floor(
    120 +
      config.properties.level +
      totalAGI(config) * 4.6 +
      totalDEX(config) / 10 +
      totalSTR(config) / 10,
  );

export const totalHalberdBaseASPD = (config: Config) =>
  Math.floor(
    25 +
      config.properties.level +
      totalAGI(config) * 3.5 +
      totalSTR(config) * 0.2,
  );

export const totalKatanaBaseASPD = (config: Config) =>
  Math.floor(
    200 +
      config.properties.level +
      totalAGI(config) * 3.9 +
      totalSTR(config) * 0.3,
  );

export const totalBareHandBaseASPD = (config: Config) =>
  Math.floor(1000 + config.properties.level + totalAGI(config) * 9.6);

export const totalBaseASPD = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseASPD(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseASPD(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseASPD(config)
  : isUsingMainBOW(config) ? totalBowBaseASPD(config)
  : isUsingMainBWG(config) ? totalBowgunBaseASPD(config)
  : isUsingMainSTF(config) ? totalStaffBaseASPD(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseASPD(config)
  : isUsingMainKN(config) ? totalKnuckleBaseASPD(config)
  : isUsingMainHAL(config) ? totalHalberdBaseASPD(config)
  : isUsingMainKTN(config) ? totalKatanaBaseASPD(config)
  : totalBareHandBaseASPD(config);

export const totalPercentASPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ASPD")
    .map((stat) => stat[1])
    .reduce(add, 0) +
  armorTypeIdPercentASPDModifier(config) +
  subWeaponShieldPercentASPDModifier(config);

export const totalPercentASPDFromSkills = (config: Config) =>
  quickSlashTotalPercentASPD(config) +
  berserkTotalPercentASPD(config) +
  quickAuraTotalPercentASPD(config);

export const totalPercentASPD = (config: Config) =>
  totalPercentASPDFromEquipment(config) +
  totalPercentASPDFromSkills(config);

export const totalFlatASPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ASPD")
    .map((stat) => stat[1])
    .reduce(add, 0) + attackSpeedBoostTotalFlatASPD(config);

export const totalFlatASPDFromSkills = (config: Config) =>
  quickSlashTotalFlatASPD(config) +
  berserkTotalFlatASPD(config) +
  martialDisciplineTotalFlatASPD(config) +
  dualSwordControlTotalFlatASPD(config) +
  quickAuraTotalFlatASPD(config) +
  godspeedWieldTotalFlatASPD(config);

export const totalFlatASPD = (config: Config) =>
  totalFlatASPDFromEquipment(config) + totalFlatASPDFromSkills(config);

export const totalASPD = (config: Config) =>
  total(
    totalBaseASPD(config),
    totalPercentASPD(config),
    totalFlatASPD(config),
  );

// ATK

export const totalDualWieldBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunTotalBaseATK(config);

export const totalStaffBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: Config) =>
  config.properties.level +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 1.5 +
      totalDEX(config) * 2.5 +
      totalMainWeaponATK(config),
  );

export const totalBareHandBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseATK(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseATK(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseATK(config)
  : isUsingMainBOW(config) ? totalBowBaseATK(config)
  : isUsingMainBWG(config) ? totalBowgunBaseATK(config)
  : isUsingMainSTF(config) ? totalStaffBaseATK(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseATK(config)
  : isUsingMainKN(config) ? totalKnuckleBaseATK(config)
  : isUsingMainHAL(config) ? totalHalberdBaseATK(config)
  : isUsingMainKTN(config) ? totalKatanaBaseATK(config)
  : totalBareHandBaseATK(config) +
    totalBaseATKValueFromATKUP(config) +
    totalBaseATKValueFromATKDOWN(config);

export const totalPercentATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: Config) =>
  swordMasteryTotalPercentATK(config) +
  shotMasteryTotalPercentATK(config) +
  martialMasteryTotalPercentATK(config) +
  halberdMasteryTotalPercentATK(config) +
  bushidoTotalPercentATK(config) +
  warCryTotalPercentATK(config);

export const totalPercentATK = (config: Config) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryTotalPercentATK(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation

export const totalFlatATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + physicalAttackBoostTotalFlatATK(config);

export const totalFlatATKFromSkills = (config: Config) =>
  attackUPTotalFlatATK(config) + intimidatingPowerTotalFlatATK(config);

export const totalFlatATK = (config: Config) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: Config) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );

// cdmg

export const totalBaseCriticalDamage = (config: Config) => {
  const agi = totalAGI(config);
  const str = totalSTR(config);

  return agi > str ?
      Math.floor(150 + (agi + str) / 10)
    : Math.floor(150 + str / 5);
};

export const totalPercentCriticalDamageFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CRITICAL_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalDamageFromSkills = (config: Config) =>
  criticalUPTotalPercentCriticalDamage(config);

export const totalPercentCriticalDamage = (config: Config) =>
  totalPercentCriticalDamageFromEquipment(config) +
  totalPercentCriticalDamageFromSkills(config);

export const totalFlatCriticalDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CRITICAL_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalCriticalDamage = (config: Config) => {
  const val = total(
    totalBaseCriticalDamage(config),
    totalPercentCriticalDamage(config),
    totalFlatCriticalDamage(config),
  );

  return val > 300 ? 300 + Math.floor((val - 300) / 2) : val; // soft cap
};

export const totalMagicCriticalDamageConversion = (config: Config) =>
  50 + spellBurstTotalMagicCriticalDamageConversion(config);

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalDamage = (config: Config) =>
  Math.floor(
    100 +
      ((totalCriticalDamage(config) - 100) *
        totalMagicCriticalDamageConversion(config)) /
        100,
  );

// critrate
export const totalBaseCriticalRate = (config: Config) =>
  25 +
  (config.properties.personalStatName === "CRT" ?
    Math.floor(config.properties.personalStatValue / 3.4)
  : 0);

export const totalPercentCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CRITICAL_RATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalPercentCriticalRate(config) +
  dualSwordMasteryTotalPercentCriticalRate(config) +
  dualSwordControlTotalPercentCriticalRate(config);

export const totalPercentCriticalRate = (config: Config) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CRITICAL_RATE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatCriticalRateFromSkills = (config: Config) =>
  criticalSpearTotalFlatCriticalRate(config) +
  twoHandedTotalFlatCriticalRate(config) +
  criticalUPTotalFlatCriticalRate(config);

export const totalFlatCriticalRate = (config: Config) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: Config) =>
  total(
    totalBaseCriticalRate(config),
    totalPercentCriticalRate(config),
    totalFlatCriticalRate(config),
  );

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalRateConversion = (config: Config) =>
  spellBurstTotalMagicCriticalRateConversion(config);

export const totalMagicCriticalRate = (config: Config) =>
  Math.floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: Config,
) =>
  totalCriticalRate(config) *
  ((totalMagicCriticalRateConversion(config) + 50) / 100);

// CSPD
export const totalBaseCSPD = (config: Config) =>
  Math.floor(
    config.properties.level +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalPercentCSPD(config) +
  highCycleTotalPercentCSPD(config) +
  castMasteryTotalPercentCSPD(config);

export const totalPercentCSPD = (config: Config) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_CSPD")
    .map((stat) => stat[1])
    .reduce(add, 0) + magicSpeedBoostTotalFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: Config) =>
  magicWarriorMasteryTotalFlatCSPD(config) +
  highCycleTotalFlatCSPD(config) +
  castMasteryTotalFlatCSPD(config) +
  overlimitTotalFlatCSPD(config);

export const totalFlatCSPD = (config: Config) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: Config) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );

// DEF
export const normalArmorBaseDEF = (config: Config) =>
  config.properties.level + totalVIT(config) + totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DEF")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: Config) =>
  berserkTotalPercentDEF(config) + forceShieldTotalPercentDEF(config);

export const totalPercentDEF = (config: Config) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

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

// Dodge
export const normalArmorBaseDodge = (config: Config) =>
  config.properties.level + totalAGI(config);

export const lightArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 1.25 + totalAGI(config) * 1.75) +
  30;

export const heavyArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 0.5 + totalAGI(config) * 0.75) - 15;

export const noArmorBaseDodge = (config: Config) =>
  Math.floor(config.properties.level * 1.5 + totalAGI(config) * 2) + 75;

export const totalBaseDodge = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseDodge(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseDodge(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_DODGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDodge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_DODGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + dodgeUPTotalFlatDodge(config);

export const totalDodge = (config: Config) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );

// MATK

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

// MAX HP
export const totalBaseMaxHP = (config: Config) =>
  93 +
  Math.floor((totalVIT(config) + 22.4) * (config.properties.level / 3)); // need to confirm this

export const totalPercentMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentMaxHPFromSkills = (config: Config) =>
  HPBoostTotalPercentMaxHP(config);

export const totalPercentMaxHP = (config: Config) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MAX_HP")
    .map((stat) => stat[1])
    .reduce(add, 0) + maxHPBoostTotalFlatMaxHP(config);

export const totalFlatMaxHPFromSkills = (config: Config) =>
  bushidoTotalFlatMaxHP(config) +
  HPBoostTotalFlatMaxHP(config) +
  forceShieldTotalFlatMaxHP(config) +
  magicalShieldTotalFlatMaxHP(config);

export const totalFlatMaxHP = (config: Config) =>
  totalFlatMaxHPFromEquipment(config) + totalFlatMaxHPFromSkills(config);

export const totalMaxHP = (config: Config) =>
  total(
    totalBaseMaxHP(config),
    totalPercentMaxHP(config),
    totalFlatMaxHP(config),
  );

// MAX MP

export const totalBaseMaxMP = (config: Config) =>
  config.properties.personalStatName === "TEC" ?
    config.properties.personalStatValue > 0 ?
      Math.floor(
        100 +
          config.properties.level +
          totalINT(config) / 10 +
          (config.properties.personalStatValue - 1),
      )
    : Math.floor(100 + config.properties.level + totalINT(config) / 10)
  : 0;

export const totalPercentMaxMP = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MAX_MP")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMaxMPFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MAX_MP")
    .map((stat) => stat[1])
    .reduce(add, 0) + maxMPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: Config) =>
  bushidoTotalFlatMaxMP(config) + MPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMP = (config: Config) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: Config) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );

// MDEF

export const normalArmorBaseMDEF = (config: Config) =>
  config.properties.level + totalINT(config) + totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorBaseMDEF(config)
  : config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorBaseMDEF(config)
  : config.equipments.armor.type === "NORMAL_ARMOR" ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MDEF")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: Config) =>
  berserkTotalPercentMDEF(config) + magicalShieldTotalPercentMDEF(config);

export const totalPercentMDEF = (config: Config) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_MDEF")
    .map((stat) => stat[1])
    .reduce(add, 0);

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

// modifiers
export const armorTypeIdPercentASPDModifier = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ? 50
  : config.equipments.armor.type === "HEAVY_ARMOR" ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (config: Config) =>
  config.equipments.subweapon.type === "KNUCKLES" ? -15 : 0;

export const subWeaponArrowPercentMDEFModifier = (config: Config) =>
  config.equipments.subweapon.type === "ARROW" ? -25 : 0;

export const subWeaponArrowPercentDEFModifier = (config: Config) =>
  config.equipments.subweapon.type === "ARROW" ? -25 : 0;

// stability

export const totalDualWieldBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalBowBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalBowgunBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalStaffBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalMagicDeviceBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalKnuckleBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 40,
  );

export const totalHalberdBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalKatanaBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) * 3 + totalDEX(config)) / 40,
  );
export const totalBareHandBaseStability = (config: Config) =>
  Math.floor(1 + totalDEX(config) / 3);

export const totalBaseStability = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseStability(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseStability(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseStability(config)
  : isUsingMainBOW(config) ? totalBowBaseStability(config)
  : isUsingMainBWG(config) ? totalBowgunBaseStability(config)
  : isUsingMainSTF(config) ? totalStaffBaseStability(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseStability(config)
  : isUsingMainKN(config) ? totalKnuckleBaseStability(config)
  : isUsingMainHAL(config) ? totalHalberdBaseStability(config)
  : isUsingMainKTN(config) ? totalKatanaBaseStability(config)
  : totalBareHandBaseStability(config);

// --------------- Equipment stats ---------------

// defensive
export const totalEquipmentDEF = (config: Config) =>
  (config.equipments.subweapon.type === "SHIELD" ?
    config.equipments.subweapon.DEF
  : 0) +
  config.equipments.armor.DEF +
  config.equipments.additionalGear.DEF +
  config.equipments.specialGear.DEF;

export const totalRefinementReduction = (config: Config) =>
  ((
    config.equipments.subweapon.type === "SHIELD" ||
    (config.equipments.subweapon.type === "MAGIC_DEVICE" && // magic skin
      magicSkinLevel(config) > 0)
  ) ?
    config.equipments.subweapon.refinement
  : 0) +
  config.equipments.armor.refinement +
  config.equipments.additionalGear.refinement;

// element
export const mainWeaponElement = (config: Config) =>
  config.equipments.mainweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH_ELEMENT" ||
          stat[0] === "FIRE_ELEMENT" ||
          stat[0] === "WIND_ELEMENT" ||
          stat[0] === "WATER_ELEMENT" ||
          stat[0] === "DARK_ELEMENT" ||
          stat[0] === "LIGHT_ELEMENT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH_ELEMENT" ? "EARTH_ELEMENT"
      : stat[0] === "FIRE_ELEMENT" ? "FIRE_ELEMENT"
      : stat[0] === "WIND_ELEMENT" ? "WIND_ELEMENT"
      : stat[0] === "WATER_ELEMENT" ? "WATER_ELEMENT"
      : stat[0] === "DARK_ELEMENT" ? "DARK_ELEMENT"
      : stat[0] === "LIGHT_ELEMENT" ? "LIGHT_ELEMENT"
      : "NEUTRAL",
    )
    .reduce((prev, curr) => (curr !== "NEUTRAL" ? curr : prev), "NEUTRAL");

export const subWeaponElement = (config: Config) =>
  config.equipments.subweapon
    .stats(config)
    .filter(
      (stat) =>
        (stat[0] === "EARTH_ELEMENT" ||
          stat[0] === "FIRE_ELEMENT" ||
          stat[0] === "WIND_ELEMENT" ||
          stat[0] === "WATER_ELEMENT" ||
          stat[0] === "DARK_ELEMENT" ||
          stat[0] === "LIGHT_ELEMENT") &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === "EARTH_ELEMENT" ? "earth"
      : stat[0] === "FIRE_ELEMENT" ? "fire"
      : stat[0] === "WIND_ELEMENT" ? "wind"
      : stat[0] === "WATER_ELEMENT" ? "water"
      : stat[0] === "DARK_ELEMENT" ? "dark"
      : stat[0] === "LIGHT_ELEMENT" ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");

// equipment related stability

export const totalStabilityFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "STABILITY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalStabilityFromSkills = (config: Config) =>
  berserkTotalStability(config) +
  samuraiArcheryTotalStability(config) +
  twoHandedTotalStability(config);

export const totalStability = (config: Config) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: Config) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: Config) => 100;

export const totalMagicStability = (config: Config) =>
  Math.floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: Config) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: Config) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;

// weapon atk

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  config: Config,
) =>
  Math.floor(
    config.equipments.mainweapon.ATK *
      (config.equipments.mainweapon.refinement ** 2 / 100),
  ) + config.equipments.mainweapon.refinement;
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  config: Config,
) =>
  isUsingDualSwords(config) ?
    Math.floor(
      config.equipments.subweapon.ATK *
        (config.equipments.subweapon.refinement ** 2 / 200),
    ) + config.equipments.subweapon.refinement
  : 0;

export const totalPercentWeaponATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentWeaponATKFromSkills = (config: Config) =>
  swordMasteryTotalPercentWeaponATK(config) +
  shotMasteryTotalPercentWeaponATK(config) +
  martialMasteryTotalPercentWeaponATK(config) +
  magicMasteryTotalPercentWeaponATK(config) +
  halberdMasteryTotalPercentWeaponATK(config) +
  bushidoTotalPercentWeaponATK(config) +
  twoHandedTotalPercentWeaponATK(config) +
  braveAuraTotalPercentWeaponATK(config) +
  busterBladeTotalPercentWeaponATK(config);

export const totalPercentWeaponATK = (config: Config) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatWeaponATKFromSkills = (config: Config) =>
  samuraiArcheryTotalFlatWeaponATK(config) +
  unarmedMasteryTotalFlatWeaponATK(config);

export const totalFlatWeaponATK = (config: Config) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: Config) =>
  total(
    config.equipments.mainweapon.ATK,
    totalPercentWeaponATK(config) +
      flashBlastTotalPercentMainWeaponATK(config),
    totalFlatWeaponATK(config) +
      totalMainWeaponRefinementBonusMainWeaponATK(config),
  );

export const totalSubWeaponATK = (config: Config) =>
  isUsingDualSwords(config) ?
    total(
      config.equipments.subweapon.ATK,
      totalPercentWeaponATK(config),
      totalFlatWeaponATK(config),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(config)
  : 0;

// non-derived

// damage to element/ dte

export const totalMagicDamageToElementBasedFromINT = (config: Config) =>
  Math.floor(config.properties.INT / 10);

export const totalDamageToDark = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_DARK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToLight = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_LIGHT")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToFire = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_FIRE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToEarth = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_EARTH")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWind = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WIND")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWater = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DAMAGE_TO_WATER")
    .map((stat) => stat[1])
    .reduce(add, 0);

// evasion
export const totalBaseEvasionRecharge = (config: Config) => {
  // TODO
};

export const totalPercentEvasionRecharge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EVASION_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + godspeedWieldTotalPercentEvasionRecharge(config);

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now

// guard
export const totalBaseGuardPower = (config: Config) =>
  Math.min(
    [
      config.equipments.armor.type === "HEAVY_ARMOR" ? 5000 : 0,
      config.equipments.subweapon.type === "SHIELD" ? 7500 : 0,
      config.equipments.mainweapon.type === "TWO_HANDED_SWORD" ? 5000 : 0,
      isUsingMainHAL(config) ? 2500 : 0,
      hiddenTalentTotalBaseGuardPower(config),
    ].reduce(add, 0),
    10000,
  );

export const totalPercentGuardPower = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_POWER")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalGuardPower = (config: Config) =>
  totalBaseGuardPower(config) * (totalPercentGuardPower(config) / 100);

export const totalBaseGuardRecharge = (config: Config) =>
  [
    config.equipments.armor.type === "HEAVY_ARMOR" ? 25 : 0,
    config.equipments.subweapon.type === "SHIELD" ? 75 : 0,
    config.equipments.mainweapon.type === "TWO_HANDED_SWORD" ? 50 : 0,
    isUsingMainHAL(config) ? 25 : 0,
    hiddenTalentTotalBaseGuardRecharge(config),
  ].reduce(add, 0);

export const totalPercentGuardRecharge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + heavyArmorMasteryTotalGuardRecharge(config);

export const totalGuardRecharge = (config: Config) =>
  Math.floor(
    (totalBaseGuardRecharge(config) * totalPercentGuardRecharge(config)) /
      100,
  );

export const totalGuardBreak = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "GUARD_BREAK")
    .map((stat) => stat[1])
    .reduce(add, 0);

// pierce
export const totalMagicPierce = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalPierce = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_PIERCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

// range damage
export const totalLongRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "LONG_RANGE_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalShortRangeDamage = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "SHORT_RANGE_DAMAGE")
    .map((stat) => stat[1])
    .reduce(add, 0);

// resistance
export const totalPhysicalResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PHYSICAL_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalResistanceFromSkills = (config: Config) =>
  forceShieldTotalPhysicalResistance(config) +
  godspeedWieldTotalPhysicalResistance(config) +
  siphonBarrierTotalPhysicalResistance(config);

export const totalPhysicalResistance = (config: Config) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MAGIC_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMagicResistanceFromSkills = (config: Config) =>
  magicalShieldTotalMagicResistance(config) +
  godspeedWieldTotalMagicResistance(config) +
  siphonBarrierTotalMagicResistance(config);

export const totalMagicResistance = (config: Config) =>
  totalMagicResistanceFromEquipment(config) +
  totalMagicResistanceFromSkills(config);

export const totalLightResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "LIGHT_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDarkResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "DARK_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFireResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FIRE_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalEarthResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EARTH_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWindResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WIND_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWaterResistance = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "WATER_RESISTANCE")
    .map((stat) => stat[1])
    .reduce(add, 0);

// -------------SPECIAL STATS -------------

// ampr
export const totalBaseAMPR = (config: Config) =>
  Math.floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATTACK_MP_RECOVERY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromSkills = (config: Config) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) +
  ultimaQiChargeTotalFlatAMPR(config);

export const totalFlatAMPR = (config: Config) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);

export const totalAMPR = (config: Config) =>
  total(
    totalBaseAMPR(config),
    totalPercentAMPR(config),
    totalFlatAMPR(config),
  );

// ATK DOWN

export const totalBaseATKValueFromATKDOWNAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKDOWNDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKDOWNINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKDOWNSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKDOWNVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_DOWN_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKDOWN = (config: Config) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(add);

// ATK UP

export const totalBaseATKValueFromATKUPAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseATKValueFromATKUPDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseATKValueFromATKUPINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseATKValueFromATKUPSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseATKValueFromATKUPVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "ATK_UP_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseATKValueFromATKUP = (config: Config) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(add);

// MATK DOWN
export const totalBaseMATKValueFromMATKDOWNAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKDOWNDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKDOWNINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKDOWNSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKDOWNVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_DOWN_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKDOWN = (config: Config) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(add);

// MATK UP

export const totalBaseMATKValueFromMATKUPAGI = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_AGI")
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config.properties.AGI;

export const totalBaseMATKValueFromMATKUPDEX = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_DEX")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.DEX;

export const totalBaseMATKValueFromMATKUPINT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_INT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.INT;

export const totalBaseMATKValueFromMATKUPSTR = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_STR")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.STR;

export const totalBaseMATKValueFromMATKUPVIT = (config: Config) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === "MATK_UP_VIT")
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config.properties.VIT;

export const totalBaseMATKValueFromMATKUP = (config: Config) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(add, 0);

// CAST TIME REDUCTION

export const totalCastTimeReduction = (config: Config) =>
  Math.floor(
    totalCSPD(config) > 1000 ?
      50 + ((totalCSPD(config) - 1000) / 90) * 0.5
    : totalCSPD(config) / 20,
  );

// motion speed
export const totalMotionSpeed = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "MOTION_SPEED")
    .map((stat) => stat[1])
    .reduce(add, 0) +
  Math.floor(
    totalASPD(config) > 1000 ? (totalASPD(config) - 1000) / 180 : 0,
  );

// unsheathe attack
export const totalPercentUnsheatheAttackFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentUnsheatheAttackFromSkills = (config: Config) =>
  godspeedTotalPercentUnsheatheAttack(config) +
  flashBlastTotalPercentUnsheatheAttack(config);

export const totalPercentUnsheatheAttack = (config: Config) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_UNSHEATHE_ATTACK")
    .map((stat) => stat[1])
    .reduce(add, 0);

// ---------- SKILLS AND PASSIVES --------------

// barehand skills

export const hiddenTalentLevel = (config: Config) =>
  config.skillTrees.bareHandSkills.hiddentalent.level;

export const hiddenTalentTotalBaseGuardPower = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    hiddenTalentLevel(config) * 500
  : 0;

export const hiddenTalentTotalBaseGuardRecharge = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    5 + 2 * hiddenTalentLevel(config)
  : 0;

export const hiddenTalentTotalEvasionCount = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    Math.floor(2 + hiddenTalentLevel(config) * 0.4)
  : 0;

export const hiddenTalentTotalBaseEvasionRecharge = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    hiddenTalentLevel(config) < 10 ?
      0.1 * hiddenTalentLevel(config)
    : 10
  : 0;

export const hiddenTalentTotalCostQiReductionForNonBareHandSkills = (
  config: Config,
) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    Math.floor(0.5 * hiddenTalentLevel(config))
  : 0;

export const ultimaQiChargeLevel = (config: Config) =>
  config.skillTrees.bareHandSkills.ultimaqicharge.level;

export const ultimaQiChargeTotalFlatAMPR = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    Math.floor(ultimaQiChargeLevel(config) * 0.5)
  : 0;

export const ultimaQiChargeTotalCostQiReductionForNonBareHandSkills = (
  config: Config,
) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    20 - ultimaQiChargeLevel(config)
  : 0;

export const unarmedMasteryLevel = (config: Config) =>
  config.skillTrees.bareHandSkills.unarmedmastery.level;

export const unarmedMasteryTotalFlatWeaponATK = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    Math.floor(
      (config.properties.level * unarmedMasteryLevel(config)) / 10,
    )
  : 0;

export const unarmedMasteryTotalQiChargeLimit = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BARE_HAND" &&
    config.equipments.subweapon.type === "NONE"
  ) ?
    unarmedMasteryLevel(config) < 10 ?
      10 + unarmedMasteryLevel(config) * 10
    : 100 + config.properties.level
  : 0;

// blade skills

export const berserkIsActive = (config: Config) =>
  config.skillTrees.bladeSkills.berserk.isActive;
export const berserkLevel = (config: Config) =>
  config.skillTrees.bladeSkills.berserk.level;

export const berserkTotalPercentASPD = (config: Config) =>
  berserkIsActive(config) ? berserkLevel(config) * 10 : 0;

export const berserkTotalFlatASPD = (config: Config) =>
  berserkIsActive(config) ? berserkLevel(config) * 100 : 0;

export const berserkTotalFlatCriticalRate = (config: Config) =>
  berserkIsActive(config) ? Math.floor(berserkLevel(config) * 2.5) : 0;

export const berserkTotalStability = (config: Config) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      Math.floor(berserkLevel(config) * 2.5)
    : berserkLevel(config) * 5
  : 0;

export const berserkTotalPercentDEF = (config: Config) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const berserkTotalPercentMDEF = (config: Config) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const busterBladeLevel = (config: Config) =>
  config.skillTrees.bladeSkills.busterblade.level;

export const busterBladeIsActive = (config: Config) =>
  config.skillTrees.bladeSkills.busterblade.isActive;

export const busterBladeTotalPercentWeaponATK = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    busterBladeIsActive(config) ? busterBladeLevel(config)
    : 0
  : 0;

export const quickSlashLevel = (config: Config) =>
  config.skillTrees.bladeSkills.quickslash.level;

export const quickSlashTotalPercentASPD = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    quickSlashLevel(config)
  : 0;

export const quickSlashTotalFlatASPD = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    quickSlashLevel(config) * 10
  : 0;

export const swordMasteryLevel = (config: Config) =>
  config.skillTrees.bladeSkills.swordmastery.level;

export const swordMasteryTotalPercentATK = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    swordMasteryLevel(config) >= 8 ? 3
    : swordMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const swordMasteryTotalPercentWeaponATK = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    swordMasteryLevel(config) * 3
  : 0;

export const warCryLevel = (config: Config) =>
  config.skillTrees.bladeSkills.warcry.level;

export const warCryIsActive = (config: Config) =>
  config.skillTrees.bladeSkills.warcry.isActive;

export const warCryTotalPercentATK = (config: Config) =>
  warCryIsActive(config) ?
    isUsingMainTHS(config) ? warCryLevel(config) * 10 + 5
    : warCryLevel(config) * 10
  : 0;

// dualswords skills

export const dualSwordControlLevel = (config: Config) =>
  config.skillTrees.dualSwordSkills.dualswordcontrol.level;

export const dualSwordControlTotalPercentCriticalRate = (
  config: Config,
) =>
  isUsingDualSwords(config) ? 5 + dualSwordControlLevel(config) * 3 : 0;

export const dualSwordControlTotalPercentAccuracy = (config: Config) =>
  isUsingDualSwords(config) ? 5 + dualSwordControlLevel(config) * 3 : 0;

export const dualSwordControlTotalFlatASPD = (config: Config) =>
  isUsingDualSwords(config) ? 50 * dualSwordControlLevel(config) : 0;

export const dualSwordMasteryLevel = (config: Config) =>
  config.skillTrees.dualSwordSkills.dualswordmastery.level;

export const dualSwordMasteryTotalPercentCriticalRate = (
  config: Config,
) =>
  isUsingDualSwords(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0;

export const dualSwordMasteryTotalPercentAccuracy = (config: Config) =>
  isUsingDualSwords(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0;

export const flashBlastLevel = (config: Config) =>
  config.skillTrees.dualSwordSkills.flashblast.level;

export const flashBlastIsActive = (config: Config) =>
  config.skillTrees.dualSwordSkills.flashblast.isActive;

export const flashBlastTotalPercentUnsheatheAttack = (config: Config) =>
  flashBlastIsActive(config) ? flashBlastLevel(config) : 0;

export const flashBlastTotalPercentMainWeaponATK = (config: Config) =>
  flashBlastIsActive(config) ?
    isUsingDualSwords(config) && flashBlastLevel(config) > 0 ?
      25
    : 0
  : 0;

export const godspeedLevel = (config: Config) =>
  config.skillTrees.dualSwordSkills.godspeed.level;

export const godspeedTotalFlatAGI = (config: Config) =>
  godspeedLevel(config) + Math.max(godspeedLevel(config) - 5, 0);

export const godspeedTotalPercentUnsheatheAttack = (config: Config) =>
  isUsingDualSwords(config) ?
    godspeedLevel(config) + 15
  : godspeedLevel(config) + 5;

// guard skills

export const advancedEvasionLevel = (config: Config) =>
  config.skillTrees.guardSkills.advancedevasion.level;

export const advancedEvasionTotalEvasionRecharge = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    advancedEvasionLevel(config)
  : 0;

export const advancedGuardLevel = (config: Config) =>
  config.skillTrees.guardSkills.advancedguard.level;

export const advancedGuardTotalGuardRecharge = (config: Config) =>
  config.equipments.armor.type === "HEAVY_ARMOR" ?
    advancedGuardLevel(config)
  : 0;

export const advancedGuardTotalGuardPower = (config: Config) =>
  config.equipments.armor.type === "HEAVY_ARMOR" ?
    Math.floor((1 + advancedGuardLevel(config)) / 2)
  : 0;

export const heavyArmorMasteryLevel = (config: Config) =>
  config.skillTrees.guardSkills.heavyarmormastery.level;

export const heavyArmorMasteryTotalGuardRecharge = (config: Config) =>
  config.equipments.armor.type === "HEAVY_ARMOR" ?
    heavyArmorMasteryLevel(config)
  : 0;

export const lightArmorMasteryLevel = (config: Config) =>
  config.skillTrees.guardSkills.lightarmormastery.level;

export const lightArmorMasteryTotalEvasionRecharge = (config: Config) =>
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    lightArmorMasteryLevel(config)
  : 0;

// halberd skills
export const criticalSpearLevel = (config: Config) =>
  config.skillTrees.halberdSkills.criticalspear.level;

export const criticalSpearTotalPercentCriticalRate = (config: Config) =>
  isUsingMainHAL(config) ?
    Math.floor(criticalSpearLevel(config) * 0.5)
  : 0;

export const criticalSpearTotalFlatCriticalRate = (config: Config) =>
  isUsingMainHAL(config) ?
    Math.floor(criticalSpearLevel(config) * 0.5 + 0.5)
  : 0;

export const godspeedWieldStacks = (config: Config) =>
  config.skillTrees.halberdSkills.godspeedwield.stacks;

export const godspeedWieldLevel = (config: Config) =>
  config.skillTrees.halberdSkills.godspeedwield.level;

export const godspeedWieldIsActive = (config: Config) =>
  config.skillTrees.halberdSkills.godspeedwield.isActive;

export const godspeedWieldTotalFlatASPD = (config: Config) =>
  godspeedWieldIsActive(config) ?
    isUsingMainHAL(config) ?
      30 * godspeedWieldLevel(config) * godspeedWieldStacks(config) +
      100 * godspeedWieldStacks(config)
    : 30 * godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const godspeedWieldTotalMotionSpeed = (config: Config) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const almightyWieldLevel = (config: Config) =>
  config.skillTrees.halberdSkills.almightywield.level;

export const godspeedWieldTotalPhysicalResistance = (config: Config) =>
  godspeedWieldIsActive(config) ?
    isUsingMainHAL(config) ?
      -(
        (100 - 3 * godspeedWieldLevel(config)) *
          godspeedWieldStacks(config) +
        45 * godspeedWieldStacks(config) +
        Math.floor(almightyWieldLevel(config) * 0.5) *
          godspeedWieldStacks(config)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(config)) *
        godspeedWieldStacks(config)
      )
  : 0;

export const godspeedWieldTotalMagicResistance = (config: Config) =>
  godspeedWieldIsActive(config) ?
    isUsingMainHAL(config) ?
      -(
        (100 - 3 * godspeedWieldLevel(config)) *
          godspeedWieldStacks(config) +
        45 * godspeedWieldStacks(config) +
        Math.floor(almightyWieldLevel(config) * 0.5) *
          godspeedWieldStacks(config)
      )
    : -(
        (100 - 3 * godspeedWieldLevel(config)) *
        godspeedWieldStacks(config)
      )
  : 0;

export const godspeedWieldTotalFlatMaxMP = (config: Config) =>
  godspeedWieldIsActive(config) ? -(100 * godspeedWieldStacks(config)) : 0;

export const godspeedWieldTotalPercentEvasionRecharge = (
  config: Config,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const halberdMasteryLevel = (config: Config) =>
  config.skillTrees.halberdSkills.halberdmastery.level;

export const halberdMasteryTotalPercentATK = (config: Config) =>
  isUsingMainHAL(config) ?
    halberdMasteryLevel(config) >= 8 ? 3
    : halberdMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const halberdMasteryTotalPercentWeaponATK = (config: Config) =>
  isUsingMainHAL(config) ? halberdMasteryLevel(config) * 3 : 0;

export const quickAuraLevel = (config: Config) =>
  config.skillTrees.halberdSkills.quickaura.level;

export const quickAuraIsActive = (config: Config) =>
  config.skillTrees.halberdSkills.quickaura.isActive;

export const quickAuraTotalFlatASPD = (config: Config) =>
  quickAuraIsActive(config) ? quickAuraLevel(config) * 50 : 0;

export const quickAuraTotalPercentASPD = (config: Config): number =>
  quickAuraIsActive(config) ? Math.floor(quickAuraLevel(config) * 2.5) : 0;

// hunter skills

export const hunterBowgunLevel = (config: Config) =>
  config.skillTrees.hunterSkills.hunterbowgun.level;

export const hunterBowgunTotalBaseATK = (config: Config) =>
  (
    isUsingMainBWG(config) &&
    !(isUsingSubArrow(config) || isNotUsingSubWeapon(config))
  ) ?
    (1 + (Math.floor(hunterBowgunLevel(config) * 1.5) * 5) / 3 / 100) *
    config.equipments.mainweapon.ATK
  : 0;

// magic blade skills
export const conversionLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.conversion.level;

export const conversionTotalFlatMATK = (config: Config) =>
  (
    isUsingMainTHS(config) ||
    isUsingMainBWG(config) ||
    isUsingMainKN(config) ||
    isUsingMainOHS(config)
  ) ?
    Math.floor(
      (conversionLevel(config) ** 2 / 100) *
        (isUsingMainKN(config) ?
          totalMainWeaponATK(config) * 0.5
        : totalMainWeaponATK(config)),
    )
  : 0;

export const dualBringerLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.dualbringer.level;
export const dualBringerIsActive = (config: Config) =>
  config.skillTrees.magicBladeSkills.dualbringer.isActive;

// refactor this
export const totalNumberOfMagicBladeSkills = (config: Config) =>
  [
    magicWarriorMasteryLevel(config) > 0 ? 1 : 0,
    conversionLevel(config) > 0 ? 1 : 0,
    resonanceLevel(config) > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.enchantedspell.level > 0 ? 1 : 0,
    dualBringerLevel(config) > 0 ? 1 : 0,
    etherFlareLevel(config) > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.elementslash.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.enchantsword.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.enchantedburst.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.unionsword.level > 0 ? 1 : 0,
    siphonBarrierLevel(config) > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.teleport.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.siphonrecall.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.floatdash.level > 0 ? 1 : 0,
    config.skillTrees.magicBladeSkills.magicskin.level > 0 ? 1 : 0,
  ].reduce(add, 0);

export const totalNegativePercentATK = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATK" && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(add, 0);
// + subWeaponMagicDevicePercentATKModifier(config);

export const totalNegativePercentMATK = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_MATK" && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const dualBringerTotalSkillModifier = (config: Config) =>
  Math.min(
    100,
    dualBringerLevel(config) * totalNumberOfMagicBladeSkills(config),
  );

export const dualBringerTotalATK = (config: Config) =>
  (
    dualBringerIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE"
  ) ?
    Math.floor(
      Math.max(
        0,
        (totalMATK(config) - totalATK(config)) *
          ((100 - Math.abs(totalNegativePercentATK(config))) / 100) *
          (dualBringerTotalSkillModifier(config) / 100) -
          (totalATK(config) * Math.abs(totalNegativePercentATK(config))) /
            100,
      ),
    )
  : 0;

export const dualBringerTotalMATK = (config: Config) =>
  (
    dualBringerIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE"
  ) ?
    Math.floor(
      Math.max(
        0,
        (totalATK(config) - totalMATK(config)) *
          ((100 - Math.abs(totalNegativePercentMATK(config))) / 100) *
          (dualBringerTotalSkillModifier(config) / 100) -
          (totalMATK(config) *
            Math.abs(totalNegativePercentMATK(config))) /
            100,
      ),
    )
  : 0;

export const dualBringerTotalDuration = (config: Config) =>
  (
    dualBringerIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE"
  ) ?
    Math.max(10, Math.floor(config.equipments.subweapon.ATK / 10))
  : 0;

export const dualBringerTotalMagicCriticalDamageConversion = (
  config: Config,
) =>
  (
    dualBringerIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    totalINT(config) > totalSTR(config)
  ) ?
    Math.floor(dualBringerLevel(config) * 2.5)
  : 0;

export const dualBringerTotalMagicCriticalRateConversion = (
  config: Config,
) =>
  (
    dualBringerIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    totalSTR(config) > totalINT(config)
  ) ?
    Math.floor(dualBringerLevel(config) * 2.5)
  : 0;

export const etherFlareLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.etherflare.level;

export const etherFlareInflictedIgniteOnEnemy = (config: Config) =>
  config.skillTrees.magicBladeSkills.etherflare.isActive;

export const etherFlareTotalFlatAMPR = (config: Config) =>
  (
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    etherFlareInflictedIgniteOnEnemy(config)
  ) ?
    15 +
    Math.floor(etherFlareLevel(config) / 6) * 5 +
    Math.floor(etherFlareLevel(config) / 5) * 5
  : 0;

export const magicSkinLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.magicskin.level;

export const magicSkinTotalRefinementReduction = (config: Config) =>
  (
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    magicSkinLevel(config) > 0
  ) ?
    config.equipments.subweapon.refinement
  : 0;

export const magicWarriorMasteryLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.magicwarriormastery.level;

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  config: Config,
) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    magicWarriorMasteryLevel(config) + (isUsingMainOHS(config) ? 5 : 0)
  : 0;

export const magicWarriorMasteryTotalFlatMATK = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    magicWarriorMasteryLevel(config) * 2 +
    (magicWarriorMasteryLevel(config) - 5 > 0 ?
      magicWarriorMasteryLevel(config) - 5
    : 0)
  : 0;

export const magicWarriorMasteryTotalFlatCSPD = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    magicWarriorMasteryLevel(config) * 10
  : 0;

export const magicWarriorMasteryTotalPercentCSPD = (config: Config) =>
  config.equipments.subweapon.type === "MAGIC_DEVICE" ?
    magicWarriorMasteryLevel(config) * 1 +
    Math.max(magicWarriorMasteryLevel(config) - 5, 0)
  : 0;

export const resonanceLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.resonance.level;
export const resonanceIsActive = (config: Config) =>
  config.skillTrees.magicBladeSkills.resonance.isActive;
export const resonanceActiveSet = (config: Config) =>
  config.skillTrees.magicBladeSkills.resonance.set;

export const activeResonanceRegislet = (config: Config) =>
  config.regislets.focusresonance > 0 ? "FOCUS"
  : config.regislets.speedresonance > 0 ? "SPEED"
  : config.regislets.powerresonance > 0 ? "POWER"
  : "NONE";

export const resonanceTotalFlatATK = (config: Config) =>
  activeResonanceRegislet(config) === "POWER" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        resonanceLevel(config) * 2 +
          config.equipments.subweapon.refinement * 2 -
          (resonanceLevel(config) * 2 +
            config.equipments.subweapon.refinement * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ATK_MATK"
  ) ?
    Math.floor(
      resonanceLevel(config) * 2 +
        config.equipments.subweapon.refinement * 2,
    )
  : 0;

export const resonanceTotalFlatMATK = (config: Config) =>
  activeResonanceRegislet(config) === "POWER" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        resonanceLevel(config) * 2 +
          config.equipments.subweapon.refinement * 2 -
          (resonanceLevel(config) * 2 +
            config.equipments.subweapon.refinement * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ATK_MATK"
  ) ?
    Math.floor(
      resonanceLevel(config) * 2 +
        config.equipments.subweapon.refinement * 2,
    )
  : 0;

export const resonanceTotalFlatASPD = (config: Config) =>
  activeResonanceRegislet(config) === "SPEED" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        resonanceLevel(config) * 25 +
          config.equipments.subweapon.refinement * 50 -
          (resonanceLevel(config) * 25 +
            config.equipments.subweapon.refinement * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ASPD_CSPD"
  ) ?
    Math.floor(
      resonanceLevel(config) * 25 +
        config.equipments.subweapon.refinement * 50,
    )
  : 0;

export const resonanceTotalFlatCSPD = (config: Config) =>
  activeResonanceRegislet(config) === "SPEED" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        resonanceLevel(config) * 25 +
          config.equipments.subweapon.refinement * 50 -
          (resonanceLevel(config) * 25 +
            config.equipments.subweapon.refinement * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ASPD_CSPD"
  ) ?
    Math.floor(
      resonanceLevel(config) * 25 +
        config.equipments.subweapon.refinement * 50,
    )
  : 0;

export const resonanceTotalFlatAccuracy = (config: Config) =>
  activeResonanceRegislet(config) === "FOCUS" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        35 +
          resonanceLevel(config) * 2 +
          config.equipments.subweapon.refinement * 3 -
          (35 +
            resonanceLevel(config) * 2 +
            config.equipments.subweapon.refinement * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ACC_CRIT"
  ) ?
    Math.floor(
      35 +
        resonanceLevel(config) * 2 +
        config.equipments.subweapon.refinement * 3,
    )
  : 0;

export const resonanceTotalFlatCriticalRate = (config: Config) =>
  activeResonanceRegislet(config) === "FOCUS" ?
    (
      resonanceIsActive(config) &&
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      Math.floor(
        10 +
          resonanceLevel(config) * 2 +
          config.equipments.subweapon.refinement * 3 -
          (10 +
            resonanceLevel(config) * 2 +
            config.equipments.subweapon.refinement * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config.equipments.subweapon.type === "MAGIC_DEVICE" &&
    resonanceActiveSet(config) === "ACC_CRIT"
  ) ?
    Math.floor(
      10 +
        resonanceLevel(config) * 2 +
        config.equipments.subweapon.refinement * 3,
    )
  : 0;

export const siphonBarrierLevel = (config: Config) =>
  config.skillTrees.magicBladeSkills.siphonbarrier.level;

export const siphonBarrierIsActive = (config: Config) =>
  config.skillTrees.magicBladeSkills.siphonbarrier.isActive;

export const siphonBarrierTotalPhysicalResistance = (config: Config) =>
  (
    (isUsingMainMD(config) ||
      config.equipments.subweapon.type === "MAGIC_DEVICE") &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

export const siphonBarrierTotalMagicResistance = (config: Config) =>
  (
    (isUsingMainMD(config) ||
      config.equipments.subweapon.type === "MAGIC_DEVICE") &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

// magic skills

export const magicMasteryLevel = (config: Config) =>
  config.skillTrees.magicSkills.magicmastery.level;

export const magicMasteryTotalPercentMATK = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    magicMasteryLevel(config) >= 8 ? 3
    : magicMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const magicMasteryTotalPercentWeaponATK = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    magicMasteryLevel(config) * 3
  : 0;

export const qadalLevel = (config: Config) =>
  config.skillTrees.magicSkills.qadal.level;

export const qadalIsActive = (config: Config) =>
  config.skillTrees.magicSkills.qadal.isActive;

export const qadalCharge = (config: Config) =>
  config.skillTrees.magicSkills.qadal.burden;

export const qadalTimeActive = (config: Config) =>
  config.skillTrees.magicSkills.qadal.combatTime;

export const qadalTotalLastDamageModifier = (config: Config) =>
  qadalIsActive(config) ?
    qadalCharge(config) > Math.floor(qadalTimeActive(config) / 3) ?
      Math.floor(qadalTimeActive(config) / 3)
    : qadalCharge(config)
  : 0;

// martial skills

export const aggravateLevel = (config: Config) =>
  config.skillTrees.martialSkills.aggravate.level;

export const aggravateTotalFlatAMPR = (config: Config) =>
  isUsingMainKN(config) ? Math.floor(aggravateLevel(config) * 0.5) : 0;

export const aggravateTotalPercentAccuracy = (config: Config) =>
  isUsingMainKN(config) ? aggravateLevel(config) * 2 : 0;

export const martialDisciplineLevel = (config: Config) =>
  config.skillTrees.martialSkills.martialdiscipline.level;

export const martialDisciplineTotalMartialSkillDamageBonus = (
  config: Config,
) => (isUsingMainKN(config) ? martialDisciplineLevel(config) : 0);

export const martialDisciplineTotalPercentASPD = (config: Config) =>
  isUsingMainKN(config) ? martialDisciplineLevel(config) : 0;

export const martialDisciplineTotalFlatASPD = (config: Config) =>
  isUsingMainKN(config) ? martialDisciplineLevel(config) : 0;

export const martialMasteryLevel = (config: Config) =>
  config.skillTrees.martialSkills.martialmastery.level;

export const martialMasteryTotalPercentATK = (config: Config) =>
  isUsingMainKN(config) ?
    martialMasteryLevel(config) >= 8 ? 3
    : martialMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const martialMasteryTotalPercentWeaponATK = (config: Config) =>
  isUsingMainKN(config) ? martialMasteryLevel(config) * 3 : 0;

// mononofu skills

export const bushidoLevel = (config: Config) =>
  config.skillTrees.mononofuSkills.bushido.level;

export const bushidoTotalPercentATK = (config: Config) =>
  isUsingMainKTN(config) ?
    bushidoLevel(config) >= 8 ? 3
    : bushidoLevel(config) >= 3 ? 2
    : 1
  : 0;

export const bushidoTotalPercentWeaponATK = (config: Config) =>
  isUsingMainKTN(config) ? bushidoLevel(config) * 3 : 0;

export const bushidoTotalFlatMaxHP = (config: Config) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatMaxMP = (config: Config) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatAccuracy = (config: Config) =>
  bushidoLevel(config);

export const twoHandedLevel = (config: Config) =>
  config.skillTrees.mononofuSkills.twohanded.level;

// TODO MOVE THIS TO THE NINJASKILLS SECTION
//   export const isNinjaSpiritMaxed = (config: Config) =>
//   config[ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJASPIRIT_LEVEL] === 10;

export const twoHandedTotalPercentWeaponATK = (config: Config) =>
  (
    config.equipments.mainweapon.type === "KATANA" ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (config.equipments.subweapon.type === "NINJUTSU_SCROLL" &&
        ninjaSpiritLevel(config) === 10) ||
      config.equipments.subweapon.type === "NONE"
    ) ?
      twoHandedLevel(config)
    : 0
  : config.equipments.subweapon.type === "NONE" ? twoHandedLevel(config)
  : 0;

export const twoHandedTotalPercentAccuracy = (config: Config) =>
  (
    config.equipments.mainweapon.type === "KATANA" ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (config.equipments.subweapon.type === "NINJUTSU_SCROLL" &&
        ninjaSpiritLevel(config) === 10) ||
      config.equipments.subweapon.type === "NONE"
    ) ?
      twoHandedLevel(config)
    : 0
  : config.equipments.subweapon.type === "NONE" ? twoHandedLevel(config)
  : 0;

export const twoHandedTotalFlatCriticalRate = (config: Config) =>
  (
    config.equipments.mainweapon.type === "KATANA" ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (config.equipments.subweapon.type === "NINJUTSU_SCROLL" &&
        ninjaSpiritLevel(config) === 10) ||
      config.equipments.subweapon.type === "NONE"
    ) ?
      isUsingMainKTN(config) ? twoHandedLevel(config)
      : isUsingMainOHS(config) || isUsingMainMD(config) ?
        Math.floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config.equipments.subweapon.type === "NONE" ?
    Math.floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalStability = (config: Config) =>
  (
    config.equipments.mainweapon.type === "KATANA" ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (config.equipments.subweapon.type === "NINJUTSU_SCROLL" &&
        ninjaSpiritLevel(config) === 10) ||
      config.equipments.subweapon.type === "NONE"
    ) ?
      isUsingMainKTN(config) ? twoHandedLevel(config)
      : isUsingMainOHS(config) || isUsingMainMD(config) ?
        Math.floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config.equipments.subweapon.type === "NONE" ?
    Math.floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalATKOnCrit = (config: Config) =>
  (
    isUsingMainKTN(config) &&
    (config.equipments.subweapon.type === "NONE" ||
      (config.equipments.subweapon.type === "NINJUTSU_SCROLL" &&
        ninjaSpiritLevel(config) === 10))
  ) ?
    totalATK(config) * Math.floor((100 + 5 * twoHandedLevel(config)) / 100)
  : 0;

// ninja skills
export const ninjaSpiritLevel = (config: Config) =>
  config.skillTrees.ninjaSkills.ninjaspirit.level;

export const ninjaSpiritTotalFlatDodge = (config: Config) =>
  ninjaSpiritLevel(config);

// prayer skills

export const prayerLevel = (config: Config) =>
  config.skillTrees.priestSkills.prayer.level;

export const prayerIsActive = (config: Config) =>
  config.skillTrees.priestSkills.prayer.isActive;

export const prayerTotalPercentMATK = (config: Config) =>
  prayerIsActive(config) ?
    (
      isUsingMainMD(config) ||
      config.equipments.subweapon.type === "MAGIC_DEVICE"
    ) ?
      prayerLevel(config) + 5
    : prayerLevel(config)
  : 0;

// Shield Skills

export const forceShieldLevel = (config: Config) =>
  config.skillTrees.shieldSkills.forceshield.level;

export const forceShieldTotalFlatDEF = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    forceShieldLevel(config) * 2
  : 0;

export const forceShieldTotalPercentDEF = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    forceShieldLevel(config)
  : 0;

export const forceShieldTotalFlatMaxHP = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    forceShieldLevel(config) * 50
  : 0;

export const forceShieldTotalPhysicalResistance = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    forceShieldLevel(config)
  : 0;

export const magicalShieldLevel = (config: Config) =>
  config.skillTrees.shieldSkills.magicalshield.level;

export const magicalShieldTotalFlatMDEF = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    magicalShieldLevel(config) * 2
  : 0;

export const magicalShieldTotalPercentMDEF = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    magicalShieldLevel(config)
  : 0;

export const magicalShieldTotalFlatMaxHP = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    magicalShieldLevel(config) * 50
  : 0;
export const magicalShieldTotalMagicResistance = (config: Config) =>
  config.equipments.subweapon.type === "SHIELD" ?
    magicalShieldLevel(config)
  : 0;

export const shieldMasteryLevel = (config: Config) =>
  config.skillTrees.shieldSkills.shieldmastery.level;

export const shieldMasteryPercentASPDPenaltyReduction = (
  config: Config,
) =>
  config.equipments.subweapon.type === "SHIELD" ?
    shieldMasteryLevel(config) * 5
  : 0;

// shot skills

export const longRangeLevel = (config: Config) =>
  config.skillTrees.shotSkills.longrange.level;

export const longRangeTotalSkillDamageModifier = (config: Config) =>
  longRangeLevel(config);

export const samuraiArcheryLevel = (config: Config) =>
  config.skillTrees.shotSkills.samuraiarchery.level;

export const samuraiArcheryStacks = (config: Config) =>
  config.skillTrees.shotSkills.samuraiarchery.stacks;

export const samuraiArcheryTotalFlatWeaponATK = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BOW" &&
    config.equipments.subweapon.type === "KATANA"
  ) ?
    Math.min(
      Math.floor(
        config.equipments.subweapon.ATK *
          0.1 *
          samuraiArcheryLevel(config),
      ),
      Math.floor(
        config.equipments.mainweapon.ATK *
          Math.floor(config.equipments.mainweapon.stability / 100) *
          0.1 *
          samuraiArcheryLevel(config),
      ),
    )
  : 0;

export const samuraiArcheryTotalStability = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BOW" &&
    config.equipments.subweapon.type === "KATANA"
  ) ?
    Math.floor(config.equipments.subweapon.stability / 4)
  : 0;
export const samuraiArcheryTotalPercentAccuracy = (config: Config) =>
  (
    config.equipments.mainweapon.type === "BOW" &&
    config.equipments.subweapon.type === "KATANA"
  ) ?
    samuraiArcheryLevel(config) * samuraiArcheryStacks(config)
  : 0;

export const shotMasteryLevel = (config: Config) =>
  config.skillTrees.shotSkills.shotmastery.level;

export const shotMasteryTotalPercentATK = (config: Config) =>
  isUsingMainBWG(config) || config.equipments.mainweapon.type === "BOW" ?
    shotMasteryLevel(config) >= 8 ? 3
    : shotMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const shotMasteryTotalPercentWeaponATK = (config: Config) =>
  isUsingMainBWG(config) || config.equipments.mainweapon.type === "BOW" ?
    shotMasteryLevel(config) * 3
  : 0;

// support skills
export const braveAuraLevel = (config: Config) =>
  config.skillTrees.supportSkills.braveaura.level;

export const braveAuraIsActive = (config: Config) =>
  config.skillTrees.supportSkills.braveaura.isActive;

export const braveAuraTotalPercentWeaponATK = (config: Config) =>
  braveAuraIsActive(config) ? 10 + braveAuraLevel(config) * 2 : 0;

export const braveAuraTotalLastDamageModifier = (config: Config) =>
  braveAuraIsActive(config) ? braveAuraLevel(config) * 2 : 0;

export const highCycleIsActive = (config: Config) =>
  config.skillTrees.supportSkills.highcycle.isActive;

export const highCycleLevel = (config: Config) =>
  config.skillTrees.supportSkills.highcycle.level;

export const highCycleTotalFlatCSPD = (config: Config) =>
  highCycleIsActive(config) ? 50 + highCycleLevel(config) * 50 : 0;

export const highCycleTotalPercentCSPD = (config: Config) =>
  highCycleIsActive(config) ? highCycleLevel(config) * 25 : 0;

export const highCycleTotalPercentNMPR = (config: Config) =>
  highCycleIsActive(config) ?
    Math.floor(-50.5 - highCycleLevel(config) * 2.5)
  : 0;

export const highCycleTotalPercentAMPR = (config: Config) =>
  highCycleIsActive(config) ?
    Math.floor(-90.5 - highCycleLevel(config) * 1.5)
  : 0;

export const manaRechargeLevel = (config: Config) =>
  config.skillTrees.supportSkills.manarecharge.level;

export const manaRechargeIsActive = (config: Config) =>
  config.skillTrees.supportSkills.manarecharge.isActive;

export const manaRechargeTotalLastDamageModifier = (config: Config) =>
  manaRechargeIsActive(config) ?
    -(50 - manaRechargeLevel(config) * 2.5)
  : 0;

// survival skills

export const HPBoostLevel = (config: Config) =>
  config.skillTrees.survivalSkills.hpboost.level;

export const HPBoostTotalPercentMaxHP = (config: Config) =>
  HPBoostLevel(config) * 2;

export const HPBoostTotalFlatMaxHP = (config: Config) =>
  HPBoostLevel(config) * 100;

export const MPBoostLevel = (config: Config) =>
  config.skillTrees.survivalSkills.mpboost.level;

export const MPBoostTotalFlatMaxMP = (config: Config) =>
  MPBoostLevel(config) * 30;

// Wizard skills

export const wizardSkills = (config: Config) =>
  config.skillTrees.wizardSkills;

export const castMasteryLevel = (config: Config) =>
  config.skillTrees.wizardSkills.castmastery.level;

export const wizardSkillsLevels = (config: Config) => [
  wizardSkills(config).castmastery.level,
  wizardSkills(config).advancedfamilia.level,
  wizardSkills(config).blizzard.level,
  wizardSkills(config).crystallaser.level,
  wizardSkills(config).familia.level,
  wizardSkills(config).imperialray.level,
  wizardSkills(config).lightning.level,
  wizardSkills(config).manacrystal.level,
  wizardSkills(config).meteorstrike.level,
  wizardSkills(config).overlimit.level,
  wizardSkills(config).sorceryguide.level,
  wizardSkills(config).stonebarrier.level,
];

export const totalWizardSkillsLearned = (config: Config) =>
  wizardSkillsLevels(config).filter((level) => level > 0).length;

export const totalWizardSkillsPoints = (config: Config) =>
  wizardSkillsLevels(config).reduce(add, 0);

export const castMasteryTotalPercentCSPD = (config: Config) =>
  (
    (isUsingMainMD(config) || isUsingMainSTF(config)) &&
    castMasteryLevel(config) > 0
  ) ?
    Math.floor(castMasteryLevel(config) * 1.5) +
    (totalWizardSkillsLearned(config) - 1) *
      Math.floor(castMasteryLevel(config) / 2)
  : 0;

export const castMasteryTotalFlatCSPD = (config: Config) =>
  (
    (isUsingMainMD(config) || isUsingMainSTF(config)) &&
    castMasteryLevel(config) > 0
  ) ?
    castMasteryLevel(config) * totalWizardSkillsPoints(config)
  : 0;

export const castMasteryTotalPercentATK = (config: Config) =>
  (
    (isUsingMainMD(config) || isUsingMainSTF(config)) &&
    castMasteryLevel(config) > 0
  ) ?
    -Math.ceil(50 - 2.5 * castMasteryLevel(config))
  : 0;

export const familiaIsActive = (config: Config) =>
  config.skillTrees.wizardSkills.familia.isActive;

export const familiaLevel = (config: Config) =>
  config.skillTrees.wizardSkills.familia.level;

export const familiaTotalFlatMATK = (config: Config) =>
  familiaIsActive(config) ?
    Math.floor(config.properties.level / (10 - familiaLevel(config) * 0.6))
  : 0;

export const familiaTotalFlatMaxMP = (config: Config) =>
  familiaIsActive(config) ? 100 + familiaLevel(config) * 10 : 0;

export const familiaTotalAdditionalMagic = (config: Config) =>
  familiaIsActive(config) ? 5 * familiaLevel(config) : 0;

export const overlimitLevel = (config: Config) =>
  config.skillTrees.wizardSkills.overlimit.level;

export const overlimitIsActive = (config: Config) =>
  config.skillTrees.wizardSkills.overlimit.isActive;

export const overlimitTotalElementDamageModifier = (config: Config) =>
  overlimitIsActive(config) ?
    overlimitLevel(config) +
    sorceryGuideTotalElementDamageModifierBonusForOverlimit(config)
  : 0;

export const overlimitTotalFlatCSPD = (config: Config) =>
  overlimitIsActive(config) ?
    -1000 + sorceryGuideTotalCSPDPenaltyReductionForOverlimit(config)
  : 0;

export const sorceryGuideLevel = (config: Config) =>
  config.skillTrees.wizardSkills.sorceryguide.level;

export const sorceryGuideTotalCSPDPenaltyReductionForOverlimit = (
  config: Config,
) => sorceryGuideLevel(config) * 50;

export const sorceryGuideTotalElementDamageModifierBonusForOverlimit = (
  config: Config,
) => sorceryGuideLevel(config);

export const totalPercentATKForWizardSkills = (config: Config) =>
  totalPercentATKFromEquipment(config) + totalPercentATKFromSkills(config);

export const totalATKForWizardSkills = (config: Config) =>
  Math.floor(
    total(
      totalBaseATK(config),
      totalPercentATKForWizardSkills(config),
      totalFlatATK(config),
    ) * 0.25,
  );

export const totalMATKForWizardSkills = (config: Config) =>
  Math.floor(totalMATK(config) * 0.75);

export const totalWizardATK = (config: Config) =>
  totalATKForWizardSkills(config) + totalMATKForWizardSkills(config);

// battle skills
export const accuracyUPTotalFlatAccuracy = (config: Config) =>
  config.skillTrees.battleSkills.accuracyup.level;

export const attackUPLevel = (config: Config) =>
  config.skillTrees.battleSkills.attackup.level;

export const attackUPTotalFlatATK = (config: Config) =>
  Math.floor(
    (config.properties.level * (2.5 * attackUPLevel(config))) / 100,
  );

export const criticalUPLevel = (config: Config) =>
  config.skillTrees.battleSkills.criticalup.level;

export const criticalUPTotalFlatCriticalRate = (config: Config) =>
  Math.floor(criticalUPLevel(config) / 2);

export const criticalUPTotalPercentCriticalDamage = (config: Config) =>
  Math.floor(criticalUPLevel(config) / 2);

export const defenseMasteryLevel = (config: Config) =>
  config.skillTrees.battleSkills.defensemastery.level;

export const defenseMasteryTotalFlatDEF = (config: Config) =>
  Math.floor(
    config.properties.level * ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseMasteryTotalFlatMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseUPLevel = (config: Config) =>
  config.skillTrees.battleSkills.defenseup.level;

export const defenseUPTotalFlatDEF = (config: Config) =>
  Math.floor(
    config.properties.level * ((2.5 * defenseUPLevel(config)) / 100),
  );

export const defenseUPTotalFlatMDEF = (config: Config) =>
  Math.floor(
    config.properties.level * ((2.5 * defenseUPLevel(config)) / 100),
  );
export const dodgeUPTotalFlatDodge = (config: Config) =>
  config.skillTrees.battleSkills.dodgeup.level;
export const increasedEnergyLevel = (config: Config) =>
  config.skillTrees.battleSkills.increasedenergy.level;

export const increasedEnergyTotalFlatMATK = (config: Config) =>
  (config.properties.level * (2.5 * increasedEnergyLevel(config))) / 100;
export const intimidatingPowerLevel = (config: Config) =>
  config.skillTrees.battleSkills.intimidatingpower.level;

export const intimidatingPowerTotalFlatATK = (config: Config) =>
  Math.floor(
    (config.properties.level * (2.5 * intimidatingPowerLevel(config))) /
      100,
  );

export const magicUPLevel = (config: Config) =>
  config.skillTrees.battleSkills.magicup.level;

export const magicUPTotalFlatMATK = (config: Config) =>
  Math.floor(
    (config.properties.level * (2.5 * magicUPLevel(config))) / 100,
  );
export const spellBurstLevel = (config: Config) =>
  config.skillTrees.battleSkills.spellburst.level;

export const spellBurstTotalMagicCriticalDamageConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  config: Config,
) => spellBurstLevel(config) * 2.5;
// regislets

export const magicAttackBoostTotalFlatMATK = (config: Config) =>
  config.regislets.magicattackboost;

export const physicalAttackBoostTotalFlatATK = (config: Config) =>
  config.regislets.physicalattackboost;

export const maxMPBoostTotalFlatMaxMP = (config: Config) =>
  config.regislets.maxmpboost;

export const maxHPBoostTotalFlatMaxHP = (config: Config) =>
  config.regislets.maxhpboost * 10;

export const magicSpeedBoostTotalFlatCSPD = (config: Config) =>
  config.regislets.magicspeedboost;

export const attackSpeedBoostTotalFlatASPD = (config: Config) =>
  config.regislets.attackspeedboost;

export const focusResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.focusresonance;

export const speedResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.speedresonance;

export const powerResonanceTotalReduction = (config: Config) =>
  95 - 5 * config.regislets.powerresonance;
