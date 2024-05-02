import * as stats from "./modules/stats";
import {
  BattleSkills,
  BladeSkills,
  Character,
  DualSwordSkills,
  HalberdSkills,
  MagicBladeSkills,
  MagicSkills,
  MononofuSkills,
  Regislets,
  ShieldSkills,
  ShotSkills,
  Skills,
  StatMap,
  SupportSkills,
  SurvivalSkills,
  BareHandSkills,
  GuardSkills,
  HunterSkills,
  MartialSkills,
  NinjaSkills,
  WizardSkills,
  Target,
} from "./types";

export const defaultBladeSkills: BladeSkills = {
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
  busterBlade: { level: 0, isActive: false },
  auraBlade: { level: 0 },
  swordMastery: { level: 0 },
  quickSlash: { level: 0 },
  swordTechniques: { level: 0 },
  warCry: { level: 0, isActive: false },
  berserk: { level: 0, isActive: false },
  gladiate: { level: 0 },
  swiftAttack: { level: 0 },
};

export const defaultShotSkills: ShotSkills = {
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
  samuraiArchery: { level: 0, stacks: 0 },
  sneakAttack: { level: 0 },
  longRange: { level: 0 },
  quickDraw: { level: 0 },
  decoyShot: { level: 0 },
  fatalShot: { level: 0 },
};

export const defaultMagicSkills: MagicSkills = {
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
};

export const defaultSurvivalSkills: SurvivalSkills = {
  playDead: { level: 0 },
  EXPGainUP: { level: 0 },
  dropRateUP: { level: 0 },
  safeRest: { level: 0 },
  HPBoost: { level: 0 },
  fightersHigh: { level: 0 },
  shortRest: { level: 0 },
  MPBoost: { level: 0 },
  soberAnalysis: { level: 0 },
};

export const defaultSupportSkills: SupportSkills = {
  firstAid: { level: 0 },
  miniHeal: { level: 0 },
  recovery: { level: 0 },
  sanctuary: { level: 0 },
  heal: { level: 0 },
  lifeRecovery: { level: 0 },
  braveAura: { level: 0, isActive: false },
  highCycle: { level: 0, isActive: false },
  quickMotion: { level: 0 },
  manaRecharge: { level: 0 },
  magicBarrier: { level: 0 },
  immunity: { level: 0 },
  fastReaction: { level: 0 },
};

export const defaultBattleSkills: BattleSkills = {
  magicUP: { level: 0 },
  concentrate: { level: 0 },
  attackUP: { level: 0 },
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
};

export const defaultMononofuSkills: MononofuSkills = {
  issen: { level: 0 },
  pulseBlade: { level: 0 },
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
};

export const defaultDualSwordSkills: DualSwordSkills = {
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
  flashBlast: { level: 0, isActive: false },
  flashBlastIsActive: false,
  stormReaper: { level: 0 },
  dualSwordControl: { level: 0 },
  godspeed: { level: 0 },
  saberAura: { level: 0 },
  crescentSaber: { level: 0 },
};

export const defaultMagicBladeSkills: MagicBladeSkills = {
  magicWarriorMastery: { level: 0 },
  conversion: { level: 0, isActive: false },
  resonance: {
    level: 0,
    isActive: false,
    currentSetActive: "ATK/MATK",
  },
  enchantedSpell: { level: 0 },
  dualBringer: { level: 0, isActive: false },
  etherFlare: { level: 0, inflictedIgniteOnEnemey: false },
  elementSlash: { level: 0 },
  enchantSword: { level: 0 },
  enchantedBurst: { level: 0 },
  unionSword: { level: 0 },
  siphonBarrier: { level: 0, isActive: false },
  teleport: { level: 0 },
  siphonRecall: { level: 0 },
  floatDash: { level: 0 },
  magicSkin: { level: 0 },
};

export const defaultHalberdSkills: HalberdSkills = {
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
  quickAura: { level: 0, isActive: false },
  warCryOfStruggle: { level: 0 },
  godspeedWield: { level: 0, isActive: false, stacks: 0 },
  almightyWield: { level: 0 },
  busterLance: { level: 0 },
};

