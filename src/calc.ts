import {
  calculateAccuracy,
  calculateAGI,
  calculateAilmentResistance,
  calculateAMPR,
  calculateAnticipate,
  calculateASPD,
  calculateATK,
  calculateCastTimeReduction,
  calculateCriticalDamage,
  calculateCriticalRate,
  calculateCSPD,
  calculateDamageToElement,
  calculateDEF,
  calculateDefensive,
  calculateDerivativeATK,
  calculateDerivativeMATK,
  calculateDEX,
  calculateDodge,
  calculateElement,
  calculateEquipmentModifiers,
  calculateEvasionRelated,
  calculateGuardRelated,
  calculateINT,
  calculateMATK,
  calculateMaxHP,
  calculateMaxMP,
  calculateMDEF,
  calculateMotionSpeed,
  calculateNHPR,
  calculateNMPR,
  calculatePierce,
  calculateRangeDamage,
  calculateResistance,
  calculateStability,
  calculateSTR,
  calculateUnsheatheAttack,
  calculateVIT,
  calculateWeaponATK,
} from "./internals/stats";

import { mergician } from "mergician";
import { Config, Stat, StatMapBuilder } from "./internals/data";

type RecursePartial<T> = {
  [K in keyof T]?: T[K] extends Stat[] ? T[K]
  : T[K] extends StatMapBuilder ? T[K]
  : RecursePartial<T[K]>;
};

export type UserDefinedConfig = RecursePartial<Config>;
export type Status = ReturnType<typeof calculate>;

const defaultConfig: Config = {
  properties: {
    level: 1,
    STR: 1,
    INT: 1,
    DEX: 1,
    VIT: 1,
    AGI: 1,
    personalStatName: "NONE",
    personalStatValue: 0,
  },

  equipments: {
    mainweapon: {
      type: "BARE_HAND",
      ATK: 0,
      refinement: 0,
      stability: 0,

      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],
    },

    subweapon: {
      type: "NONE",
      ATK: 0,
      DEF: 0,
      refinement: 0,
      stability: 0,

      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],

      // for ninja scroll
      scrollCastTimeReduction: 0,
      scrollMPReduction: 0,
    },

    armor: {
      DEF: 0,
      type: "NO_ARMOR",
      refinement: 0,

      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],
    },

    additionalGear: {
      DEF: 0,
      refinement: 0,

      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],
    },

    specialGear: {
      DEF: 0,
      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],
    },
  },

  statModifiers: {
    bladeSkills: {
      astute: {
        buffIsActive: false,
        level: 0,
      },

      berserk: { level: 0, buffIsActive: false },
    },

    battleSkills: {
      criticalUP: { level: 0 },
      spellBurst: { level: 0 },
    },

    mononofuSkills: {
      twoHanded: { level: 0 },
    },

    ninjaSkills: {
      ninjaSpirit: { level: 0 },
    },

    halberdSkills: {
      criticalSpear: { level: 0 },
    },

    dualSwordSkills: {
      dualSwordControl: { level: 0 },
      dualSwordMastery: { level: 0 },
    },

    magicBladeSkills: {
      magicWarriorMastery: { level: 0 },

      conversion: { level: 0, buffIsActive: false },

      dualBringer: {
        level: 0,
        buffIsActive: false,
        numberOfMagicBladeSkillsLearned: 0,

        buffIsApplicable: false, // means that dual bringer buff is used in the stat calculation
      },

      resonance: {
        level: 0,
        buffIsActive: false,
        set: "A",
      },
    },
  },

  foodBuffs: [],
  consumables: [],

  ailments: {
    weaken: false,
    flinch: false,
    tumble: false,
    stun: false,
    knockback: false,
    poison: false,
    paralysis: false,
    blindness: false,
    ignition: false,
    freeze: false,
    armorbreak: false,
    slow: false,
    stop: false,
    fear: false,
    dizzy: false,
    lethargy: false,
    silence: false,
    bleed: false,
    fatigue: false,
    dazzled: false,
  },
  regislets: {
    zerostance: 0,
    maxhpboost: 0,
    maxmpboost: 0,
    magicattackboost: 0,
    physicalattackboost: 0,
    magicdefenseboost: 0,
    physicaldefenseboost: 0,
    attackspeedboost: 0,
    magicspeedboost: 0,
    dodgeboost: 0,
    accuracyboost: 0,
    focusresonance: 0,
    speedresonance: 0,
    powerresonance: 0,

    remedialRampage: 0,
  },
};

export const calculateAll = (config: Config) => ({
  ...calculateAccuracy(config),
  ...calculateAGI(config),
  ...calculateAilmentResistance(config),
  ...calculateAMPR(config),
  ...calculateAnticipate(config),
  ...calculateASPD(config),
  ...calculateATK(config),
  ...calculateCastTimeReduction(config),
  ...calculateCriticalDamage(config),
  ...calculateCriticalRate(config),
  ...calculateCSPD(config),
  ...calculateDamageToElement(config),
  ...calculateDEF(config),
  ...calculateDefensive(config),
  ...calculateDerivativeATK(config),
  ...calculateDerivativeMATK(config),
  ...calculateDEX(config),
  ...calculateDodge(config),
  ...calculateElement(config),
  ...calculateEvasionRelated(config),
  ...calculateGuardRelated(config),
  ...calculateINT(config),
  ...calculateMATK(config),
  ...calculateMaxHP(config),
  ...calculateMaxMP(config),
  ...calculateMDEF(config),
  ...calculateEquipmentModifiers(config),
  ...calculateMotionSpeed(config),
  ...calculateNHPR(config),
  ...calculateNMPR(config),
  ...calculatePierce(config),
  ...calculateRangeDamage(config),
  ...calculateResistance(config),
  ...calculateStability(config),
  ...calculateSTR(config),
  ...calculateUnsheatheAttack(config),
  ...calculateVIT(config),
  ...calculateWeaponATK(config),
});

const merge = <L extends object, R extends object>(a: L, b: R): L & R =>
  mergician(a, b) as L & R;

export const mergeDefaultConfig = (config: UserDefinedConfig) =>
  merge(defaultConfig, config);

export const calculate = (config: UserDefinedConfig) =>
  calculateAll(mergeDefaultConfig(config));
