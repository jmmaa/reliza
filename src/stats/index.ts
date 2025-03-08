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
} from "./calculations";

import { mergician } from "mergician";
import { Stat, StatCalcConfig, StatMapBuilder } from "./types";

type RecursePartial<T> = {
  [K in keyof T]?: T[K] extends Stat[] ? T[K]
  : T[K] extends StatMapBuilder ? T[K]
  : RecursePartial<T[K]>;
};

export type UserDefinedConfig = RecursePartial<StatCalcConfig>;
export type Status = ReturnType<typeof calculate>;

const defaultConfig: StatCalcConfig = {
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
      type: "MAIN_BH",
      ATK: 0,
      refinement: 0,
      stability: 0,

      stats: (_) => [],
      crystal1: (_) => [],
      crystal2: (_) => [],
    },

    subweapon: {
      type: "SUB_NONE",
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
      swordMastery: { level: 0 },
      quickSlash: { level: 0 },
      astute: { level: 0, buffIsActive: false },
      triggerSlash: { level: 0, buffIsActive: false },
      berserk: { level: 0, buffIsActive: false },
      rampage: { level: 0, buffIsActive: false },
      warCry: { level: 0, buffIsActive: false },
      busterBlade: { level: 0, buffIsActive: false },
    },

    battleSkills: {
      attackUP: { level: 0 },
      criticalUP: { level: 0 },
      spellBurst: { level: 0 },
      accuracyUP: { level: 0 },
      intimidatingPower: { level: 0 },
      defenseMastery: { level: 0 },
      defenseUP: { level: 0 },
      dodgeUP: { level: 0 },

      magicUP: { level: 0 },
      increasedEnergy: { level: 0 },
    },

    mononofuSkills: {
      twoHanded: { level: 0 },
      bushido: { level: 0 },

      shukuchi: { level: 0, buffIsActive: false },
    },

    ninjaSkills: {
      ninjaSpirit: { level: 0 },
    },

    halberdSkills: {
      criticalSpear: { level: 0 },
      halberdMastery: { level: 0 },

      godspeedWield: {
        level: 0,
        buffIsActive: false,
        stacks: 0,
      },

      almightyWield: { level: 0 },

      quickAura: { level: 0, buffIsActive: false },
    },

    wizardSkills: {
      castMastery: {
        level: 0,
        numberOfskillPointsSpentOnWizardSkills: 0,
        numberOfWizardSkillsLearned: 0,
      },

      overlimit: { level: 0, buffIsActive: false },

      sorceryGuide: { level: 0 },
    },

    hunterSkills: {
      hunterBowgun: { level: 0 },
    },

    dualSwordSkills: {
      dualSwordMastery: { level: 0 },
      dualSwordControl: { level: 0 },
      crossParry: {
        level: 0,
        buffIsActive: false,
        inAction: false,
      },
      shadowStep: { level: 0, buffIsActive: false },

      saberAura: { level: 0, stacks: 0 },
      crescentSaber: { level: 0 }, // TODO HOW TO REPRESENT THIS
      saberAuraAndCrescentSaberInteraction: {
        buffUsed: "SABER_AURA",
        buffIsActive: false,
      },

      godspeed: { level: 0 },
      flashblast: { level: 0, buffIsActive: false },
    },

    survivalSkills: {
      safeRest: { level: 0 },
      shortRest: { level: 0 },
      HPBoost: { level: 0 },
      MPBoost: { level: 0 },
    },

    magicBladeSkills: {
      magicWarriorMastery: { level: 0 },

      conversion: {
        level: 0,
        buffIsActive: false, // this flag doesnt do anything for now
      },

      dualBringer: {
        level: 0,
        buffIsActive: false,
        numberOfMagicBladeSkillsLearned: 0,

        buffIsApplicable: false, // means that dual bringer buff is used in the stat calculation
      },

      magicSkin: { level: 0 },

      resonance: {
        level: 0,
        buffIsActive: false,
        set: "A",
      },

      etherFlare: { level: 0, isTargetInflictedWithIgnite: false },

      siphonBarrier: { level: 0, buffIsActive: false },
    },

    priestSkills: {
      prayer: { level: 0, buffIsActive: false },
    },

    magicSkills: {
      magicMastery: { level: 0, buffIsActive: false },
    },

    shotSkills: {
      samuraiArchery: { level: 0, stacks: 0 },
      shotMastery: { level: 0 },
    },

    martialSkills: {
      martialMastery: { level: 0 },
      martialDiscipline: { level: 0 },
      aggravate: { level: 0 },
      chakra: { level: 0, buffIsActive: false },
    },

    bareHandSkills: {
      unarmedMastery: { level: 0 },
      ultimaQiCharge: { level: 0 },
      hiddenTalent: { level: 0 },
    },

    guardSkills: {
      heavyArmorMastery: { level: 0 },
    },

    shieldSkills: {
      shieldMastery: { level: 0 },
      forceShield: { level: 0 },
      magicalShield: { level: 0 },
    },

    supportSkills: {
      braveAura: { level: 0, buffIsActive: false },
      highCycle: { level: 0, buffIsActive: false },
    },

    regislets: {
      physicalAttackBoost: { level: 0 },
      magicAttackBoost: { level: 0 },

      attackSpeedBoost: { level: 0 },
      magicSpeedBoost: { level: 0 },

      maxHPBoost: { level: 0 },
      maxMPBoost: { level: 0 },
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

export const calculateAll = (config: StatCalcConfig) => ({
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
