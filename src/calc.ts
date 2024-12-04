import {
  totalAGI,
  totalFlatAGI,
  totalPercentAGI,
  totalDEX,
  totalFlatDEX,
  totalPercentDEX,
  totalVIT,
  totalFlatVIT,
  totalPercentVIT,
  totalSTR,
  totalFlatSTR,
  totalPercentSTR,
  totalINT,
  totalFlatINT,
  totalPercentINT,
  totalASPD,
  totalFlatASPD,
  totalPercentASPD,
  totalBaseASPD,
  totalMotionSpeed,
  totalCSPD,
  totalFlatCSPD,
  totalPercentCSPD,
  totalBaseCSPD,
  totalCastTimeReduction,
  totalAilmentResistance,
  totalAccuracy,
  totalFlatAccuracy,
  totalBaseAccuracy,
  totalBaseATK,
  totalPercentATK,
  totalFlatATK,
  totalATK,
  totalBaseMATK,
  totalPercentMATK,
  totalFlatMATK,
  totalMATK,
  totalPhysicalPierce,
  totalMagicPierce,
  totalBaseDEF,
  totalPercentDEF,
  totalFlatDEF,
  totalDEF,
  totalBaseMDEF,
  totalPercentMDEF,
  totalFlatMDEF,
  totalMDEF,
  totalBaseDodge,
  totalPercentDodge,
  totalFlatDodge,
  totalDodge,
  totalBaseCriticalRate,
  totalPercentCriticalRate,
  totalFlatCriticalRate,
  totalCriticalRate,
  totalMagicCriticalRate,
  totalBaseCriticalDamage,
  totalPercentCriticalDamage,
  totalFlatCriticalDamage,
  totalCriticalDamage,
  totalMagicCriticalDamage,
  totalBaseMaxHP,
  totalPercentMaxHP,
  totalFlatMaxHP,
  totalMaxHP,
  totalBaseMaxMP,
  totalPercentMaxMP,
  totalFlatMaxMP,
  totalMaxMP,
} from "./internals";
import { Config, Stat, StatMapBuilder } from "./internals/data";
import { mergician } from "mergician";

type RecursePartial<T> = {
  [K in keyof T]?: T[K] extends Stat[] ? T[K]
  : T[K] extends StatMapBuilder ? T[K]
  : RecursePartial<T[K]>;
};

