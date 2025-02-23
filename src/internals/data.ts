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
  | "NEUTRAL_ELEMENT"
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

export interface StatModifiers {
  bladeSkills: {
    astute: { level: number; buffIsActive: boolean };
    triggerSlash: { level: number; buffIsActive: boolean };
    berserk: { level: number; buffIsActive: boolean };
    rampage: { level: number; buffIsActive: boolean };
  };

  battleSkills: {
    criticalUP: { level: number };
    spellBurst: { level: number };
    accuracyUP: { level: number };
  };

  mononofuSkills: {
    twoHanded: { level: number };
    bushido: { level: number };
  };

  ninjaSkills: {
    ninjaSpirit: { level: number };
  };

  halberdSkills: {
    criticalSpear: { level: number };
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
  };

  magicBladeSkills: {
    magicWarriorMastery: { level: number };

    conversion: { level: number; buffIsActive: boolean };

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
  };

  shotSkills: {
    samuraiArchery: { level: number; stacks: number };
  };

  martialSkills: {
    aggravate: { level: number };
  };

  bareHandSkills: {
    ultimaQiCharge: { level: number };
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

export interface Config {
  properties: Properties;
  equipments: Equipments;
  statModifiers: StatModifiers;
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
