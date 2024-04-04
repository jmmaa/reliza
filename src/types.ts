//

export type OneHandedSword = "one-handed-sword";

export type TwoHandedSword = "two-handed-sword";

export type Bow = "bow";

export type Bowgun = "bowgun";

export type Staff = "staff";

export type MagicDevice = "magic-device";

export type Halberd = "halberd";

export type Katana = "katana";

export type Knuckle = "knuckle";

export type BareHand = "bare-hand";

export type MainWeaponType =
  | OneHandedSword
  | TwoHandedSword
  | Bow
  | Bowgun
  | Staff
  | MagicDevice
  | Halberd
  | Katana
  | Knuckle
  | BareHand;

export type NinjutsuScroll = "ninjutsu-scroll";

export type Arrow = "arrow";

export type Shield = "shield";

export type Dagger = "dagger";

export type None = "none";

export type SubWeaponType =
  | OneHandedSword
  | Katana
  | Knuckle
  | MagicDevice
  | NinjutsuScroll
  | Arrow
  | Shield
  | Dagger
  | None;

export type SubWeaponTypeWithATK =
  | Arrow
  | Dagger
  | Katana
  | OneHandedSword
  | Knuckle
  | MagicDevice;

export type SubWeaponTypeWithRefinement =
  | Katana
  | OneHandedSword
  | Knuckle
  | MagicDevice
  | Shield;

export type SubWeaponTypeWithStability =
  | Arrow
  | Dagger
  | Katana
  | OneHandedSword
  | Knuckle
  | MagicDevice;

export type Light = "light";

export type Heavy = "heavy";

export type Normal = "normal";

export type ArmorType = Light | Heavy | Normal | None;

export type Fire = "fire";

export type Water = "water";

export type Earth = "earth";

export type Wind = "wind";

export type Dark = "dark";

export type Neutral = "neutral";

export type ElementType =
  | Light
  | Dark
  | Fire
  | Water
  | Wind
  | Earth
  | Neutral;

export interface NumericalStats {
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

  flatAttackMPRecovery: number;
  percentAttackMPRecovery: number;

  stability: number;

  magicPierce: number;
  physicalPierce: number;

  longRangeDamage: number;
  shortRangeDamage: number;

  motionSpeed: number;

  ATKUPSTR: number;
  ATKUPINT: number;
  ATKUPDEX: number;
  ATKUPVIT: number;
  ATKUPAGI: number;

  MATKUPSTR: number;
  MATKUPINT: number;
  MATKUPDEX: number;
  MATKUPVIT: number;
  MATKUPAGI: number;

  ATKDOWNSTR: number;
  ATKDOWNINT: number;
  ATKDOWNDEX: number;
  ATKDOWNVIT: number;
  ATKDOWNAGI: number;

  MATKDOWNSTR: number;
  MATKDOWNINT: number;
  MATKDOWNDEX: number;
  MATKDOWNVIT: number;
  MATKDOWNAGI: number;

  physicalResistance: number;
  magicResistance: number;

  lightResistance: number;
  darkResistance: number;

  fireResistance: number;
  waterResistance: number;
  earthResistance: number;
  windResistance: number;

  neutralResistance: number;

  ailmentResistance: number;

  damageToFire: number;
  damageToEarth: number;
  damageToWater: number;
  damageToWind: number;
  damageToDark: number;
  damageToLight: number;

  aggro: number;
}

export interface NonNumericalStats {
  element: ElementType;
  tumbleUnavailable: boolean;
  flinchUnavailable: boolean;
  stunUnavailable: boolean;
}

export interface StatMap extends NumericalStats, NonNumericalStats {}

export interface BladeSkills {
  hardHit: { level: number };
  astute: { level: number };
  triggerSlash: { level: number };
  rampage: { level: number };
  meteorBreaker: { level: number };
  shutOut: { level: number };
  lunarSlash: { level: number };
  sonicBlade: { level: number };
  spiralAir: { level: number };
  swordTempest: { level: number };
  busterBlade: { level: number };
  auraBlade: { level: number };
  swordMastery: { level: number };
  quickSlash: { level: number };
  swordTechniques: { level: number };
  warCry: { level: number };
  berserk: { level: number };
  gladiate: { level: number };
  swiftAttack: { level: number };
}

