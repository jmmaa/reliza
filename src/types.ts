// export type TotalBaseSTR = { totalBaseSTR: number };

// export type TotalPercentSTR = { totalPercentSTR: number };

// export type TotalFlatSTR = { totalFlatSTR: number };

// export type TotalSTR = { totalSTR: number };

// export type TotalBaseINT = { totalBaseINT: number };

// export type TotalPercentINT = { totalPercentINT: number };

// export type TotalFlatINT = { totalFlatINT: number };

// export type TotalINT = { totalINT: number };

// export type TotalBaseDEX = { totalBaseDEX: number };

// export type TotalPercentDEX = { totalPercentDEX: number };

// export type TotalFlatDEX = { totalFlatDEX: number };

// export type TotalDEX = { totalDEX: number };

// export type TotalBaseVIT = { totalBaseVIT: number };

// export type TotalPercentVIT = { totalPercentVIT: number };

// export type TotalFlatVIT = { totalFlatVIT: number };

// export type TotalVIT = { totalVIT: number };

// export type TotalBaseAGI = { totalBaseAGI: number };

// export type TotalPercentAGI = { totalPercentAGI: number };

// export type TotalFlatAGI = { totalFlatAGI: number };

// export type TotalAGI = { totalAGI: number };

// export type Undeclared = TotalSTR &
//   TotalBaseSTR &
//   TotalPercentSTR &
//   TotalFlatSTR &
//   TotalINT &
//   TotalBaseINT &
//   TotalPercentINT &
//   TotalFlatINT &
//   TotalVIT &
//   TotalBaseVIT &
//   TotalPercentVIT &
//   TotalFlatVIT &
//   TotalAGI &
//   TotalBaseAGI &
//   TotalPercentAGI &
//   TotalFlatAGI &
//   TotalDEX &
//   TotalBaseDEX &
//   TotalPercentDEX &
//   TotalFlatDEX;

// // char props
// export type DeclaredSTR = { STR: number };
// export type DeclaredINT = { INT: number };
// export type DeclaredVIT = { VIT: number };
// export type DeclaredAGI = { AGI: number };
// export type DeclaredDEX = { DEX: number };

// export type DeclaredLevel = { level: number };

// // equipments
// export type DeclaredMainWeaponType =
//   | "one-handed-sword"
//   | "two-handed-sword"
//   | "bow"
//   | "bowgun"
//   | "staff"
//   | "magic-device"
//   | "halberd"
//   | "katana"
//   | "knuckle"
//   | "bare-hand";

// export type DeclaredSubWeaponType =
//   | "one-handed-sword"
//   | "bow"
//   | "magic-device"
//   | "katana"
//   | "knuckle"
//   | "shield"
//   | "ninjutsu-scroll"
//   | "magic-device";

// export type DeclaredMainWeapon = {
//   mainWeapon: {
//     type: DeclaredMainWeaponType;
//     ATK: number;
//     stability: number;

//     effects: [];
//   };
// };

// export type DeclaredSubWeapon<M extends DeclaredMainWeapon> = {
//   subWeapon: {
//     type: DeclaredSubWeaponType;
//     ATK: number;
//   };
// }; // can be improved

export type Flat<T extends string> = `flat-${T}`;

export type Percent<T extends string> = `percent-${T}`;

export type PercentOnly<T extends string> = `percent-only-${T}`;

// modifiers

export type STR = "STR";

export type INT = "INT";

export type VIT = "VIT";

export type AGI = "AGI";

export type DEX = "DEX";

export type Level = "level";

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

export type WeaponATK = "weapon-ATK";

export type MainWeapon = {
  type: MainWeaponType;
  ATK: number;
  stability: number;
};

