import {
  type IntermediateConfig,
  type Stat,
  StatId,
  PersonalStatId,
  ResonanceSetId,
  MainWeaponTypeId,
  SubWeaponTypeId,
  ArmorTypeId,
  ParamId,
} from "./data";

export const add = (a: number, b: number) => a + b;
export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const isUsingStatAccessibleSubWeapon = (
  config: IntermediateConfig,
) =>
  isUsingSubArrow(config) ||
  isUsingSubDagger(config) ||
  isUsingSubScroll(config) ||
  isUsingSubShield(config);

export const isUsingMainOHS = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
  MainWeaponTypeId.ONE_HANDED_SWORD;

export const isUsingSubOHS = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
  SubWeaponTypeId.ONE_HANDED_SWORD;

export const isUsingMainTHS = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
  MainWeaponTypeId.TWO_HANDED_SWORD;

export const isUsingMainHAL = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.HALBERD;

export const isUsingDualSwords = (config: IntermediateConfig) =>
  isUsingMainOHS(config) &&
  isUsingSubOHS(config) &&
  config[ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDMASTERY_LEVEL] >
    0;

export const isUsingMainBWG = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOWGUN;

export const isUsingMainKN = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES;

export const isUsingSubArrow = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.ARROW;

export const isUsingSubDagger = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.DAGGER;

export const isUsingSubShield = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD;

export const isUsingSubScroll = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
  SubWeaponTypeId.NINJUTSU_SCROLL;

export const isNotUsingSubWeapon = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE;

export const flattenedStatsFromMainWeapon = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_STATMAP];

export const flattenedStatsFromMainWeaponCrystal1 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_MAINWEAPON_CRYSTAL1_STATMAP];

export const flattenedStatsFromMainWeaponCrystal2 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_MAINWEAPON_CRYSTAL2_STATMAP];

export const flattenedStatsFromSubWeapon = (config: IntermediateConfig) =>
  isUsingStatAccessibleSubWeapon(config) ?
    config[ParamId.CHARACTER_SUBWEAPON_STATMAP]
  : [];

export const flattenedStatsFromArmor = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_ARMOR_STATMAP];

export const flattenedStatsFromArmorCrystal1 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_ARMOR_CRYSTAL1_STATMAP];

export const flattenedStatsFromArmorCrystal2 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_ARMOR_CRYSTAL2_STATMAP];

export const flattenedStatsFromAdditionalGear = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_ADDITIONAL_GEAR_STATMAP];

export const flattenedStatsFromAdditionalGearCrystal1 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL1_STATMAP];

export const flattenedStatsFromAdditionalGearCrystal2 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL2_STATMAP];

export const flattenedStatsFromSpecialGear = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_SPECIAL_GEAR_STATMAP];

export const flattenedStatsFromSpecialGearCrystal1 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL1_STATMAP];

export const flattenedStatsFromSpecialGearCrystal2 = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL2_STATMAP];

export const flattenedStats = (config: IntermediateConfig) =>
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
    config[ParamId.CHARACTER_FOODBUFFS],
    config[ParamId.CHARACTER_CONSUMABLES],
  );

// ---------- BASIC STATS --------------

// AGI
export const totalPercentAGIFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_AGI)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAGI = (config: IntermediateConfig) =>
  totalPercentAGIFromEquipment(config);

export const totalFlatAGIFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_AGI)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAGI = (config: IntermediateConfig) =>
  totalFlatAGIFromEquipment(config) + godspeedTotalFlatAGI(config);

export const totalAGI = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_BASE_AGI],
    totalPercentAGI(config),
    totalFlatAGI(config),
  );

// DEX
export const totalPercentDEXFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_DEX)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentDEX = (config: IntermediateConfig) =>
  totalPercentDEXFromEquipment(config);

export const totalFlatDEXFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_DEX)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEX = (config: IntermediateConfig) =>
  totalFlatDEXFromEquipment(config);

export const totalDEX = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_BASE_DEX],
    totalPercentDEX(config),
    totalFlatDEX(config),
  );

// STR

export const totalPercentSTRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_STR)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentSTR = (config: IntermediateConfig) =>
  totalPercentSTRFromEquipment(config);

export const totalFlatSTRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_STR)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatSTR = (config: IntermediateConfig) =>
  totalFlatSTRFromEquipment(config);

export const totalSTR = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_BASE_STR],
    totalPercentSTR(config),
    totalFlatSTR(config),
  );

// INT

export const totalPercentINTFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_INT)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentINT = (config: IntermediateConfig) =>
  totalPercentINTFromEquipment(config);

export const totalFlatINTFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_INT)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatINT = (config: IntermediateConfig) =>
  totalFlatINTFromEquipment(config);

export const totalINT = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_BASE_INT],
    totalPercentINT(config),
    totalFlatINT(config),
  );

// VIT

export const totalPercentVITFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_VIT)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentVIT = (config: IntermediateConfig) =>
  totalPercentVITFromEquipment(config);

export const totalFlatVITFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_VIT)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatVIT = (config: IntermediateConfig) =>
  totalFlatVITFromEquipment(config);

export const totalVIT = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_BASE_VIT],
    totalPercentVIT(config),
    totalFlatVIT(config),
  );

// ---------- DERIVED STATS --------------

// accuracy
export const totalBaseAccuracy = (config: IntermediateConfig) =>
  Math.floor(config[ParamId.CHARACTER_LEVEL] + totalDEX(config));

export const totalPercentAccuracyFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_ACCURACY)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAccuracyFromSkills = (
  config: IntermediateConfig,
) =>
  dualSwordMasteryTotalPercentAccuracy(config) +
  dualSwordControlTotalPercentAccuracy(config) +
  samuraiArcheryTotalPercentAccuracy(config) +
  twoHandedTotalPercentAccuracy(config);

export const totalPercentAccuracy = (config: IntermediateConfig) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_ACCURACY)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAccuracyFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatAccuracy(config) + accuracyUPTotalFlatAccuracy(config);

export const totalFlatAccuracy = (config: IntermediateConfig) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: IntermediateConfig) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );

export const totalAnticipate = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.ANTICIPATE)
    .map((stat) => stat[1])
    .reduce(add, 0);

// ailment resistance

export const totalAilmentResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.AILMENT_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalAilmentResistanceFromMTL = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_PERSONAL_STAT_ID] === PersonalStatId.MTL ?
    Math.floor(config[ParamId.CHARACTER_PERSONAL_STAT_VALUE] / 3.4)
  : 0;

export const totalAilmentResistance = (config: IntermediateConfig) =>
  totalAilmentResistanceFromEquipment(config) +
  totalAilmentResistanceFromMTL(config);

// ASPD

export const totalDualWieldBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    100 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalOneHandedSwordBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    100 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalTwoHandedSwordBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    50 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 2 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalBowBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    75 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 3 +
      (totalAGI(config) + totalDEX(config) * 2 - 1) / 10,
  );

export const totalBowgunBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    30 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 2.2 +
      totalDEX(config) * 0.2,
  );

export const totalStaffBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    60 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) +
      (totalAGI(config) + totalINT(config) - 1) / 5,
  );

export const totalMagicDeviceBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    90 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 4 +
      (totalINT(config) - 1) / 5,
  );

export const totalKnuckleBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    120 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 4.6 +
      totalDEX(config) / 10 +
      totalSTR(config) / 10,
  );

export const totalHalberdBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    25 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 3.5 +
      totalSTR(config) * 0.2,
  );

export const totalKatanaBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    200 +
      config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 3.9 +
      totalSTR(config) * 0.3,
  );

export const totalBareHandBaseASPD = (config: IntermediateConfig) =>
  Math.floor(
    1000 + config[ParamId.CHARACTER_LEVEL] + totalAGI(config) * 9.6,
  );

export const totalBaseASPD = (config: IntermediateConfig) =>
  isUsingDualSwords(config) ? totalDualWieldBaseASPD(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.ONE_HANDED_SWORD
  ) ?
    totalOneHandedSwordBaseASPD(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.TWO_HANDED_SWORD
  ) ?
    totalTwoHandedSwordBaseASPD(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW ?
    totalBowBaseASPD(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOWGUN ?
    totalBowgunBaseASPD(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ?
    totalStaffBaseASPD(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    totalMagicDeviceBaseASPD(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES
  ) ?
    totalKnuckleBaseASPD(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.HALBERD
  ) ?
    totalHalberdBaseASPD(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    totalKatanaBaseASPD(config)
  : totalBareHandBaseASPD(config);

export const totalPercentASPDFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_ASPD)
    .map((stat) => stat[1])
    .reduce(add, 0) +
  armorTypeIdPercentASPDModifier(config) +
  subWeaponShieldPercentASPDModifier(config);

export const totalPercentASPDFromSkills = (config: IntermediateConfig) =>
  quickSlashTotalPercentASPD(config) +
  berserkTotalPercentASPD(config) +
  quickAuraTotalPercentASPD(config);

export const totalPercentASPD = (config: IntermediateConfig) =>
  totalPercentASPDFromEquipment(config) +
  totalPercentASPDFromSkills(config);

export const totalFlatASPDFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_ASPD)
    .map((stat) => stat[1])
    .reduce(add, 0) + attackSpeedBoostTotalFlatASPD(config);

export const totalFlatASPDFromSkills = (config: IntermediateConfig) =>
  quickSlashTotalFlatASPD(config) +
  berserkTotalFlatASPD(config) +
  martialDisciplineTotalFlatASPD(config) +
  dualSwordControlTotalFlatASPD(config) +
  quickAuraTotalFlatASPD(config) +
  godspeedWieldTotalFlatASPD(config);

export const totalFlatASPD = (config: IntermediateConfig) =>
  totalFlatASPDFromEquipment(config) + totalFlatASPDFromSkills(config);

export const totalASPD = (config: IntermediateConfig) =>
  total(
    totalBaseASPD(config),
    totalPercentASPD(config),
    totalFlatASPD(config),
  );

// ATK

export const totalDualWieldBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunTotalBaseATK(config);

export const totalStaffBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalSTR(config) * 1.5 +
      totalDEX(config) * 2.5 +
      totalMainWeaponATK(config),
  );

export const totalBareHandBaseATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: IntermediateConfig) =>
  isUsingDualSwords(config) ? totalDualWieldBaseATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.ONE_HANDED_SWORD
  ) ?
    totalOneHandedSwordBaseATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.TWO_HANDED_SWORD
  ) ?
    totalTwoHandedSwordBaseATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW ?
    totalBowBaseATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOWGUN ?
    totalBowgunBaseATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ?
    totalStaffBaseATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    totalMagicDeviceBaseATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES
  ) ?
    totalKnuckleBaseATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.HALBERD
  ) ?
    totalHalberdBaseATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    totalKatanaBaseATK(config)
  : totalBareHandBaseATK(config) +
    totalBaseATKValueFromATKUP(config) +
    totalBaseATKValueFromATKDOWN(config);

