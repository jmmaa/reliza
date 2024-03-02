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

export type SubWeaponTypeWithATKValue<Sub extends SubWeaponType> =
  Sub extends SubWeaponTypeWithATK ? number : 0;

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
//     : never;

// export type AvailableSubWeaponType<
//   S extends SubWeaponType,
//   M extends MainWeaponType
// > = S extends CompatibleSubWeaponType<M> ? S : never;
// stats

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

export interface DeclaredStatus {
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
  subWeaponATK: DeclaredStatus["subWeaponType"] extends SubWeaponTypeWithATK
    ? number
    : 0;
  subWeaponRefinement: DeclaredStatus["subWeaponType"] extends SubWeaponTypeWithRefinement
    ? number
    : 0;

  subWeaponStability: DeclaredStatus["subWeaponType"] extends SubWeaponTypeWithStability
    ? number
    : 0;

  subWeaponDEF: DeclaredStatus["subWeaponType"] extends Shield
    ? number
    : 0;

  scrollCastTimeReduction: DeclaredStatus["subWeaponType"] extends NinjutsuScroll
    ? number
    : 0;

  scrollMPReduction: DeclaredStatus["subWeaponType"] extends NinjutsuScroll
    ? number
    : 0;

  armorDEF: number;
  armorType: ArmorType;

  additionalGearDEF: number;
  specialGearDEF: number;

  mainWeaponStats: Effect<DeclaredStatus>[];
  mainWeaponCrystals: Effect<DeclaredStatus>[][];

  subWeaponStats: Effect<DeclaredStatus>[];
  subWeaponCrystals: Effect<DeclaredStatus>[][];

  additionalGearStats: Effect<DeclaredStatus>[];
  additionalGearCrystals: Effect<DeclaredStatus>[][];

  armorStats: Effect<DeclaredStatus>[];
  armorCrystals: Effect<DeclaredStatus>[][];

  specialGearStats: Effect<DeclaredStatus>[];
  specialGearCrystals: Effect<DeclaredStatus>[];

  consumables: Effect<DeclaredStatus>[];

  foodBuffs: Effect<DeclaredStatus>[];

  magicWarriorMasteryLevel: number;
}