export interface ShotSkills {
  powerShot: { level: number };
  bullseye: { level: number };
  arrowRain: { level: number };
  snipe: { level: number };
  crossFire: { level: number };
  vanquisher: { level: number };
  twinStorm: { level: number };
  retrogradeShot: { level: number };
  moebaShot: { level: number };
  paralysisShot: { level: number };
  smokeDust: { level: number };
  armBreak: { level: number };
  parabolaCannon: { level: number };
  shotMastery: { level: number };
  samuraiArchery: { level: number };
  sneakAttack: { level: number };
  longRange: { level: number };
  quickDraw: { level: number };
  decoyShot: { level: number };
  fatalShot: { level: number };
}

export interface MagicSkills {
  magicArrows: { level: number };
  magicJavelin: { level: number };
  magicLances: { level: number };
  magicImpact: { level: number };
  magicFinale: { level: number };
  chronosShift: { level: number };
  magicWall: { level: number };
  magicBlast: { level: number };
  magicStorm: { level: number };
  magicBurst: { level: number };
  magicCannon: { level: number };
  magicCrash: { level: number };
  magicMastery: { level: number };
  magicKnife: { level: number };
  qadal: { level: number };
  MPCharge: { level: number };
  chainCast: { level: number };
  powerWave: { level: number };
  maximizer: { level: number };
  rapidCharge: { level: number };
  enchantedBarriers: { level: number };
  magicGuardianBeam: { level: number };
}

export interface SurvivalSkills {
  playDead: { level: number };
  EXPGainUP: { level: number };
  dropRateUP: { level: number };
  safeRest: { level: number };
  HPBoost: { level: number };
  fightersHigh: { level: number };
  shortRest: { level: number };
  MPBoost: { level: number };
  soberAnalysis: { level: number };
}

export interface SupportSkills {
  firstAid: { level: number };
  miniHeal: { level: number };
  recovery: { level: number };
  sanctuary: { level: number };
  heal: { level: number };
  lifeRecovery: { level: number };
  braveAura: { level: number; isActive: boolean };
  highCycle: { level: number };
  quickMotion: { level: number };
  manaRecharge: { level: number };
  magicBarrier: { level: number };
  immunity: { level: number };
  fastReaction: { level: number };
}

export interface BattleSkills {
  // battle skills
  magicUP: { level: number };
  concentrate: { level: number };
  AttackUP: { level: number };
  whack: { level: number };
  defenseUP: { level: number };
  dodgeUP: { level: number };
  desperateResist: { level: number };
  criticalUP: { level: number };
  accuracyUP: { level: number };
  increasedEnergy: { level: number };
  intimidatingPower: { level: number };
  defenseMastery: { level: number };
  spellBurst: { level: number };
  secretChaseAttack: { level: number };
  superGrip: { level: number };
}

export interface MononofuSkills {
  // mononofu skills
  issen: { level: number };
  pluseBlade: { level: number };
  tripleThrust: { level: number };
  hassoHappa: { level: number };
  tenryuRansei: { level: number };
  kasumisetsuGetsuka: { level: number };
  garyouTensei: { level: number };
  shadowLessSlash: { level: number };
  pommelStrike: { level: number };
  magadachi: { level: number };
  zanteiSettetsu: { level: number };
  bushido: { level: number };
  shukuchi: { level: number };
  nukiuchiSennosen: { level: number };
  twoHanded: { level: number };
  meikyouShisui: { level: number };
  kairikiRanshin: { level: number };
  dauntless: { level: number };
  bouncingBlade: { level: number };
}

export interface DualSwordSkills {
  // dual sword skills
  dualSwordMastery: { level: number };
  twinSlash: { level: number };
  spinningSlash: { level: number };
  phantomSlash: { level: number };
  aerialCut: { level: number };
  crossParry: { level: number };
  chargingSlash: { level: number };
  shadowStep: { level: number };
  shiningCross: { level: number };
  lunarMisfortune: { level: number };
  twinBusterBlade: { level: number };
  reflex: { level: number };
  flashBlast: { level: number };
  flashBlastIsActive: boolean;
  stormReaper: { level: number };
  dualSwordControl: { level: number };
  godspeed: { level: number };
  saberAura: { level: number };
  crescentSaber: { level: number };
}