export const totalPercentATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_ATK)
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: IntermediateConfig) =>
  swordMasteryTotalPercentATK(config) +
  shotMasteryTotalPercentATK(config) +
  martialMasteryTotalPercentATK(config) +
  halberdMasteryTotalPercentATK(config) +
  bushidoTotalPercentATK(config) +
  warCryTotalPercentATK(config);

export const totalPercentATK = (config: IntermediateConfig) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryTotalPercentATK(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation

export const totalFlatATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_ATK)
    .map((stat) => stat[1])
    .reduce(add, 0) + physicalAttackBoostTotalFlatATK(config);

export const totalFlatATKFromSkills = (config: IntermediateConfig) =>
  attackUPTotalFlatATK(config) + intimidatingPowerTotalFlatATK(config);

export const totalFlatATK = (config: IntermediateConfig) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: IntermediateConfig) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );

// cdmg

export const totalBaseCriticalDamage = (config: IntermediateConfig) => {
  const agi = totalAGI(config);
  const str = totalSTR(config);

  return agi > str ?
      Math.floor(150 + (agi + str) / 10)
    : Math.floor(150 + str / 5);
};

export const totalPercentCriticalDamageFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_CRITICAL_DAMAGE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalDamageFromSkills = (
  config: IntermediateConfig,
) => criticalUPTotalPercentCriticalDamage(config);

export const totalPercentCriticalDamage = (config: IntermediateConfig) =>
  totalPercentCriticalDamageFromEquipment(config) +
  totalPercentCriticalDamageFromSkills(config);

export const totalFlatCriticalDamage = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_CRITICAL_DAMAGE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalCriticalDamage = (config: IntermediateConfig) => {
  const val = total(
    totalBaseCriticalDamage(config),
    totalPercentCriticalDamage(config),
    totalFlatCriticalDamage(config),
  );

  return val > 300 ? 300 + Math.floor((val - 300) / 2) : val; // soft cap
};

export const totalMagicCriticalDamageConversion = (
  config: IntermediateConfig,
) => 25 + spellBurstTotalMagicCriticalDamageConversion(config);

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalDamage = (config: IntermediateConfig) =>
  Math.floor(
    100 +
      (totalCriticalDamage(config) - 100) *
        (totalMagicCriticalDamageConversion(config) / 100),
  );

// critrate
export const totalBaseCriticalRate = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_PERSONAL_STAT_ID] === PersonalStatId.CRT ?
    Math.floor(25 + config[ParamId.CHARACTER_PERSONAL_STAT_VALUE] / 3.4)
  : 0;

export const totalPercentCriticalRateFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_CRITICAL_RATE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCriticalRateFromSkills = (
  config: IntermediateConfig,
) =>
  criticalSpearTotalPercentCriticalRate(config) +
  dualSwordMasteryTotalPercentCriticalRate(config) +
  dualSwordControlTotalPercentCriticalRate(config);

export const totalPercentCriticalRate = (config: IntermediateConfig) =>
  totalPercentCriticalRateFromEquipment(config) +
  totalPercentCriticalRateFromSkills(config);

export const totalFlatCriticalRateFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_CRITICAL_RATE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatCriticalRateFromSkills = (
  config: IntermediateConfig,
) =>
  criticalSpearTotalFlatCriticalRate(config) +
  twoHandedTotalFlatCriticalRate(config) +
  criticalUPTotalFlatCriticalRate(config);

export const totalFlatCriticalRate = (config: IntermediateConfig) =>
  totalFlatCriticalRateFromEquipment(config) +
  totalFlatCriticalRateFromSkills(config);

export const totalCriticalRate = (config: IntermediateConfig) => {
  return total(
    totalBaseCriticalRate(config),
    totalPercentCriticalRate(config),
    totalFlatCriticalRate(config),
  );
};

/** NOTE:
 * this is only for display purposes, magic critical damage is dynamic therefore
 * it is not advisable to add this function to the skill calculations due to
 * several factors that can increase the `mcdmg` conversion.
 */
export const totalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) => spellBurstTotalMagicCriticalRateConversion(config);

export const totalMagicCriticalRate = (config: IntermediateConfig) =>
  Math.floor(
    totalCriticalRate(config) *
      (totalMagicCriticalRateConversion(config) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  config: IntermediateConfig,
) =>
  totalCriticalRate(config) *
  ((totalMagicCriticalRateConversion(config) + 50) / 100);

// CSPD
export const totalBaseCSPD = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      1.16 * totalAGI(config) +
      2.94 * totalDEX(config),
  );

export const totalPercentCSPDFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_CSPD)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentCSPDFromSkills = (config: IntermediateConfig) =>
  magicWarriorMasteryTotalPercentCSPD(config) +
  highCycleTotalPercentCSPD(config) +
  castMasteryTotalPercentCSPD(config);

export const totalPercentCSPD = (config: IntermediateConfig) =>
  totalPercentCSPDFromEquipment(config) +
  totalPercentCSPDFromSkills(config);

export const totalFlatCSPDFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_CSPD)
    .map((stat) => stat[1])
    .reduce(add, 0) + magicSpeedBoostTotalFlatCSPD(config);

export const totalFlatCSPDFromSkills = (config: IntermediateConfig) =>
  magicWarriorMasteryTotalFlatCSPD(config) +
  highCycleTotalFlatCSPD(config) +
  castMasteryTotalFlatCSPD(config) +
  overlimitTotalFlatCSPD(config);

export const totalFlatCSPD = (config: IntermediateConfig) =>
  totalFlatCSPDFromEquipment(config) + totalFlatCSPDFromSkills(config);

export const totalCSPD = (config: IntermediateConfig) =>
  total(
    totalBaseCSPD(config),
    totalPercentCSPD(config),
    totalFlatCSPD(config),
  );

// DEF
export const normalArmorBaseDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalVIT(config) +
  totalEquipmentDEF(config);

export const lightArmorBaseDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 0.8 +
      totalVIT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 1.2 +
      totalVIT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 0.4 +
      totalVIT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ?
    lightArmorBaseDEF(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    heavyArmorBaseDEF(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.NORMAL ?
    normalArmorBaseDEF(config)
  : noArmorBaseDEF(config);

export const totalPercentDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_DEF)
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentDEFModifier(config);

export const totalPercentDEFFromSkills = (config: IntermediateConfig) =>
  berserkTotalPercentDEF(config) + forceShieldTotalPercentDEF(config);

export const totalPercentDEF = (config: IntermediateConfig) =>
  totalPercentDEFFromEquipment(config) + totalPercentDEFFromSkills(config);

export const totalFlatDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_DEF)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDEFFromSkills = (config: IntermediateConfig) =>
  forceShieldTotalFlatDEF(config) +
  defenseUPTotalFlatDEF(config) +
  defenseMasteryTotalFlatDEF(config);

export const totalFlatDEF = (config: IntermediateConfig) =>
  totalFlatDEFFromEquipment(config) + totalFlatDEFFromSkills(config);

export const totalDEF = (config: IntermediateConfig) =>
  total(
    totalBaseDEF(config),
    totalPercentDEF(config),
    totalFlatDEF(config),
  );

// Dodge
export const normalArmorBaseDodge = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] + totalAGI(config);

export const lightArmorBaseDodge = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 1.25 + totalAGI(config) * 1.75,
  ) + 30;

export const heavyArmorBaseDodge = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 0.5 + totalAGI(config) * 0.75,
  ) - 15;

export const noArmorBaseDodge = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 1.5 + totalAGI(config) * 2,
  ) + 75;

export const totalBaseDodge = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ?
    lightArmorBaseDodge(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    heavyArmorBaseDodge(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.NORMAL ?
    normalArmorBaseDodge(config)
  : noArmorBaseDodge(config);

export const totalPercentDodge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_DODGE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatDodge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_DODGE)
    .map((stat) => stat[1])
    .reduce(add, 0) + dodgeUPTotalFlatDodge(config);

export const totalDodge = (config: IntermediateConfig) =>
  total(
    totalBaseDodge(config),
    totalPercentDodge(config),
    totalFlatDodge(config),
  );

// MATK

export const totalDualWieldBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config);

export const totalOneHandedSwordBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config);

export const totalTwoHandedSwordBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config);

export const totalBowBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config);

export const totalBowgunBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config);

export const totalStaffBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalKnuckleBaseMATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalINT(config) * 4 +
      totalDEX(config) +
      totalMainWeaponATK(config) * 0.5,
  );

export const totalHalberdBaseMATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalINT(config) * 2 +
      totalDEX(config) +
      totalAGI(config),
  );

export const totalKatanaBaseMATK = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] +
      totalINT(config) * 1.5 +
      totalDEX(config),
  );

export const totalBareHandBaseMATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) * 3 +
  totalDEX(config) +
  1;

