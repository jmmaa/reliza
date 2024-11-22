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
} from "./internals";
import {
  StatId,
  MainWeaponTypeId,
  SubWeaponTypeId,
  ArmorTypeId,
  ResonanceSetId,
  PersonalStatId,
  ParamId,
  type IntermediateConfig,
  type Stat,
} from "./internals/data";
import { mergician } from "mergician";

export type MainWeaponTypeName =
  | "ONE_HANDED_SWORD"
  | "TWO_HANDED_SWORD"
  | "BOW"
  | "BOWGUN"
  | "STAFF"
  | "MAGIC_DEVICE"
  | "HALBERD"
  | "KATANA"
  | "KNUCKLES"
  | "BARE_HAND";

export type SubWeaponTypeName =
  | "ONE_HANDED_SWORD"
  | "KATANA"
  | "KNUCKLES"
  | "MAGIC_DEVICE"
  | "NINJUTSU_SCROLL"
  | "ARROW"
  | "SHIELD"
  | "DAGGER"
  | "NONE";

export type ArmorTypeName =
  | "LIGHT_ARMOR"
  | "HEAVY_ARMOR"
  | "NORMAL_ARMOR"
  | "NO_ARMOR";

export type PersonalStatName = "LUK" | "MTL" | "TEC" | "CRT" | "NONE";
export type ResonanceSetName = "ATK_MATK" | "ACC_CRIT" | "ASPD_CSPD";

export type StatName =
  | "FLAT_STR"
  | "PERCENT_STR"
  | "FLAT_INT"
  | "PERCENT_INT"
  | "FLAT_DEX"
  | "PERCENT_DEX"
  | "FLAT_VIT"
  | "PERCENT_VIT"
  | "FLAT_AGI"
  | "PERCENT_AGI"
  | "FLAT_WEAPON_ATK"
  | "PERCENT_WEAPON_ATK"
  | "FLAT_MATK"
  | "PERCENT_MATK"
  | "FLAT_ATK"
  | "PERCENT_ATK"
  | "FLAT_ASPD"
  | "PERCENT_ASPD"
  | "FLAT_CSPD"
  | "PERCENT_CSPD"
  | "FLAT_CRITICAL_RATE"
  | "PERCENT_CRITICAL_RATE"
  | "FLAT_CRITICAL_DAMAGE"
  | "PERCENT_CRITICAL_DAMAGE"
  | "FLAT_MAX_HP"
  | "PERCENT_MAX_HP"
  | "FLAT_MAX_MP"
  | "PERCENT_MAX_MP"
  | "FLAT_ACCURACY"
  | "PERCENT_ACCURACY"
  | "FLAT_DODGE"
  | "PERCENT_DODGE"
  | "FLAT_DEF"
  | "PERCENT_DEF"
  | "FLAT_MDEF"
  | "PERCENT_MDEF"
  | "FLAT_UNSHEATHE_ATTACK"
  | "PERCENT_UNSHEATHE_ATTACK"
  | "FLAT_ATTACK_MP_RECOVERY"
  | "PERCENT_ATTACK_MP_RECOVERY"
  | "FLAT_NATURAL_HP_REGEN"
  | "PERCENT_NATURAL_HP_REGEN"
  | "FLAT_NATURAL_MP_REGEN"
  | "PERCENT_NATURAL_MP_REGEN"
  | "STABILITY"
  | "MAGIC_PIERCE"
  | "PHYSICAL_PIERCE"
  | "LONG_RANGE_DAMAGE"
  | "SHORT_RANGE_DAMAGE"
  | "MOTION_SPEED"
  | "ATK_UP_STR"
  | "ATK_UP_INT"
  | "ATK_UP_DEX"
  | "ATK_UP_VIT"
  | "ATK_UP_AGI"
  | "MATK_UP_STR"
  | "MATK_UP_INT"
  | "MATK_UP_DEX"
  | "MATK_UP_VIT"
  | "MATK_UP_AGI"
  | "ATK_DOWN_STR"
  | "ATK_DOWN_INT"
  | "ATK_DOWN_DEX"
  | "ATK_DOWN_VIT"
  | "ATK_DOWN_AGI"
  | "MATK_DOWN_STR"
  | "MATK_DOWN_INT"
  | "MATK_DOWN_DEX"
  | "MATK_DOWN_VIT"
  | "MATK_DOWN_AGI"
  | "MAGIC_RESISTANCE"
  | "PHYSICAL_RESISTANCE"
  | "LIGHT_RESISTANCE"
  | "DARK_RESISTANCE"
  | "FIRE_RESISTANCE"
  | "WATER_RESISTANCE"
  | "EARTH_RESISTANCE"
  | "WIND_RESISTANCE"
  | "NEUTRAL_RESISTANCE"
  | "AILMENT_RESISTANCE"
  | "DAMAGE_TO_DARK"
  | "DAMAGE_TO_LIGHT"
  | "DAMAGE_TO_EARTH"
  | "DAMAGE_TO_WATER"
  | "DAMAGE_TO_FIRE"
  | "DAMAGE_TO_WIND"
  | "AGGRO"
  | "TUMBLE_UNAVAILABLE"
  | "FLINCH_UNAVAILABLE"
  | "STUN_UNAVAILABLE"
  | "DARK_ELEMENT"
  | "LIGHT_ELEMENT"
  | "EARTH_ELEMENT"
  | "WATER_ELEMENT"
  | "FIRE_ELEMENT"
  | "WIND_ELEMENT"
  | "GUARD_POWER"
  | "GUARD_RECHARGE"
  | "GUARD_BREAK"
  | "EVASION_RECHARGE"
  | "ANTICIPATE"
  | "ITEM_COOLDOWN"
  | "INVINCIBLE_AID"
  | "ABSOLUTE_ACCURACY"
  | "ABSOLUTE_DODGE"
  | "PHYSICAL_BARRIER"
  | "MAGIC_BARRIER"
  | "FRACTIONAL_BARRIER"
  | "BARRIER_COOLDOWN"
  | "ADDITIONAL_MELEE"
  | "ADDITIONAL_MAGIC";

export type StatMapBuilder = <C extends Config>(_: C) => Stat[];

export interface Properties {
  level: number;
  STR: number;
  INT: number;
  DEX: number;
  VIT: number;
  AGI: number;
  personalStat: PersonalStatName;
  personalStatValue: number;
}