export const defaultMartialSkills: MartialSkills = {
  smash: { level: 0 },
  bash: { level: 0 },
  shellBreak: { level: 0 },
  heavySmash: { level: 0 },
  chariot: { level: 0 },
  abstractArms: { level: 0 },
  sonicWave: { level: 0 },
  earthbind: { level: 0 },
  tripleKick: { level: 0 },
  rush: { level: 0 },
  asuraAura: { level: 0 },
  flashBlink: { level: 0 },
  martialMastery: { level: 0 },
  martialDiscipline: { level: 0 },
  chakra: { level: 0 },
  energyControl: { level: 0 },
  aggravate: { level: 0 },
  strongChaseAttack: { level: 0 },
  slide: { level: 0 },
};

export const defaultBareHandSkills: BareHandSkills = {
  unarmedMastery: { level: 0 },
  qiCharge: { level: 0 },
  lionRage: { level: 0 },
  ultimaLionRage: { level: 0 },
  ravingStorm: { level: 0 },
  ultimaRavingStorm: { level: 0 },
  internalElixir: { level: 0 },
  clashOfEnmity: { level: 0 },
  miracleComeback: { level: 0 },
  ultimaQiCharge: { level: 0 },
  hiddenTalent: { level: 0 },
  earthShaker: { level: 0 },
};

export const defaultShieldSkills: ShieldSkills = {
  shieldMastery: { level: 0 },
  shieldBash: { level: 0 },
  shieldCannon: { level: 0 },
  guardStrike: { level: 0 },
  forceShield: { level: 0 },
  magicalShield: { level: 0 },
  shieldUppercut: { level: 0 },
  dualShields: { level: 0 },
  shieldRepair: { level: 0 },
  belagerung: { level: 0 },
  protection: { level: 0 },
  aegis: { level: 0 },
  guardian: { level: 0 },
};

export const defaultHunterSkills: HunterSkills = {
  kick: { level: 0 },
  sunriseArrow: { level: 0 },
  magicArrow: { level: 0 },
  satelliteArrow: { level: 0 },
  sleepTrap: { level: 0 },
  bearTrap: { level: 0 },
  landMine: { level: 0 },
  darkTrap: { level: 0 },
  homingShot: { level: 0 },
  detection: { level: 0 },
  cycloneArrow: { level: 0 },
  verticalAir: { level: 0 },
  hunterBowgun: { level: 0 },
  multipleHunt: { level: 0 },
};

export const defaultNinjaSkills: NinjaSkills = {
  ninjutsu: { level: 0 },
  ninjaSpirit: { level: 0 },
  ninjusuDrillI: { level: 0 },
  ninjutsuDrillII: { level: 0 },
};

export const defaultGuardSkills: GuardSkills = {
  heavyArmorMastery: { level: 0 },
  advancedGuard: { level: 0 },
  physicalGuard: { level: 0 },
  lightArmorMastery: { level: 0 },
  advancedEvasion: { level: 0 },
  mirageEvasion: { level: 0 },
};

export const defaultWizardSkills: WizardSkills = {
  familia: { level: 0, isActive: false },
  lightning: { level: 0 },
  blizzard: { level: 0 },
  meteorStrike: { level: 0 },
  imperialRay: { level: 0 },
  manaCrystal: { level: 0 },
  stoneBarrier: { level: 0 },
  advancedFamilia: { level: 0 },
  castMastery: { level: 0 },
  crystalLaser: { level: 0 },
  overlimit: { level: 0 },
  sorceryGuide: { level: 0 },
};

export const defaultRegislets = {
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

  focusResonance: { level: 0 },
  powerResonance: { level: 0 },
  speedResonance: { level: 0 },
  // incomplete
};

export const skills = (
  skills: Partial<Skills>,
): Partial<Skills> & Skills => ({
  ...(defaultSkills as Skills),
  ...skills,
});

export const bladeSkills = (
  bladeSkills: Partial<BladeSkills>,
): Partial<BladeSkills> & BladeSkills => ({
  ...(defaultBladeSkills as BladeSkills),
  ...bladeSkills,
});

export const shotSkills = (
  shotSkills: Partial<ShotSkills>,
): Partial<ShotSkills> & ShotSkills => ({
  ...(defaultShotSkills as ShotSkills),
  ...shotSkills,
});

export const magicSkills = (
  magicSkills: Partial<MagicSkills>,
): Partial<MagicSkills> & MagicSkills => ({
  ...(defaultMagicSkills as MagicSkills),
  ...magicSkills,
});

