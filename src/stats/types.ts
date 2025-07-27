export type RecursePartial<T> = {
  [K in keyof T]?: T[K] extends object ? RecursePartial<T[K]> : T[K];
};

export type MainWeaponTypeName =
  | "OHS"
  | "THS"
  | "BOW"
  | "BWG"
  | "STF"
  | "MD"
  | "HAL"
  | "KTN"
  | "KN"
  | "BH";

export type SubWeaponTypeName =
  | "OHS"
  | "KTN"
  | "KN"
  | "MD"
  | "SCROLL"
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

export type StatMap = {
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
  flatUnsheatheATK: number;
  percentUnsheatheATK: number;
  flatAMPR: number;
  percentAMPR: number;
  flatNHPR: number;
  percentNHPR: number;
  flatNMPR: number;
  percentNMPR: number;
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
  magicResistance: number;
  physicalResistance: number;
  lightResistance: number;
  darkResistance: number;
  fireResistance: number;
  waterResistance: number;
  earthResistance: number;
  windResistance: number;
  neutralResistance: number;
  ailmentResistance: number;
  damageToDark: number;
  damageToLight: number;
  damageToEarth: number;
  damageToWater: number;
  damageToFire: number;
  damageToWind: number;
  damageToNeutral: number;
  aggro: number;
  tumbleUnavailable: number;
  flinchUnavailable: number;
  stunUnavailable: number;
  darkElement: number;
  lightElement: number;
  earthElement: number;
  waterElement: number;
  fireElement: number;
  windElement: number;
  guardPower: number;
  guardRecharge: number;
  guardBreak: number;
  evasionRecharge: number;
  anticipate: number;
  itemCooldown: number;
  invincibleAid: number;
  absoluteAccuracy: number;
  absoluteDodge: number;
  physicalBarrier: number;
  magicBarrier: number;
  fractionalBarrier: number;
  barrierCooldown: number;
  additionalMelee: number;
  additionalMagic: number;
};

export type Entries<T> = {
  [K in keyof T]-?: [K, T[K]];
}[keyof T][];

export type StatGroup = {
  default: StatMap;

  withMagicTools: StatMap;
  withDualSwords: StatMap;
  withKnuckles: StatMap;
  withOneHandedSwords: StatMap;
  withTwoHandedSwords: StatMap;
  withStaffs: StatMap;
  withBowguns: StatMap;
  withHalberds: StatMap;
  withBows: StatMap;
  withKatanas: StatMap;

  withDagger: StatMap;
  withArrow: StatMap;
  withShield: StatMap;
  withNinjutsuScroll: StatMap;

  withHeavyArmor: StatMap;
  withLightArmor: StatMap;
};

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

export interface MainWeapon {
  type: MainWeaponTypeName;
  ATK: number;
  refinement: number;
  stability: number;

  stats: StatGroup;
  crystal1: StatGroup;
  crystal2: StatGroup;
}

export interface SubWeapon {
  type: SubWeaponTypeName;
  ATK: number;
  DEF: number;
  refinement: number;
  stability: number;
  stats: StatGroup;
  crystal1: StatGroup;
  crystal2: StatGroup;
  scrollCastTimeReduction: number;
  scrollMPReduction: number;
}

export interface Armor {
  DEF: number;
  type: ArmorTypeName;
  refinement: number;
  stats: StatGroup;
  crystal1: StatGroup;
  crystal2: StatGroup;
}

export interface AdditionalGear {
  DEF: number;
  refinement: number;
  stats: StatGroup;
  crystal1: StatGroup;
  crystal2: StatGroup;
}

export interface SpecialGear {
  DEF: number;
  stats: StatGroup;
  crystal1: StatGroup;
  crystal2: StatGroup;
}

export interface Equipments {
  mainweapon: MainWeapon;

  subweapon: SubWeapon;

  armor: Armor;

  additionalGear: AdditionalGear;

  specialGear: SpecialGear;
}

export interface StatModifiers {
  bladeSkills: {
    swordMastery: { level: number };
    quickSlash: { level: number };
    astute: { level: number; buffIsActive: boolean };
    triggerSlash: { level: number; buffIsActive: boolean };
    berserk: { level: number; buffIsActive: boolean };
    rampage: { level: number; buffIsActive: boolean };
    warCry: { level: number; buffIsActive: boolean };
    busterBlade: { level: number; buffIsActive: boolean };
  };

  battleSkills: {
    attackUP: { level: number };
    criticalUP: { level: number };
    spellBurst: { level: number };
    accuracyUP: { level: number };
    intimidatingPower: { level: number };
    defenseMastery: { level: number };
    defenseUP: { level: number };
    dodgeUP: { level: number };

    magicUP: { level: number };
    increasedEnergy: { level: number };
  };

  mononofuSkills: {
    twoHanded: { level: number };
    bushido: { level: number };
    shukuchi: { level: number; buffIsActive: boolean };
    kairikiRanshin: { level: number; buffIsActive: boolean };
  };