export interface Equipments {
  mainweapon: {
    type: MainWeaponTypeName;
    ATK: number;
    refinement: number;
    stability: number;

    stats: StatMapBuilder; // change this later with type callable | xtal name
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  subweapon: {
    type: SubWeaponTypeName;

    ATK: number;
    DEF: number;
    refinement: number;
    stability: number;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
    scrollCastTimeReduction: number;
    scrollMPReduction: number;
  };

  armor: {
    DEF: number;
    type: ArmorTypeName;
    refinement: number;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  additionalGear: {
    DEF: number;
    refinement: number;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  specialGear: {
    DEF: number;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };
}

export interface BladeSkills {
  hardhit: { level: number };
  astute: { level: number };
  triggerslash: { level: number; isActive: boolean };

  rampage: { level: number; isActive: boolean };

  meteorbreaker: { level: number };
  shutout: { level: number };
  lunarslash: { level: number };
  sonicblade: { level: number };
  spiralair: { level: number };
  swordtempest: { level: number };
  busterblade: { level: number; isActive: boolean };

  aurablade: { level: number };
  swordmastery: { level: number };
  quickslash: { level: number };
  swordtechniques: { level: number };
  warcry: { level: number; isActive: boolean };

  berserk: { level: number; isActive: boolean };

  gladiate: { level: number };
  swiftattack: { level: number };
}

export interface ShotSkills {
  powershot: { level: number };
  bullseye: { level: number };
  arrowrain: { level: number };
  snipe: { level: number };
  crossfire: { level: number };
  vanquisher: { level: number };
  twinstorm: {
    level: number;
    isActive: boolean;
    onCooldown: boolean;
  };

  retrogradeshot: { level: number };
  moebashot: { level: number };
  paralysisshot: { level: number };
  smokedust: { level: number };
  armbreak: { level: number };
  parabolacannon: { level: number };
  shotmastery: { level: number };
  samuraiarchery: { level: number; stacks: number };
  sneakattack: { level: number };
  longrange: { level: number };
  quickdraw: { level: number };
  decoyshot: { level: number };
  fatalshot: { level: number };
}

export interface MagicSkills {
  magicarrows: { level: number };
  magicjavelin: { level: number };
  magiclances: { level: number };
  magicimpact: { level: number };
  magicfinale: { level: number };
  chronosshift: { level: number };
  magicwall: { level: number };
  magicblast: { level: number };
  magicstorm: { level: number };
  magicburst: { level: number };
  magiccannon: { level: number };
  magiccrash: { level: number };
  magicmastery: { level: number };
  magicknife: { level: number };
  qadal: {
    level: number;
    burden: number;
    combatTime: number;
    isActive: boolean;
  };
  mpcharge: { level: number };
  chaincast: { level: number; isActive: boolean; stacks: number };
  powerwave: { level: number };
  maximizer: { level: number };
  rapidcharge: {
    level: number;
    isActive: boolean;
    amountMPRecoveredFromMaximizer: number;
  };
  enchantedbarriers: { level: number };
  magicguardianbeam: { level: number };
}

export interface SurvivalSkills {
  playdead: { level: number };
  expgainup: { level: number };
  droprateup: { level: number };
  saferest: { level: number };
  hpboost: { level: number };
  fightershigh: { level: number };
  shortrest: { level: number };
  mpboost: { level: number };
  soberanalysis: { level: number };
}

export interface SupportSkills {
  firstaid: { level: number };
  miniheal: { level: number };
  recovery: { level: number };
  sanctuary: { level: number };
  heal: { level: number };
  liferecovery: { level: number };
  braveaura: { level: number; isActive: boolean };
  highcycle: { level: number; isActive: boolean };
  quickmotion: { level: number; isActive: boolean };
  manarecharge: { level: number; isActive: boolean };
  magicbarrier: { level: number; isActive: boolean };
  immunity: { level: number; isActive: boolean };
  fastreaction: { level: number; isActive: boolean };
}

export interface BattleSkills {
  magicup: { level: number };
  concentrate: { level: number };
  attackup: { level: number };
  whack: { level: number };
  defenseup: { level: number };
  dodgeup: { level: number };
  desperateresist: { level: number };
  criticalup: { level: number };
  accuracyup: { level: number };
  increasedenergy: { level: number };
  intimidatingpower: { level: number };
  defensemastery: { level: number };
  spellburst: { level: number };
  secretchaseattack: { level: number };
  supergrip: { level: number };
}

export interface MononofuSkills {
  issen: { level: number };
  pulseblade: { level: number };
  triplethrust: { level: number; isActive: boolean };

  hassohappa: { level: number };
  tenryuransei: { level: number };
  kasumisetsugetsuka: { level: number };
  garyoutensei: { level: number };
  shadowlessslash: { level: number };
  pommelstrike: { level: number };
  magadachi: { level: number };
  zanteisettetsu: { level: number };
  bushido: { level: number };
  shukuchi: { level: number; isActive: boolean };

  nukiuchisennosen: { level: number };
  twohanded: { level: number };
  meikyoushisui: { level: number; isActive: boolean };
  kairikiranshin: { level: number; isActive: boolean };

  dauntless: { level: number; stacks: number };
  dauntless_stacks: number;
  bouncingblade: { level: number; isActive: boolean };
}

export interface DualSwordSkills {
  dualswordmastery: { level: number };
  twinslash: { level: number };
  spinningslash: { level: number };
  phantomslash: { level: number };
  aerialcut: { level: number };
  crossparry: { level: number; isActive: boolean; isParried: boolean };
  chargingslash: { level: number };
  shadowstep: { level: number; isActive: boolean };

  shiningcross: { level: number };
  lunarmisfortune: { level: number };
  twinbusterblade: { level: number; isActive: boolean };

  reflex: { level: number };
  flashblast: { level: number; isActive: boolean };

  stormreaper: { level: number };
  dualswordcontrol: { level: number };
  godspeed: { level: number };
  saberaura: { level: number };
  crescentsaber: { level: number };
}

export interface MagicBladeSkills {
  magicwarriormastery: { level: number };
  conversion: { level: number; isActive: boolean };

  resonance: { level: number; isActive: boolean; set: ResonanceSetName };

  enchantedspell: { level: number };
  dualbringer: { level: number; isActive: boolean };

  etherflare: { level: number; isActive: boolean };

  elementslash: { level: number };
  enchantsword: { level: number };
  enchantedburst: { level: number };
  unionsword: { level: number };
  siphonbarrier: { level: number; isActive: boolean };

  teleport: { level: number };
  siphonrecall: { level: number };
  floatdash: { level: number };
  magicskin: { level: number };
}

export interface ShieldSkills {
  shieldmastery: { level: number };
  shieldbash: { level: number };
  shieldcannon: { level: number };
  guardstrike: { level: number };
  forceshield: { level: number };
  magicalshield: { level: number };
  shielduppercut: { level: number };
  dualshields: { level: number };
  shieldrepair: { level: number };
  belagerung: { level: number };
  protection: { level: number; isActive: boolean };
  aegis: { level: number; isActive: boolean };
  guardian: { level: number };
}

export interface GuardSkills {
  heavyarmormastery: { level: number };
  advancedguard: { level: number };
  physicalguard: { level: number };
  lightarmormastery: { level: number };
  advancedevasion: { level: number };
  mirageevasion: { level: number };
}

export interface HalberdSkills {
  flashstab: { level: number };
  cannonspear: { level: number };
  dragontail: { level: number };
  diveimpact: { level: number };
  dragontooth: { level: number };
  draconiccharge: { level: number };
  deadlyspear: { level: number };
  punishray: { level: number };
  strikestab: { level: number };
  chronosdivine: { level: number };
  infinitedimension: { level: number };
  halberdmastery: { level: number };
  criticalspear: { level: number };
  tornadolance: { level: number };
  quickaura: { level: number; isActive: boolean };
  warcryofstruggle: { level: number };
  godspeedwield: { level: number; isActive: boolean; stacks: number };
  almightywield: { level: number };
  busterlance: { level: number };
}

export interface MartialSkills {
  smash: { level: number };
  bash: { level: number };
  shellbreak: { level: number };
  heavysmash: { level: number };
  chariot: { level: number };
  abstractarms: { level: number };
  sonicwave: { level: number };
  earthbind: { level: number };
  triplekick: { level: number };
  rush: { level: number; isActive: boolean };
  asuraaura: { level: number; isActive: boolean };
  flashblink: { level: number };
  martialmastery: { level: number };
  martialdiscipline: { level: number };
  chakra: { level: number; isActive: boolean };
  energycontrol: { level: number; isActive: boolean };
  aggravate: { level: number };
  strongchaseattack: { level: number };
  slide: { level: number };
}

export interface BareHandSkills {
  unarmedmastery: { level: number };
  qicharge: { level: number };
  lionrage: { level: number };
  ultimalionrage: { level: number };
  ravingstorm: { level: number };
  ultimaravingstorm: { level: number };
  internalelixir: { level: number };
  clashofenmity: { level: number };
  miraclecomeback: { level: number };
  ultimaqicharge: { level: number };
  hiddentalent: { level: number };
  earthshaker: { level: number; isActive: boolean };
}

export interface HunterSkills {
  kick: { level: number };
  sunrisearrow: { level: number };
  magicarrow: { level: number; isActive: boolean };
  satellitearrow: { level: number };
  sleeptrap: { level: number };
  beartrap: { level: number };
  landmine: { level: number };
  darktrap: { level: number };
  homingshot: { level: number };
  detection: { level: number; isActive: boolean };

  cyclonearrow: { level: number };
  verticalair: { level: number };
  hunterbowgun: { level: number };
  multiplehunt: { level: number; isActive: boolean }; // should be able to know which buff is active using subweapon info
}

export interface NinjaSkills {
  ninjutsu: { level: number };
  ninjaspirit: { level: number };
  ninjutsudrilli: { level: number };
  ninjutsudrillii: { level: number };
}

export interface WizardSkills {
  familia: { level: number; isActive: boolean };

  lightning: { level: number };
  blizzard: { level: number };
  meteorstrike: { level: number };
  imperialray: { level: number };
  manacrystal: { level: number };
  stonebarrier: { level: number };
  advancedfamilia: { level: number; isActive: boolean };
  castmastery: { level: number };
  crystallaser: { level: number };
  overlimit: { level: number; isActive: boolean };
  sorceryguide: { level: number };
}

export interface PriestSkills {
  bless: { level: number };
  gloria: { level: number };
  enhancedbless: { level: number };
  royalheal: { level: number };
  holyfist: { level: number };
  holylight: { level: number };
  etherbarrier: { level: number; isActive: boolean };

  prayer: { level: number; isActive: boolean };

  staffthrust: { level: number };
  exorcism: { level: number };
  holybook: { level: number; isActive: boolean };

  nemesis: { level: number };
}

export interface SkillTrees {
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
  guardSkills: GuardSkills;
  halberdSkills: HalberdSkills;
  martialSkills: MartialSkills;
  bareHandSkills: BareHandSkills;
  hunterSkills: HunterSkills;
  ninjaSkills: NinjaSkills;
  wizardSkills: WizardSkills;
  priestSkills: PriestSkills;
}

export interface Ailments {
  weaken: boolean;
  flinch: boolean;
  tumble: boolean;
  stun: boolean;
  knockback: boolean;
  poison: boolean;
  paralysis: boolean;
  blindness: boolean;
  ignition: boolean;
  freeze: boolean;
  armorbreak: boolean;
  slow: boolean;
  stop: boolean;
  fear: boolean;
  dizzy: boolean;
  lethargy: boolean;
  silence: boolean;
  bleed: boolean;
  fatigue: boolean;
  dazzled: boolean;
}

export interface Regislets {
  zerostance: number;
  maxhpboost: number;
  maxmpboost: number;
  magicattackboost: number;
  physicalattackboost: number;
  magicdefenseboost: number;
  physicaldefenseboost: number;
  attackspeedboost: number;
  magicspeedboost: number;
  dodgeboost: number;
  accuracyboost: number;
  focusresonance: number;
  speedresonance: number;
  powerresonance: number;
}

export interface Config {
  properties: Properties;
  equipments: Equipments;
  skillTrees: SkillTrees;
  consumables: Stat[];
  foodBuffs: Stat[];
  ailments: Ailments;
  regislets: Regislets;
}

const personalStatNameToIdMapping: Record<
  PersonalStatName,
  PersonalStatId
> = {
  CRT: PersonalStatId.CRT,
  LUK: PersonalStatId.LUK,
  MTL: PersonalStatId.MTL,
  TEC: PersonalStatId.TEC,
  NONE: PersonalStatId.NONE,
};

const getPersonalStatIdFromPersonalStatName = (name: PersonalStatName) =>
  personalStatNameToIdMapping[name]; // improve this later, make it safe

const mainWeaponTypeNameToIdMapping: Record<
  MainWeaponTypeName,
  MainWeaponTypeId
> = {
  BARE_HAND: MainWeaponTypeId.BARE_HAND,
  BOW: MainWeaponTypeId.BOW,
  BOWGUN: MainWeaponTypeId.BOWGUN,
  HALBERD: MainWeaponTypeId.HALBERD,
  KATANA: MainWeaponTypeId.KATANA,
  KNUCKLES: MainWeaponTypeId.KNUCKLES,
  MAGIC_DEVICE: MainWeaponTypeId.MAGIC_DEVICE,
  ONE_HANDED_SWORD: MainWeaponTypeId.ONE_HANDED_SWORD,
  STAFF: MainWeaponTypeId.STAFF,
  TWO_HANDED_SWORD: MainWeaponTypeId.TWO_HANDED_SWORD,
};

const getMainWeaponTypeIdFromMainWeaponTypeName = (
  name: MainWeaponTypeName,
) => mainWeaponTypeNameToIdMapping[name];

const subWeaponTypeNameToIdMapping: Record<
  SubWeaponTypeName,
  SubWeaponTypeId
> = {
  ARROW: SubWeaponTypeId.ARROW,
  KATANA: SubWeaponTypeId.KATANA,
  MAGIC_DEVICE: SubWeaponTypeId.MAGIC_DEVICE,
  SHIELD: SubWeaponTypeId.SHIELD,
  NINJUTSU_SCROLL: SubWeaponTypeId.NINJUTSU_SCROLL,
  DAGGER: SubWeaponTypeId.DAGGER,
  KNUCKLES: SubWeaponTypeId.KNUCKLES,
  ONE_HANDED_SWORD: SubWeaponTypeId.ONE_HANDED_SWORD,
  NONE: SubWeaponTypeId.NONE,
};

const getSubWeaponTypeIdFromSubWeaponTypeName = (
  name: SubWeaponTypeName,
) => subWeaponTypeNameToIdMapping[name];

const armorTypeNameToIdMapping: Record<ArmorTypeName, ArmorTypeId> = {
  LIGHT_ARMOR: ArmorTypeId.LIGHT,
  HEAVY_ARMOR: ArmorTypeId.HEAVY,
  NORMAL_ARMOR: ArmorTypeId.NORMAL,
  NO_ARMOR: ArmorTypeId.NONE,
};

const getArmorTypeIdFromArmorTypeName = (name: ArmorTypeName) =>
  armorTypeNameToIdMapping[name];

const resonanceSetNameToIdMapping: Record<
  ResonanceSetName,
  ResonanceSetId
> = {
  ACC_CRIT: ResonanceSetId.ACC_AND_CRIT,
  ASPD_CSPD: ResonanceSetId.ASPD_AND_CSPD,
  ATK_MATK: ResonanceSetId.ATK_AND_MATK,
};

const getResonanceSetIdFromResonanceSetName = (name: ResonanceSetName) =>
  resonanceSetNameToIdMapping[name];

const statNameToIdMapping: Record<StatName, StatId> = {
  FLAT_STR: StatId.FLAT_STR,
  PERCENT_STR: StatId.PERCENT_STR,
  FLAT_INT: StatId.FLAT_INT,
  PERCENT_INT: StatId.PERCENT_INT,
  FLAT_DEX: StatId.FLAT_DEX,
  PERCENT_DEX: StatId.PERCENT_DEX,
  FLAT_VIT: StatId.FLAT_VIT,
  PERCENT_VIT: StatId.PERCENT_VIT,
  FLAT_AGI: StatId.FLAT_AGI,
  PERCENT_AGI: StatId.PERCENT_AGI,
  FLAT_WEAPON_ATK: StatId.FLAT_WEAPON_ATK,
  PERCENT_WEAPON_ATK: StatId.PERCENT_WEAPON_ATK,
  FLAT_MATK: StatId.FLAT_MATK,
  PERCENT_MATK: StatId.PERCENT_MATK,
  FLAT_ATK: StatId.FLAT_ATK,
  PERCENT_ATK: StatId.PERCENT_ATK,
  FLAT_ASPD: StatId.FLAT_ASPD,
  PERCENT_ASPD: StatId.PERCENT_ASPD,
  FLAT_CSPD: StatId.FLAT_CSPD,
  PERCENT_CSPD: StatId.PERCENT_CSPD,
  FLAT_CRITICAL_RATE: StatId.FLAT_CRITICAL_RATE,
  PERCENT_CRITICAL_RATE: StatId.PERCENT_CRITICAL_RATE,
  FLAT_CRITICAL_DAMAGE: StatId.FLAT_CRITICAL_DAMAGE,
  PERCENT_CRITICAL_DAMAGE: StatId.PERCENT_CRITICAL_DAMAGE,
  FLAT_MAX_HP: StatId.FLAT_MAX_HP,
  PERCENT_MAX_HP: StatId.PERCENT_MAX_HP,
  FLAT_MAX_MP: StatId.FLAT_MAX_MP,
  PERCENT_MAX_MP: StatId.PERCENT_MAX_MP,
  FLAT_ACCURACY: StatId.FLAT_ACCURACY,
  PERCENT_ACCURACY: StatId.PERCENT_ACCURACY,
  FLAT_DODGE: StatId.FLAT_DODGE,
  PERCENT_DODGE: StatId.PERCENT_DODGE,
  FLAT_DEF: StatId.FLAT_DEF,
  PERCENT_DEF: StatId.PERCENT_DEF,
  FLAT_MDEF: StatId.FLAT_MDEF,
  PERCENT_MDEF: StatId.PERCENT_MDEF,
  FLAT_UNSHEATHE_ATTACK: StatId.FLAT_UNSHEATHE_ATTACK,
  PERCENT_UNSHEATHE_ATTACK: StatId.PERCENT_UNSHEATHE_ATTACK,
  FLAT_ATTACK_MP_RECOVERY: StatId.FLAT_ATTACK_MP_RECOVERY,
  PERCENT_ATTACK_MP_RECOVERY: StatId.PERCENT_ATTACK_MP_RECOVERY,
  FLAT_NATURAL_HP_REGEN: StatId.FLAT_NATURAL_HP_REGEN,
  PERCENT_NATURAL_HP_REGEN: StatId.PERCENT_NATURAL_HP_REGEN,
  FLAT_NATURAL_MP_REGEN: StatId.FLAT_NATURAL_MP_REGEN,
  PERCENT_NATURAL_MP_REGEN: StatId.PERCENT_NATURAL_MP_REGEN,
  STABILITY: StatId.STABILITY,
  MAGIC_PIERCE: StatId.MAGIC_PIERCE,
  PHYSICAL_PIERCE: StatId.PHYSICAL_PIERCE,
  LONG_RANGE_DAMAGE: StatId.LONG_RANGE_DAMAGE,
  SHORT_RANGE_DAMAGE: StatId.SHORT_RANGE_DAMAGE,
  MOTION_SPEED: StatId.MOTION_SPEED,
  ATK_UP_STR: StatId.ATK_UP_STR,
  ATK_UP_INT: StatId.ATK_UP_INT,
  ATK_UP_DEX: StatId.ATK_UP_DEX,
  ATK_UP_VIT: StatId.ATK_UP_VIT,
  ATK_UP_AGI: StatId.ATK_UP_AGI,
  MATK_UP_STR: StatId.MATK_UP_STR,
  MATK_UP_INT: StatId.MATK_UP_INT,
  MATK_UP_DEX: StatId.MATK_UP_DEX,
  MATK_UP_VIT: StatId.MATK_UP_VIT,
  MATK_UP_AGI: StatId.MATK_UP_AGI,
  ATK_DOWN_STR: StatId.ATK_DOWN_STR,
  ATK_DOWN_INT: StatId.ATK_DOWN_INT,
  ATK_DOWN_DEX: StatId.ATK_DOWN_DEX,
  ATK_DOWN_VIT: StatId.ATK_DOWN_VIT,
  ATK_DOWN_AGI: StatId.ATK_DOWN_AGI,
  MATK_DOWN_STR: StatId.MATK_DOWN_STR,
  MATK_DOWN_INT: StatId.MATK_DOWN_INT,
  MATK_DOWN_DEX: StatId.MATK_DOWN_DEX,
  MATK_DOWN_VIT: StatId.MATK_DOWN_VIT,
  MATK_DOWN_AGI: StatId.MATK_DOWN_AGI,
  MAGIC_RESISTANCE: StatId.MAGIC_RESISTANCE,
  PHYSICAL_RESISTANCE: StatId.PHYSICAL_RESISTANCE,
  LIGHT_RESISTANCE: StatId.LIGHT_RESISTANCE,
  DARK_RESISTANCE: StatId.DARK_RESISTANCE,
  FIRE_RESISTANCE: StatId.FIRE_RESISTANCE,
  WATER_RESISTANCE: StatId.WATER_RESISTANCE,
  EARTH_RESISTANCE: StatId.EARTH_RESISTANCE,
  WIND_RESISTANCE: StatId.WIND_RESISTANCE,
  NEUTRAL_RESISTANCE: StatId.NEUTRAL_RESISTANCE,
  AILMENT_RESISTANCE: StatId.AILMENT_RESISTANCE,
  DAMAGE_TO_DARK: StatId.DAMAGE_TO_DARK,
  DAMAGE_TO_LIGHT: StatId.DAMAGE_TO_LIGHT,
  DAMAGE_TO_EARTH: StatId.DAMAGE_TO_EARTH,
  DAMAGE_TO_WATER: StatId.DAMAGE_TO_WATER,
  DAMAGE_TO_FIRE: StatId.DAMAGE_TO_FIRE,
  DAMAGE_TO_WIND: StatId.DAMAGE_TO_WIND,
  AGGRO: StatId.AGGRO,
  TUMBLE_UNAVAILABLE: StatId.TUMBLE_UNAVAILABLE,
  FLINCH_UNAVAILABLE: StatId.FLINCH_UNAVAILABLE,
  STUN_UNAVAILABLE: StatId.STUN_UNAVAILABLE,
  DARK_ELEMENT: StatId.DARK_ELEMENT,
  LIGHT_ELEMENT: StatId.LIGHT_ELEMENT,
  EARTH_ELEMENT: StatId.EARTH_ELEMENT,
  WATER_ELEMENT: StatId.WATER_ELEMENT,
  FIRE_ELEMENT: StatId.FIRE_ELEMENT,
  WIND_ELEMENT: StatId.WIND_ELEMENT,
  GUARD_POWER: StatId.GUARD_POWER,
  GUARD_RECHARGE: StatId.GUARD_RECHARGE,
  GUARD_BREAK: StatId.GUARD_BREAK,
  EVASION_RECHARGE: StatId.EVASION_RECHARGE,
  ANTICIPATE: StatId.ANTICIPATE,
  ITEM_COOLDOWN: StatId.ITEM_COOLDOWN,
  INVINCIBLE_AID: StatId.INVINCIBLE_AID,
  ABSOLUTE_ACCURACY: StatId.ABSOLUTE_ACCURACY,
  ABSOLUTE_DODGE: StatId.ABSOLUTE_DODGE,
  PHYSICAL_BARRIER: StatId.PHYSICAL_BARRIER,
  MAGIC_BARRIER: StatId.MAGIC_BARRIER,
  FRACTIONAL_BARRIER: StatId.FRACTIONAL_BARRIER,
  BARRIER_COOLDOWN: StatId.BARRIER_COOLDOWN,
  ADDITIONAL_MELEE: StatId.ADDITIONAL_MELEE,
  ADDITIONAL_MAGIC: StatId.ADDITIONAL_MAGIC,
};

const getStatIdFromStatName = (name: StatName) =>
  statNameToIdMapping[name];

const defaultConfig: Config = {
  properties: {
    level: 1,
    STR: 1,
    INT: 1,
    DEX: 1,
    VIT: 1,
    AGI: 1,
    personalStat: "NONE",
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

const createIntermediateConfig = (config: Config): IntermediateConfig => ({
  [ParamId.CHARACTER_LEVEL]: config.properties.level,

  [ParamId.CHARACTER_BASE_STR]: config.properties.STR,
  [ParamId.CHARACTER_BASE_INT]: config.properties.INT,
  [ParamId.CHARACTER_BASE_DEX]: config.properties.DEX,
  [ParamId.CHARACTER_BASE_VIT]: config.properties.VIT,
  [ParamId.CHARACTER_BASE_AGI]: config.properties.AGI,
  [ParamId.CHARACTER_PERSONAL_STAT_ID]:
    getPersonalStatIdFromPersonalStatName(config.properties.personalStat),
  [ParamId.CHARACTER_PERSONAL_STAT_VALUE]:
    config.properties.personalStatValue,

  [ParamId.CHARACTER_MAINWEAPON_TYPE]:
    getMainWeaponTypeIdFromMainWeaponTypeName(
      config.equipments.mainweapon.type,
    ),
  [ParamId.CHARACTER_MAINWEAPON_ATK]: config.equipments.mainweapon.ATK,
  [ParamId.CHARACTER_MAINWEAPON_REFINEMENT]:
    config.equipments.mainweapon.refinement,
  [ParamId.CHARACTER_MAINWEAPON_STABILITY]:
    config.equipments.mainweapon.stability,
  [ParamId.CHARACTER_MAINWEAPON_STATMAP]:
    config.equipments.mainweapon.stats(config),
  [ParamId.CHARACTER_MAINWEAPON_CRYSTAL1_STATMAP]:
    config.equipments.mainweapon.crystal1(config),
  [ParamId.CHARACTER_MAINWEAPON_CRYSTAL2_STATMAP]:
    config.equipments.mainweapon.crystal2(config),

  [ParamId.CHARACTER_SUBWEAPON_TYPE]:
    getSubWeaponTypeIdFromSubWeaponTypeName(
      config.equipments.subweapon.type,
    ),
  [ParamId.CHARACTER_SUBWEAPON_ATK]: config.equipments.subweapon.ATK,
  [ParamId.CHARACTER_SUBWEAPON_DEF]: config.equipments.subweapon.DEF,
  [ParamId.CHARACTER_SUBWEAPON_REFINEMENT]:
    config.equipments.subweapon.refinement,
  [ParamId.CHARACTER_SUBWEAPON_STABILITY]:
    config.equipments.subweapon.stability,
  [ParamId.CHARACTER_SUBWEAPON_STATMAP]:
    config.equipments.subweapon.stats(config),
  [ParamId.CHARACTER_SUBWEAPON_CRYSTAL1_STATMAP]:
    config.equipments.subweapon.stats(config),
  [ParamId.CHARACTER_SUBWEAPON_CRYSTAL2_STATMAP]:
    config.equipments.subweapon.stats(config),
  [ParamId.CHARACTER_SUBWEAPON_SCROLL_CAST_TIME_REDUCTION]:
    config.equipments.subweapon.scrollCastTimeReduction,
  [ParamId.CHARACTER_SUBWEAPON_SCROLL_MP_REDUCTION]:
    config.equipments.subweapon.scrollMPReduction,

  // continue here

  [ParamId.CHARACTER_ARMOR_DEF]: config.equipments.armor.DEF,
  [ParamId.CHARACTER_ARMOR_REFINEMENT]: config.equipments.armor.refinement,
  [ParamId.CHARACTER_ARMOR_TYPE]: getArmorTypeIdFromArmorTypeName(
    config.equipments.armor.type,
  ),
  [ParamId.CHARACTER_ARMOR_STATMAP]: config.equipments.armor.stats(config),
  [ParamId.CHARACTER_ARMOR_CRYSTAL1_STATMAP]:
    config.equipments.armor.crystal1(config),
  [ParamId.CHARACTER_ARMOR_CRYSTAL2_STATMAP]:
    config.equipments.armor.crystal2(config),

  [ParamId.CHARACTER_ADDITIONAL_GEAR_DEF]:
    config.equipments.additionalGear.DEF,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_REFINEMENT]:
    config.equipments.additionalGear.refinement,
  [ParamId.CHARACTER_ADDITIONAL_GEAR_STATMAP]:
    config.equipments.additionalGear.stats(config),
  [ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL1_STATMAP]:
    config.equipments.additionalGear.crystal1(config),
  [ParamId.CHARACTER_ADDITIONAL_GEAR_CRYSTAL2_STATMAP]:
    config.equipments.additionalGear.crystal2(config),

  [ParamId.CHARACTER_SPECIAL_GEAR_DEF]: config.equipments.specialGear.DEF,
  [ParamId.CHARACTER_SPECIAL_GEAR_STATMAP]:
    config.equipments.specialGear.stats(config),
  [ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL1_STATMAP]:
    config.equipments.specialGear.crystal1(config),
  [ParamId.CHARACTER_SPECIAL_GEAR_CRYSTAL2_STATMAP]:
    config.equipments.specialGear.crystal2(config),

  [ParamId.CHARACTER_SKILLS_BLADESKILLS_HARDHIT_LEVEL]:
    config.skillTrees.bladeSkills.hardhit.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_ASTUTE_LEVEL]:
    config.skillTrees.bladeSkills.astute.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_TRIGGERSLASH_LEVEL]:
    config.skillTrees.bladeSkills.triggerslash.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_TRIGGERSLASH_ISACTIVE]:
    config.skillTrees.bladeSkills.triggerslash.isActive,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_RAMPAGE_LEVEL]:
    config.skillTrees.bladeSkills.rampage.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_RAMPAGE_ISACTIVE]:
    config.skillTrees.bladeSkills.rampage.isActive,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_METEORBREAKER_LEVEL]:
    config.skillTrees.bladeSkills.meteorbreaker.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SHUTOUT_LEVEL]:
    config.skillTrees.bladeSkills.shutout.level,

  [ParamId.CHARACTER_SKILLS_BLADESKILLS_LUNARSLASH_LEVEL]:
    config.skillTrees.bladeSkills.lunarslash.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SONICBLADE_LEVEL]:
    config.skillTrees.bladeSkills.sonicblade.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SPIRALAIR_LEVEL]:
    config.skillTrees.bladeSkills.spiralair.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDTEMPEST_LEVEL]:
    config.skillTrees.bladeSkills.swordtempest.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_LEVEL]:
    config.skillTrees.bladeSkills.busterblade.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BUSTERBLADE_ISACTIVE]:
    config.skillTrees.bladeSkills.busterblade.isActive,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_AURABLADE_LEVEL]:
    config.skillTrees.bladeSkills.aurablade.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDMASTERY_LEVEL]:
    config.skillTrees.bladeSkills.swordmastery.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_QUICKSLASH_LEVEL]:
    config.skillTrees.bladeSkills.quickslash.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWORDTECHNIQUES_LEVEL]:
    config.skillTrees.bladeSkills.swordtechniques.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_LEVEL]:
    config.skillTrees.bladeSkills.warcry.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_WARCRY_ISACTIVE]:
    config.skillTrees.bladeSkills.warcry.isActive,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_LEVEL]:
    config.skillTrees.bladeSkills.berserk.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_BERSERK_ISACTIVE]:
    config.skillTrees.bladeSkills.berserk.isActive,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_GLADIATE_LEVEL]:
    config.skillTrees.bladeSkills.gladiate.level,
  [ParamId.CHARACTER_SKILLS_BLADESKILLS_SWIFTATTACK_LEVEL]:
    config.skillTrees.bladeSkills.swiftattack.level,

  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_POWERSHOT_LEVEL]:
    config.skillTrees.shotSkills.powershot.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_BULLSEYE_LEVEL]:
    config.skillTrees.shotSkills.bullseye.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_ARROWRAIN_LEVEL]:
    config.skillTrees.shotSkills.arrowrain.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SNIPE_LEVEL]:
    config.skillTrees.shotSkills.snipe.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_CROSSFIRE_LEVEL]:
    config.skillTrees.shotSkills.crossfire.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_VANQUISHER_LEVEL]:
    config.skillTrees.shotSkills.vanquisher.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_LEVEL]:
    config.skillTrees.shotSkills.twinstorm.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_ISACTIVE]:
    config.skillTrees.shotSkills.twinstorm.isActive,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_TWINSTORM_ONCOOLDOWN]:
    config.skillTrees.shotSkills.twinstorm.onCooldown,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_RETROGRADESHOT_LEVEL]:
    config.skillTrees.shotSkills.retrogradeshot.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_MOEBASHOT_LEVEL]:
    config.skillTrees.shotSkills.moebashot.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_PARALYSISSHOT_LEVEL]:
    config.skillTrees.shotSkills.paralysisshot.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SMOKEDUST_LEVEL]:
    config.skillTrees.shotSkills.smokedust.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_ARMBREAK_LEVEL]:
    config.skillTrees.shotSkills.armbreak.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_PARABOLACANNON_LEVEL]:
    config.skillTrees.shotSkills.parabolacannon.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SHOTMASTERY_LEVEL]:
    config.skillTrees.shotSkills.shotmastery.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_LEVEL]:
    config.skillTrees.shotSkills.samuraiarchery.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SAMURAIARCHERY_STACKS]:
    config.skillTrees.shotSkills.samuraiarchery.stacks,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_SNEAKATTACK_LEVEL]:
    config.skillTrees.shotSkills.sneakattack.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_LONGRANGE_LEVEL]:
    config.skillTrees.shotSkills.longrange.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_QUICKDRAW_LEVEL]:
    config.skillTrees.shotSkills.quickdraw.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_DECOYSHOT_LEVEL]:
    config.skillTrees.shotSkills.decoyshot.level,
  [ParamId.CHARACTER_SKILLS_SHOTSKILLS_FATALSHOT_LEVEL]:
    config.skillTrees.shotSkills.fatalshot.level,

  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICARROWS_LEVEL]:
    config.skillTrees.magicSkills.magicarrows.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICJAVELIN_LEVEL]:
    config.skillTrees.magicSkills.magicjavelin.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICLANCES_LEVEL]:
    config.skillTrees.magicSkills.magiclances.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICIMPACT_LEVEL]:
    config.skillTrees.magicSkills.magicimpact.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICFINALE_LEVEL]:
    config.skillTrees.magicSkills.magicfinale.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHRONOSSHIFT_LEVEL]:
    config.skillTrees.magicSkills.chronosshift.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICWALL_LEVEL]:
    config.skillTrees.magicSkills.magicwall.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICBLAST_LEVEL]:
    config.skillTrees.magicSkills.magicblast.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICSTORM_LEVEL]:
    config.skillTrees.magicSkills.magicstorm.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICBURST_LEVEL]:
    config.skillTrees.magicSkills.magicburst.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICCANNON_LEVEL]:
    config.skillTrees.magicSkills.magiccannon.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICCRASH_LEVEL]:
    config.skillTrees.magicSkills.magiccrash.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICMASTERY_LEVEL]:
    config.skillTrees.magicSkills.magicmastery.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICKNIFE_LEVEL]:
    config.skillTrees.magicSkills.magicknife.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_LEVEL]:
    config.skillTrees.magicSkills.qadal.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_BURDEN]:
    config.skillTrees.magicSkills.qadal.burden,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_ISACTIVE]:
    config.skillTrees.magicSkills.qadal.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_QADAL_COMBAT_TIME]:
    config.skillTrees.magicSkills.qadal.combatTime,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MPCHARGE_LEVEL]:
    config.skillTrees.magicSkills.mpcharge.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_LEVEL]:
    config.skillTrees.magicSkills.chaincast.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_ISACTIVE]:
    config.skillTrees.magicSkills.chaincast.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_CHAINCAST_STACKS]:
    config.skillTrees.magicSkills.chaincast.stacks,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_POWERWAVE_LEVEL]:
    config.skillTrees.magicSkills.powerwave.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAXIMIZER_LEVEL]:
    config.skillTrees.magicSkills.maximizer.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_LEVEL]:
    config.skillTrees.magicSkills.rapidcharge.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_ISACTIVE]:
    config.skillTrees.magicSkills.rapidcharge.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_RAPIDCHARGE_AMOUNTMPRECOVEREDFROMMAXIMIZER]:
    config.skillTrees.magicSkills.rapidcharge
      .amountMPRecoveredFromMaximizer,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_ENCHANTEDBARRIERS_LEVEL]:
    config.skillTrees.magicSkills.enchantedbarriers.level,
  [ParamId.CHARACTER_SKILLS_MAGICSKILLS_MAGICGUARDIANBEAM_LEVEL]:
    config.skillTrees.magicSkills.magicguardianbeam.level,

  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_PLAYDEAD_LEVEL]:
    config.skillTrees.survivalSkills.playdead.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_EXPGAINUP_LEVEL]:
    config.skillTrees.survivalSkills.expgainup.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_DROPRATEUP_LEVEL]:
    config.skillTrees.survivalSkills.droprateup.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SAFEREST_LEVEL]:
    config.skillTrees.survivalSkills.saferest.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_HPBOOST_LEVEL]:
    config.skillTrees.survivalSkills.hpboost.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_FIGHTERSHIGH_LEVEL]:
    config.skillTrees.survivalSkills.fightershigh.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SHORTREST_LEVEL]:
    config.skillTrees.survivalSkills.shortrest.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_MPBOOST_LEVEL]:
    config.skillTrees.survivalSkills.mpboost.level,
  [ParamId.CHARACTER_SKILLS_SURVIVALSKILLS_SOBERANALYSIS_LEVEL]:
    config.skillTrees.survivalSkills.soberanalysis.level,

  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FIRSTAID_LEVEL]:
    config.skillTrees.supportSkills.firstaid.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MINIHEAL_LEVEL]:
    config.skillTrees.supportSkills.miniheal.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_RECOVERY_LEVEL]:
    config.skillTrees.supportSkills.recovery.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_SANCTUARY_LEVEL]:
    config.skillTrees.supportSkills.sanctuary.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HEAL_LEVEL]:
    config.skillTrees.supportSkills.heal.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_LIFERECOVERY_LEVEL]:
    config.skillTrees.supportSkills.liferecovery.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_LEVEL]:
    config.skillTrees.supportSkills.braveaura.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_BRAVEAURA_ISACTIVE]:
    config.skillTrees.supportSkills.braveaura.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_LEVEL]:
    config.skillTrees.supportSkills.highcycle.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_HIGHCYCLE_ISACTIVE]:
    config.skillTrees.supportSkills.highcycle.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_QUICKMOTION_LEVEL]:
    config.skillTrees.supportSkills.quickmotion.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_QUICKMOTION_ISACTIVE]:
    config.skillTrees.supportSkills.quickmotion.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_LEVEL]:
    config.skillTrees.supportSkills.manarecharge.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MANARECHARGE_ISACTIVE]:
    config.skillTrees.supportSkills.manarecharge.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MAGICBARRIER_LEVEL]:
    config.skillTrees.supportSkills.magicbarrier.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_MAGICBARRIER_ISACTIVE]:
    config.skillTrees.supportSkills.magicbarrier.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_IMMUNITY_LEVEL]:
    config.skillTrees.supportSkills.immunity.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_IMMUNITY_ISACTIVE]:
    config.skillTrees.supportSkills.immunity.isActive,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FASTREACTION_LEVEL]:
    config.skillTrees.supportSkills.fastreaction.level,
  [ParamId.CHARACTER_SKILLS_SUPPORTSKILLS_FASTREACTION_ISACTIVE]:
    config.skillTrees.supportSkills.fastreaction.isActive,

  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_MAGICUP_LEVEL]:
    config.skillTrees.battleSkills.magicup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_CONCENTRATE_LEVEL]:
    config.skillTrees.battleSkills.concentrate.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_ATTACKUP_LEVEL]:
    config.skillTrees.battleSkills.attackup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_WHACK_LEVEL]:
    config.skillTrees.battleSkills.whack.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEUP_LEVEL]:
    config.skillTrees.battleSkills.defenseup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DODGEUP_LEVEL]:
    config.skillTrees.battleSkills.dodgeup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DESPERATERESIST_LEVEL]:
    config.skillTrees.battleSkills.desperateresist.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_CRITICALUP_LEVEL]:
    config.skillTrees.battleSkills.criticalup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_ACCURACYUP_LEVEL]:
    config.skillTrees.battleSkills.accuracyup.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_INCREASEDENERGY_LEVEL]:
    config.skillTrees.battleSkills.increasedenergy.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_INTIMIDATINGPOWER_LEVEL]:
    config.skillTrees.battleSkills.intimidatingpower.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_DEFENSEMASTERY_LEVEL]:
    config.skillTrees.battleSkills.defensemastery.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SPELLBURST_LEVEL]:
    config.skillTrees.battleSkills.spellburst.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SECRETCHASEATTACK_LEVEL]:
    config.skillTrees.battleSkills.secretchaseattack.level,
  [ParamId.CHARACTER_SKILLS_BATTLESKILLS_SUPERGRIP_LEVEL]:
    config.skillTrees.battleSkills.supergrip.level,

  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_ISSEN_LEVEL]:
    config.skillTrees.mononofuSkills.issen.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_PULSEBLADE_LEVEL]:
    config.skillTrees.mononofuSkills.pulseblade.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TRIPLETHRUST_LEVEL]:
    config.skillTrees.mononofuSkills.triplethrust.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TRIPLETHRUST_ISACTIVE]:
    config.skillTrees.mononofuSkills.triplethrust.isActive,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_HASSOHAPPA_LEVEL]:
    config.skillTrees.mononofuSkills.hassohappa.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TENRYURANSEI_LEVEL]:
    config.skillTrees.mononofuSkills.tenryuransei.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KASUMISETSUGETSUKA_LEVEL]:
    config.skillTrees.mononofuSkills.kasumisetsugetsuka.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_GARYOUTENSEI_LEVEL]:
    config.skillTrees.mononofuSkills.garyoutensei.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHADOWLESSSLASH_LEVEL]:
    config.skillTrees.mononofuSkills.shadowlessslash.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_POMMELSTRIKE_LEVEL]:
    config.skillTrees.mononofuSkills.pommelstrike.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MAGADACHI_LEVEL]:
    config.skillTrees.mononofuSkills.magadachi.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_ZANTEISETTETSU_LEVEL]:
    config.skillTrees.mononofuSkills.zanteisettetsu.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BUSHIDO_LEVEL]:
    config.skillTrees.mononofuSkills.bushido.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHUKUCHI_LEVEL]:
    config.skillTrees.mononofuSkills.shukuchi.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_SHUKUCHI_ISACTIVE]:
    config.skillTrees.mononofuSkills.shukuchi.isActive,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_NUKIUCHISENNOSEN_LEVEL]:
    config.skillTrees.mononofuSkills.nukiuchisennosen.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_TWOHANDED_LEVEL]:
    config.skillTrees.mononofuSkills.twohanded.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MEIKYOUSHISUI_LEVEL]:
    config.skillTrees.mononofuSkills.meikyoushisui.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_MEIKYOUSHISUI_ISACTIVE]:
    config.skillTrees.mononofuSkills.meikyoushisui.isActive,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KAIRIKIRANSHIN_LEVEL]:
    config.skillTrees.mononofuSkills.kairikiranshin.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_KAIRIKIRANSHIN_ISACTIVE]:
    config.skillTrees.mononofuSkills.kairikiranshin.isActive,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_DAUNTLESS_LEVEL]:
    config.skillTrees.mononofuSkills.dauntless.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_DAUNTLESS_STACKS]:
    config.skillTrees.mononofuSkills.dauntless.stacks,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BOUNCINGBLADE_LEVEL]:
    config.skillTrees.mononofuSkills.bouncingblade.level,
  [ParamId.CHARACTER_SKILLS_MONONOFUSKILLS_BOUNCINGBLADE_ISACTIVE]:
    config.skillTrees.mononofuSkills.bouncingblade.isActive,

  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDMASTERY_LEVEL]:
    config.skillTrees.dualSwordSkills.dualswordmastery.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINSLASH_LEVEL]:
    config.skillTrees.dualSwordSkills.twinslash.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SPINNINGSLASH_LEVEL]:
    config.skillTrees.dualSwordSkills.spinningslash.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_PHANTOMSLASH_LEVEL]:
    config.skillTrees.dualSwordSkills.phantomslash.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_AERIALCUT_LEVEL]:
    config.skillTrees.dualSwordSkills.aerialcut.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRY_LEVEL]:
    config.skillTrees.dualSwordSkills.crossparry.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRY_ISACTIVE]:
    config.skillTrees.dualSwordSkills.crossparry.isActive,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CROSSPARRYISPARRIED]:
    config.skillTrees.dualSwordSkills.crossparry.isParried,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CHARGINGSLASH_LEVEL]:
    config.skillTrees.dualSwordSkills.chargingslash.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHADOWSTEP_LEVEL]:
    config.skillTrees.dualSwordSkills.shadowstep.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHADOWSTEP_ISACTIVE]:
    config.skillTrees.dualSwordSkills.shadowstep.isActive,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SHININGCROSS_LEVEL]:
    config.skillTrees.dualSwordSkills.shiningcross.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_LUNARMISFORTUNE_LEVEL]:
    config.skillTrees.dualSwordSkills.lunarmisfortune.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINBUSTERBLADE_LEVEL]:
    config.skillTrees.dualSwordSkills.twinbusterblade.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_TWINBUSTERBLADE_ISACTIVE]:
    config.skillTrees.dualSwordSkills.twinbusterblade.isActive,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_REFLEX_LEVEL]:
    config.skillTrees.dualSwordSkills.reflex.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_LEVEL]:
    config.skillTrees.dualSwordSkills.flashblast.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_FLASHBLAST_ISACTIVE]:
    config.skillTrees.dualSwordSkills.flashblast.isActive,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_STORMREAPER_LEVEL]:
    config.skillTrees.dualSwordSkills.stormreaper.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_DUALSWORDCONTROL_LEVEL]:
    config.skillTrees.dualSwordSkills.dualswordcontrol.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_GODSPEED_LEVEL]:
    config.skillTrees.dualSwordSkills.godspeed.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_SABERAURA_LEVEL]:
    config.skillTrees.dualSwordSkills.saberaura.level,
  [ParamId.CHARACTER_SKILLS_DUALSWORDSKILLS_CRESCENTSABER_LEVEL]:
    config.skillTrees.dualSwordSkills.crescentsaber.level,

  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICWARRIORMASTERY_LEVEL]:
    config.skillTrees.magicBladeSkills.magicwarriormastery.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_LEVEL]:
    config.skillTrees.magicBladeSkills.conversion.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_CONVERSION_ISACTIVE]:
    config.skillTrees.magicBladeSkills.conversion.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_LEVEL]:
    config.skillTrees.magicBladeSkills.resonance.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ISACTIVE]:
    config.skillTrees.magicBladeSkills.resonance.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_RESONANCE_ACTIVESET]:
    getResonanceSetIdFromResonanceSetName(
      config.skillTrees.magicBladeSkills.resonance.set || "ATK_MATK",
    ),
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDSPELL_LEVEL]:
    config.skillTrees.magicBladeSkills.enchantedspell.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_LEVEL]:
    config.skillTrees.magicBladeSkills.dualbringer.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_DUALBRINGER_ISACTIVE]:
    config.skillTrees.magicBladeSkills.dualbringer.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_LEVEL]:
    config.skillTrees.magicBladeSkills.etherflare.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ETHERFLARE_ISACTIVE]:
    config.skillTrees.magicBladeSkills.etherflare.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ELEMENTSLASH_LEVEL]:
    config.skillTrees.magicBladeSkills.elementslash.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTSWORD_LEVEL]:
    config.skillTrees.magicBladeSkills.enchantsword.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_ENCHANTEDBURST_LEVEL]:
    config.skillTrees.magicBladeSkills.enchantedburst.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_UNIONSWORD_LEVEL]:
    config.skillTrees.magicBladeSkills.unionsword.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_LEVEL]:
    config.skillTrees.magicBladeSkills.siphonbarrier.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONBARRIER_ISACTIVE]:
    config.skillTrees.magicBladeSkills.siphonbarrier.isActive,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_TELEPORT_LEVEL]:
    config.skillTrees.magicBladeSkills.teleport.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_SIPHONRECALL_LEVEL]:
    config.skillTrees.magicBladeSkills.siphonrecall.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_FLOATDASH_LEVEL]:
    config.skillTrees.magicBladeSkills.floatdash.level,
  [ParamId.CHARACTER_SKILLS_MAGICBLADESKILLS_MAGICSKIN_LEVEL]:
    config.skillTrees.magicBladeSkills.magicskin.level,

  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDMASTERY_LEVEL]:
    config.skillTrees.shieldSkills.shieldmastery.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDBASH_LEVEL]:
    config.skillTrees.shieldSkills.shieldbash.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDCANNON_LEVEL]:
    config.skillTrees.shieldSkills.shieldcannon.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_GUARDSTRIKE_LEVEL]:
    config.skillTrees.shieldSkills.guardstrike.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_FORCESHIELD_LEVEL]:
    config.skillTrees.shieldSkills.forceshield.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_MAGICALSHIELD_LEVEL]:
    config.skillTrees.shieldSkills.magicalshield.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDUPPERCUT_LEVEL]:
    config.skillTrees.shieldSkills.shielduppercut.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_DUALSHIELDS_LEVEL]:
    config.skillTrees.shieldSkills.dualshields.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_SHIELDREPAIR_LEVEL]:
    config.skillTrees.shieldSkills.shieldrepair.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_BELAGERUNG_LEVEL]:
    config.skillTrees.shieldSkills.belagerung.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_PROTECTION_LEVEL]:
    config.skillTrees.shieldSkills.protection.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_PROTECTION_ISACTIVE]:
    config.skillTrees.shieldSkills.protection.isActive,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_AEGIS_LEVEL]:
    config.skillTrees.shieldSkills.aegis.level,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_AEGIS_ISACTIVE]:
    config.skillTrees.shieldSkills.aegis.isActive,
  [ParamId.CHARACTER_SKILLS_SHIELDSKILLS_GUARDIAN_LEVEL]:
    config.skillTrees.shieldSkills.guardian.level,

  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_HEAVYARMORMASTERY_LEVEL]:
    config.skillTrees.guardSkills.heavyarmormastery.level,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDGUARD_LEVEL]:
    config.skillTrees.guardSkills.advancedguard.level,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_PHYSICALGUARD_LEVEL]:
    config.skillTrees.guardSkills.physicalguard.level,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_LIGHTARMORMASTERY_LEVEL]:
    config.skillTrees.guardSkills.lightarmormastery.level,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_ADVANCEDEVASION_LEVEL]:
    config.skillTrees.guardSkills.advancedevasion.level,
  [ParamId.CHARACTER_SKILLS_GUARDSKILLS_MIRAGEEVASION_LEVEL]:
    config.skillTrees.guardSkills.mirageevasion.level,

  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_FLASHSTAB_LEVEL]:
    config.skillTrees.halberdSkills.flashstab.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CANNONSPEAR_LEVEL]:
    config.skillTrees.halberdSkills.cannonspear.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRAGONTAIL_LEVEL]:
    config.skillTrees.halberdSkills.dragontail.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DIVEIMPACT_LEVEL]:
    config.skillTrees.halberdSkills.diveimpact.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRAGONTOOTH_LEVEL]:
    config.skillTrees.halberdSkills.dragontooth.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DRACONICCHARGE_LEVEL]:
    config.skillTrees.halberdSkills.draconiccharge.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_DEADLYSPEAR_LEVEL]:
    config.skillTrees.halberdSkills.deadlyspear.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_PUNISHRAY_LEVEL]:
    config.skillTrees.halberdSkills.punishray.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_STRIKESTAB_LEVEL]:
    config.skillTrees.halberdSkills.strikestab.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CHRONOSDIVINE_LEVEL]:
    config.skillTrees.halberdSkills.chronosdivine.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_INFINITEDIMENSION_LEVEL]:
    config.skillTrees.halberdSkills.infinitedimension.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_HALBERDMASTERY_LEVEL]:
    config.skillTrees.halberdSkills.halberdmastery.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_CRITICALSPEAR_LEVEL]:
    config.skillTrees.halberdSkills.criticalspear.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_TORNADOLANCE_LEVEL]:
    config.skillTrees.halberdSkills.tornadolance.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_LEVEL]:
    config.skillTrees.halberdSkills.quickaura.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_QUICKAURA_ISACTIVE]:
    config.skillTrees.halberdSkills.quickaura.isActive,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_WARCRYOFSTRUGGLE_LEVEL]:
    config.skillTrees.halberdSkills.warcryofstruggle.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_LEVEL]:
    config.skillTrees.halberdSkills.godspeedwield.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_ISACTIVE]:
    config.skillTrees.halberdSkills.godspeedwield.isActive,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_GODSPEEDWIELD_STACKS]:
    config.skillTrees.halberdSkills.godspeedwield.stacks,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_ALMIGHTYWIELD_LEVEL]:
    config.skillTrees.halberdSkills.flashstab.level,
  [ParamId.CHARACTER_SKILLS_HALBERDSKILLS_BUSTERLANCE_LEVEL]:
    config.skillTrees.halberdSkills.busterlance.level,

  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SMASH_LEVEL]:
    config.skillTrees.martialSkills.smash.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_BASH_LEVEL]:
    config.skillTrees.martialSkills.bash.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SHELLBREAK_LEVEL]:
    config.skillTrees.martialSkills.shellbreak.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_HEAVYSMASH_LEVEL]:
    config.skillTrees.martialSkills.heavysmash.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHARIOT_LEVEL]:
    config.skillTrees.martialSkills.chariot.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ABSTRACTARMS_LEVEL]:
    config.skillTrees.martialSkills.abstractarms.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SONICWAVE_LEVEL]:
    config.skillTrees.martialSkills.sonicwave.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_EARTHBIND_LEVEL]:
    config.skillTrees.martialSkills.earthbind.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_TRIPLEKICK_LEVEL]:
    config.skillTrees.martialSkills.triplekick.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_RUSH_LEVEL]:
    config.skillTrees.martialSkills.rush.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_RUSH_ISACTIVE]:
    config.skillTrees.martialSkills.rush.isActive,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ASURAAURA_LEVEL]:
    config.skillTrees.martialSkills.asuraaura.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ASURAAURA_ISACTIVE]:
    config.skillTrees.martialSkills.asuraaura.isActive,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_FLASHBLINK_LEVEL]:
    config.skillTrees.martialSkills.flashblink.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALMASTERY_LEVEL]:
    config.skillTrees.martialSkills.martialmastery.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_MARTIALDISCIPLINE_LEVEL]:
    config.skillTrees.martialSkills.martialdiscipline.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHAKRA_LEVEL]:
    config.skillTrees.martialSkills.chakra.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_CHAKRA_ISACTIVE]:
    config.skillTrees.martialSkills.chakra.isActive,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ENERGYCONTROL_LEVEL]:
    config.skillTrees.martialSkills.smash.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_ENERGYCONTROL_ISACTIVE]:
    config.skillTrees.martialSkills.energycontrol.isActive,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_AGGRAVATE_LEVEL]:
    config.skillTrees.martialSkills.aggravate.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_STRONGCHASEATTACK_LEVEL]:
    config.skillTrees.martialSkills.strongchaseattack.level,
  [ParamId.CHARACTER_SKILLS_MARTIALSKILLS_SLIDE_LEVEL]:
    config.skillTrees.martialSkills.slide.level,

  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_UNARMEDMASTERY_LEVEL]:
    config.skillTrees.bareHandSkills.unarmedmastery.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_QICHARGE_LEVEL]:
    config.skillTrees.bareHandSkills.qicharge.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_LIONRAGE_LEVEL]:
    config.skillTrees.bareHandSkills.lionrage.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMALIONRAGE_LEVEL]:
    config.skillTrees.bareHandSkills.ultimalionrage.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_RAVINGSTORM_LEVEL]:
    config.skillTrees.bareHandSkills.ravingstorm.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMARAVINGSTORM_LEVEL]:
    config.skillTrees.bareHandSkills.ultimaravingstorm.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_INTERNALELIXIR_LEVEL]:
    config.skillTrees.bareHandSkills.internalelixir.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_CLASHOFENMITY_LEVEL]:
    config.skillTrees.bareHandSkills.clashofenmity.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_MIRACLECOMEBACK_LEVEL]:
    config.skillTrees.bareHandSkills.miraclecomeback.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_ULTIMAQICHARGE_LEVEL]:
    config.skillTrees.bareHandSkills.ultimaqicharge.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_HIDDENTALENT_LEVEL]:
    config.skillTrees.bareHandSkills.hiddentalent.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_EARTHSHAKER_LEVEL]:
    config.skillTrees.bareHandSkills.earthshaker.level,
  [ParamId.CHARACTER_SKILLS_BAREHANDSKILLS_EARTHSHAKER_ISACTIVE]:
    config.skillTrees.bareHandSkills.earthshaker.isActive,

  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_KICK_LEVEL]:
    config.skillTrees.hunterSkills.kick.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SUNRISEARROW_LEVEL]:
    config.skillTrees.hunterSkills.sunrisearrow.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MAGICARROW_LEVEL]:
    config.skillTrees.hunterSkills.magicarrow.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MAGICARROW_ISACTIVE]:
    config.skillTrees.hunterSkills.magicarrow.isActive,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SATELLITEARROW_LEVEL]:
    config.skillTrees.hunterSkills.satellitearrow.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_SLEEPTRAP_LEVEL]:
    config.skillTrees.hunterSkills.sleeptrap.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_BEARTRAP_LEVEL]:
    config.skillTrees.hunterSkills.beartrap.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_LANDMINE_LEVEL]:
    config.skillTrees.hunterSkills.landmine.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DARKTRAP_LEVEL]:
    config.skillTrees.hunterSkills.darktrap.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_HOMINGSHOT_LEVEL]:
    config.skillTrees.hunterSkills.homingshot.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DETECTION_LEVEL]:
    config.skillTrees.hunterSkills.detection.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_DETECTION_ISACTIVE]:
    config.skillTrees.hunterSkills.detection.isActive,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_CYCLONEARROW_LEVEL]:
    config.skillTrees.hunterSkills.cyclonearrow.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_VERTICALAIR_LEVEL]:
    config.skillTrees.hunterSkills.verticalair.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_HUNTERBOWGUN_LEVEL]:
    config.skillTrees.hunterSkills.hunterbowgun.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MULTIPLEHUNT_LEVEL]:
    config.skillTrees.hunterSkills.multiplehunt.level,
  [ParamId.CHARACTER_SKILLS_HUNTERSKILLS_MULTIPLEHUNT_ISACTIVE]:
    config.skillTrees.hunterSkills.multiplehunt.isActive,

  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSU_LEVEL]:
    config.skillTrees.ninjaSkills.ninjutsu.level,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJASPIRIT_LEVEL]:
    config.skillTrees.ninjaSkills.ninjaspirit.level,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSUDRILLI_LEVEL]:
    config.skillTrees.ninjaSkills.ninjutsudrilli.level,
  [ParamId.CHARACTER_SKILLS_NINJASKILLS_NINJUTSUDRILLII_LEVEL]:
    config.skillTrees.ninjaSkills.ninjutsudrillii.level,

  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_LEVEL]:
    config.skillTrees.wizardSkills.familia.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_FAMILIA_ISACTIVE]:
    config.skillTrees.wizardSkills.familia.isActive,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_LIGHTNING_LEVEL]:
    config.skillTrees.wizardSkills.lightning.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_BLIZZARD_LEVEL]:
    config.skillTrees.wizardSkills.blizzard.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_METEORSTRIKE_LEVEL]:
    config.skillTrees.wizardSkills.meteorstrike.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_IMPERIALRAY_LEVEL]:
    config.skillTrees.wizardSkills.imperialray.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_MANACRYSTAL_LEVEL]:
    config.skillTrees.wizardSkills.manacrystal.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_STONEBARRIER_LEVEL]:
    config.skillTrees.wizardSkills.stonebarrier.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_ADVANCEDFAMILIA_LEVEL]:
    config.skillTrees.wizardSkills.advancedfamilia.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_ADVANCEDFAMILIA_ISACTIVE]:
    config.skillTrees.wizardSkills.advancedfamilia.isActive,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CASTMASTERY_LEVEL]:
    config.skillTrees.wizardSkills.castmastery.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_CRYSTALLASER_LEVEL]:
    config.skillTrees.wizardSkills.crystallaser.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_LEVEL]:
    config.skillTrees.wizardSkills.overlimit.level,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_OVERLIMIT_ISACTIVE]:
    config.skillTrees.wizardSkills.overlimit.isActive,
  [ParamId.CHARACTER_SKILLS_WIZARDSKILLS_SORCERYGUIDE_LEVEL]:
    config.skillTrees.wizardSkills.sorceryguide.level,

  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_BLESS_LEVEL]:
    config.skillTrees.priestSkills.bless.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_GLORIA_LEVEL]:
    config.skillTrees.priestSkills.gloria.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ENHANCEDBLESS_LEVEL]:
    config.skillTrees.priestSkills.enhancedbless.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ROYALHEAL_LEVEL]:
    config.skillTrees.priestSkills.royalheal.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYFIST_LEVEL]:
    config.skillTrees.priestSkills.holyfist.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYLIGHT_LEVEL]:
    config.skillTrees.priestSkills.holylight.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ETHERBARRIER_LEVEL]:
    config.skillTrees.priestSkills.etherbarrier.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_ETHERBARRIER_ISACTIVE]:
    config.skillTrees.priestSkills.etherbarrier.isActive,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_LEVEL]:
    config.skillTrees.priestSkills.prayer.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_PRAYER_ISACTIVE]:
    config.skillTrees.priestSkills.prayer.isActive,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_STAFFTHRUST_LEVEL]:
    config.skillTrees.priestSkills.staffthrust.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_EXORCISM_LEVEL]:
    config.skillTrees.priestSkills.exorcism.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYBOOK_LEVEL]:
    config.skillTrees.priestSkills.holybook.level,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_HOLYBOOK_ISACTIVE]:
    config.skillTrees.priestSkills.holybook.isActive,
  [ParamId.CHARACTER_SKILLS_PRIESTSKILLS_NEMESIS_LEVEL]:
    config.skillTrees.priestSkills.nemesis.level,

  [ParamId.CHARACTER_CONSUMABLES]: config.consumables, // statmap for now
  [ParamId.CHARACTER_FOODBUFFS]: config.foodBuffs, // statmap for now

  [ParamId.CHARACTER_AILMENTS_WEAKEN_ISACTIVE]: config.ailments.weaken,
  [ParamId.CHARACTER_AILMENTS_FLINCH_ISACTIVE]: config.ailments.flinch,
  [ParamId.CHARACTER_AILMENTS_TUMBLE_ISACTIVE]: config.ailments.tumble,
  [ParamId.CHARACTER_AILMENTS_STUN_ISACTIVE]: config.ailments.stun,
  [ParamId.CHARACTER_AILMENTS_KNOCKBACK_ISACTIVE]:
    config.ailments.knockback,
  [ParamId.CHARACTER_AILMENTS_POISON_ISACTIVE]: config.ailments.poison,
  [ParamId.CHARACTER_AILMENTS_PARALYSIS_ISACTIVE]:
    config.ailments.paralysis,
  [ParamId.CHARACTER_AILMENTS_BLINDNESS_ISACTIVE]:
    config.ailments.blindness,
  [ParamId.CHARACTER_AILMENTS_IGNITION_ISACTIVE]: config.ailments.ignition,
  [ParamId.CHARACTER_AILMENTS_FREEZE_ISACTIVE]: config.ailments.freeze,
  [ParamId.CHARACTER_AILMENTS_ARMORBREAK_ISACTIVE]:
    config.ailments.armorbreak,
  [ParamId.CHARACTER_AILMENTS_SLOW_ISACTIVE]: config.ailments.slow,
  [ParamId.CHARACTER_AILMENTS_STOP_ISACTIVE]: config.ailments.stop,
  [ParamId.CHARACTER_AILMENTS_FEAR_ISACTIVE]: config.ailments.fear,
  [ParamId.CHARACTER_AILMENTS_DIZZY_ISACTIVE]: config.ailments.weaken,
  [ParamId.CHARACTER_AILMENTS_LETHARGY_ISACTIVE]: config.ailments.lethargy,
  [ParamId.CHARACTER_AILMENTS_SILENCE_ISACTIVE]: config.ailments.silence,
  [ParamId.CHARACTER_AILMENTS_BLEED_ISACTIVE]: config.ailments.bleed,
  [ParamId.CHARACTER_AILMENTS_FATIGUE_ISACTIVE]: config.ailments.fatigue,
  [ParamId.CHARACTER_AILMENTS_DAZZLED_ISACTIVE]: config.ailments.dazzled,

  [ParamId.CHARACTER_REGISLETS_ZEROSTANCE_LEVEL]:
    config.regislets.zerostance,
  [ParamId.CHARACTER_REGISLETS_MAXHPBOOST_LEVEL]:
    config.regislets.maxhpboost,
  [ParamId.CHARACTER_REGISLETS_MAXMPBOOST_LEVEL]:
    config.regislets.maxmpboost,
  [ParamId.CHARACTER_REGISLETS_MAGICATTACKBOOST_LEVEL]:
    config.regislets.magicattackboost,
  [ParamId.CHARACTER_REGISLETS_PHYSICALATTACKBOOST_LEVEL]:
    config.regislets.physicalattackboost,
  [ParamId.CHARACTER_REGISLETS_MAGICDEFENSEBOOST_LEVEL]:
    config.regislets.magicdefenseboost,
  [ParamId.CHARACTER_REGISLETS_PHYSICALDEFENSEBOOST_LEVEL]:
    config.regislets.physicaldefenseboost,
  [ParamId.CHARACTER_REGISLETS_ATTACKSPEEDBOOST_LEVEL]:
    config.regislets.attackspeedboost,
  [ParamId.CHARACTER_REGISLETS_MAGICSPEEDBOOST_LEVEL]:
    config.regislets.magicspeedboost,
  [ParamId.CHARACTER_REGISLETS_DODGEBOOST_LEVEL]:
    config.regislets.dodgeboost,
  [ParamId.CHARACTER_REGISLETS_ACCURACYBOOST_LEVEL]:
    config.regislets.accuracyboost,
  [ParamId.CHARACTER_REGISLETS_FOCUSRESONANCE_LEVEL]:
    config.regislets.focusresonance,
  [ParamId.CHARACTER_REGISLETS_SPEEDRESONANCE_LEVEL]:
    config.regislets.speedresonance,
  [ParamId.CHARACTER_REGISLETS_POWERRESONANCE_LEVEL]:
    config.regislets.powerresonance,
});

