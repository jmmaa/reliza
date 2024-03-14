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

export interface Effect<Status> {
  predicate: (status: Status) => boolean;
  stats: StatMap;
}

export interface DeclaredStatusMap {
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

  mainWeaponType: MainWeaponType;
  mainWeaponATK: number;
  mainWeaponRefinement: number;
  mainWeaponStability: number;
  mainWeaponStats: Effect<DeclaredStatusMap>[];
  mainWeaponCrystals: Effect<DeclaredStatusMap>[][];

  subWeaponType: SubWeaponType;
  subWeaponATK: number;
  subWeaponDEF: number;
  subWeaponRefinement: number;
  subWeaponStability: number;
  subWeaponScrollCastTimeReduction: number;
  subWeaponScrollMPReduction: number;
  subWeaponStats: Effect<DeclaredStatusMap>[];
  subWeaponCrystals: Effect<DeclaredStatusMap>[][];

  armorDEF: number;
  armorRefinement: number;
  armorType: ArmorType;
  armorStats: Effect<DeclaredStatusMap>[];
  armorCrystals: Effect<DeclaredStatusMap>[][];

  additionalGearDEF: number;
  additionalGearStats: Effect<DeclaredStatusMap>[];
  additionalGearCrystals: Effect<DeclaredStatusMap>[][];

  specialGearDEF: number;
  specialGearStats: Effect<DeclaredStatusMap>[];
  specialGearCrystals: Effect<DeclaredStatusMap>[][];

  consumables: Effect<DeclaredStatusMap>[];

  foodBuffs: Effect<DeclaredStatusMap>[];

  // regislets (must be same like skills too)

  // blade skills

  hardHitLevel: number;
  astuteLevel: number;
  triggerSlashLevel: number;
  rampageLevel: number;
  meteorBreakerLevel: number;
  shutOutLevel: number;
  lunarSlashLevel: number;
  sonicBladeLevel: number;
  spiralAirLevel: number;
  swordTempestLevel: number;
  busterBladeLevel: number;
  auraBladeLevel: number;
  swordMasteryLevel: number;
  quickSlashLevel: number;
  swordTechniquesLevel: number;
  warCryLevel: number;
  berserkLevel: number;
  gladiateLevel: number;
  swiftAttackLevel: number;

  // shot skills
  powerShotLevel: number;
  bullseyeLevel: number;
  arrowRainLevel: number;
  snipeLevel: number;
  crossFireLevel: number;
  vanquisherLevel: number;
  twinStormLevel: number;
  retrogradeShotLevel: number;
  moebaShotLevel: number;
  paralysisShotLevel: number;
  smokeDustLevel: number;
  armBreakLevel: number;
  parabolaCannonLevel: number;
  shotMasteryLevel: number;
  samuraiArcheryLevel: number;
  sneakAttackLevel: number;
  longRangeLevel: number;
  quickDrawLevel: number;
  decoyShotLevel: number;
  fatalShotLevel: number;

  // magic skills

  magicArrowsLevel: number;
  magicJavelinLevel: number;
  magicLancesLevel: number;
  magicImpactLevel: number;
  magicFinaleLevel: number;
  chronosShiftLevel: number;
  magicWallLevel: number;
  magicBlastLevel: number;
  magicStormLevel: number;
  magicBurstLevel: number;
  magicCannonLevel: number;
  magicCrashLevel: number;
  magicMasteryLevel: number;
  magicKnifeLevel: number;
  qadalLevel: number;
  MPChargeLevel: number;
  chainCastLevel: number;
  powerWaveLevel: number;
  maximizerLevel: number;
  rapidChargeLevel: number;
  enchantedBarriersLevel: number;
  magicGuardianBeamLevel: number;

  // survival skills
  playDeadLevel: number;
  EXPGainUPLevel: number;
  dropRateUPLevel: number;
  safeRestLevel: number;
  HPBoostLevel: number;
  fightersHighLevel: number;
  shortRestLevel: number;
  MPBoostLevel: number;
  soberAnalysisLevel: number;