export type UserDefinedConfig = RecursePartial<Config>;

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

  skillTrees: {
    bladeSkills: {
      hardhit: {
        level: 0,
      },
      astute: {
        level: 0,
      },
      triggerslash: {
        level: 0,
        isActive: false,
      },

      rampage: {
        level: 0,
        isActive: false,
      },

      meteorbreaker: {
        level: 0,
      },
      shutout: {
        level: 0,
      },
      lunarslash: {
        level: 0,
      },
      sonicblade: {
        level: 0,
      },
      spiralair: {
        level: 0,
      },
      swordtempest: {
        level: 0,
      },
      busterblade: {
        level: 0,
        isActive: false,
      },

      aurablade: {
        level: 0,
      },
      swordmastery: {
        level: 0,
      },
      quickslash: {
        level: 0,
      },
      swordtechniques: {
        level: 0,
      },
      warcry: {
        level: 0,
        isActive: false,
      },

      berserk: {
        level: 0,
        isActive: false,
      },

      gladiate: {
        level: 0,
      },
      swiftattack: {
        level: 0,
      },
    },

    shotSkills: {
      powershot: { level: 0 },
      bullseye: { level: 0 },
      arrowrain: { level: 0 },
      snipe: { level: 0 },
      crossfire: { level: 0 },
      vanquisher: { level: 0 },
      twinstorm: {
        level: 0,
        isActive: false,
        onCooldown: false,
      },

      retrogradeshot: { level: 0 },
      moebashot: { level: 0 },
      paralysisshot: { level: 0 },
      smokedust: { level: 0 },
      armbreak: { level: 0 },
      parabolacannon: { level: 0 },
      shotmastery: { level: 0 },
      samuraiarchery: { level: 0, stacks: 0 },
      sneakattack: { level: 0 },
      longrange: { level: 0 },
      quickdraw: { level: 0 },
      decoyshot: { level: 0 },
      fatalshot: { level: 0 },
    },

    magicSkills: {
      magicarrows: { level: 0 },
      magicjavelin: { level: 0 },
      magiclances: { level: 0 },
      magicimpact: { level: 0 },
      magicfinale: { level: 0 },
      chronosshift: { level: 0 },
      magicwall: { level: 0 },
      magicblast: { level: 0 },
      magicstorm: { level: 0 },
      magicburst: { level: 0 },
      magiccannon: { level: 0 },
      magiccrash: { level: 0 },
      magicmastery: { level: 0 },
      magicknife: { level: 0 },
      qadal: {
        level: 0,
        burden: 0,
        combatTime: 0,
        isActive: false,
      },
      mpcharge: { level: 0 },
      chaincast: { level: 0, isActive: false, stacks: 0 },
      powerwave: { level: 0 },
      maximizer: { level: 0 },
      rapidcharge: {
        level: 0,
        isActive: false,
        amountMPRecoveredFromMaximizer: 0,
      },
      enchantedbarriers: { level: 0 },
      magicguardianbeam: { level: 0 },
    },

    survivalSkills: {
      playdead: { level: 0 },
      expgainup: { level: 0 },
      droprateup: { level: 0 },
      saferest: { level: 0 },
      hpboost: { level: 0 },
      fightershigh: { level: 0 },
      shortrest: { level: 0 },
      mpboost: { level: 0 },
      soberanalysis: { level: 0 },
    },

    supportSkills: {
      firstaid: { level: 0 },
      miniheal: { level: 0 },
      recovery: { level: 0 },
      sanctuary: { level: 0 },
      heal: { level: 0 },
      liferecovery: { level: 0 },
      braveaura: { level: 0, isActive: false },
      highcycle: { level: 0, isActive: false },
      quickmotion: { level: 0, isActive: false },
      manarecharge: { level: 0, isActive: false },
      magicbarrier: { level: 0, isActive: false },
      immunity: { level: 0, isActive: false },
      fastreaction: { level: 0, isActive: false },
    },

    battleSkills: {
      magicup: { level: 0 },
      concentrate: { level: 0 },
      attackup: { level: 0 },
      whack: { level: 0 },
      defenseup: { level: 0 },
      dodgeup: { level: 0 },
      desperateresist: { level: 0 },
      criticalup: { level: 0 },
      accuracyup: { level: 0 },
      increasedenergy: { level: 0 },
      intimidatingpower: { level: 0 },
      defensemastery: { level: 0 },
      spellburst: { level: 0 },
      secretchaseattack: { level: 0 },
      supergrip: { level: 0 },
    },

    mononofuSkills: {
      issen: { level: 0 },
      pulseblade: { level: 0 },
      triplethrust: { level: 0, isActive: false },

      hassohappa: { level: 0 },
      tenryuransei: { level: 0 },
      kasumisetsugetsuka: { level: 0 },
      garyoutensei: { level: 0 },
      shadowlessslash: { level: 0 },
      pommelstrike: { level: 0 },
      magadachi: { level: 0 },
      zanteisettetsu: { level: 0 },
      bushido: { level: 0 },
      shukuchi: { level: 0, isActive: false },

      nukiuchisennosen: { level: 0 },
      twohanded: { level: 0 },
      meikyoushisui: { level: 0, isActive: false },
      kairikiranshin: { level: 0, isActive: false },

      dauntless: { level: 0, stacks: 0 },
      dauntless_stacks: 0,
      bouncingblade: { level: 0, isActive: false },
    },

    dualSwordSkills: {
      dualswordmastery: { level: 0 },
      twinslash: { level: 0 },
      spinningslash: { level: 0 },
      phantomslash: { level: 0 },
      aerialcut: { level: 0 },
      crossparry: { level: 0, isActive: false, isParried: false },
      chargingslash: { level: 0 },
      shadowstep: { level: 0, isActive: false },

      shiningcross: { level: 0 },
      lunarmisfortune: { level: 0 },
      twinbusterblade: { level: 0, isActive: false },

      reflex: { level: 0 },
      flashblast: { level: 0, isActive: false },

      stormreaper: { level: 0 },
      dualswordcontrol: { level: 0 },
      godspeed: { level: 0 },
      saberaura: { level: 0 },
      crescentsaber: { level: 0 },
    },

    magicBladeSkills: {
      magicwarriormastery: { level: 0 },
      conversion: { level: 0, isActive: false },
      resonance: { level: 0, isActive: false, set: "ATK_MATK" },
      enchantedspell: { level: 0 },
      dualbringer: { level: 0, isActive: false },
      etherflare: { level: 0, isActive: false },
      elementslash: { level: 0 },
      enchantsword: { level: 0 },
      enchantedburst: { level: 0 },
      unionsword: { level: 0 },
      siphonbarrier: { level: 0, isActive: false },
      teleport: { level: 0 },
      siphonrecall: { level: 0 },
      floatdash: { level: 0 },
      magicskin: { level: 0 },
    },

    shieldSkills: {
      shieldmastery: { level: 0 },
      shieldbash: { level: 0 },
      shieldcannon: { level: 0 },
      guardstrike: { level: 0 },
      forceshield: { level: 0 },
      magicalshield: { level: 0 },
      shielduppercut: { level: 0 },
      dualshields: { level: 0 },
      shieldrepair: { level: 0 },
      belagerung: { level: 0 },
      protection: { level: 0, isActive: false },
      aegis: { level: 0, isActive: false },
      guardian: { level: 0 },
    },

    guardSkills: {
      heavyarmormastery: { level: 0 },
      advancedguard: { level: 0 },
      physicalguard: { level: 0 },
      lightarmormastery: { level: 0 },
      advancedevasion: { level: 0 },
      mirageevasion: { level: 0 },
    },

    halberdSkills: {
      flashstab: { level: 0 },
      cannonspear: { level: 0 },
      dragontail: { level: 0 },
      diveimpact: { level: 0 },
      dragontooth: { level: 0 },
      draconiccharge: { level: 0 },
      deadlyspear: { level: 0 },
      punishray: { level: 0 },
      strikestab: { level: 0 },
      chronosdivine: { level: 0 },
      infinitedimension: { level: 0 },
      halberdmastery: { level: 0 },
      criticalspear: { level: 0 },
      tornadolance: { level: 0 },
      quickaura: { level: 0, isActive: false },
      warcryofstruggle: { level: 0 },
      godspeedwield: { level: 0, isActive: false, stacks: 0 },
      almightywield: { level: 0 },
      busterlance: { level: 0 },
    },

    martialSkills: {
      smash: { level: 0 },
      bash: { level: 0 },
      shellbreak: { level: 0 },
      heavysmash: { level: 0 },
      chariot: { level: 0 },
      abstractarms: { level: 0 },
      sonicwave: { level: 0 },
      earthbind: { level: 0 },
      triplekick: { level: 0 },
      rush: { level: 0, isActive: false },
      asuraaura: { level: 0, isActive: false },
      flashblink: { level: 0 },
      martialmastery: { level: 0 },
      martialdiscipline: { level: 0 },
      chakra: { level: 0, isActive: false },
      energycontrol: { level: 0, isActive: false },
      aggravate: { level: 0 },
      strongchaseattack: { level: 0 },
      slide: { level: 0 },
    },

    bareHandSkills: {
      unarmedmastery: { level: 0 },
      qicharge: { level: 0 },
      lionrage: { level: 0 },
      ultimalionrage: { level: 0 },
      ravingstorm: { level: 0 },
      ultimaravingstorm: { level: 0 },
      internalelixir: { level: 0 },
      clashofenmity: { level: 0 },
      miraclecomeback: { level: 0 },
      ultimaqicharge: { level: 0 },
      hiddentalent: { level: 0 },
      earthshaker: { level: 0, isActive: false },
    },

    hunterSkills: {
      kick: { level: 0 },
      sunrisearrow: { level: 0 },
      magicarrow: { level: 0, isActive: false },
      satellitearrow: { level: 0 },
      sleeptrap: { level: 0 },
      beartrap: { level: 0 },
      landmine: { level: 0 },
      darktrap: { level: 0 },
      homingshot: { level: 0 },
      detection: { level: 0, isActive: false },

      cyclonearrow: { level: 0 },
      verticalair: { level: 0 },
      hunterbowgun: { level: 0 },
      multiplehunt: { level: 0, isActive: false },
    },

    ninjaSkills: {
      ninjutsu: { level: 0 },
      ninjaspirit: { level: 0 },
      ninjutsudrilli: { level: 0 },
      ninjutsudrillii: { level: 0 },
    },

    wizardSkills: {
      familia: { level: 0, isActive: false },

      lightning: { level: 0 },
      blizzard: { level: 0 },
      meteorstrike: { level: 0 },
      imperialray: { level: 0 },
      manacrystal: { level: 0 },
      stonebarrier: { level: 0 },
      advancedfamilia: { level: 0, isActive: false },
      castmastery: { level: 0 },
      crystallaser: { level: 0 },
      overlimit: { level: 0, isActive: false },
      sorceryguide: { level: 0 },
    },

    priestSkills: {
      bless: { level: 0 },
      gloria: { level: 0 },
      enhancedbless: { level: 0 },
      royalheal: { level: 0 },
      holyfist: { level: 0 },
      holylight: { level: 0 },
      etherbarrier: { level: 0, isActive: false },
      prayer: { level: 0, isActive: false },
      staffthrust: { level: 0 },
      exorcism: { level: 0 },
      holybook: { level: 0, isActive: false },
      nemesis: { level: 0 },
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
  },
};

