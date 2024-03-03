import { StatMap, DeclaredStatusMap } from "../types";

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
  percentUnsheatheAttack: 100,

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
};

export const defaultDeclaredStatusMap: DeclaredStatusMap = {
  level: 1,
  STR: 1,
  DEX: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,
  TEC: 0,
  MTL: 0,
  CRT: 0,
  LUK: 0,

  mainWeaponType: "bare-hand",
  mainWeaponATK: 0,
  mainWeaponStability: 0,
  mainWeaponRefinement: 0,
  mainWeaponStats: [],
  mainWeaponCrystals: [],

  subWeaponType: "none",
  subWeaponATK: 0,
  subWeaponDEF: 0,
  subWeaponRefinement: 0,
  subWeaponStability: 0,
  scrollCastTimeReduction: 0,
  scrollMPReduction: 0,
  subWeaponStats: [],
  subWeaponCrystals: [],

  additionalGearDEF: 0,
  additionalGearStats: [],
  additionalGearCrystals: [],

  armorDEF: 0,
  armorType: "none",
  armorStats: [],
  armorCrystals: [],

  specialGearDEF: 0,
  specialGearStats: [],
  specialGearCrystals: [],

  consumables: [],
  foodBuffs: [],

  // magic warrior skills
  magicWarriorMasteryLevel: 0,

  conversionLevel: 0,
  isConversionActive: false,

  resonanceLevel: 0,
  isResonanceActive: false,
};
