import * as stats from "./modules/stats";
import { StatMap, Config } from "./types";

export const defaultStatMap: StatMap = {
  flatSTR: 0,
  percentSTR: 0,

  flatINT: 0,
  percentINT: 0,

  flatDEX: 0,
  percentDEX: 0,

  flatVIT: 0,
  percentVIT: 0,

  flatAGI: 0,
  percentAGI: 0,

  flatWeaponATK: 0,
  percentWeaponATK: 0,

  flatMATK: 0,
  percentMATK: 0,

  flatATK: 0,
  percentATK: 0,

  flatASPD: 0,
  percentASPD: 0,

  flatCSPD: 0,
  percentCSPD: 0,

  flatCriticalRate: 0,
  percentCriticalRate: 0,

  flatCriticalDamage: 0,
  percentCriticalDamage: 0,

  flatMaxHP: 0,
  percentMaxHP: 0,

  flatMaxMP: 0,
  percentMaxMP: 0,

  flatAccuracy: 0,
  percentAccuracy: 0,

  flatDodge: 0,
  percentDodge: 0,

  flatDEF: 0,
  percentDEF: 0,

  flatMDEF: 0,
  percentMDEF: 0,

  flatUnsheatheAttack: 0,
  percentUnsheatheAttack: 0,

  flatAttackMPRecovery: 0,
  percentAttackMPRecovery: 0,

  stability: 0,

  magicPierce: 0,
  physicalPierce: 0,

  longRangeDamage: 0,
  shortRangeDamage: 0,

  motionSpeed: 0,

  ATKUPSTR: 0,
  ATKUPINT: 0,
  ATKUPDEX: 0,
  ATKUPVIT: 0,
  ATKUPAGI: 0,

  MATKUPSTR: 0,
  MATKUPINT: 0,
  MATKUPDEX: 0,
  MATKUPVIT: 0,
  MATKUPAGI: 0,

  ATKDOWNSTR: 0,
  ATKDOWNINT: 0,
  ATKDOWNDEX: 0,
  ATKDOWNVIT: 0,
  ATKDOWNAGI: 0,

  MATKDOWNSTR: 0,
  MATKDOWNINT: 0,
  MATKDOWNDEX: 0,
  MATKDOWNVIT: 0,
  MATKDOWNAGI: 0,

  magicResistance: 0,
  physicalResistance: 0,

  lightResistance: 0,
  darkResistance: 0,

  fireResistance: 0,
  waterResistance: 0,
  earthResistance: 0,
  windResistance: 0,

  neutralResistance: 0,
  ailmentResistance: 0,

  damageToDark: 0,
  damageToLight: 0,
  damageToEarth: 0,
  damageToWater: 0,
  damageToFire: 0,
  damageToWind: 0,

  aggro: 0,

  tumbleUnavailable: false,
  flinchUnavailable: false,
  stunUnavailable: false,

  element: "neutral",

  guardPower: 0,
  guardRecharge: 0,

  evasionRecharge: 0,

  itemCooldown: 0,
  invincibleAid: 0,
};

export const statMap = (
  stats: Partial<StatMap>,
): Partial<StatMap> & StatMap => ({
  ...(defaultStatMap as StatMap),
  ...stats,
});

export const calculateInGameFormatStatus = (config: Config) => {
  return {
    AGI: config["character.AGI"],
    DEX: config["character.DEX"],
    INT: config["character.INT"],
    STR: config["character.STR"],
    VIT: config["character.VIT"],
    ATK: stats.totalATK(config),
    MATK: stats.totalMATK(config),
    DEF: stats.totalDEF(config),
    MDEF: stats.totalMDEF(config),
    HIT: stats.totalAccuracy(config),
    FLEE: stats.totalDodge(config),
    ASPD: stats.totalASPD(config),
    CSPD: stats.totalCSPD(config),
    HP: stats.totalMaxHP(config),
    MP: stats.totalMaxMP(config),
  };
};

export const calculateAll = (config: Config) => ({
  // AGI
  totalBaseAGI: config["character.AGI"],
  totalPercentAGI: stats.totalPercentAGI(config),
  totalFlatAGI: stats.totalFlatAGI(config),
  totalAGI: stats.totalAGI(config),

  // DEX
  totalBaseDEX: config["character.DEX"],
  totalPercentDEX: stats.totalPercentDEX(config),
  totalFlatDEX: stats.totalFlatDEX(config),
  totalDEX: stats.totalDEX(config),

  // INT
  totalBaseINT: config["character.INT"],
  totalPercentINT: stats.totalPercentINT(config),
  totalFlatINT: stats.totalFlatINT(config),
  totalINT: stats.totalINT(config),

  // STR
  totalBaseSTR: config["character.STR"],
  totalPercentSTR: stats.totalPercentSTR(config),
  totalFlatSTR: stats.totalFlatSTR(config),
  totalSTR: stats.totalSTR(config),

  // VIT
  totalBaseVIT: config["character.VIT"],
  totalPercentVIT: stats.totalPercentVIT(config),
  totalFlatVIT: stats.totalFlatVIT(config),
  totalVIT: stats.totalVIT(config),

  // MAX HP
  totalBaseMaxHP: stats.totalBaseMaxHP(config),
  totalPercentMaxHP: stats.totalPercentMaxHP(config),
  totalFlatMaxHP: stats.totalFlatMaxHP(config),
  totalMaxHP: stats.totalMaxHP(config),

  // MAX MP
  totalBaseMaxMP: stats.totalBaseMaxMP(config),
  totalPercentMaxMP: stats.totalPercentMaxMP(config),
  totalFlatMaxMP: stats.totalFlatMaxMP(config),
  totalMaxMP: stats.totalMaxMP(config),

  // DEF
  totalBaseDEF: stats.totalBaseDEF(config),
  totalPercentDEF: stats.totalPercentDEF(config),
  totalFlatDEF: stats.totalFlatDEF(config),
  totalDEF: stats.totalDEF(config),

  // MDEF
  totalBaseMDEF: stats.totalBaseMDEF(config),
  totalPercentMDEF: stats.totalPercentMDEF(config),
  totalFlatMDEF: stats.totalFlatMDEF(config),
  totalMDEF: stats.totalMDEF(config),

  // Critical Damage
  totalBaseCriticalDamage: stats.totalBaseCriticalDamage(config),
  totalPercentCriticalDamage: stats.totalPercentCriticalDamage(config),
  totalFlatCriticalDamage: stats.totalFlatCriticalDamage(config),
  totalCriticalDamage: stats.totalCriticalDamage(config),
  totalMagicCriticalDamage: stats.totalMagicCriticalDamage(config),

  // Critical Rate
  totalBaseCriticalRate: stats.totalBaseCriticalRate(config),
  totalPercentCriticalRate: stats.totalPercentCriticalRate(config),
  totalFlatCriticalRate: stats.totalFlatCriticalRate(config),
  totalCriticalRate: stats.totalCriticalRate(config),
  totalMagicCriticalRate: stats.totalMagicCriticalRate(config),

  // ATK

  // MATK

  // CSPD
  totalBaseCSPD: stats.totalBaseCSPD(config),
  totalPercentCSPD: stats.totalPercentCSPD(config),
  totalFlatCSPD: stats.totalFlatCSPD(config),
  totalCSPD: stats.totalCSPD(config),
  totalCastTimeReduction: stats.totalCastTimeReduction(config),
});