  // support skills
  firstAidLevel: number;
  miniHealLevel: number;
  recoveryLevel: number;
  sanctuaryLevel: number;
  healLevel: number;
  lifeRecoveryLevel: number;
  braveAuraLevel: number;
  highCycleLevel: number;
  quickMotionLevel: number;
  manaRechargeLevel: number;
  magicBarrierLevel: number;
  immunityLevel: number;
  fastReactionLevel: number;

  // battle skills
  magicUPLevel: number;
  concentrateLevel: number;
  AttackUPLevel: number;
  whackLevel: number;
  defenseUPLevel: number;
  dodgeUPLevel: number;
  desperateResistLevel: number;
  criticalUPLevel: number;
  accuracyUPLevel: number;
  increasedEnergyLevel: number;
  intimidatingPowerLevel: number;
  defenseMasteryLevel: number;
  spellBurstLevel: number;
  secretChaseAttackLevel: number;
  superGripLevel: number;

  // mononofu skills
  bushidoLevel: number;

  // dual sword skills
  flashBlastLevel: number;
  godspeedLevel: number;

  // ignore the other skills for now on the top

  // magic blade skills
  magicWarriorMasteryLevel: number;
  conversionLevel: number;
  conversionIsActive: boolean;
  resonanceLevel: number;
  resonanceIsActive: boolean;
  enchantedSpellLevel: number;
  dualBringerLevel: number;
  dualBringerIsActive: boolean;
  etherFlareLevel: number;
  elementSlashLevel: number;
  enchantSwordLevel: number;
  enchantedBurstLevel: number;
  unionSwordLevel: number;
  siphonBarrierLevel: number;
  teleportLevel: number;
  siphonRecallLevel: number;
  floatDashLevel: number;
  magicSkinLevel: number;
}

// export type CompatibleSubWeaponType<Main extends MainWeaponType> =
//   Main extends OneHandedSword
//     ?
//         | OneHandedSword
//         | Knuckle
//         | MagicDevice
//         | NinjutsuScroll
//         | Arrow
//         | Shield
//         | Dagger
//         | None
//     : Main extends TwoHandedSword
//     ? None
//     : Main extends Bow
//     ? Katana | Arrow | None
//     : Main extends Bowgun
//     ? Knuckle | MagicDevice | Arrow | Shield | Dagger | None
//     : Main extends Staff
//     ?
//         | Knuckle
//         | MagicDevice
//         | NinjutsuScroll
//         | Arrow
//         | Shield
//         | Dagger
//         | None
//     : Main extends MagicDevice
//     ? NinjutsuScroll | None
//     : Main extends Knuckle
//     ? MagicDevice | Arrow | Shield | Dagger | None
//     : Main extends Halberd
//     ? Dagger | Arrow | None
//     : Main extends Katana
//     ? Dagger | NinjutsuScroll | None
//     : Main extends BareHand
//     ? Knuckle | MagicDevice | NinjutsuScroll | Shield | Dagger | None
//     : None;

// export type Status = {
//   [M in MainWeaponType]: {
//     [S in CompatibleSubWeaponType<M>]: {
//       level: number;
//       STR: number;
//       DEX: number;
//       INT: number;
//       VIT: number;
//       AGI: number;
//       CRT: number;
//       MTL: number;
//       TEC: number;
//       LUK: number;

//       mainWeaponType: M;
//       mainWeaponATK: number;
//       mainWeaponRefinement: number;
//       mainWeaponStability: number;

//       subWeaponType: S;
//       subWeaponATK: S extends SubWeaponTypeWithATK ? number : 0;
//       subWeaponRefinement: S extends SubWeaponTypeWithRefinement
//         ? number
//         : 0;

//       subWeaponStability: S extends SubWeaponTypeWithStability
//         ? number
//         : 0;

//       subWeaponDEF: S extends Shield ? number : 0;