export const battleSkills = (
  battleSkills: Partial<BattleSkills>,
): Partial<BattleSkills> & BattleSkills => ({
  ...(defaultBattleSkills as BattleSkills),
  ...battleSkills,
});

export const supportSkills = (
  supportSkills: Partial<SupportSkills>,
): Partial<SupportSkills> & SupportSkills => ({
  ...(defaultSupportSkills as SupportSkills),
  ...supportSkills,
});

export const magicBladeSkills = (
  magicBladeSkills: Partial<MagicBladeSkills>,
): Partial<MagicBladeSkills> & MagicBladeSkills => ({
  ...(defaultMagicBladeSkills as MagicBladeSkills),
  ...magicBladeSkills,
});

export const survivalSkills = (
  survivalSkills: Partial<SurvivalSkills>,
): Partial<SurvivalSkills> & SurvivalSkills => ({
  ...(defaultSurvivalSkills as SurvivalSkills),
  ...survivalSkills,
});

export const halberdSkills = (
  halberdSkills: Partial<HalberdSkills>,
): Partial<HalberdSkills> & HalberdSkills => ({
  ...(defaultHalberdSkills as HalberdSkills),
  ...halberdSkills,
});

export const dualSwordSkills = (
  dualSwordSkills: Partial<DualSwordSkills>,
): Partial<DualSwordSkills> & DualSwordSkills => ({
  ...(defaultDualSwordSkills as DualSwordSkills),
  ...dualSwordSkills,
});

export const mononofuSkills = (
  mononofuSkills: Partial<MononofuSkills>,
): Partial<MononofuSkills> & MononofuSkills => ({
  ...(defaultMononofuSkills as MononofuSkills),
  ...mononofuSkills,
});

export const martialSkills = (
  martialSkills: Partial<MartialSkills>,
): Partial<MartialSkills> & MartialSkills => ({
  ...(defaultMartialSkills as MartialSkills),
  ...martialSkills,
});

export const bareHandSkills = (
  bareHandSkills: Partial<BareHandSkills>,
): Partial<BareHandSkills> & BareHandSkills => ({
  ...(defaultBareHandSkills as BareHandSkills),
  ...bareHandSkills,
});

export const shieldSkills = (
  shieldSkills: Partial<ShieldSkills>,
): Partial<ShieldSkills> & ShieldSkills => ({
  ...(defaultShieldSkills as ShieldSkills),
  ...shieldSkills,
});

export const hunterSkills = (
  hunterSkills: Partial<HunterSkills>,
): Partial<HunterSkills> & HunterSkills => ({
  ...(defaultHunterSkills as HunterSkills),
  ...hunterSkills,
});

export const ninjaSkills = (
  ninjaSkills: Partial<NinjaSkills>,
): Partial<NinjaSkills> & NinjaSkills => ({
  ...(defaultNinjaSkills as NinjaSkills),
  ...ninjaSkills,
});

export const guardSkills = (
  guardSkills: Partial<GuardSkills>,
): Partial<GuardSkills> & GuardSkills => ({
  ...(defaultGuardSkills as GuardSkills),
  ...guardSkills,
});

export const wizardSkills = (
  wizardSkills: Partial<WizardSkills>,
): Partial<WizardSkills> & WizardSkills => ({
  ...(defaultWizardSkills as WizardSkills),
  ...wizardSkills,
});

export const regislets = (
  regislets: Partial<Regislets>,
): Partial<Regislets> & Regislets => ({
  ...(defaultRegislets as Regislets),
  ...regislets,
});

export const defaultSkills: Skills = {
  bladeSkills: bladeSkills({}),
  shotSkills: shotSkills({}),
  magicSkills: magicSkills({}),
  survivalSkills: survivalSkills({}),
  supportSkills: supportSkills({}),
  battleSkills: battleSkills({}),
  mononofuSkills: mononofuSkills({}),
  dualSwordSkills: dualSwordSkills({}),
  magicBladeSkills: magicBladeSkills({}),
  halberdSkills: halberdSkills({}),
  martialSkills: martialSkills({}),
  bareHandSkills: bareHandSkills({}),
  shieldSkills: shieldSkills({}),
  hunterSkills: hunterSkills({}),
  ninjaSkills: ninjaSkills({}),
  guardSkills: guardSkills({}),
  wizardSkills: wizardSkills({}),
};

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
};