export const totalBaseMATK = (config: IntermediateConfig) =>
  (isUsingDualSwords(config) ? totalDualWieldBaseMATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.ONE_HANDED_SWORD
  ) ?
    totalOneHandedSwordBaseMATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.TWO_HANDED_SWORD
  ) ?
    totalTwoHandedSwordBaseMATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW ?
    totalBowBaseMATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOWGUN ?
    totalBowgunBaseMATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ?
    totalStaffBaseMATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    totalMagicDeviceBaseMATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES
  ) ?
    totalKnuckleBaseMATK(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.HALBERD
  ) ?
    totalHalberdBaseMATK(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    totalKatanaBaseMATK(config)
  : totalBareHandBaseMATK(config)) +
  totalBaseMATKValueFromMATKUP(config) +
  totalBaseMATKValueFromMATKDOWN(config);

export const totalPercentMATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_MATK)
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponKnucklePercentMATKModifier(config);

export const totalPercentMATKFromSkills = (config: IntermediateConfig) =>
  magicMasteryTotalPercentMATK(config) + prayerTotalPercentMATK(config);

export const totalPercentMATK = (config: IntermediateConfig) =>
  totalPercentMATKFromEquipment(config) +
  totalPercentMATKFromSkills(config);

export const totalFlatMATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_MATK)
    .map((stat) => stat[1])
    .reduce(add, 0) + magicAttackBoostTotalFlatMATK(config);

export const totalFlatMATKFromSkills = (config: IntermediateConfig) =>
  magicUPTotalFlatMATK(config) +
  increasedEnergyTotalFlatMATK(config) +
  magicWarriorMasteryTotalFlatMATK(config) +
  conversionTotalFlatMATK(config);

export const totalFlatMATK = (config: IntermediateConfig) =>
  totalFlatMATKFromEquipment(config) + totalFlatMATKFromSkills(config);

export const totalMATK = (config: IntermediateConfig) =>
  total(
    totalBaseMATK(config),
    totalPercentMATK(config),
    totalFlatMATK(config),
  );

// MAX HP
export const totalBaseMaxHP = (config: IntermediateConfig) =>
  93 +
  Math.floor(
    (totalVIT(config) + 22.4) * (config[ParamId.CHARACTER_LEVEL] / 3),
  ); // need to confirm this

export const totalPercentMaxHPFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_MAX_HP)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentMaxHPFromSkills = (config: IntermediateConfig) =>
  HPBoostTotalPercentMaxHP(config);

export const totalPercentMaxHP = (config: IntermediateConfig) =>
  totalPercentMaxHPFromEquipment(config) +
  totalPercentMaxHPFromSkills(config);

export const totalFlatMaxHPFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_MAX_MP)
    .map((stat) => stat[1])
    .reduce(add, 0) + maxHPBoostTotalFlatMaxMP(config);

export const totalFlatMaxHPFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatMaxHP(config) +
  HPBoostTotalFlatMaxHP(config) +
  forceShieldTotalFlatMaxHP(config) +
  magicalShieldTotalFlatMaxHP(config);

export const totalFlatMaxHP = (config: IntermediateConfig) =>
  totalFlatMaxHPFromEquipment(config) + totalFlatMaxHPFromSkills(config);

export const totalMaxHP = (config: IntermediateConfig) =>
  total(
    totalBaseMaxHP(config),
    totalPercentMaxHP(config),
    totalFlatMaxHP(config),
  );

// MAX MP

export const totalBaseMaxMP = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_PERSONAL_STAT_ID] === PersonalStatId.TEC ?
    config[ParamId.CHARACTER_PERSONAL_STAT_VALUE] > 0 ?
      Math.floor(
        100 +
          config[ParamId.CHARACTER_LEVEL] +
          totalINT(config) / 10 +
          (config[ParamId.CHARACTER_PERSONAL_STAT_VALUE] - 1),
      )
    : Math.floor(
        100 + config[ParamId.CHARACTER_LEVEL] + totalINT(config) / 10,
      )
  : 0;

export const totalPercentMaxMP = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_MAX_MP)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMaxMPFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_MAX_MP)
    .map((stat) => stat[1])
    .reduce(add, 0) + maxMPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMPFromSkills = (config: IntermediateConfig) =>
  bushidoTotalFlatMaxMP(config) + MPBoostTotalFlatMaxMP(config);

export const totalFlatMaxMP = (config: IntermediateConfig) =>
  totalFlatMaxMPFromEquipment(config) + totalFlatMaxMPFromSkills(config);

export const totalMaxMP = (config: IntermediateConfig) =>
  total(
    totalBaseMaxMP(config),
    totalPercentMaxMP(config),
    totalFlatMaxMP(config),
  );

// MDEF

export const normalArmorBaseMDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_LEVEL] +
  totalINT(config) +
  totalEquipmentDEF(config);

export const lightArmorBaseMDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 0.8 +
      totalINT(config) * 0.25 +
      totalEquipmentDEF(config),
  );

export const heavyArmorBaseMDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 1.2 +
      totalINT(config) * 2 +
      totalEquipmentDEF(config),
  );

export const noArmorBaseMDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] * 0.4 +
      totalINT(config) * 0.1 +
      totalEquipmentDEF(config),
  );

export const totalBaseMDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ?
    lightArmorBaseMDEF(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    heavyArmorBaseMDEF(config)
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.NORMAL ?
    normalArmorBaseMDEF(config)
  : noArmorBaseMDEF(config);

export const totalPercentMDEFFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_MDEF)
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponArrowPercentMDEFModifier(config);

export const totalPercentMDEFFromSkills = (config: IntermediateConfig) =>
  berserkTotalPercentMDEF(config) + magicalShieldTotalPercentMDEF(config);

export const totalPercentMDEF = (config: IntermediateConfig) =>
  totalPercentMDEFFromEquipment(config) +
  totalPercentMDEFFromSkills(config);

export const totalFlatMDEFFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_MDEF)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatMDEFFromSkills = (config: IntermediateConfig) =>
  magicalShieldTotalFlatMDEF(config) +
  defenseUPTotalFlatMDEF(config) +
  defenseMasteryTotalFlatMDEF(config);

export const totalFlatMDEF = (config: IntermediateConfig) =>
  totalFlatMDEFFromEquipment(config) + totalFlatMDEFFromSkills(config);

export const totalMDEF = (config: IntermediateConfig) =>
  total(
    totalBaseMDEF(config),
    totalPercentMDEF(config),
    totalFlatMDEF(config),
  );

// modifiers
export const armorTypeIdPercentASPDModifier = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ? 50
  : config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ? -50
  : 0;

export const subWeaponMagicDevicePercentATKModifier = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
    SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    -15 + magicWarriorMasteryTotalPercentATKPenaltyReduction(config)
  : 0;

export const subWeaponShieldPercentASPDModifier = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    -50 + shieldMasteryPercentASPDPenaltyReduction(config)
  : 0;

export const subWeaponKnucklePercentMATKModifier = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.KNUCKLES ?
    -15
  : 0;

export const subWeaponArrowPercentMDEFModifier = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.ARROW ?
    -25
  : 0;

export const subWeaponArrowPercentDEFModifier = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.ARROW ?
    -25
  : 0;

// stability

export const totalDualWieldBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (
  config: IntermediateConfig,
) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (
  config: IntermediateConfig,
) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] + totalDEX(config) / 10,
  );

export const totalBowBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalBowgunBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] + totalSTR(config) / 20,
  );

export const totalStaffBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] + totalSTR(config) / 20,
  );

export const totalMagicDeviceBaseStability = (
  config: IntermediateConfig,
) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] + totalDEX(config) / 10,
  );

export const totalKnuckleBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] + totalDEX(config) / 40,
  );

export const totalHalberdBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalKatanaBaseStability = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_STABILITY] +
      (totalSTR(config) * 3 + totalDEX(config)) / 40,
  );
export const totalBareHandBaseStability = (config: IntermediateConfig) =>
  Math.floor(1 + totalDEX(config) / 3);