//       scrollCastTimeReduction: S extends NinjutsuScroll ? number : 0;

//       scrollMPReduction: S extends NinjutsuScroll ? number : 0;

//       armorDEF: number;
//       armorType: ArmorType;

//       additionalGearDEF: number;
//       specialGearDEF: number;

//       mainWeaponStats: Effect<DeclaredStatusMapMap>[];
//       mainWeaponCrystals: Effect<DeclaredStatusMapMap>[][][];

//       subWeaponStats: Effect<DeclaredStatusMapMap>[];
//       subWeaponCrystals: Effect<DeclaredStatusMapMap>[][];

//       additionalGearStats: Effect<DeclaredStatusMapMap>[];
//       additionalGearCrystals: Effect<DeclaredStatusMapMap>[][];

//       armorStats: Effect<DeclaredStatusMapMap>[];
//       armorCrystals: Effect<DeclaredStatusMapMap>[][];

//       specialGearStats: Effect<DeclaredStatusMapMap>[];
//       specialGearCrystals: Effect<DeclaredStatusMapMap>[][];

//       consumables: Effect<DeclaredStatusMapMap>[];

//       foodBuffs: Effect<DeclaredStatusMapMap>[];

//       // regislets (must be same like skills too)

//       // magic blade skills
//       magicWarriorMasteryLevel: number;

//       conversionLevel: number;
//       isConversionActive: boolean;

//       resonanceLevel: number;
//       isResonanceActive: boolean;
//     };
//   }[CompatibleSubWeaponType<M>];
// }[MainWeaponType];

// export interface Declaration {
//   level: number;

//   STR: number;
//   DEX: number;
//   INT: number;
//   VIT: number;
//   AGI: number;

//   CRT: number;
//   MTL: number;
//   TEC: number;
//   LUK: number;

//   weapon: {
//     type: MainWeaponType;
//     ATK: number;
//     refinement: number;
//     stability: number;

//     stats: StatMap[];
//     crystals: StatMap[][];
//   };

//   subweapon: {
//     type: SubWeaponType;
//     ATK: number;
//     DEF: number;
//     refinement: number;
//     stability: number;

//     scrollCastTimeReduction: number;
//     scrollMPReduction: number;

//     stats: StatMap[];
//     crystals: StatMap[][];
//   };

//   armor: {
//     type: ArmorType;
//     DEF: number;
//     refinement: number;
//     stats: StatMap[];
//     crystals: StatMap[][];
//   };

//   additionalGear: {
//     DEF: number;
//     stats: StatMap[];
//     crystals: StatMap[][];
//   };

//   specialGear: {
//     DEF: number;
//     stats: StatMap[];
//     crystals: StatMap[][];
//   };

//   avatar: {
//     accessory: StatMap[];
//     top: StatMap[];
//     bottom: StatMap[];
//   };

//   consumables: StatMap[];

//   foodBuffs: StatMap[];

//   // regislets (must be same like skills too)

//   // blade skills
//   skills: {
//     blade: {
//       hardHit: {
//         level: number;
//       };
//       astute: {
//         level: number;
//       };
//       triggerSlash: {
//         level: number;
//       };
//       rampage: {
//         level: number;
//       };
//       meteorBreaker: {
//         level: number;
//       };
//       shutOut: {
//         level: number;
//       };
//       lunarSlash: {
//         level: number;
//       };
//       sonicBlade: {
//         level: number;
//       };
//       spiralAir: {
//         level: number;
//       };
//       swordTempest: {
//         level: number;
//       };
//       busterBlade: {
//         level: number;
//       };
//       auraBlade: {
//         level: number;
//       };
//       swordMastery: {
//         level: number;
//       };
//       quickSlash: {
//         level: number;
//       };
//       swordTechniques: {
//         level: number;
//       };
//       warCry: {
//         level: number;
//       };
//       berserk: {
//         level: number;
//       };
//       gladiate: {
//         level: number;
//       };
//       swiftAttack: {
//         level: number;
//       };
//     };
//   };

