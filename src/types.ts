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

export type IsSubWeaponTypeWithATK<T extends SubWeaponType> =
  T extends SubWeaponTypeWithATK ? T : never;

export type IsSubWeaponTypeWithRefinement<T extends SubWeaponType> =
  T extends SubWeaponTypeWithRefinement ? T : never;

export type IsSubWeaponTypeWithStability<T extends SubWeaponType> =
  T extends SubWeaponTypeWithStability ? T : never;

export type IsShield<T extends SubWeaponType> = T extends Shield
  ? T
  : never;
export type IsNinjutsuScroll<T extends SubWeaponType> =
  T extends NinjutsuScroll ? T : never;

// export type IsCompatible<
//   Main extends MainWeaponType,
//   Sub extends SubWeaponType
// > = Main extends OneHandedSword
//   ? Sub extends
//       | OneHandedSword
//       | Knuckle
//       | MagicDevice
//       | NinjutsuScroll
//       | Arrow
//       | Shield
//       | Dagger
//       | None
//     ? true
//     : false
//   : Main extends TwoHandedSword
//   ? Sub extends None
//     ? true
//     : false
//   : Main extends Bow
//   ? Sub extends Katana | Arrow | None
//     ? true
//     : false
//   : Main extends Bowgun
//   ? Sub extends Knuckle | MagicDevice | Arrow | Shield | Dagger | None
//     ? true
//     : false
//   : Main extends Staff
//   ? Sub extends
//       | Knuckle
//       | MagicDevice
//       | NinjutsuScroll
//       | Arrow
//       | Shield
//       | Dagger
//       | None
//     ? true
//     : false
//   : Main extends MagicDevice
//   ? Sub extends NinjutsuScroll | None
//     ? true
//     : false
//   : Main extends Knuckle
//   ? Sub extends MagicDevice | Arrow | Shield | Dagger | None
//     ? true
//     : false
//   : Main extends Halberd
//   ? Sub extends Dagger | Arrow | None
//     ? true
//     : false
//   : Main extends Katana
//   ? Sub extends Dagger | NinjutsuScroll | None
//     ? true
//     : false
//   : Main extends BareHand
//   ? Sub extends
//       | Knuckle
//       | MagicDevice
//       | NinjutsuScroll
//       | Shield
//       | Dagger
//       | None
//     ? true
//     : false
//   : false;

export type CompatibleSubWeaponType<Main extends MainWeaponType> =
  Main extends OneHandedSword
    ?
        | OneHandedSword
        | Knuckle
        | MagicDevice
        | NinjutsuScroll
        | Arrow
        | Shield
        | Dagger
        | None
    : Main extends TwoHandedSword
    ? None
    : Main extends Bow
    ? Katana | Arrow | None
    : Main extends Bowgun
    ? Knuckle | MagicDevice | Arrow | Shield | Dagger | None
    : Main extends Staff
    ?
        | Knuckle
        | MagicDevice
        | NinjutsuScroll
        | Arrow
        | Shield
        | Dagger
        | None
    : Main extends MagicDevice
    ? NinjutsuScroll | None
    : Main extends Knuckle
    ? MagicDevice | Arrow | Shield | Dagger | None
    : Main extends Halberd
    ? Dagger | Arrow | None
    : Main extends Katana
    ? Dagger | NinjutsuScroll | None
    : Main extends BareHand
    ? Knuckle | MagicDevice | NinjutsuScroll | Shield | Dagger | None
    : never;

export type AvailableSubWeaponType<
  S extends SubWeaponType,
  M extends MainWeaponType
> = S extends CompatibleSubWeaponType<M> ? S : never;
// stats

export type StatMap = {
  // STR
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

  stability: number;

  magicPierce: number;
  physicalPierce: number;

  longRangeDamage: number;
  shortRangeDamage: number;

  motionSpeed: number;

  "ATKUP(STR)": number;
  "ATKUP(INT)": number;
  "ATKUP(DEX)": number;
  "ATKUP(VIT)": number;
  "ATKUP(AGI)": number;

  "MATKUP(STR)": number;
  "MATKUP(INT)": number;
  "MATKUP(DEX)": number;
  "MATKUP(VIT)": number;
  "MATKUP(AGI)": number;
};

export type StatGroupWithPredicate<S> = {
  predicate: (status: S) => boolean;
  stats: StatMap;
};

export type StatSource<S> = {
  mainWeaponStats?: StatGroupWithPredicate<S>[];

  mainWeaponCrystals?: StatGroupWithPredicate<S>[][];

  armorStats?: StatGroupWithPredicate<S>[];

  armorCrystals?: StatGroupWithPredicate<S>[][];

  additionalGearStats?: StatGroupWithPredicate<S>[];

  additionalGearCrystals?: StatGroupWithPredicate<S>[][];

  specialGearStats?: StatGroupWithPredicate<S>[];

  specialGearCrystals?: StatGroupWithPredicate<S>[][];

  // foodBuffs?: { name: string; value: number }[];

  // consumables?: { name: string; value: number }[][];
};

export type Light = "light";

export type Heavy = "heavy";

export type Normal = "normal";

export type ArmorType = Light | Heavy | Normal | None;