export const totalBaseStability = (config: IntermediateConfig) =>
  isUsingDualSwords(config) ? totalDualWieldBaseStability(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.ONE_HANDED_SWORD
  ) ?
    totalOneHandedSwordBaseStability(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.TWO_HANDED_SWORD
  ) ?
    totalTwoHandedSwordBaseStability(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW ?
    totalBowBaseStability(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOWGUN ?
    totalBowgunBaseStability(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ?
    totalStaffBaseStability(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
    MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    totalMagicDeviceBaseStability(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES
  ) ?
    totalKnuckleBaseStability(config)
  : (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.HALBERD
  ) ?
    totalHalberdBaseStability(config)
  : config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    totalKatanaBaseStability(config)
  : totalBareHandBaseStability(config);

// --------------- Equipment stats ---------------

// defensive
export const totalEquipmentDEF = (config: IntermediateConfig) =>
  (config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    config[ParamId.CHARACTER_SUBWEAPON_DEF]
  : 0) +
  config[ParamId.CHARACTER_ARMOR_DEF] +
  config[ParamId.CHARACTER_ADDITIONAL_GEAR_DEF] +
  config[ParamId.CHARACTER_SPECIAL_GEAR_DEF];

export const totalRefinementReduction = (config: IntermediateConfig) =>
  ((
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ||
    (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE && // magic skin
      magicSkinLevel(config) > 0)
  ) ?
    config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT]
  : 0) +
  config[ParamId.CHARACTER_ARMOR_REFINEMENT] +
  config[ParamId.CHARACTER_ADDITIONAL_GEAR_REFINEMENT];

// element
export const mainWeaponElement = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_STATMAP]
    .filter(
      (stat) =>
        (stat[0] === StatId.EARTH_ELEMENT ||
          stat[0] === StatId.FIRE_ELEMENT ||
          stat[0] === StatId.WIND_ELEMENT ||
          stat[0] === StatId.WATER_ELEMENT ||
          stat[0] === StatId.DARK_ELEMENT ||
          stat[0] === StatId.LIGHT_ELEMENT) &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === StatId.EARTH_ELEMENT ? "earth"
      : stat[0] === StatId.FIRE_ELEMENT ? "fire"
      : stat[0] === StatId.WIND_ELEMENT ? "wind"
      : stat[0] === StatId.WATER_ELEMENT ? "water"
      : stat[0] === StatId.DARK_ELEMENT ? "dark"
      : stat[0] === StatId.LIGHT_ELEMENT ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");

export const subWeaponElement = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_STATMAP]
    .filter(
      (stat) =>
        (stat[0] === StatId.EARTH_ELEMENT ||
          stat[0] === StatId.FIRE_ELEMENT ||
          stat[0] === StatId.WIND_ELEMENT ||
          stat[0] === StatId.WATER_ELEMENT ||
          stat[0] === StatId.DARK_ELEMENT ||
          stat[0] === StatId.LIGHT_ELEMENT) &&
        stat[1] > 0,
    )
    .map((stat) =>
      stat[0] === StatId.EARTH_ELEMENT ? "earth"
      : stat[0] === StatId.FIRE_ELEMENT ? "fire"
      : stat[0] === StatId.WIND_ELEMENT ? "wind"
      : stat[0] === StatId.WATER_ELEMENT ? "water"
      : stat[0] === StatId.DARK_ELEMENT ? "dark"
      : stat[0] === StatId.LIGHT_ELEMENT ? "light"
      : "neutral",
    )
    .reduce((prev, curr) => (curr !== "neutral" ? curr : prev), "neutral");

// equipment related stability

export const totalStabilityFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.STABILITY)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalStabilityFromSkills = (config: IntermediateConfig) =>
  berserkTotalStability(config) +
  samuraiArcheryTotalStability(config) +
  twoHandedTotalStability(config);

export const totalStability = (config: IntermediateConfig) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: IntermediateConfig) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: IntermediateConfig) => 100;

export const totalMagicStability = (config: IntermediateConfig) =>
  Math.floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: IntermediateConfig) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: IntermediateConfig) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;

// weapon atk

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  config: IntermediateConfig,
) =>
  Math.floor(
    config[ParamId.CHARACTER_MAINWEAPON_ATK] *
      (config[ParamId.CHARACTER_MAINWEAPON_REFINEMENT] ** 2 / 100),
  ) + config[ParamId.CHARACTER_MAINWEAPON_REFINEMENT];
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ?
    Math.floor(
      config[ParamId.CHARACTER_SUBWEAPON_ATK] *
        (config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] ** 2 / 200),
    ) + config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT]
  : 0;

export const totalPercentWeaponATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_WEAPON_ATK)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentWeaponATKFromSkills = (
  config: IntermediateConfig,
) =>
  swordMasteryTotalPercentWeaponATK(config) +
  shotMasteryTotalPercentWeaponATK(config) +
  martialMasteryTotalPercentWeaponATK(config) +
  magicMasteryTotalPercentWeaponATK(config) +
  halberdMasteryTotalPercentWeaponATK(config) +
  bushidoTotalPercentWeaponATK(config) +
  twoHandedTotalPercentWeaponATK(config) +
  braveAuraTotalPercentWeaponATK(config) +
  busterBladeTotalPercentWeaponATK(config);

export const totalPercentWeaponATK = (config: IntermediateConfig) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_WEAPON_ATK)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatWeaponATKFromSkills = (config: IntermediateConfig) =>
  samuraiArcheryTotalFlatWeaponATK(config) +
  unarmedMasteryTotalFlatWeaponATK(config);

export const totalFlatWeaponATK = (config: IntermediateConfig) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: IntermediateConfig) =>
  total(
    config[ParamId.CHARACTER_MAINWEAPON_ATK],
    totalPercentWeaponATK(config) +
      flashBlastTotalPercentMainWeaponATK(config),
    totalFlatWeaponATK(config) +
      totalMainWeaponRefinementBonusMainWeaponATK(config),
  );

export const totalSubWeaponATK = (config: IntermediateConfig) =>
  isUsingDualSwords(config) ?
    total(
      config[ParamId.CHARACTER_SUBWEAPON_ATK],
      totalPercentWeaponATK(config),
      totalFlatWeaponATK(config),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(config)
  : 0;

// non-derived

// damage to element/ dte

export const totalMagicDamageToElementBasedFromINT = (
  config: IntermediateConfig,
) => Math.floor(config[ParamId.CHARACTER_BASE_INT] / 10);

export const totalDamageToDark = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_DARK)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToLight = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_LIGHT)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToFire = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_FIRE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToEarth = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_EARTH)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWind = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_WIND)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDamageToWater = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DAMAGE_TO_WATER)
    .map((stat) => stat[1])
    .reduce(add, 0);

// evasion
export const totalBaseEvasionRecharge = (config: IntermediateConfig) => {
  // TODO
};

export const totalPercentEvasionRecharge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.EVASION_RECHARGE)
    .map((stat) => stat[1])
    .reduce(add, 0) + godspeedWieldTotalPercentEvasionRecharge(config);

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now

// guard
export const totalBaseGuardPower = (config: IntermediateConfig) =>
  Math.min(
    [
      config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
        5000
      : 0,
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
        7500
      : 0,
      (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.TWO_HANDED_SWORD
      ) ?
        5000
      : 0,
      (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.HALBERD
      ) ?
        2500
      : 0,
      hiddenTalentTotalBaseGuardPower(config),
    ].reduce(add, 0),
    10000,
  );

export const totalPercentGuardPower = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.GUARD_POWER)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalGuardPower = (config: IntermediateConfig) =>
  totalBaseGuardPower(config) * (totalPercentGuardPower(config) / 100);

export const totalBaseGuardRecharge = (config: IntermediateConfig) =>
  [
    config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ? 25 : 0,
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
      75
    : 0,
    (
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.TWO_HANDED_SWORD
    ) ?
      50
    : 0,
    (
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.HALBERD
    ) ?
      25
    : 0,
    hiddenTalentTotalBaseGuardRecharge(config),
  ].reduce(add, 0);

export const totalPercentGuardRecharge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.GUARD_RECHARGE)
    .map((stat) => stat[1])
    .reduce(add, 0) + heavyArmorMasteryTotalGuardRecharge(config);

export const totalGuardRecharge = (config: IntermediateConfig) =>
  Math.floor(
    (totalBaseGuardRecharge(config) * totalPercentGuardRecharge(config)) /
      100,
  );

export const totalGuardBreak = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.GUARD_BREAK)
    .map((stat) => stat[1])
    .reduce(add, 0);

// pierce
export const totalMagicPierce = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.MAGIC_PIERCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalPierce = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PHYSICAL_PIERCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

// range damage
export const totalLongRangeDamage = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.LONG_RANGE_DAMAGE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalShortRangeDamage = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.SHORT_RANGE_DAMAGE)
    .map((stat) => stat[1])
    .reduce(add, 0);

// resistance
export const totalPhysicalResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PHYSICAL_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPhysicalResistanceFromSkills = (
  config: IntermediateConfig,
) =>
  forceShieldTotalPhysicalResistance(config) +
  godspeedWieldTotalPhysicalResistance(config) +
  siphonBarrierTotalPhysicalResistance(config);

export const totalPhysicalResistance = (config: IntermediateConfig) =>
  totalPhysicalResistanceFromEquipment(config) +
  totalPhysicalResistanceFromSkills(config);

export const totalMagicResistanceFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.MAGIC_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalMagicResistanceFromSkills = (
  config: IntermediateConfig,
) =>
  magicalShieldTotalMagicResistance(config) +
  godspeedWieldTotalMagicResistance(config) +
  siphonBarrierTotalMagicResistance(config);

export const totalMagicResistance = (config: IntermediateConfig) =>
  totalMagicResistanceFromEquipment(config) +
  totalMagicResistanceFromSkills(config);

export const totalLightResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.LIGHT_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalDarkResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.DARK_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFireResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FIRE_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalEarthResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.EARTH_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWindResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.WIND_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalWaterResistance = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.WATER_RESISTANCE)
    .map((stat) => stat[1])
    .reduce(add, 0);

// -------------SPECIAL STATS -------------

// ampr
export const totalBaseAMPR = (config: IntermediateConfig) =>
  Math.floor(10 + totalMaxMP(config) / 100);

export const totalPercentAMPR = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_ATTACK_MP_RECOVERY)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_ATTACK_MP_RECOVERY)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAMPRFromSkills = (config: IntermediateConfig) =>
  aggravateTotalFlatAMPR(config) +
  etherFlareTotalFlatAMPR(config) +
  ultimaQiChargeTotalFlatAMPR(config);

export const totalFlatAMPR = (config: IntermediateConfig) =>
  totalFlatAMPRFromEquipment(config) + totalFlatAMPRFromSkills(config);

export const totalAMPR = (config: IntermediateConfig) =>
  total(
    totalBaseAMPR(config),
    totalPercentAMPR(config),
    totalFlatAMPR(config),
  );

// ATK DOWN

export const totalBaseATKValueFromATKDOWNAGI = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_DOWN_AGI)
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config[ParamId.CHARACTER_BASE_AGI];

export const totalBaseATKValueFromATKDOWNDEX = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_DOWN_DEX)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_DEX];

export const totalBaseATKValueFromATKDOWNINT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_DOWN_INT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_INT];

export const totalBaseATKValueFromATKDOWNSTR = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_DOWN_STR)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_STR];

export const totalBaseATKValueFromATKDOWNVIT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_DOWN_VIT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_VIT];

export const totalBaseATKValueFromATKDOWN = (config: IntermediateConfig) =>
  [
    totalBaseATKValueFromATKDOWNAGI(config),
    totalBaseATKValueFromATKDOWNDEX(config),
    totalBaseATKValueFromATKDOWNINT(config),
    totalBaseATKValueFromATKDOWNSTR(config),
    totalBaseATKValueFromATKDOWNVIT(config),
  ].reduce(add);