const calculateAll = (config: IntermediateConfig) => ({
  // AGI
  totalBaseAGI: config[ParamId.CHARACTER_BASE_AGI],
  totalPercentAGI: totalPercentAGI(config),
  totalFlatAGI: totalFlatAGI(config),
  totalAGI: totalAGI(config),

  // DEX
  totalBaseDEX: config[ParamId.CHARACTER_BASE_DEX],
  totalPercentDEX: totalPercentDEX(config),
  totalFlatDEX: totalFlatDEX(config),
  totalDEX: totalDEX(config),

  // STR
  totalBaseSTR: config[ParamId.CHARACTER_BASE_STR],
  totalPercentSTR: totalPercentSTR(config),
  totalFlatSTR: totalFlatSTR(config),
  totalSTR: totalSTR(config),

  // INT
  totalBaseINT: config[ParamId.CHARACTER_BASE_INT],
  totalPercentINT: totalPercentINT(config),
  totalFlatINT: totalFlatINT(config),
  totalINT: totalINT(config),

  // VIT
  totalBaseVIT: config[ParamId.CHARACTER_BASE_VIT],
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
});

type RecursePartial<T> = {
  [K in keyof T]?: T[K] extends Stat[] ? T[K]
  : T[K] extends StatMapBuilder ? T[K]
  : RecursePartial<T[K]>;
};

type UserDefinedConfig = RecursePartial<Config>;

const defineConfigurations = (
  config: UserDefinedConfig,
): UserDefinedConfig & Config =>
  mergician(defaultConfig, config) as UserDefinedConfig & Config;

export const calculate = (configurations: UserDefinedConfig) => {
  const config = defineConfigurations(configurations);
  const intermediateConfig = createIntermediateConfig(config);
  const calculations = calculateAll(intermediateConfig);

  return calculations;
};

export const stat = (name: StatName, value: number): Stat => [
  getStatIdFromStatName(name),
  value,
];