//   // shot skills
//   powerShotLevel: number;
//   bullseyeLevel: number;
//   arrowRainLevel: number;
//   snipeLevel: number;
//   crossFireLevel: number;
//   vanquisherLevel: number;
//   twinStormLevel: number;
//   retrogradeShotLevel: number;
//   moebaShotLevel: number;
//   paralysisShotLevel: number;
//   smokeDustLevel: number;
//   armBreakLevel: number;
//   parabolaCannonLevel: number;
//   shotMasteryLevel: number;
//   samuraiArcheryLevel: number;
//   sneakAttackLevel: number;
//   longRangeLevel: number;
//   quickDrawLevel: number;
//   decoyShotLevel: number;
//   fatalShotLevel: number;

//   // magic skills

//   magicArrowsLevel: number;
//   magicJavelinLevel: number;
//   magicLancesLevel: number;
//   magicImpactLevel: number;
//   magicFinaleLevel: number;
//   chronosShiftLevel: number;
//   magicWallLevel: number;
//   magicBlastLevel: number;
//   magicStormLevel: number;
//   magicBurstLevel: number;
//   magicCannonLevel: number;
//   magicCrashLevel: number;
//   magicMasteryLevel: number;
//   magicKnifeLevel: number;
//   qadalLevel: number;
//   MPChargeLevel: number;
//   chainCastLevel: number;
//   powerWaveLevel: number;
//   maximizerLevel: number;
//   rapidChargeLevel: number;
//   enchantedBarriersLevel: number;
//   magicGuardianBeamLevel: number;

//   // survival skills
//   playDeadLevel: number;
//   EXPGainUPLevel: number;
//   dropRateUPLevel: number;
//   safeRestLevel: number;
//   HPBoostLevel: number;
//   fightersHighLevel: number;
//   shortRestLevel: number;
//   MPBoostLevel: number;
//   soberAnalysisLevel: number;

//   // support skills
//   firstAidLevel: number;
//   miniHealLevel: number;
//   recoveryLevel: number;
//   sanctuaryLevel: number;
//   healLevel: number;
//   lifeRecoveryLevel: number;
//   braveAuraLevel: number;
//   highCycleLevel: number;
//   quickMotionLevel: number;
//   manaRechargeLevel: number;
//   magicBarrierLevel: number;
//   immunityLevel: number;
//   fastReactionLevel: number;

//   // battle skills
//   magicUPLevel: number;
//   concentrateLevel: number;
//   AttackUPLevel: number;
//   whackLevel: number;
//   defenseUPLevel: number;
//   dodgeUPLevel: number;
//   desperateResistLevel: number;
//   criticalUPLevel: number;
//   accuracyUPLevel: number;
//   increasedEnergyLevel: number;
//   intimidatingPowerLevel: number;
//   defenseMasteryLevel: number;
//   spellBurstLevel: number;
//   secretChaseAttackLevel: number;
//   superGripLevel: number;

//   // mononofu skills
//   bushidoLevel: number;

//   // dual sword skills
//   flashBlastLevel: number;
//   godspeedLevel: number;

//   // ignore the other skills for now on the top

//   // magic blade skills
//   magicWarriorMasteryLevel: number;
//   conversionLevel: number;
//   conversionIsActive: boolean;
//   resonanceLevel: number;
//   resonanceIsActive: boolean;
//   enchantedSpellLevel: number;
//   dualBringerLevel: number;
//   dualBringerIsActive: boolean;
//   etherFlareLevel: number;
//   elementSlashLevel: number;
//   enchantSwordLevel: number;
//   enchantedBurstLevel: number;
//   unionSwordLevel: number;
//   siphonBarrierLevel: number;
//   teleportLevel: number;
//   siphonRecallLevel: number;
//   floatDashLevel: number;
//   magicSkinLevel: number;
// }