// ATK UP

export const totalBaseATKValueFromATKUPAGI = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_UP_AGI)
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config[ParamId.CHARACTER_BASE_AGI];

export const totalBaseATKValueFromATKUPDEX = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_UP_DEX)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_DEX];

export const totalBaseATKValueFromATKUPINT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_UP_INT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_INT];

export const totalBaseATKValueFromATKUPSTR = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_UP_STR)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_STR];

export const totalBaseATKValueFromATKUPVIT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.ATK_UP_VIT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_VIT];

export const totalBaseATKValueFromATKUP = (config: IntermediateConfig) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(add);

// MATK DOWN
export const totalBaseMATKValueFromMATKDOWNAGI = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_DOWN_AGI)
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config[ParamId.CHARACTER_BASE_AGI];

export const totalBaseMATKValueFromMATKDOWNDEX = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_DOWN_DEX)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_DEX];

export const totalBaseMATKValueFromMATKDOWNINT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_DOWN_INT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_INT];

export const totalBaseMATKValueFromMATKDOWNSTR = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_DOWN_STR)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_STR];

export const totalBaseMATKValueFromMATKDOWNVIT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_DOWN_VIT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_VIT];

export const totalBaseMATKValueFromMATKDOWN = (
  config: IntermediateConfig,
) =>
  [
    totalBaseMATKValueFromMATKDOWNAGI(config),
    totalBaseMATKValueFromMATKDOWNDEX(config),
    totalBaseMATKValueFromMATKDOWNINT(config),
    totalBaseMATKValueFromMATKDOWNSTR(config),
    totalBaseMATKValueFromMATKDOWNVIT(config),
  ].reduce(add);

// MATK UP

export const totalBaseMATKValueFromMATKUPAGI = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_UP_AGI)
      .map((stat) => stat[1])
      .reduce(add, 0) / 100,
  ) * config[ParamId.CHARACTER_BASE_AGI];

export const totalBaseMATKValueFromMATKUPDEX = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_UP_DEX)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_DEX];

export const totalBaseMATKValueFromMATKUPINT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_UP_INT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_INT];

export const totalBaseMATKValueFromMATKUPSTR = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_UP_STR)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_STR];

export const totalBaseMATKValueFromMATKUPVIT = (
  config: IntermediateConfig,
) =>
  Math.floor(
    flattenedStats(config)
      .filter((stat) => stat[0] === StatId.MATK_UP_VIT)
      .map((stat) => stat[1])
      .reduce(add, 0) /
      100 /
      100,
  ) * config[ParamId.CHARACTER_BASE_VIT];

export const totalBaseMATKValueFromMATKUP = (config: IntermediateConfig) =>
  [
    totalBaseMATKValueFromMATKUPAGI(config),
    totalBaseMATKValueFromMATKUPDEX(config),
    totalBaseMATKValueFromMATKUPINT(config),
    totalBaseMATKValueFromMATKUPSTR(config),
    totalBaseMATKValueFromMATKUPVIT(config),
  ].reduce(add, 0);

// CAST TIME REDUCTION

export const totalCastTimeReduction = (config: IntermediateConfig) =>
  Math.floor(
    totalCSPD(config) > 1000 ?
      50 + ((totalCSPD(config) - 1000) / 90) * 0.5
    : totalCSPD(config) / 20,
  );

// motion speed
export const totalMotionSpeed = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.MOTION_SPEED)
    .map((stat) => stat[1])
    .reduce(add, 0) + Math.floor((totalASPD(config) - 1000) / 180);

// unsheathe attack
export const totalPercentUnsheatheAttackFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_UNSHEATHE_ATTACK)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentUnsheatheAttackFromSkills = (
  config: IntermediateConfig,
) =>
  godspeedTotalPercentUnsheatheAttack(config) +
  flashBlastTotalPercentUnsheatheAttack(config);

export const totalPercentUnsheatheAttack = (config: IntermediateConfig) =>
  totalPercentUnsheatheAttackFromEquipment(config) +
  totalPercentUnsheatheAttackFromSkills(config);

export const totalFlatUnsheatheAttack = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.FLAT_UNSHEATHE_ATTACK)
    .map((stat) => stat[1])
    .reduce(add, 0);

// ---------- SKILLS AND PASSIVES --------------

// barehand skills

export const hiddenTalentLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_HIDDENTALENT_LEVEL];

export const hiddenTalentTotalBaseGuardPower = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    hiddenTalentLevel(config) * 500
  : 0;

export const hiddenTalentTotalBaseGuardRecharge = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    5 + 2 * hiddenTalentLevel(config)
  : 0;

export const hiddenTalentTotalEvasionCount = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    Math.floor(2 + hiddenTalentLevel(config) * 0.4)
  : 0;

export const hiddenTalentTotalBaseEvasionRecharge = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    hiddenTalentLevel(config) < 10 ?
      0.1 * hiddenTalentLevel(config)
    : 10
  : 0;

export const hiddenTalentTotalCostQiReductionForNonBareHandSkills = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    Math.floor(0.5 * hiddenTalentLevel(config))
  : 0;

export const ultimaQiChargeLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMAQICHARGE_LEVEL];

export const ultimaQiChargeTotalFlatAMPR = (config: IntermediateConfig) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    Math.floor(ultimaQiChargeLevel(config) * 0.5)
  : 0;

export const ultimaQiChargeTotalCostQiReductionForNonBareHandSkills = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    20 - ultimaQiChargeLevel(config)
  : 0;

export const unarmedMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_UNARMEDMASTERY_LEVEL];

export const unarmedMasteryTotalFlatWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    Math.floor(
      (config[ParamId.CHARACTER_LEVEL] * unarmedMasteryLevel(config)) / 10,
    )
  : 0;

export const unarmedMasteryTotalQiChargeLimit = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BARE_HAND &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
  ) ?
    unarmedMasteryLevel(config) < 10 ?
      10 + unarmedMasteryLevel(config) * 10
    : 100 + config[ParamId.CHARACTER_LEVEL]
  : 0;

// blade skills

export const berserkIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_ISACTIVE];
export const berserkLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_LEVEL];

export const berserkTotalPercentASPD = (config: IntermediateConfig) =>
  berserkIsActive(config) ? berserkLevel(config) * 10 : 0;

export const berserkTotalFlatASPD = (config: IntermediateConfig) =>
  berserkIsActive(config) ? berserkLevel(config) * 100 : 0;

export const berserkTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  berserkIsActive(config) ? Math.floor(berserkLevel(config) * 2.5) : 0;

export const berserkTotalStability = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      Math.floor(berserkLevel(config) * 2.5)
    : berserkLevel(config) * 5
  : 0;

export const berserkTotalPercentDEF = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const berserkTotalPercentMDEF = (config: IntermediateConfig) =>
  berserkIsActive(config) ?
    isUsingMainOHS(config) && !isUsingDualSwords(config) ?
      Math.floor((100 - berserkLevel(config)) / 2)
    : 100 - berserkLevel(config)
  : 0;

export const busterBladeLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_LEVEL];

export const busterBladeIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_ISACTIVE];

export const busterBladeTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    busterBladeIsActive(config) ? busterBladeLevel(config)
    : 0
  : 0;

export const quickSlashLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_QUICKSLASH_LEVEL];

export const quickSlashTotalPercentASPD = (config: IntermediateConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    quickSlashLevel(config)
  : 0;

export const quickSlashTotalFlatASPD = (config: IntermediateConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    quickSlashLevel(config) * 10
  : 0;

export const swordMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDMASTERY_LEVEL];

export const swordMasteryTotalPercentATK = (config: IntermediateConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    swordMasteryLevel(config) >= 8 ? 3
    : swordMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const swordMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    swordMasteryLevel(config) * 3
  : 0;

export const warCryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_LEVEL];

export const warCryIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_ISACTIVE];

export const warCryTotalPercentATK = (config: IntermediateConfig) =>
  warCryIsActive(config) ?
    isUsingMainTHS(config) ? warCryLevel(config) * 10 + 5
    : warCryLevel(config) * 10
  : 0;

// dualswords skills

export const dualSwordControlLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDCONTROL_LEVEL];

export const dualSwordControlTotalPercentCriticalRate = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ? 5 + dualSwordControlLevel(config) * 3 : 0;

export const dualSwordControlTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ? 5 + dualSwordControlLevel(config) * 3 : 0;

export const dualSwordControlTotalFlatASPD = (
  config: IntermediateConfig,
) => (isUsingDualSwords(config) ? 50 * dualSwordControlLevel(config) : 0);

export const dualSwordMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDMASTERY_LEVEL];

export const dualSwordMasteryTotalPercentCriticalRate = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0;

export const dualSwordMasteryTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ? -55 + dualSwordMasteryLevel(config) * 3 : 0;

export const flashBlastLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_LEVEL];

export const flashBlastIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_ISACTIVE];

export const flashBlastTotalPercentUnsheatheAttack = (
  config: IntermediateConfig,
) => (flashBlastIsActive(config) ? flashBlastLevel(config) : 0);

export const flashBlastTotalPercentMainWeaponATK = (
  config: IntermediateConfig,
) =>
  flashBlastIsActive(config) ?
    isUsingDualSwords(config) && flashBlastLevel(config) > 0 ?
      25
    : 0
  : 0;

export const godspeedLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_LEVEL];

export const godspeedTotalFlatAGI = (config: IntermediateConfig) =>
  godspeedLevel(config) + Math.max(godspeedLevel(config) - 5, 0);

export const godspeedTotalPercentUnsheatheAttack = (
  config: IntermediateConfig,
) =>
  isUsingDualSwords(config) ?
    godspeedLevel(config) + 15
  : godspeedLevel(config) + 5;