export type CompatibleSubWeaponType<T> = T extends {
  mainWeapon: { type: OneHandedSword };
}
  ?
      | OneHandedSword
      | Knuckle
      | MagicDevice
      | NinjutsuScroll
      | Arrow
      | Shield
      | Dagger
      | None
  : T extends { mainWeapon: { type: TwoHandedSword } }
  ? None
  : T extends { mainWeapon: { type: Bow } }
  ? Katana | Arrow | None
  : T extends { mainWeapon: { type: Bowgun } }
  ? Knuckle | MagicDevice | Arrow | Shield | Dagger | None
  : T extends { mainWeapon: { type: Staff } }
  ? Knuckle | MagicDevice | NinjutsuScroll | Arrow | Shield | Dagger | None
  : T extends { mainWeapon: { type: MagicDevice } }
  ? NinjutsuScroll | None
  : T extends { mainWeapon: { type: Knuckle } }
  ? MagicDevice | Arrow | Shield | Dagger | None
  : T extends { mainWeapon: { type: Halberd } }
  ? Dagger | Arrow | None
  : T extends { mainWeapon: { type: Katana } }
  ? Dagger | NinjutsuScroll | None
  : T extends { mainWeapon: { type: BareHand } }
  ? Knuckle | MagicDevice | NinjutsuScroll | Shield | Dagger | None
  : None;

export type SubWeapon<T extends { mainWeapon: { type: MainWeaponType } }> =
  {
    type: CompatibleSubWeaponType<T>;
    ATK: T extends {
      subWeapon: {
        type:
          | Arrow
          | Dagger
          | Katana
          | OneHandedSword
          | Knuckle
          | MagicDevice;
      };
    }
      ? number
      : undefined;

    DEF: T extends { subWeapon: { type: Shield } } ? number : undefined;

    refinement: T extends {
      subWeapon: {
        type: Katana | OneHandedSword | Knuckle | MagicDevice | Shield;
      };
    }
      ? number
      : undefined;

    stability: T extends {
      subWeapon: {
        type:
          | Arrow
          | Dagger
          | Katana
          | OneHandedSword
          | Knuckle
          | MagicDevice;
      };
    }
      ? number
      : undefined;

    scrollMPReduction: T extends {
      subWeapon: {
        type: NinjutsuScroll;
      };
    }
      ? number
      : undefined;

    scrollCastTimeReduction: T extends {
      subWeapon: {
        type: NinjutsuScroll;
      };
    }
      ? number
      : undefined;

    // stats: T extends {
    //   subWeapon: { type: NinjutsuScroll | Arrow | Dagger };
    // }
    //   ? EffectGroup[]
    //   : undefined;
  };

export type Light = "light";
export type Heavy = "heavy";
export type Naked = "naked";
export type Normal = "normal";

export type ArmorType = Light | Heavy | Naked | Normal;

export type Effect = {
  predicate: <S>(status: S) => boolean;
  status: {
    flatMATK?: number;
    percentMATK?: number;
    flatATK?: number;
    percentATK?: number;
  };
};

`
an example of the type above would be

.effect(Default, {
    stability: 25,
    MATKflat: 21,
    MATKpercent: 10 
})
.effect(HeavyArmorOnly, [
    flatMATK(7),
    flatATK(42)
])
`;

export const effect: Effect = {
  predicate: (status) => true,
  status: {
    flatATK: 1,
  },
};
export type Armor = {
  type: ArmorType;
  DEF: number;
};

export type WeaponStability = "weapon-stability";

export type MATK = "MATK";

export type ATK = "ATK";

export type UnsheatheAttack = "unsheathe-attack";

export type Declared = STR;

export type Status = Declared;

const subweapon: SubWeapon<{
  mainWeapon: { type: OneHandedSword; ATK: 400; stability: 50 };
  subWeapon: { type: OneHandedSword };
}> = {
  type: "one-handed-sword",
  ATK: 400,
  refinement: 15,
  stability: 100,
  DEF: undefined,
  scrollCastTimeReduction: undefined,
  scrollMPReduction: undefined,
};

console.log(subweapon);