export const statMap = (
  stats: Partial<StatMap>,
): Partial<StatMap> & StatMap => ({
  ...(defaultStatMap as StatMap),
  ...stats,
});

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

  skills: skills({}),

  regislets: regislets({}),
};

export const character = (
  character: Partial<Character>,
): Partial<Character> & Character => ({
  ...(defaultCharacter as Character),
  ...character,
});

// default target is altoblepas
export const defaultTarget: Target = {
  level: 174,
  physicalResistance: 6,
  magicResistance: 6,
  weaponResistance: 0,
  DEF: 174,
  MDEF: 174,
  element: "neutral",
};

export const target = (
  target: Partial<Target>,
): Partial<Target> & Target => ({
  ...(defaultTarget as Target),
  ...target,
});

export const calculateInGame = (character: Character) => {
  return {
    AGI: character.AGI,
    DEX: character.DEX,
    INT: character.INT,
    STR: character.STR,
    VIT: character.VIT,
    ATK: stats.totalATK(character),
    MATK: stats.totalMATK(character),
    DEF: stats.totalDEF(character),
    MDEF: stats.totalMDEF(character),
    HIT: stats.totalAccuracy(character),
    FLEE: stats.totalDodge(character),
    ASPD: stats.totalASPD(character),
    CSPD: stats.totalCSPD(character),
    HP: stats.totalMaxHP(character),
    MP: stats.totalMaxMP(character),
  };
};

export const calculateAll = (character: Character) => ({
  // AGI
  totalBaseAGI: character.AGI,
  totalPercentAGI: stats.totalPercentAGI(character),
  totalFlatAGI: stats.totalFlatAGI(character),
  totalAGI: stats.totalAGI(character),

  // DEX
  totalBaseDEX: character.DEX,
  totalPercentDEX: stats.totalPercentDEX(character),
  totalFlatDEX: stats.totalFlatDEX(character),
  totalDEX: stats.totalDEX(character),

  // INT
  totalBaseINT: character.INT,
  totalPercentINT: stats.totalPercentINT(character),
  totalFlatINT: stats.totalFlatINT(character),
  totalINT: stats.totalINT(character),

  // STR
  totalBaseSTR: character.STR,
  totalPercentSTR: stats.totalPercentSTR(character),
  totalFlatSTR: stats.totalFlatSTR(character),
  totalSTR: stats.totalSTR(character),

  // VIT
  totalBaseVIT: character.VIT,
  totalPercentVIT: stats.totalPercentVIT(character),
  totalFlatVIT: stats.totalFlatVIT(character),
  totalVIT: stats.totalVIT(character),

  // MAX HP
  totalBaseMaxHP: stats.totalBaseMaxHP(character),
  totalPercentMaxHP: stats.totalPercentMaxHP(character),
  totalFlatMaxHP: stats.totalFlatMaxHP(character),
  totalMaxHP: stats.totalMaxHP(character),

  // MAX MP
  totalBaseMaxMP: stats.totalBaseMaxMP(character),
  totalPercentMaxMP: stats.totalPercentMaxMP(character),
  totalFlatMaxMP: stats.totalFlatMaxMP(character),
  totalMaxMP: stats.totalMaxMP(character),

  // DEF
  totalBaseDEF: stats.totalBaseDEF(character),
  totalPercentDEF: stats.totalPercentDEF(character),
  totalFlatDEF: stats.totalFlatDEF(character),
  totalDEF: stats.totalDEF(character),

  // MDEF
  totalBaseMDEF: stats.totalBaseMDEF(character),
  totalPercentMDEF: stats.totalPercentMDEF(character),
  totalFlatMDEF: stats.totalFlatMDEF(character),
  totalMDEF: stats.totalMDEF(character),

  // Critical Damage
  totalBaseCriticalDamage: stats.totalBaseCriticalDamage(character),
  totalPercentCriticalDamage: stats.totalPercentCriticalDamage(character),
  totalFlatCriticalDamage: stats.totalFlatCriticalDamage(character),
  totalCriticalDamage: stats.totalCriticalDamage(character),
  totalMagicCriticalDamage: stats.totalMagicCriticalDamage(character),

  // Critical Rate
  totalBaseCriticalRate: stats.totalBaseCriticalRate(character),
  totalPercentCriticalRate: stats.totalPercentCriticalRate(character),
  totalFlatCriticalRate: stats.totalFlatCriticalRate(character),
  totalCriticalRate: stats.totalCriticalRate(character),
  totalMagicCriticalRate: stats.totalMagicCriticalRate(character),

  // ATK

  // MATK

  // CSPD
  totalBaseCSPD: stats.totalBaseCSPD(character),
  totalPercentCSPD: stats.totalPercentCSPD(character),
  totalFlatCSPD: stats.totalFlatCSPD(character),
  totalCSPD: stats.totalCSPD(character),
  totalCastTimeReduction: stats.totalCastTimeReduction(character),
});