// guard skills

export const advancedEvasionLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDEVASION_LEVEL];

export const advancedEvasionTotalEvasionRecharge = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ?
    advancedEvasionLevel(config)
  : 0;

export const advancedGuardLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDGUARD_LEVEL];

export const advancedGuardTotalGuardRecharge = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    advancedGuardLevel(config)
  : 0;

export const advancedGuardTotalGuardPower = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    Math.floor((1 + advancedGuardLevel(config)) / 2)
  : 0;

export const heavyArmorMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_GUARDSKILLS_HEAVYARMORMASTERY_LEVEL];

export const heavyArmorMasteryTotalGuardRecharge = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.HEAVY ?
    heavyArmorMasteryLevel(config)
  : 0;

export const lightArmorMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_GUARDSKILLS_LIGHTARMORMASTERY_LEVEL];

export const lightArmorMasteryTotalEvasionRecharge = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_ARMOR_TYPE] === ArmorTypeId.LIGHT ?
    lightArmorMasteryLevel(config)
  : 0;

export const criticalSpearLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CRITICALSPEAR_LEVEL];

export const criticalSpearTotalPercentCriticalRate = (
  config: IntermediateConfig,
) =>
  isUsingMainHAL(config) ?
    Math.floor(criticalSpearLevel(config) * 0.5)
  : 0;

export const criticalSpearTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  isUsingMainHAL(config) ?
    Math.floor(criticalSpearLevel(config) * 0.5 + 0.5)
  : 0;

export const godspeedWieldStacks = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_STACKS];

export const godspeedWieldLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_LEVEL];

export const godspeedWieldIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_ISACTIVE];

export const godspeedWieldTotalFlatASPD = (config: IntermediateConfig) =>
  godspeedWieldIsActive(config) ?
    isUsingMainHAL(config) ?
      30 * godspeedWieldLevel(config) * godspeedWieldStacks(config) +
      100 * godspeedWieldStacks(config)
    : 30 * godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const godspeedWieldTotalMotionSpeed = (
  config: IntermediateConfig,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const almightyWieldLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_ALMIGHTYWIELD_LEVEL];

export const godspeedWieldTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
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

export const godspeedWieldTotalMagicResistance = (
  config: IntermediateConfig,
) =>
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

export const godspeedWieldTotalFlatMaxMP = (config: IntermediateConfig) =>
  godspeedWieldIsActive(config) ? -(100 * godspeedWieldStacks(config)) : 0;

export const godspeedWieldTotalPercentEvasionRecharge = (
  config: IntermediateConfig,
) =>
  godspeedWieldIsActive(config) ?
    godspeedWieldLevel(config) * godspeedWieldStacks(config)
  : 0;

export const halberdMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_HALBERDMASTERY_LEVEL];

export const halberdMasteryTotalPercentATK = (
  config: IntermediateConfig,
) =>
  isUsingMainHAL(config) ?
    halberdMasteryLevel(config) >= 8 ? 3
    : halberdMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const halberdMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) => (isUsingMainHAL(config) ? halberdMasteryLevel(config) * 3 : 0);

export const quickAuraLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_LEVEL];

export const quickAuraIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_ISACTIVE];

export const quickAuraTotalFlatASPD = (config: IntermediateConfig) =>
  quickAuraIsActive(config) ? quickAuraLevel(config) * 50 : 0;

export const quickAuraTotalPercentASPD = (
  config: IntermediateConfig,
): number =>
  quickAuraIsActive(config) ? Math.floor(quickAuraLevel(config) * 2.5) : 0;

// hunter skills

export const hunterBowgunLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_HUNTERSKILLS_HUNTERBOWGUN_LEVEL];

export const hunterBowgunTotalBaseATK = (config: IntermediateConfig) =>
  (
    isUsingMainBWG(config) &&
    !(isUsingSubArrow(config) || isNotUsingSubWeapon(config))
  ) ?
    (1 + (Math.floor(hunterBowgunLevel(config) * 1.5) * 5) / 3 / 100) *
    config[ParamId.CHARACTER_MAINWEAPON_ATK]
  : 0;

// magic blade skills
export const conversionLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_LEVEL];

export const conversionTotalFlatMATK = (config: IntermediateConfig) =>
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

export const dualBringerLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_LEVEL];
export const dualBringerIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_ISACTIVE];

// refactor this
export const totalNumberOfMagicBladeSkills = (
  config: IntermediateConfig,
) =>
  [
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICWARRIORMASTERY_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    (
      config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_LEVEL] >
      0
    ) ?
      1
    : 0,
    config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_LEVEL] > 0 ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDSPELL_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    (
      config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_LEVEL] >
      0
    ) ?
      1
    : 0,
    (
      config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_LEVEL] >
      0
    ) ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ELEMENTSLASH_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTSWORD_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDBURST_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    (
      config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_UNIONSWORD_LEVEL] >
      0
    ) ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_TELEPORT_LEVEL] > 0 ?
      1
    : 0,
    (
      config[
        ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONRECALL_LEVEL
      ] > 0
    ) ?
      1
    : 0,
    config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_FLOATDASH_LEVEL] > 0 ?
      1
    : 0,
    config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICSKIN_LEVEL] > 0 ?
      1
    : 0,
  ].reduce(add, 0);

export const totalNegativePercentATK = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_ATK && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(add, 0);
// + subWeaponMagicDevicePercentATKModifier(config);

export const totalNegativePercentMATK = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.PERCENT_MATK && stat[1] < 0)
    .map((stat) => stat[1])
    .reduce(add, 0);

export const dualBringerTotalSkillModifier = (
  config: IntermediateConfig,
) =>
  Math.min(
    100,
    dualBringerLevel(config) * totalNumberOfMagicBladeSkills(config),
  );

export const dualBringerTotalATK = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE
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

export const dualBringerTotalMATK = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE
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

export const dualBringerTotalDuration = (config: IntermediateConfig) =>
  (
    dualBringerIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    Math.max(10, Math.floor(config[ParamId.CHARACTER_SUBWEAPON_ATK] / 10))
  : 0;

export const dualBringerTotalMagicCriticalDamageConversion = (
  config: IntermediateConfig,
) =>
  (
    dualBringerIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    totalINT(config) > totalSTR(config)
  ) ?
    Math.floor(dualBringerLevel(config) * 2.5)
  : 0;

export const dualBringerTotalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) =>
  (
    dualBringerIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    totalSTR(config) > totalINT(config)
  ) ?
    Math.floor(dualBringerLevel(config) * 2.5)
  : 0;

export const etherFlareLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_LEVEL];

export const etherFlareInflictedIgniteOnEnemy = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_ISACTIVE];

export const etherFlareTotalFlatAMPR = (config: IntermediateConfig) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    etherFlareInflictedIgniteOnEnemy(config)
  ) ?
    15 +
    Math.floor(etherFlareLevel(config) / 6) * 5 +
    Math.floor(etherFlareLevel(config) / 5) * 5
  : 0;

export const magicSkinLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICSKIN_LEVEL];

export const magicSkinTotalRefinementReduction = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE && magicSkinLevel(config) > 0
  ) ?
    config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT]
  : 0;

export const magicWarriorMasteryLevel = (config: IntermediateConfig) =>
  config[
    ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICWARRIORMASTERY_LEVEL
  ];

export const magicWarriorMasteryTotalPercentATKPenaltyReduction = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
    SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicWarriorMasteryLevel(config) + (isUsingMainOHS(config) ? 5 : 0)
  : 0;

export const magicWarriorMasteryTotalFlatMATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
    SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicWarriorMasteryLevel(config) * 2 +
    (magicWarriorMasteryLevel(config) - 5 > 0 ?
      magicWarriorMasteryLevel(config) - 5
    : 0)
  : 0;

export const magicWarriorMasteryTotalFlatCSPD = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
    SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicWarriorMasteryLevel(config) * 10
  : 0;

export const magicWarriorMasteryTotalPercentCSPD = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
    SubWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicWarriorMasteryLevel(config) * 1 +
    Math.max(magicWarriorMasteryLevel(config) - 5, 0)
  : 0;

export const resonanceLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_LEVEL];
export const resonanceIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ISACTIVE];
export const resonanceActiveSet = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ACTIVESET];

export const activeResonanceRegislet = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_REGISLETS_FOCUSRESONANCE_LEVEL] > 0 ?
    "focusResonance"
  : config[ParamId.CHARACTER_REGISLETS_SPEEDRESONANCE_LEVEL] > 0 ?
    "speedResonance"
  : config[ParamId.CHARACTER_REGISLETS_POWERRESONANCE_LEVEL] > 0 ?
    "powerResonance"
  : "none";

export const resonanceTotalFlatATK = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "powerResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        resonanceLevel(config) * 2 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2 -
          (resonanceLevel(config) * 2 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ATK_AND_MATK
  ) ?
    Math.floor(
      resonanceLevel(config) * 2 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2,
    )
  : 0;

export const resonanceTotalFlatMATK = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "powerResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        resonanceLevel(config) * 2 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2 -
          (resonanceLevel(config) * 2 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ATK_AND_MATK
  ) ?
    Math.floor(
      resonanceLevel(config) * 2 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 2,
    )
  : 0;

export const resonanceTotalFlatASPD = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "speedResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        resonanceLevel(config) * 25 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50 -
          (resonanceLevel(config) * 25 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ASPD_AND_CSPD
  ) ?
    Math.floor(
      resonanceLevel(config) * 25 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50,
    )
  : 0;

export const resonanceTotalFlatCSPD = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "speedResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        resonanceLevel(config) * 25 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50 -
          (resonanceLevel(config) * 25 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ASPD_AND_CSPD
  ) ?
    Math.floor(
      resonanceLevel(config) * 25 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 50,
    )
  : 0;

