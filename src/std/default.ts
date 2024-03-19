import { Character, StatMap } from "./types";

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
};

export const defaultCharacter: Character = {
  level: 1,

  DEX: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,
  STR: 1,

  CRT: 0,
  MTL: 0,
  TEC: 0,
  LUK: 0,

  mainWeapon: {
    type: "bare-hand",
    ATK: 0,
    refinement: 0,
    stability: 0,
    stats: [],
    crystals: [[]],
  },

  subWeapon: {
    type: "none",
    ATK: 0,
    DEF: 0,
    refinement: 0,
    stability: 0,
    scrollCastTimeReduction: 0,
    scrollMPReduction: 0,
    stats: [],
    crystals: [[]],
  },

  armor: {
    DEF: 0,
    refinement: 0,
    type: "none",
    stats: [],
    crystals: [[]],
  },

  additionalGear: {
    DEF: 0,
    refinement: 0,
    stats: [],
    crystals: [[]],
  },

  specialGear: {
    DEF: 0,
    stats: [],
    crystals: [[]],
  },

  consumables: [],

  foodBuffs: [],

  // regislets (must be same like skills too)

  // blade skills

  skills: {
    blade: {
      hardHit: { level: 0 },
      astute: { level: 0 },
      triggerSlash: { level: 0 },
      rampage: { level: 0 },
      meteorBreaker: { level: 0 },
      shutOut: { level: 0 },
      lunarSlash: { level: 0 },
      sonicBlade: { level: 0 },
      spiralAir: { level: 0 },
      swordTempest: { level: 0 },
      busterBlade: { level: 0 },
      auraBlade: { level: 0 },
      swordMastery: { level: 0 },
      quickSlash: { level: 0 },
      swordTechniques: { level: 0 },
      warCry: { level: 0 },
      berserk: { level: 0 },
      gladiate: { level: 0 },
      swiftAttack: { level: 0 },
    },

    shot: {
      // shot skills
      powerShot: { level: 0 },
      bullseye: { level: 0 },
      arrowRain: { level: 0 },
      snipe: { level: 0 },
      crossFire: { level: 0 },
      vanquisher: { level: 0 },
      twinStorm: { level: 0 },
      retrogradeShot: { level: 0 },
      moebaShot: { level: 0 },
      paralysisShot: { level: 0 },
      smokeDust: { level: 0 },
      armBreak: { level: 0 },
      parabolaCannon: { level: 0 },
      shotMastery: { level: 0 },
      samuraiArchery: { level: 0 },
      sneakAttack: { level: 0 },
      longRange: { level: 0 },
      quickDraw: { level: 0 },
      decoyShot: { level: 0 },
      fatalShot: { level: 0 },
    },

    magic: {
      // magic skills
      magicArrows: { level: 0 },
      magicJavelin: { level: 0 },
      magicLances: { level: 0 },
      magicImpact: { level: 0 },
      magicFinale: { level: 0 },
      chronosShift: { level: 0 },
      magicWall: { level: 0 },
      magicBlast: { level: 0 },
      magicStorm: { level: 0 },
      magicBurst: { level: 0 },
      magicCannon: { level: 0 },
      magicCrash: { level: 0 },
      magicMastery: { level: 0 },
      magicKnife: { level: 0 },
      qadal: { level: 0 },
      MPCharge: { level: 0 },
      chainCast: { level: 0 },
      powerWave: { level: 0 },
      maximizer: { level: 0 },
      rapidCharge: { level: 0 },
      enchantedBarriers: { level: 0 },
      magicGuardianBeam: { level: 0 },
    },

    survival: {
      // survival skills
      playDead: { level: 0 },
      EXPGainUP: { level: 0 },
      dropRateUP: { level: 0 },
      safeRest: { level: 0 },
      HPBoost: { level: 0 },
      fightersHigh: { level: 0 },
      shortRest: { level: 0 },
      MPBoost: { level: 0 },
      soberAnalysis: { level: 0 },
    },

    support: {
      // support skills
      firstAid: { level: 0 },
      miniHeal: { level: 0 },
      recovery: { level: 0 },
      sanctuary: { level: 0 },
      heal: { level: 0 },
      lifeRecovery: { level: 0 },
      braveAura: { level: 0, isActive: false },
      highCycle: { level: 0 },
      quickMotion: { level: 0 },
      manaRecharge: { level: 0 },
      magicBarrier: { level: 0 },
      immunity: { level: 0 },
      fastReaction: { level: 0 },
    },

    battle: {
      // battle skills
      magicUP: { level: 0 },
      concentrate: { level: 0 },
      AttackUP: { level: 0 },
      whack: { level: 0 },
      defenseUP: { level: 0 },
      dodgeUP: { level: 0 },
      desperateResist: { level: 0 },
      criticalUP: { level: 0 },
      accuracyUP: { level: 0 },
      increasedEnergy: { level: 0 },
      intimidatingPower: { level: 0 },
      defenseMastery: { level: 0 },
      spellBurst: { level: 0 },
      secretChaseAttack: { level: 0 },
      superGrip: { level: 0 },
    },

    mononofu: {
      // mononofu skills
      issen: { level: 0 },
      pluseBlade: { level: 0 },
      tripleThrust: { level: 0 },
      hassoHappa: { level: 0 },
      tenryuRansei: { level: 0 },
      kasumisetsuGetsuka: { level: 0 },
      garyouTensei: { level: 0 },
      shadowLessSlash: { level: 0 },
      pommelStrike: { level: 0 },
      magadachi: { level: 0 },
      zanteiSettetsu: { level: 0 },
      bushido: { level: 0 },
      shukuchi: { level: 0 },
      nukiuchiSennosen: { level: 0 },
      twoHanded: { level: 0 },
      meikyouShisui: { level: 0 },
      kairikiRanshin: { level: 0 },
      dauntless: { level: 0 },
      bouncingBlade: { level: 0 },
    },

    dualSword: {
      // dual sword skills
      dualSwordMastery: { level: 0 },
      twinSlash: { level: 0 },
      spinningSlash: { level: 0 },
      phantomSlash: { level: 0 },
      aerialCut: { level: 0 },
      crossParry: { level: 0 },
      chargingSlash: { level: 0 },
      shadowStep: { level: 0 },
      shiningCross: { level: 0 },
      lunarMisfortune: { level: 0 },
      twinBusterBlade: { level: 0 },
      reflex: { level: 0 },
      flashBlast: { level: 0 },
      flashBlastIsActive: false,
      stormReaper: { level: 0 },
      dualSwordControl: { level: 0 },
      godspeed: { level: 0 },
      saberAura: { level: 0 },
      crescentSaber: { level: 0 },
    },

    magicBlade: {
      // magic blade skills
      magicWarriorMastery: { level: 0 },
      conversion: { level: 0, isActive: false },
      resonance: { level: 0, isActive: false },
      enchantedSpell: { level: 0 },
      dualBringer: { level: 0, isActive: false },
      etherFlare: { level: 0 },
      elementSlash: { level: 0 },
      enchantSword: { level: 0 },
      enchantedBurst: { level: 0 },
      unionSword: { level: 0 },
      siphonBarrier: { level: 0 },
      teleport: { level: 0 },
      siphonRecall: { level: 0 },
      floatDash: { level: 0 },
      magicSkin: { level: 0 },
    },
  },

  halberd: {
    flashStab: { level: 0 },
    cannonSpear: { level: 0 },
    dragonTail: { level: 0 },
    diveImpact: { level: 0 },
    dragonTooth: { level: 0 },
    draconicCharge: { level: 0 },
    deadlySpear: { level: 0 },
    punishRay: { level: 0 },
    strikeStab: { level: 0 },
    chronosDivine: { level: 0 },
    infiniteDimension: { level: 0 },
    halberdMastery: { level: 0 },
    criticalSpear: { level: 0 },
    tornadoLance: { level: 0 },
    quickAura: { level: 0 },
    warCryOfStruggle: { level: 0 },
    godspeedWield: { level: 0 },
    almightyWield: { level: 0 },
    busterLance: { level: 0 },
  },

  regislets: {
    zeroStance: { level: 0 },
    maxHPBoost: { level: 0 },
    maxMPBoost: { level: 0 },
    magicAttackBoost: { level: 0 },
    physicalAttackBoost: { level: 0 },
    magicDefenseBoost: { level: 0 },
    physicalDefenseBoost: { level: 0 },
    attackSpeedBoost: { level: 0 },
    magicSpeedBoost: { level: 0 },
    dodgeBoost: { level: 0 },
    accuracyBoost: { level: 0 },
    // incomplete
  },
};