// Damage Calculator
export type DamageMetadata = {
  // for base
  characterLevel: number;
  targetLevel: number;
  defense: number; // MDEF/DEF
  resistance: number; // PRES/MRES
  source: number; // effective atk/matk, wizard atk, etc.
  pierce: number; // ppierce/mpierce
  constant: number;
  flatUnsheatheAttack: number;

  // percentages
  criticalDamageModifier: number;

  elementDamageModifier: number;

  // damage multiplier that only affects this type of skill
  innateSkillDamageModifier: number;

  percentUnsheatheAttack: number;

  stability: number;

  proration: number;

  // sword techniques, etc.
  skillDamageModifier: number;

  // short/long range damage
  distanceDependentDamageModifier: number;

  // if character is affected with lethargy
  isAffectedByLethargy: boolean;

  // brave aura, mana recharge, etc.
  lastDamageModifier: number;

  // smite, zero stance, save, consecutive, etc.
  comboRelatedDamageModifier: number;

  // base drop gem damage reducers
  baseDropGemDamageModifier: number;

  // guard effect
  isGuarded: boolean;

  // ultima lion rage
  ultimaLionRageDamageModifier: number;

  // qadal burden
  qadalBurdenDamageModifier: number;
};

export const defaultDamageMetadata = {
  // for base
  characterLevel: 0,
  targetLevel: 1,
  defense: 1, // MDEF/DEF
  resistance: 1, // PRES/MRES
  source: 1, // effective atk/matk, wizard atk, etc.
  pierce: 1, // ppierce/mpierce
  constant: 0,
  flatUnsheatheAttack: 0,

  // percentages
  criticalDamageModifier: 150,

  elementDamageModifier: 100,

  // damage multiplier that only affects this type of skill
  innateSkillDamageModifier: 100,

  percentUnsheatheAttack: 100,

  stability: 0,

  proration: 100,

  // sword techniques, etc.
  skillDamageModifier: 100,

  // short/long range damage
  distanceDependentDamageModifier: 100,

  // if character is affected with lethargy
  isAffectedByLethargy: false,

  // brave aura, mana recharge, etc.
  lastDamageModifier: 100,

  // smite, zero stance, save, consecutive, etc.
  comboRelatedDamageModifier: 100,

  // base drop gem damage reducers
  baseDropGemDamageModifier: 100,

  // guard effect
  isGuarded: false,

  // ultima lion rage
  ultimaLionRageDamageModifier: 100,

  // qadal burden
  qadalBurdenDamageModifier: 100,
};