export const resonanceTotalFlatAccuracy = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "focusResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        35 +
          resonanceLevel(config) * 2 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3 -
          (35 +
            resonanceLevel(config) * 2 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ACC_AND_CRIT
  ) ?
    Math.floor(
      35 +
        resonanceLevel(config) * 2 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3,
    )
  : 0;

export const resonanceTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  activeResonanceRegislet(config) === "focusResonance" ?
    (
      resonanceIsActive(config) &&
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      Math.floor(
        10 +
          resonanceLevel(config) * 2 +
          config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3 -
          (10 +
            resonanceLevel(config) * 2 +
            config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
      SubWeaponTypeId.MAGIC_DEVICE &&
    resonanceActiveSet(config) === ResonanceSetId.ACC_AND_CRIT
  ) ?
    Math.floor(
      10 +
        resonanceLevel(config) * 2 +
        config[ParamId.CHARACTER_SUBWEAPON_REFINEMENT] * 3,
    )
  : 0;

export const siphonBarrierLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_LEVEL];

export const siphonBarrierIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_ISACTIVE];

export const siphonBarrierTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
  (
    (config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE) &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

export const siphonBarrierTotalMagicResistance = (
  config: IntermediateConfig,
) =>
  (
    (config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE) &&
    siphonBarrierIsActive(config)
  ) ?
    siphonBarrierLevel(config) * 9
  : 0;

// magic skills

export const magicMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICMASTERY_LEVEL];

export const magicMasteryTotalPercentMATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicMasteryLevel(config) >= 8 ? 3
    : magicMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const magicMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.STAFF ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    magicMasteryLevel(config) * 3
  : 0;

export const qadalLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_LEVEL];

export const qadalIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_ISACTIVE];

export const qadalCharge = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_BURDEN];

export const qadalTimeActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_COMBAT_TIME];

export const qadalTotalLastDamageModifier = (
  config: IntermediateConfig,
) =>
  qadalIsActive(config) ?
    qadalCharge(config) > Math.floor(qadalTimeActive(config) / 3) ?
      Math.floor(qadalTimeActive(config) / 3)
    : qadalCharge(config)
  : 0;

// martial skills

export const aggravateLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MARTIALSKILLS_AGGRAVATE_LEVEL];

export const aggravateTotalFlatAMPR = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    Math.floor(aggravateLevel(config) * 0.5)
  : 0;

export const aggravateTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    aggravateLevel(config) * 2
  : 0;

export const martialDisciplineLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALDISCIPLINE_LEVEL];

export const martialDisciplineTotalMartialSkillDamageBonus = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalPercentASPD = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    martialDisciplineLevel(config)
  : 0;

export const martialDisciplineTotalFlatASPD = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    martialDisciplineLevel(config)
  : 0;

export const martialMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALMASTERY_LEVEL];

export const martialMasteryTotalPercentATK = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    martialMasteryLevel(config) >= 8 ? 3
    : martialMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const martialMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KNUCKLES ?
    martialMasteryLevel(config) * 3
  : 0;

// mononofu skills

export const bushidoLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BUSHIDO_LEVEL];

export const bushidoTotalPercentATK = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    bushidoLevel(config) >= 8 ? 3
    : bushidoLevel(config) >= 3 ? 2
    : 1
  : 0;

export const bushidoTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.KATANA ?
    bushidoLevel(config) * 3
  : 0;

export const bushidoTotalFlatMaxHP = (config: IntermediateConfig) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatMaxMP = (config: IntermediateConfig) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatAccuracy = (config: IntermediateConfig) =>
  bushidoLevel(config);

export const twoHandedLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TWOHANDED_LEVEL];

// TODO MOVE THIS TO THE NINJASKILLS SECTION
//   export const isNinjaSpiritMaxed = (config: Intermediateconfig) =>
//   config[ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJASPIRIT_LEVEL] === 10;

export const twoHandedTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.KATANA ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.ONE_HANDED_SWORD ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    (
      (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.NINJUTSU_SCROLL &&
        ninjaSpiritLevel(config) === 10) ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
    ) ?
      twoHandedLevel(config)
    : 0
  : config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE ?
    twoHandedLevel(config)
  : 0;

export const twoHandedTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.KATANA ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.ONE_HANDED_SWORD ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    (
      (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.NINJUTSU_SCROLL &&
        ninjaSpiritLevel(config) === 10) ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
    ) ?
      twoHandedLevel(config)
    : 0
  : config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE ?
    twoHandedLevel(config)
  : 0;

export const twoHandedTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.KATANA ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.ONE_HANDED_SWORD ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    (
      (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.NINJUTSU_SCROLL &&
        ninjaSpiritLevel(config) === 10) ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
    ) ?
      (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.KATANA
      ) ?
        twoHandedLevel(config)
      : (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
          MainWeaponTypeId.ONE_HANDED_SWORD ||
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
          MainWeaponTypeId.MAGIC_DEVICE
      ) ?
        Math.floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE ?
    Math.floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalStability = (config: IntermediateConfig) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.KATANA ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.ONE_HANDED_SWORD ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE
  ) ?
    (
      (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.NINJUTSU_SCROLL &&
        ninjaSpiritLevel(config) === 10) ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE
    ) ?
      (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.KATANA
      ) ?
        twoHandedLevel(config)
      : (
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
          MainWeaponTypeId.ONE_HANDED_SWORD ||
        config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
          MainWeaponTypeId.MAGIC_DEVICE
      ) ?
        Math.floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE ?
    Math.floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalATKOnCrit = (config: IntermediateConfig) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.KATANA &&
    (config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.NONE ||
      (config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.NINJUTSU_SCROLL &&
        ninjaSpiritLevel(config) === 10))
  ) ?
    totalATK(config) * Math.floor((100 + 5 * twoHandedLevel(config)) / 100)
  : 0;

// ninja skills
export const ninjaSpiritLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJASPIRIT_LEVEL];

export const ninjaSpiritTotalFlatDodge = (config: IntermediateConfig) =>
  ninjaSpiritLevel(config);

// prayer skills

export const prayerLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_LEVEL];

export const prayerIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_ISACTIVE];

export const prayerTotalPercentMATK = (config: IntermediateConfig) =>
  prayerIsActive(config) ?
    (
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_SUBWEAPON_TYPE] ===
        SubWeaponTypeId.MAGIC_DEVICE
    ) ?
      prayerLevel(config) + 5
    : prayerLevel(config)
  : 0;

// Shield Skills

export const forceShieldLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHIELDSKILLS_FORCESHIELD_LEVEL];

export const forceShieldTotalFlatDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    forceShieldLevel(config) * 2
  : 0;

export const forceShieldTotalPercentDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    forceShieldLevel(config)
  : 0;

export const forceShieldTotalFlatMaxHP = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    forceShieldLevel(config) * 50
  : 0;

export const forceShieldTotalPhysicalResistance = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    forceShieldLevel(config)
  : 0;

export const magicalShieldLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHIELDSKILLS_MAGICALSHIELD_LEVEL];

export const magicalShieldTotalFlatMDEF = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    magicalShieldLevel(config) * 2
  : 0;

export const magicalShieldTotalPercentMDEF = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    magicalShieldLevel(config)
  : 0;

export const magicalShieldTotalFlatMaxHP = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    magicalShieldLevel(config) * 50
  : 0;
export const magicalShieldTotalMagicResistance = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    magicalShieldLevel(config)
  : 0;

export const shieldMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDMASTERY_LEVEL];

export const shieldMasteryPercentASPDPenaltyReduction = (
  config: IntermediateConfig,
) =>
  config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.SHIELD ?
    shieldMasteryLevel(config) * 5
  : 0;

// shot skills

export const longRangeLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHOTSKILLS_LONGRANGE_LEVEL];

export const longRangeTotalSkillDamageModifier = (
  config: IntermediateConfig,
) => longRangeLevel(config);

export const samuraiArcheryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_LEVEL];

export const samuraiArcheryStacks = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_STACKS];

export const samuraiArcheryTotalFlatWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.KATANA
  ) ?
    Math.min(
      Math.floor(
        config[ParamId.CHARACTER_SUBWEAPON_ATK] *
          0.1 *
          samuraiArcheryLevel(config),
      ),
      Math.floor(
        config[ParamId.CHARACTER_MAINWEAPON_ATK] *
          Math.floor(
            config[ParamId.CHARACTER_MAINWEAPON_STABILITY] / 100,
          ) *
          0.1 *
          samuraiArcheryLevel(config),
      ),
    )
  : 0;

export const samuraiArcheryTotalStability = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.KATANA
  ) ?
    Math.floor(config[ParamId.CHARACTER_SUBWEAPON_STABILITY] / 4)
  : 0;
export const samuraiArcheryTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW &&
    config[ParamId.CHARACTER_SUBWEAPON_TYPE] === SubWeaponTypeId.KATANA
  ) ?
    samuraiArcheryLevel(config) * samuraiArcheryStacks(config)
  : 0;

export const shotMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SHOTSKILLS_SHOTMASTERY_LEVEL];

export const shotMasteryTotalPercentATK = (config: IntermediateConfig) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BOWGUN ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW
  ) ?
    shotMasteryLevel(config) >= 8 ? 3
    : shotMasteryLevel(config) >= 3 ? 2
    : 1
  : 0;

export const shotMasteryTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.BOWGUN ||
    config[ParamId.CHARACTER_MAINWEAPON_TYPE] === MainWeaponTypeId.BOW
  ) ?
    shotMasteryLevel(config) * 3
  : 0;

// support skills
export const braveAuraLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_LEVEL];

export const braveAuraIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_ISACTIVE];

export const braveAuraTotalPercentWeaponATK = (
  config: IntermediateConfig,
) => (braveAuraIsActive(config) ? 10 + braveAuraLevel(config) * 2 : 0);

export const braveAuraTotalLastDamageModifier = (
  config: IntermediateConfig,
) => (braveAuraIsActive(config) ? braveAuraLevel(config) * 2 : 0);

