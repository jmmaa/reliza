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

export type Element = Light | Dark | Fire | Water | Wind | Earth | Neutral;

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
  element: Element;
  tumbleUnavailable: boolean;
  flinchUnavailable: boolean;
  stunUnavailable: boolean;
}

export interface StatMap extends NumericalStats, NonNumericalStats {}

export interface Effect<S> {
  predicate: (status: S) => boolean;
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

  subWeaponType: SubWeaponType;
  subWeaponATK: number;
  subWeaponRefinement: number;

  subWeaponStability: number;

  subWeaponDEF: number;

  scrollCastTimeReduction: number;

  scrollMPReduction: number;

  armorDEF: number;
  armorType: ArmorType;

  additionalGearDEF: number;
  specialGearDEF: number;

  mainWeaponStats: Effect<DeclaredStatusMap>[];
  mainWeaponCrystals: Effect<DeclaredStatusMap>[][];

  subWeaponStats: Effect<DeclaredStatusMap>[];
  subWeaponCrystals: Effect<DeclaredStatusMap>[][];

  additionalGearStats: Effect<DeclaredStatusMap>[];
  additionalGearCrystals: Effect<DeclaredStatusMap>[][];

  armorStats: Effect<DeclaredStatusMap>[];
  armorCrystals: Effect<DeclaredStatusMap>[][];

  specialGearStats: Effect<DeclaredStatusMap>[];
  specialGearCrystals: Effect<DeclaredStatusMap>[][];

  consumables: Effect<DeclaredStatusMap>[];

  foodBuffs: Effect<DeclaredStatusMap>[];

  // regislets (must be same like skills too)

  // magic blade skills
  magicWarriorMasteryLevel: number;

  conversionLevel: number;
  isConversionActive: boolean;

  resonanceLevel: number;
  isResonanceActive: boolean;

  dualBringerLevel: number;
  isDualBringerActive: boolean;

  // battle skills
  spellBurstLevel: number;

  // // target
  // targetLevel: number;
  // targetDEF: number;
  // targetMDEF: number;
  // targetPhysicalResistance: number;
  // targetMagicResistance: number;
  // targetWeaponResistance: number;
  // targetElement: Element;
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

// export type DeclaredStatusMap = {
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

//       mainWeaponStats: Effect<DeclaredStatusMap>[];
//       mainWeaponCrystals: Effect<DeclaredStatusMap>[][];

//       subWeaponStats: Effect<DeclaredStatusMap>[];
//       subWeaponCrystals: Effect<DeclaredStatusMap>[][];

//       additionalGearStats: Effect<DeclaredStatusMap>[];
//       additionalGearCrystals: Effect<DeclaredStatusMap>[][];

//       armorStats: Effect<DeclaredStatusMap>[];
//       armorCrystals: Effect<DeclaredStatusMap>[][];

//       specialGearStats: Effect<DeclaredStatusMap>[];
//       specialGearCrystals: Effect<DeclaredStatusMap>[][];

//       consumables: Effect<DeclaredStatusMap>[];

//       foodBuffs: Effect<DeclaredStatusMap>[];

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