export const calculateAll = (config: Config) => ({
  // AGI
  totalBaseAGI: config.properties.AGI,
  totalPercentAGI: totalPercentAGI(config),
  totalFlatAGI: totalFlatAGI(config),
  totalAGI: totalAGI(config),

  // DEX
  totalBaseDEX: config.properties.DEX,
  totalPercentDEX: totalPercentDEX(config),
  totalFlatDEX: totalFlatDEX(config),
  totalDEX: totalDEX(config),

  // STR
  totalBaseSTR: config.properties.STR,
  totalPercentSTR: totalPercentSTR(config),
  totalFlatSTR: totalFlatSTR(config),
  totalSTR: totalSTR(config),

  // INT
  totalBaseINT: config.properties.INT,
  totalPercentINT: totalPercentINT(config),
  totalFlatINT: totalFlatINT(config),
  totalINT: totalINT(config),

  // VIT
  totalBaseVIT: config.properties.VIT,
  totalPercentVIT: totalPercentVIT(config),
  totalFlatVIT: totalFlatVIT(config),
  totalVIT: totalVIT(config),

  // Accuracy
  totalBaseAccuracy: totalBaseAccuracy(config),
  totalFlatAccuracy: totalFlatAccuracy(config),
  totalAccuracy: totalAccuracy(config),

  // Ailment Resistance
  totalAilmentResistance: totalAilmentResistance(config),

  // ASPD
  totalBaseASPD: totalBaseASPD(config),
  totalPercentASPD: totalPercentASPD(config),
  totalFlatASPD: totalFlatASPD(config),
  totalASPD: totalASPD(config),
  totalMotionSpeed: totalMotionSpeed(config),

  // CSPD
  totalBaseCSPD: totalBaseCSPD(config),
  totalPercentCSPD: totalPercentCSPD(config),
  totalFlatCSPD: totalFlatCSPD(config),
  totalCSPD: totalCSPD(config),
  totalCastTimeReduction: totalCastTimeReduction(config),

  // ATK
  totalBaseATK: totalBaseATK(config),
  totalPercentATK: totalPercentATK(config),
  totalFlatATK: totalFlatATK(config),
  totalATK: totalATK(config),

  // MATK
  totalBaseMATK: totalBaseMATK(config),
  totalPercentMATK: totalPercentMATK(config),
  totalFlatMATK: totalFlatMATK(config),
  totalMATK: totalMATK(config),

  // DEF
  totalBaseDEF: totalBaseDEF(config),
  totalPercentDEF: totalPercentDEF(config),
  totalFlatDEF: totalFlatDEF(config),
  totalDEF: totalDEF(config),

  // MDEF
  totalBaseMDEF: totalBaseMDEF(config),
  totalPercentMDEF: totalPercentMDEF(config),
  totalFlatMDEF: totalFlatMDEF(config),
  totalMDEF: totalMDEF(config),

  // Dodge
  totalBaseDodge: totalBaseDodge(config),
  totalPercentDodge: totalPercentDodge(config),
  totalFlatDodge: totalFlatDodge(config),
  totalDodge: totalDodge(config),

  // Critical Rate
  totalBaseCriticalRate: totalBaseCriticalRate(config),
  totalPercentCriticalRate: totalPercentCriticalRate(config),
  totalFlatCriticalRate: totalFlatCriticalRate(config),
  totalCriticalRate: totalCriticalRate(config),
  totalMagicCriticalRate: totalMagicCriticalRate(config),

  // Critical Damage
  totalBaseCriticalDamage: totalBaseCriticalDamage(config),
  totalPercentCriticalDamage: totalPercentCriticalDamage(config),
  totalFlatCriticalDamage: totalFlatCriticalDamage(config),
  totalCriticalDamage: totalCriticalDamage(config),
  totalMagicCriticalDamage: totalMagicCriticalDamage(config),

  // Max HP
  totalBaseMaxHP: totalBaseMaxHP(config),
  totalPercentMaxHP: totalPercentMaxHP(config),
  totalFlatMaxHP: totalFlatMaxHP(config),
  totalMaxHP: totalMaxHP(config),

  // Max MP
  totalBaseMaxMP: totalBaseMaxMP(config),
  totalPercentMaxMP: totalPercentMaxMP(config),
  totalFlatMaxMP: totalFlatMaxMP(config),
  totalMaxMP: totalMaxMP(config),

  // Pierce
  totalPhysicalPierce: totalPhysicalPierce(config),
  totalMagicPierce: totalMagicPierce(config),
});

const merge = <L extends object, R extends object>(a: L, b: R): L & R =>
  mergician(a, b) as L & R;

export const calculate = (config: UserDefinedConfig) =>
  calculateAll(merge(defaultConfig, config));
