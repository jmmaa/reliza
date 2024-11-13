import { type StatMapBuilder, type Stat } from "./internals/data";

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

export type Light = "light";

export type Heavy = "heavy";

export type Normal = "normal";

export type ArmorType = Light | Heavy | Normal | None;

export type PersonalStatName = "LUK" | "MTL" | "TEC" | "CRT" | "none";

export type ResonanceSet = "ATK/MATK" | "ACC/CRIT" | "ASPD/CSPD";

type Enumerate<N extends number, Acc extends number[] = []> =
  Acc["length"] extends N ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>;

type NumRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>;

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
    type: MainWeaponType;
    ATK: number;
    refinement: NumRange<1, 16>;
    stability: NumRange<0, 101>;

    stats: StatMapBuilder; // change this later with type callable | xtal name
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  subweapon: {
    type: SubWeaponType;

    ATK: number;
    DEF: number;
    refinement: NumRange<1, 16>;
    stability: NumRange<0, 101>;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
    scrollCastTimeReduction: number;
    scrollMPReduction: number;
  };

  armor: {
    DEF: number;
    type: ArmorType;
    refinement: NumRange<1, 16>;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  additionalGear: {
    DEF: number;
    refinement: NumRange<1, 16>;
    stats: StatMapBuilder;
    crystal1: StatMapBuilder;
    crystal2: StatMapBuilder;
  };

  specialGear: {
    DEF: number;
    refinement: NumRange<1, 16>;
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

  resonance: { level: number; isActive: boolean; set: ResonanceSet };

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
  bladeSkills: Partial<BladeSkills>;
  shotSkills: Partial<ShotSkills>;
  magicSkills: Partial<MagicSkills>;
  survivalSkills: Partial<SurvivalSkills>;
  supportSkills: Partial<SupportSkills>;
  battleSkills: Partial<BattleSkills>;
  mononofuSkills: Partial<MononofuSkills>;
  dualSwordSkills: Partial<DualSwordSkills>;
  magicBladeSkills: Partial<MagicBladeSkills>;
  shieldSkills: Partial<ShieldSkills>;
  guardSkills: Partial<GuardSkills>;
  halberdSkills: Partial<HalberdSkills>;
  martialSkills: Partial<MartialSkills>;
  bareHandSkills: Partial<BareHandSkills>;
  hunterSkills: Partial<HunterSkills>;
  ninjaSkills: Partial<NinjaSkills>;
  wizardSkills: Partial<WizardSkills>;
  priestSkills: Partial<PriestSkills>;
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
  properties: Partial<Properties>;
  equipments: Partial<Equipments>;
  skillTrees: Partial<SkillTrees>;
  consumables: Stat[];
  foodBuffs: Stat[];
  ailments: Partial<Ailments>;
  regislets: Partial<Regislets>;
}
