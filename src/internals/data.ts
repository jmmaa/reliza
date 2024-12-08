export type Stat = [StatName, number];

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

export type StatMapBuilder = (_: Config) => Stat[];

export interface Properties {
  level: number;
  STR: number;
  INT: number;
  DEX: number;
  VIT: number;
  AGI: number;
  personalStatName: PersonalStatName;
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

export type NormalCrystalName =
  | "Accuracy+10"
  | "Accuracy+12"
  | "Accuracy+14"
  | "Accuracy+16"
  | "Accuracy+2"
  | "Accuracy+4"
  | "Accuracy+8"
  | "AGI+1"
  | "AGI+2"
  | "AGI+3"
  | "AGI+4"
  | "AGI+5"
  | "AGI+6"
  | "AGI+7"
  | "Aranea"
  | "ASPD+100"
  | "ASPD+120"
  | "ASPD+140"
  | "ASPD+160"
  | "ASPD+20"
  | "ASPD+40"
  | "ASPD+60"
  | "ASPD+80"
  | "Astol"
  | "B.B. Goblin"
  | "Big Coryn"
  | "Boss Colon"
  | "Boss Goblin"
  | "Brutal Dragon Decel"
  | "Carbuncle"
  | "Caspy"
  | "Crimsosch"
  | "Critical Rate +4"
  | "Critical Rate +5"
  | "Critical Rate+1"
  | "Critical Rate+2"
  | "Critical Rate+3"
  | "CSPD+100"
  | "CSPD+120"
  | "CSPD+140"
  | "CSPD+160"
  | "CSPD+20"
  | "CSPD+40"
  | "CSPD+60"
  | "CSPD+80"
  | "DEX+1"
  | "DEX+2"
  | "DEX+3"
  | "DEX+4"
  | "DEX+5"
  | "Dex+6"
  | "DEX+7"
  | "DEX+8"
  | "Dodge+10"
  | "Dodge+12"
  | "Dodge+14"
  | "Dodge+16"
  | "Dodge+2"
  | "Dodge+4"
  | "Dodge+6"
  | "Dodge+8"
  | "Fanadon"
  | "Flare Volg"
  | "Forest Wolf"
  | "Gerumi"
  | "Gespenst"
  | "Gigant Knight"
  | "Gigantic Octopus"
  | "Gravicep"
  | "HP+100"
  | "HP+200"
  | "HP+300"
  | "HP+400"
  | "HP+500"
  | "HP+600"
  | "HP+700"
  | "HP+800"
  | "Illuminitor"
  | "INT +6"
  | "INT+1"
  | "INT+2"
  | "INT+3"
  | "INT+4"
  | "INT+5"
  | "INT+7"
  | "Inzanio"
  | "King Potum"
  | "Masked Warrior"
  | "Mauez"
  | "Megiston"
  | "Metal Stinger"
  | "Minotaur"
  | "Mithurna Lynx"
  | "Mochelo"
  | "MP+100"
  | "MP+150"
  | "MP+200"
  | "MP+250"
  | "MP+300"
  | "MP+350"
  | "MP+400"
  | "MP+50"
  | "Nurethoth"
  | "Odelon Machina"
  | "P. Avatar"
  | "Panchos Kita Makura"
  | "Radibat"
  | "Rampion"
  | "Remnant of Beyond"
  | "Ruin Golem"
  | "Scrader"
  | "Shawle"
  | "Silver Roar"
  | "STR+1"
  | "STR+2"
  | "STR+3"
  | "STR+4"
  | "STR+5"
  | "STR+6"
  | "STR+7"
  | "Super Night Mushroom"
  | "VIT+2"
  | "VIT+3"
  | "VIT+4"
  | "VIT+5"
  | "VIT+6"
  | "VIT+7"
  | "VIT+8"
  | "Yashiro Azuki";

export type NormalUpgradeCrystalName =
  | "Ageladanios"
  | "Amoeba Machina"
  | "Black Shadow"
  | "Blazingur"
  | "Brassozard"
  | "Bullamius"
  | "Charugon"
  | "Dutannen"
  | "Guard Golem"
  | "Guignol"
  | "Kuffania"
  | "Lilicarolla"
  | "Limacina"
  | "Lyark Master Specialist"
  | "Melancia"
  | "Nuthoreth"
  | "Orictoceras"
  | "Platinum Potum"
  | "Red Ash Dragon Rudis"
  | "Rhinosaur"
  | "Salamander"
  | "Seraph Machina"
  | "Tappler"
  | "Torexesa"
  | "Tuscog"
  | "Volotur"
  | "Wiltileaf"
  | "York";

export type WeaponCrystalName =
  | "Arbogazella"
  | "Armasite"
  | "Black Knight of Delusion"
  | "Blancanine the White Fang"
  | "Commander Golem"
  | "Crimson One-Eyed Wolf"
  | "Cursed Crysta"
  | "Death Colon"
  | "Demon's Gate"
  | "Devil Dango"
  | "Drama Clown"
  | "Evil Crystal Beast"
  | "Evil Magic Sword"
  | "Excavated Golem"
  | "Ganglef"
  | "Grecia"
  | "Hero Potum"
  | "Imitacia"
  | "Imitator"
  | "Jeandoux"
  | "Kuzto"
  | "Lapin The Necromancer"
  | "Lil Wonder Rat"
  | "Marchitar"
  | "Megiston The Champion"
  | "Midsummer Passion"
  | "Miracle Potum"
  | "Moonlight Potum"
  | "Neo Maton Sword"
  | "Nightmare Potum"
  | "Pillar Golem"
  | "Pomie Chan"
  | "Primordial Moonlit"
  | "Usasama the Necromancer"
  | "Xmas Princess in Black"
  | "Zahhak Machina"
  | "Zega"
  | "Zolban";

export type WeaponUpgradeCrystalName =
  | "Blood Smeared Crystal"
  | "Brass Dragon Reguita"
  | "Bubble Bogey"
  | "Builder Golem"
  | "Cat Claw Guardkissa"
  | "Clawed Iron Witch"
  | "Deformis"
  | "Diark"
  | "Don Profundo"
  | "Doridodi"
  | "Finstern the Dark Dragon"
  | "Florizard"
  | "Fubbit"
  | "Giant Moon Crab"
  | "Gwaimol"
  | "Hero Potum II"
  | "Hero Potum III"
  | "Hero Potum IV"
  | "Hexter"
  | "Irestida"
  | "Mardula"
  | "Meduso"
  | "Megiston the Champion II"
  | "Megiston the Champion III"
  | "Megiston the Champion IV"
  | "Megiston the Champion V"
  | "Megiston the Champion VI"
  | "Megiston The Champion VII"
  | "Menti"
  | "Mozto Machina"
  | "Oculasignio"
  | "Pedrio"
  | "Pisteus"
  | "Pomie Chan II"
  | "Queen Rosemee"
  | "Raging Dragon Bovinari"
  | "Repthon"
  | "Shampy"
  | "Trickster Dragon Mimyugon"
  | "Tyrant Machina"
  | "Ultimate Machina"
  | "Usasama the Necromancer II"
  | "Vatudo"
  | "Velum"
  | "Vlam the Flame Dragon"
  | "Vulture"
  | "Wicked Dragon Fazzino"
  | "Zega II"
  | "Zega III"
  | "Zega IV"
  | "Zega V"
  | "Zega VI"
  | "Zega VII";

export type ArmorCrystalName =
  | "Altadar"
  | "Arachnidemon"
  | "Arcoiris"
  | "Aubermight"
  | "Bangrudom"
  | "Boss Roga"
  | "Canemofish"
  | "Cerabes"
  | "Cerberus"
  | "Colon Commander"
  | "Demonic Quasar"
  | "Doctor Pom Pom"
  | "Dr. Leonardo"
  | "DX Fighter"
  | "Eroded Pilz"
  | "Evil Shadow"
  | "Forestia"
  | "Goldoon"
  | "Gopherga"
  | "Grim Reaper Scarecrow"
  | "Ifrid"
  | "Iron Empress"
  | "Jade Raptor"
  | "Kruztor"
  | "Maton Sword"
  | "Mulgoon's Hand"
  | "Noeliel"
  | "Phantom Wisp"
  | "Sibylares"
  | "The Great Witch of Crow"
  | "Thug Golem"
  | "Tortuga"
  | "Usakichi";

export type ArmorUpgradeCrystalName =
  | "Baavgai"
  | "Bemoz"
  | "Biskyva"
  | "Black Velly"
  | "Capo Profundo"
  | "Daddy Finpen"
  | "Dandolion"
  | "Demonic Eye"
  | "Dr. Leonardo II"
  | "Dreamy Scarlet Sakura"
  | "DX Fighter II"
  | "Ferzen the Rock Dragon"
  | "Filrocas"
  | "Galegon"
  | "Gegner"
  | "Gemma"
  | "Glaucius"
  | "Goleps"
  | "Gordel"
  | "Iconos"
  | "Kruztor II"
  | "Meteora"
  | "Mimesia"
  | "Mom Fluck"
  | "Noeliel the Ice Statue"
  | "Ornlarf"
  | "Pyxtica"
  | "Sapphire Roga"
  | "Super Death Mushroom"
  | "Usami"
  | "Usamochi"
  | "Walican"
  | "Yule Cat"
  | "Yuveria"
  | "Zapo";

export type AdditionalGearCrystalName =
  | "Adaro"
  | "Altoblepas"
  | "Ancient Empress"
  | "Bonivio"
  | "Candela"
  | "Castilia"
  | "Chocolate Ooze"
  | "Corroded Knight Captain"
  | "Dusk Machina"
  | "Eidenliebe"
  | "Evil Lefina"
  | "Falburrows"
  | "G. Iconos"
  | "Gespenst II"
  | "Giant Boar"
  | "Giant Pelulu"
  | "Golden Skeleton"
  | "Goldenia"
  | "Grand Pojo"
  | "Grass Dragon Yelb"
  | "Grylle"
  | "Handmade Cookie"
  | "Jibril"
  | "Junior Dragon Zyvio"
  | "Lord of Nezim"
  | "Lunadore"
  | "Mage Filecia"
  | "Mercy"
  | "Mieli"
  | "Narumi Hina"
  | "Omochi"
  | "Ox King"
  | "Perro"
  | "Pumpking"
  | "Purro"
  | "Seltirios"
  | "Sunlight Potum"
  | "Twilight Dragon"
  | "Warmonger"
  | "Yashiro Azuki's Dad"
  | "Yashiro Azuki's Mom";

export type AdditionalGearUpgradeCrystalName =
  | "Alfenix"
  | "Amargon"
  | "Ancient Empress II"
  | "Baphomela"
  | "Burning Dragon Igneus"
  | "Candela II"
  | "Chocolate Ooze II"
  | "Eripmav"
  | "Exdocus"
  | "Fantica"
  | "Felicitoad"
  | "Garnache"
  | "Goldigem"
  | "Gordo"
  | "Jeila"
  | "Jibril II"
  | "Jibril III"
  | "Jiva"
  | "King Piton"
  | "Mega Alpoca"
  | "Neewollah"
  | "Neo Wandering Wheel"
  | "Pillow Kitagawa"
  | "Proto Leon"
  | "Prudent Blue Shadow"
  | "Royal Ox King"
  | "Soldner"
  | "Solopy"
  | "Stellar Ooze"
  | "Tardigrandemon"
  | "Trocostida"
  | "Underwater Ruins Monster"
  | "Wandering Wheel"
  | "Yashiro Azuki's Mom II"
  | "Zarth"
  | "Zoe"
  | "†Dark Lord†";

export type SpecialGearCrystalName =
  | "Aubergine Dragon Auvio"
  | "Bexiz"
  | "Broker Goblin"
  | "Captain Amiya"
  | "Choiyaki Mentai"
  | "Crystal Titan"
  | "Dark Captain with B"
  | "Dark Mushroom"
  | "Don Yeti"
  | "Dragon Witch"
  | "Eerie Crystal"
  | "Felien"
  | "Frenzy Viola"
  | "Ghost Forest Dark Shaman"
  | "Golden Potum"
  | "Goovua"
  | "Granny"
  | "Grimuckus"
  | "Ignitrus"
  | "Ooze"
  | "Potumotter"
  | "Ruzart"
  | "Scream Shadow"
  | "Seele Zauga"
  | "Shining Gentleman"
  | "Specter of Death"
  | "Star Wizard"
  | "Stellar Ooze II"
  | "Stone Mercenary"
  | "Titeres"
  | "Trus"
  | "Venena"
  | "Violaccoon"
  | "Viscum"
  | "Vodre"
  | "Volgagon"
  | "Wolkissa"
  | "Zodiac's Blessing";

export type SpecialGearUpgradeCrystalName =
  | "Amalgam"
  | "Breeta"
  | "Crysmort"
  | "Deniala"
  | "Dominaredor"
  | "Espectro"
  | "Etoise"
  | "Humida"
  | "Lalvada"
  | "Memecoleous"
  | "Mysterious Crystal"
  | "Patissia"
  | "Sand Bandits Leader"
  | "Seele Zauga II"
  | "Sicanokami"
  | "Tapir"
  | "Teertocrit"
  | "Venena II"
  | "War Dragon Turba"
  | "Zelbuse";

// export type CrystalName =