export const damage = (metadata: DamageMetadata) => {
  return {
    metadata,

    characterLevel: (value: number) =>
      damage({ ...metadata, characterLevel: value }),

    targetLevel: (value: number) =>
      damage({ ...metadata, targetLevel: value }),

    defense: (value: number) => damage({ ...metadata, defense: value }),

    resistance: (value: number) =>
      damage({ ...metadata, resistance: value }),

    source: (value: number) => damage({ ...metadata, source: value }),

    pierce: (value: number) => damage({ ...metadata, pierce: value }),

    constant: (value: number) => damage({ ...metadata, constant: value }),

    flatUnsheatheAttack: (value: number) =>
      damage({ ...metadata, flatUnsheatheAttack: value }),

    criticalDamageModifier: (value: number) =>
      damage({ ...metadata, criticalDamageModifier: value }),

    elementDamageModifier: (value: number) =>
      damage({ ...metadata, elementDamageModifier: value }),

    innateSkillDamageModifier: (value: number) =>
      damage({ ...metadata, innateSkillDamageModifier: value }),

    percentUnsheatheAttack: (value: number) =>
      damage({ ...metadata, percentUnsheatheAttack: value }),

    stability: (value: number) =>
      damage({ ...metadata, stability: value }),

    proration: (value: number) =>
      damage({ ...metadata, proration: value }),

    skillDamageModifier: (value: number) =>
      damage({ ...metadata, skillDamageModifier: value }),

    distanceDependentDamageModifier: (value: number) =>
      damage({ ...metadata, distanceDependentDamageModifier: value }),

    isAffectedByLethargy: () =>
      damage({ ...metadata, isAffectedByLethargy: true }),

    lastDamageModifier: (value: number) =>
      damage({ ...metadata, lastDamageModifier: value }),

    comboRelatedDamageModifier: (value: number) =>
      damage({ ...metadata, comboRelatedDamageModifier: value }),

    baseDropGemDamageModifier: (value: number) =>
      damage({ ...metadata, baseDropGemDamageModifier: value }),

    isGuarded: () => damage({ ...metadata, isGuarded: true }),

    ultimaLionRageDamageModifier: (value: number) =>
      damage({ ...metadata, ultimaLionRageDamageModifier: value }),

    qadalBurdenDamageModifier: (value: number) =>
      damage({ ...metadata, qadalBurdenDamageModifier: value }),

    calculate: () => {
      const oldFormula = // base damage
        Math.floor(
          (metadata.source +
            metadata.characterLevel -
            metadata.targetLevel) *
            ((100 - metadata.resistance) / 100),
        ) -
        //
        // effective defense
        metadata.defense * ((100 - metadata.pierce) / 100) +
        //
        metadata.flatUnsheatheAttack +
        metadata.constant *
          // multipliers
          ((metadata.criticalDamageModifier / 100) *
            (metadata.elementDamageModifier / 100) *
            (metadata.innateSkillDamageModifier / 100) *
            (metadata.percentUnsheatheAttack / 100) *
            (metadata.stability / 100) *
            (metadata.proration / 100) *
            (metadata.skillDamageModifier / 100) *
            (metadata.distanceDependentDamageModifier / 100) *
            ((metadata.isAffectedByLethargy ? 70 : 100) / 100) *
            (metadata.lastDamageModifier / 100) *
            (metadata.comboRelatedDamageModifier / 100) *
            (metadata.baseDropGemDamageModifier / 100) *
            ((metadata.isGuarded ? 25 : 100) / 100) *
            (metadata.ultimaLionRageDamageModifier / 100));

      // new

      // console.log(metadata);
      const baseDamage = Math.floor(
        (metadata.source +
          metadata.characterLevel -
          metadata.targetLevel) *
          ((100 - metadata.resistance) / 100),
      );

      // console.log(
      //   metadata.source + metadata.characterLevel - metadata.targetLevel,
      // );
      const effectiveDefense = Math.floor(
        metadata.defense * ((100 - metadata.pierce) / 100),
      );

      let finalDamage = baseDamage - effectiveDefense;

      finalDamage += metadata.constant;
      finalDamage += metadata.flatUnsheatheAttack;
      finalDamage *= metadata.criticalDamageModifier / 100;
      finalDamage *= metadata.elementDamageModifier / 100;
      finalDamage *= metadata.innateSkillDamageModifier / 100;
      finalDamage *= metadata.percentUnsheatheAttack / 100;
      finalDamage *= metadata.stability / 100;
      finalDamage *= metadata.proration / 100;
      finalDamage *= metadata.skillDamageModifier / 100;
      (finalDamage *= metadata.distanceDependentDamageModifier / 100),
        (finalDamage *= (metadata.isAffectedByLethargy ? 70 : 100) / 100),
        (finalDamage *= metadata.lastDamageModifier / 100);
      finalDamage *= metadata.comboRelatedDamageModifier / 100;
      finalDamage *= metadata.baseDropGemDamageModifier / 100;
      finalDamage *= (metadata.isGuarded ? 25 : 100) / 100;
      finalDamage *= metadata.ultimaLionRageDamageModifier / 100;

      finalDamage = Math.floor(finalDamage);

      return finalDamage;
    },
  };
};
