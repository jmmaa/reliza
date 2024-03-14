import { StatMap, DeclaredStatusMap } from "../types";

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

export const defaultDeclaredStatusMap: DeclaredStatusMap = {
  level: 1,

  STR: 1,
  DEX: 1,
  INT: 1,
  VIT: 1,
  AGI: 1,

  TEC: 0,
  MTL: 0,
  CRT: 0,
  LUK: 0,

  mainWeaponType: "bare-hand",
  mainWeaponATK: 0,
  mainWeaponStability: 0,
  mainWeaponRefinement: 0,
  mainWeaponStats: [],
  mainWeaponCrystals: [],

  subWeaponType: "none",
  subWeaponATK: 0,
  subWeaponDEF: 0,
  subWeaponRefinement: 0,
  subWeaponStability: 0,
  subWeaponScrollCastTimeReduction: 0,
  subWeaponScrollMPReduction: 0,
  subWeaponStats: [],
  subWeaponCrystals: [],

  additionalGearDEF: 0,
  additionalGearStats: [],
  additionalGearCrystals: [],

  armorDEF: 0,
  armorType: "none",
  armorRefinement: 0,
  armorStats: [],
  armorCrystals: [],

  specialGearDEF: 0,
  specialGearStats: [],
  specialGearCrystals: [],

  consumables: [],
  foodBuffs: [],

  // blade skills

  hardHitLevel: 0,
  astuteLevel: 0,
  triggerSlashLevel: 0,
  rampageLevel: 0,
  meteorBreakerLevel: 0,
  shutOutLevel: 0,
  lunarSlashLevel: 0,
  sonicBladeLevel: 0,
  spiralAirLevel: 0,
  swordTempestLevel: 0,
  busterBladeLevel: 0,
  auraBladeLevel: 0,
  swordMasteryLevel: 0,
  quickSlashLevel: 0,
  swordTechniquesLevel: 0,
  warCryLevel: 0,
  berserkLevel: 0,
  gladiateLevel: 0,
  swiftAttackLevel: 0,

  // shot skills
  powerShotLevel: 0,
  bullseyeLevel: 0,
  arrowRainLevel: 0,
  snipeLevel: 0,
  crossFireLevel: 0,
  vanquisherLevel: 0,
  twinStormLevel: 0,
  retrogradeShotLevel: 0,
  moebaShotLevel: 0,
  paralysisShotLevel: 0,
  smokeDustLevel: 0,
  armBreakLevel: 0,
  parabolaCannonLevel: 0,
  shotMasteryLevel: 0,
  samuraiArcheryLevel: 0,
  sneakAttackLevel: 0,
  longRangeLevel: 0,
  quickDrawLevel: 0,
  decoyShotLevel: 0,
  fatalShotLevel: 0,

  // magic skills

  magicArrowsLevel: 0,
  magicJavelinLevel: 0,
  magicLancesLevel: 0,
  magicImpactLevel: 0,
  magicFinaleLevel: 0,
  chronosShiftLevel: 0,
  magicWallLevel: 0,
  magicBlastLevel: 0,
  magicStormLevel: 0,
  magicBurstLevel: 0,
  magicCannonLevel: 0,
  magicCrashLevel: 0,
  magicMasteryLevel: 0,
  magicKnifeLevel: 0,
  qadalLevel: 0,
  MPChargeLevel: 0,
  chainCastLevel: 0,
  powerWaveLevel: 0,
  maximizerLevel: 0,
  rapidChargeLevel: 0,
  enchantedBarriersLevel: 0,
  magicGuardianBeamLevel: 0,

  // survival skills
  playDeadLevel: 0,
  EXPGainUPLevel: 0,
  dropRateUPLevel: 0,
  safeRestLevel: 0,
  HPBoostLevel: 0,
  fightersHighLevel: 0,
  shortRestLevel: 0,
  MPBoostLevel: 0,
  soberAnalysisLevel: 0,

  // support skills
  firstAidLevel: 0,
  miniHealLevel: 0,
  recoveryLevel: 0,
  sanctuaryLevel: 0,
  healLevel: 0,
  lifeRecoveryLevel: 0,
  braveAuraLevel: 0,
  highCycleLevel: 0,
  quickMotionLevel: 0,
  manaRechargeLevel: 0,
  magicBarrierLevel: 0,
  immunityLevel: 0,
  fastReactionLevel: 0,

  // battle skills
  magicUPLevel: 0,
  concentrateLevel: 0,
  AttackUPLevel: 0,
  whackLevel: 0,
  defenseUPLevel: 0,
  dodgeUPLevel: 0,
  desperateResistLevel: 0,
  criticalUPLevel: 0,
  accuracyUPLevel: 0,
  increasedEnergyLevel: 0,
  intimidatingPowerLevel: 0,
  defenseMasteryLevel: 0,
  spellBurstLevel: 0,
  secretChaseAttackLevel: 0,
  superGripLevel: 0,

  // mononofu skills
  bushidoLevel: 0,

  // dual sword skills
  flashBlastLevel: 0,
  godspeedLevel: 0,

  // ignore the other skills for now on the top

  // magic blade skills
  magicWarriorMasteryLevel: 0,
  conversionLevel: 0,
  conversionIsActive: false,
  resonanceLevel: 0,
  resonanceIsActive: false,
  enchantedSpellLevel: 0,
  dualBringerLevel: 0,
  dualBringerIsActive: false,
  etherFlareLevel: 0,
  elementSlashLevel: 0,
  enchantSwordLevel: 0,
  enchantedBurstLevel: 0,
  unionSwordLevel: 0,
  siphonBarrierLevel: 0,
  teleportLevel: 0,
  siphonRecallLevel: 0,
  floatDashLevel: 0,
  magicSkinLevel: 0,
};
