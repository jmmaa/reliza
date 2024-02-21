import { StatSource } from "../types";

export type DeclaredStatContainer<S> = {
  weaponStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  weaponCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  armorStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  armorCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  additionalGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  additionalGearCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  specialGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  specialGearCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  foodBuffs?: { name: string; value: number }[];

  consumables?: { name: string; value: number }[][];
};

export type StatMap = {
  // STR
  flatSTR: number;
  percentSTR: number;

  flatINT: number;
  percentINT: number;

  flatDEX: number;
  percentDEX: number;

  flatVIT: number;
  percentVIT: number;

  flatAGI: number;
  percentAGI: number;

  flatWeaponATK: number;
  percentWeaponATK: number;

  flatMATK: number;
  percentMATK: number;

  flatATK: number;
  percentATK: number;

  flatASPD: number;
  percentASPD: number;

  flatCSPD: number;
  percentCSPD: number;

  flatCriticalRate: number;
  percentCriticalRate: number;

  flatCriticalDamage: number;
  percentCriticalDamage: number;

  flatMaxHP: number;
  percentMaxHP: number;

  flatMaxMP: number;
  percentMaxMP: number;

  flatAccuracy: number;
  percentAccuracy: number;

  flatDodge: number;
  percentDodge: number;

  flatDEF: number;
  percentDEF: number;

  flatMDEF: number;
  percentMDEF: number;

  flatUnsheatheAttack: number;
  percentUnsheatheAttack: number;

  stability: number;

  magicPierce: number;
  physicalPierce: number;

  longRangeDamage: number;
  shortRangeDamage: number;

  motionSpeed: number;

  "ATKUP(STR)": number;
  "ATKUP(INT)": number;
  "ATKUP(DEX)": number;
  "ATKUP(VIT)": number;
  "ATKUP(AGI)": number;

  "MATKUP(STR)": number;
  "MATKUP(INT)": number;
  "MATKUP(DEX)": number;
  "MATKUP(VIT)": number;
  "MATKUP(AGI)": number;
};

export type StatGroupWithPredicate = {
  predicate: <S>(status: S) => boolean;
  stats: StatMap;
};

export const accumulateStats = <S extends StatSource<S>>(
  status: S,
  key: keyof StatMap
) => {
  const mainWeaponStatsTotal =
    status.mainWeaponStats !== undefined
      ? status.mainWeaponStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const mainWeaponCrystalStatsTotal =
    status.mainWeaponCrystals !== undefined
      ? status.mainWeaponCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const additionalGearStatsTotal =
    status.additionalGearStats !== undefined
      ? status.additionalGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const additionalGearCrystalStatsTotal =
    status.additionalGearCrystals !== undefined
      ? status.additionalGearCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const armorStatsTotal =
    status.armorStats !== undefined
      ? status.armorStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const armorCrystalStatsTotal =
    status.armorCrystals !== undefined
      ? status.armorCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  const specialGearStatsTotal =
    status.specialGearStats !== undefined
      ? status.specialGearStats.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[key] + total
            : total;
        }, 0)
      : 0;

  const specialGearCrystalStatsTotal =
    status.specialGearCrystals !== undefined
      ? status.specialGearCrystals.reduce((total, statGroups) => {
          const accumulated = statGroups.reduce((total, statGroup) => {
            return statGroup.predicate(status)
              ? statGroup.stats[key] + total
              : total;
          }, 0);

          return total + accumulated;
        }, 0)
      : 0;

  return [
    mainWeaponStatsTotal,
    mainWeaponCrystalStatsTotal,
    additionalGearStatsTotal,
    additionalGearCrystalStatsTotal,
    armorStatsTotal,
    armorCrystalStatsTotal,
    specialGearStatsTotal,
    specialGearCrystalStatsTotal,
  ].reduce((total, curr) => total + curr, 0);
};

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const defaultStatMap = {
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

  stability: 0,

  magicPierce: 0,
  physicalPierce: 0,

  longRangeDamage: 0,
  shortRangeDamage: 0,

  motionSpeed: 0,

  "ATKUP(STR)": 0,
  "ATKUP(INT)": 0,
  "ATKUP(DEX)": 0,
  "ATKUP(VIT)": 0,
  "ATKUP(AGI)": 0,

  "MATKUP(STR)": 0,
  "MATKUP(INT)": 0,
  "MATKUP(DEX)": 0,
  "MATKUP(VIT)": 0,
  "MATKUP(AGI)": 0,
};

export const stats = <S>(
  predicate: (status: S) => boolean,
  statMap: Partial<StatMap>
) => ({
  predicate,
  stats: { ...defaultStatMap, ...statMap },
});

export const DEFAULT = <S>(_: S) => true;