  ninjaSkills: {
    ninjaSpirit: { level: number };
  };

  halberdSkills: {
    criticalSpear: { level: number };
    halberdMastery: { level: number };

    godspeedWield: {
      level: number;
      buffIsActive: boolean;
      stacks: number;
    };

    almightyWield: { level: number };

    quickAura: { level: number; buffIsActive: boolean };
  };

  wizardSkills: {
    castMastery: {
      level: number;
      numberOfskillPointsSpentOnWizardSkills: number;
      numberOfWizardSkillsLearned: number;
    };

    overlimit: { level: number; buffIsActive: boolean };

    sorceryGuide: { level: number };
  };

  hunterSkills: {
    hunterBowgun: { level: number };
  };

  dualSwordSkills: {
    dualSwordMastery: { level: number };
    dualSwordControl: { level: number };
    crossParry: {
      level: number;
      buffIsActive: boolean;
      inAction: boolean;
    };
    shadowStep: { level: number; buffIsActive: boolean };

    saberAura: { level: number; stacks: number };
    crescentSaber: { level: number }; // TODO HOW TO REPRESENT THIS
    saberAuraAndCrescentSaberInteraction: {
      buffUsed: "SABER_AURA" | "CRESCENT_SABER";
      buffIsActive: boolean;
    };

    godspeed: { level: number };
    flashblast: { level: number; buffIsActive: boolean };
  };

  survivalSkills: {
    safeRest: { level: number };
    shortRest: { level: number };
    HPBoost: { level: number };
    MPBoost: { level: number };
  };

  magicBladeSkills: {
    magicWarriorMastery: { level: number };

    conversion: {
      level: number;
      buffIsActive: boolean; // this flag doesnt do anything for now
    };

    dualBringer: {
      level: number;
      buffIsActive: boolean;
      numberOfMagicBladeSkillsLearned: number;

      buffIsApplicable: boolean; // means that dual bringer buff is used in the stat calculation
    };

    magicSkin: { level: number };

    resonance: {
      level: number;
      buffIsActive: boolean;
      set: "A" | "B" | "C";
    };

    etherFlare: { level: number; isTargetInflictedWithIgnite: boolean };

    siphonBarrier: { level: number; buffIsActive: boolean };
  };

  priestSkills: {
    prayer: { level: number; buffIsActive: boolean };
  };

  magicSkills: {
    magicMastery: { level: number; buffIsActive: boolean };

    rapidCharge: {
      mpRestored: number;
      level: number;
      buffIsActive: boolean;
    };
  };

  shotSkills: {
    samuraiArchery: { level: number; stacks: number };
    shotMastery: { level: number };
  };

  martialSkills: {
    martialMastery: { level: number };
    martialDiscipline: { level: number };
    aggravate: { level: number };
    chakra: { level: number; buffIsActive: boolean };
  };

  bareHandSkills: {
    unarmedMastery: { level: number };
    ultimaQiCharge: { level: number };
    hiddenTalent: { level: number };
  };

  guardSkills: {
    heavyArmorMastery: { level: number };
  };

  shieldSkills: {
    shieldMastery: { level: number };
    forceShield: { level: number };
    magicalShield: { level: number };
  };

  supportSkills: {
    braveAura: { level: number; buffIsActive: boolean };
    highCycle: { level: number; buffIsActive: boolean };
  };

  regislets: {
    physicalAttackBoost: { level: number };
    magicAttackBoost: { level: number };

    attackSpeedBoost: { level: number };
    magicSpeedBoost: { level: number };

    maxHPBoost: { level: number };
    maxMPBoost: { level: number };

    focusResonance: { level: number };
    speedResonance: { level: number };
    powerResonance: { level: number };
  };

  // shotSkills: ShotSkills;
  // magicSkills: MagicSkills;
  // survivalSkills: SurvivalSkills;
  // supportSkills: SupportSkills;
  // battleSkills: BattleSkills;
  // mononofuSkills: MononofuSkills;
  // dualSwordSkills: DualSwordSkills;
  // magicBladeSkills: MagicBladeSkills;
  // shieldSkills: ShieldSkills;
  // guardSkills: GuardSkills;
  // halberdSkills: HalberdSkills;
  // martialSkills: MartialSkills;
  // bareHandSkills: BareHandSkills;
  // hunterSkills: HunterSkills;
  // ninjaSkills: NinjaSkills;
  // wizardSkills: WizardSkills;
  // priestSkills: PriestSkills;
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

  remedialRampage: number;
}

export interface StatCalcConfig {
  properties: Properties;
  equipments: Equipments;
  statModifiers: StatModifiers;
  consumables: StatMap[];
  foodBuffs: StatMap[];
  // regislets: Regislets;
}

export type UserDefined<T> = RecursePartial<T>;

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

// NEW DATA CONFIG CONCEPT