export const highCycleIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_ISACTIVE];

export const highCycleLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_LEVEL];

export const highCycleTotalFlatCSPD = (config: IntermediateConfig) =>
  highCycleIsActive(config) ? 50 + highCycleLevel(config) * 50 : 0;

export const highCycleTotalPercentCSPD = (config: IntermediateConfig) =>
  highCycleIsActive(config) ? highCycleLevel(config) * 25 : 0;

export const highCycleTotalPercentNMPR = (config: IntermediateConfig) =>
  highCycleIsActive(config) ?
    Math.floor(-50.5 - highCycleLevel(config) * 2.5)
  : 0;

export const highCycleTotalPercentAMPR = (config: IntermediateConfig) =>
  highCycleIsActive(config) ?
    Math.floor(-90.5 - highCycleLevel(config) * 1.5)
  : 0;

export const manaRechargeLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_LEVEL];

export const manaRechargeIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_ISACTIVE];

export const manaRechargeTotalLastDamageModifier = (
  config: IntermediateConfig,
) =>
  manaRechargeIsActive(config) ?
    -(50 - manaRechargeLevel(config) * 2.5)
  : 0;

// survival skills

export const HPBoostLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_REGISLETS_MAXHPBOOST_LEVEL];

export const HPBoostTotalPercentMaxHP = (config: IntermediateConfig) =>
  HPBoostLevel(config) * 2;

export const HPBoostTotalFlatMaxHP = (config: IntermediateConfig) =>
  HPBoostLevel(config) * 100;

export const MPBoostLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_MPBOOST_LEVEL];

export const MPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  MPBoostLevel(config) * 30;

// Wizard skills

export const castMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CASTMASTERY_LEVEL];

export const wizardSkillsLevels = (config: IntermediateConfig) => [
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_LIGHTNING_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_BLIZZARD_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_METEORSTRIKE_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_IMPERIALRAY_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_MANACRYSTAL_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_STONEBARRIER_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_ADVANCEDFAMILIA_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CASTMASTERY_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CRYSTALLASER_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_LEVEL],
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_SORCERYGUIDE_LEVEL],
];

export const totalWizardSkillsLearned = (config: IntermediateConfig) =>
  wizardSkillsLevels(config)
    .filter((level) => (level > 0 ? 1 : 0))
    .reduce(add, 0);

export const totalWizardSkillsPoints = (config: IntermediateConfig) =>
  wizardSkillsLevels(config).reduce(add, 0);

export const castMasteryTotalPercentCSPD = (config: IntermediateConfig) =>
  (
    (config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.STAFF) &&
    castMasteryLevel(config) > 0
  ) ?
    Math.floor(castMasteryLevel(config) * 1.5) +
    (totalWizardSkillsLearned(config) - 1) *
      Math.floor(castMasteryLevel(config) / 2)
  : 0;

export const castMasteryTotalFlatCSPD = (config: IntermediateConfig) =>
  (
    (config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.STAFF) &&
    castMasteryLevel(config) > 0
  ) ?
    castMasteryLevel(config) * totalWizardSkillsPoints(config)
  : 0;

export const castMasteryTotalPercentATK = (config: IntermediateConfig) =>
  (
    (config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
      MainWeaponTypeId.MAGIC_DEVICE ||
      config[ParamId.CHARACTER_MAINWEAPON_TYPE] ===
        MainWeaponTypeId.STAFF) &&
    castMasteryLevel(config) > 0
  ) ?
    -Math.ceil(50 - 2.5 * castMasteryLevel(config))
  : 0;

export const familiaIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_ISACTIVE];

export const familiaLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_LEVEL];

export const familiaTotalFlatMATK = (config: IntermediateConfig) =>
  familiaIsActive(config) ?
    Math.floor(
      config[ParamId.CHARACTER_LEVEL] / (10 - familiaLevel(config) * 0.6),
    )
  : 0;

export const familiaTotalFlatMaxMP = (config: IntermediateConfig) =>
  familiaIsActive(config) ? 100 + familiaLevel(config) * 10 : 0;

export const familiaTotalAdditionalMagic = (config: IntermediateConfig) =>
  familiaIsActive(config) ? 5 * familiaLevel(config) : 0;

export const overlimitLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_LEVEL];

export const overlimitIsActive = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_ISACTIVE];

export const overlimitTotalElementDamageModifier = (
  config: IntermediateConfig,
) =>
  overlimitIsActive(config) ?
    overlimitLevel(config) +
    sorceryGuideTotalElementDamageModifierBonusForOverlimit(config)
  : 0;

export const overlimitTotalFlatCSPD = (config: IntermediateConfig) =>
  overlimitIsActive(config) ?
    -1000 + sorceryGuideTotalCSPDPenaltyReductionForOverlimit(config)
  : 0;

export const sorceryGuideLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_WIZARDSKILLS_SORCERYGUIDE_LEVEL];

export const sorceryGuideTotalCSPDPenaltyReductionForOverlimit = (
  config: IntermediateConfig,
) => sorceryGuideLevel(config) * 50;

export const sorceryGuideTotalElementDamageModifierBonusForOverlimit = (
  config: IntermediateConfig,
) => sorceryGuideLevel(config);

export const totalPercentATKForWizardSkills = (
  config: IntermediateConfig,
) =>
  totalPercentATKFromEquipment(config) + totalPercentATKFromSkills(config);

export const totalATKForWizardSkills = (config: IntermediateConfig) =>
  Math.floor(
    total(
      totalBaseATK(config),
      totalPercentATKForWizardSkills(config),
      totalFlatATK(config),
    ) * 0.25,
  );

export const totalMATKForWizardSkills = (config: IntermediateConfig) =>
  Math.floor(totalMATK(config) * 0.75);

export const totalWizardATK = (config: IntermediateConfig) =>
  totalATKForWizardSkills(config) + totalMATKForWizardSkills(config);

// battle skills
export const accuracyUPTotalFlatAccuracy = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_ACCURACYUP_LEVEL];

export const attackUPLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_ATTACKUP_LEVEL];

export const attackUPTotalFlatATK = (config: IntermediateConfig) =>
  Math.floor(
    (config[ParamId.CHARACTER_LEVEL] * (2.5 * attackUPLevel(config))) /
      100,
  );

export const criticalUPLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_CRITICALUP_LEVEL];

export const criticalUPTotalFlatCriticalRate = (
  config: IntermediateConfig,
) => Math.floor(criticalUPLevel(config) / 2);

export const criticalUPTotalPercentCriticalDamage = (
  config: IntermediateConfig,
) => Math.floor(criticalUPLevel(config) / 2);

export const defenseMasteryLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEMASTERY_LEVEL];

export const defenseMasteryTotalFlatDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseMasteryTotalFlatMDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] *
      ((2.5 * defenseMasteryLevel(config)) / 100),
  );

export const defenseUPLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEUP_LEVEL];

export const defenseUPTotalFlatDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] *
      ((2.5 * defenseUPLevel(config)) / 100),
  );

export const defenseUPTotalFlatMDEF = (config: IntermediateConfig) =>
  Math.floor(
    config[ParamId.CHARACTER_LEVEL] *
      ((2.5 * defenseUPLevel(config)) / 100),
  );
export const dodgeUPTotalFlatDodge = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_DODGEUP_LEVEL];
export const increasedEnergyLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_INCREASEDENERGY_LEVEL];

export const increasedEnergyTotalFlatMATK = (config: IntermediateConfig) =>
  (config[ParamId.CHARACTER_LEVEL] *
    (2.5 * increasedEnergyLevel(config))) /
  100;
export const intimidatingPowerLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_INTIMIDATINGPOWER_LEVEL];

export const intimidatingPowerTotalFlatATK = (
  config: IntermediateConfig,
) =>
  Math.floor(
    (config[ParamId.CHARACTER_LEVEL] *
      (2.5 * intimidatingPowerLevel(config))) /
      100,
  );

export const magicUPLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_MAGICUP_LEVEL];

export const magicUPTotalFlatMATK = (config: IntermediateConfig) =>
  Math.floor(
    (config[ParamId.CHARACTER_LEVEL] * (2.5 * magicUPLevel(config))) / 100,
  );
export const spellBurstLevel = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_SKILLS_BATTLESKILLS_SPELLBURST_LEVEL];

export const spellBurstTotalMagicCriticalDamageConversion = (
  config: IntermediateConfig,
) => spellBurstLevel(config) * 2.5;

export const spellBurstTotalMagicCriticalRateConversion = (
  config: IntermediateConfig,
) => spellBurstLevel(config) * 2.5;
// regislets

export const magicAttackBoostTotalFlatMATK = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_REGISLETS_MAGICATTACKBOOST_LEVEL];

export const physicalAttackBoostTotalFlatATK = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_REGISLETS_PHYSICALATTACKBOOST_LEVEL];

export const maxMPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_REGISLETS_MAXMPBOOST_LEVEL];

export const maxHPBoostTotalFlatMaxMP = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_REGISLETS_MAXHPBOOST_LEVEL] * 10;

export const magicSpeedBoostTotalFlatCSPD = (config: IntermediateConfig) =>
  config[ParamId.CHARACTER_REGISLETS_MAGICSPEEDBOOST_LEVEL];

export const attackSpeedBoostTotalFlatASPD = (
  config: IntermediateConfig,
) => config[ParamId.CHARACTER_REGISLETS_ATTACKSPEEDBOOST_LEVEL];

export const focusResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config[ParamId.CHARACTER_REGISLETS_FOCUSRESONANCE_LEVEL];

export const speedResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config[ParamId.CHARACTER_REGISLETS_SPEEDRESONANCE_LEVEL];

export const powerResonanceTotalReduction = (config: IntermediateConfig) =>
  95 - 5 * config[ParamId.CHARACTER_REGISLETS_POWERRESONANCE_LEVEL];