export interface MagicBladeSkills {
  // magic blade skills
  magicWarriorMastery: { level: number };
  conversion: { level: number; isActive: boolean };
  resonance: {
    level: number;
    isActive: boolean;
    currentSetActive: "ATK/MATK" | "ASPD/CSPD" | "Accuracy/CriticalRate";
  };
  enchantedSpell: { level: number };
  dualBringer: { level: number; isActive: boolean };
  etherFlare: { level: number };
  elementSlash: { level: number };
  enchantSword: { level: number };
  enchantedBurst: { level: number };
  unionSword: { level: number };
  siphonBarrier: { level: number };
  teleport: { level: number };
  siphonRecall: { level: number };
  floatDash: { level: number };
  magicSkin: { level: number };
}

export interface ShieldSkills {
  shieldMastery: { level: number };
}

export interface HalberdSkills {
  flashStab: { level: number };
  cannonSpear: { level: number };
  dragonTail: { level: number };
  diveImpact: { level: number };
  dragonTooth: { level: number };
  draconicCharge: { level: number };
  deadlySpear: { level: number };
  punishRay: { level: number };
  strikeStab: { level: number };
  chronosDivine: { level: number };
  infiniteDimension: { level: number };
  halberdMastery: { level: number };
  criticalSpear: { level: number };
  tornadoLance: { level: number };
  quickAura: { level: number };
  warCryOfStruggle: { level: number };
  godspeedWield: { level: number };
  almightyWield: { level: number };
  busterLance: { level: number };
}

export interface Skills {
  bladeSkills: BladeSkills;
  shotSkills: ShotSkills;
  magicSkills: MagicSkills;
  survivalSkills: SurvivalSkills;
  supportSkills: SupportSkills;
  battleSkills: BattleSkills;
  mononofuSkills: MononofuSkills;
  dualSwordSkills: DualSwordSkills;
  magicBladeSkills: MagicBladeSkills;
  shieldSkills: ShieldSkills;
  halberdSkills: HalberdSkills;
}

export interface Regislets {
  zeroStance: { level: number };
  maxHPBoost: { level: number };
  maxMPBoost: { level: number };
  magicAttackBoost: { level: number };
  physicalAttackBoost: { level: number };
  magicDefenseBoost: { level: number };
  physicalDefenseBoost: { level: number };
  attackSpeedBoost: { level: number };
  magicSpeedBoost: { level: number };
  dodgeBoost: { level: number };
  accuracyBoost: { level: number };

  focusResonance: { level: number };
  speedResonance: { level: number };
  powerResonance: { level: number };
  // incomplete
}

export interface Effect<Status> {
  predicate: (status: Status) => boolean;
  stats: StatMap;
}

export interface Character {
  level: number;

  STR: number;
  DEX: number;
  INT: number;
  VIT: number;
  AGI: number;

  CRT: number;
  MTL: number;
  TEC: number;
  LUK: number;

  mainWeapon: {
    type: MainWeaponType;
    ATK: number;
    refinement: number;
    stability: number;
    stats: StatMap[];
    crystals: StatMap[][];
  };

  subWeapon: {
    type: SubWeaponType;
    ATK: number;
    DEF: number;
    refinement: number;
    stability: number;
    scrollCastTimeReduction: number;
    scrollMPReduction: number;
    stats: StatMap[];
    crystals: StatMap[][];
  };

  armor: {
    DEF: number;
    refinement: number;
    type: ArmorType;
    stats: StatMap[];
    crystals: StatMap[][];
  };

  additionalGear: {
    DEF: number;
    refinement: number;
    stats: StatMap[];
    crystals: StatMap[][];
  };

  specialGear: {
    DEF: number;
    stats: StatMap[];
    crystals: StatMap[][];
  };

  consumables: StatMap[];

  foodBuffs: StatMap[];

  // regislets (must be same like skills too)

  // blade skills

  skills: Skills;
  regislets: Regislets;
}

// utils

export type Entries<T> = { [K in keyof T]: [K, T[K]] }[keyof T][];
