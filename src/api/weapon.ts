import {
  MainWeaponType,
  SubWeaponType,
  StatGroupWithPredicate,
  OneHandedSword,
  Katana,
  Knuckle,
  MagicDevice,
  Arrow,
  Dagger,
  Shield,
  NinjutsuScroll,
  CompatibleSubWeaponType,
  AvailableSubWeaponType,
} from ".././types";

export const mainWeaponType =
  <T extends MainWeaponType>(value: T) =>
  <S>(
    status: S
  ): S & {
    mainWeaponType: T;
  } => {
    return {
      ...status,
      mainWeaponType: value,
    };
  };

export const mainWeaponATK =
  (value: number) =>
  <S>(status: S): S & { mainWeaponATK: number } => {
    return { ...status, mainWeaponATK: value };
  };

export const mainWeaponStability =
  (value: number) =>
  <S>(status: S): S & { mainWeaponStability: number } => {
    return { ...status, mainWeaponStability: value };
  };

export const mainWeaponRefinement =
  (value: number) =>
  <S>(status: S): S & { mainWeaponRefinement: number } => {
    return { ...status, mainWeaponRefinement: value };
  };

export const mainWeaponStats =
  (value: StatGroupWithPredicate[]) =>
  <S>(status: S): S & { mainWeaponStats: StatGroupWithPredicate[] } => {
    return { ...status, mainWeaponStats: value };
  };

// export const subWeaponType =
//   <
//     T extends SubWeaponType,
//     S extends {
//       mainWeaponType: MainWeaponType;
//     }
//   >(
//     value: T extends CompatibleSubWeaponType<S["mainWeaponType"]>
//       ? T
//       : never
//   ) =>
//   (
//     status: S
//   ): S & {
//     subWeaponType: T extends CompatibleSubWeaponType<S["mainWeaponType"]>
//       ? T
//       : never;
//   } => ({
//     ...status,
//     subWeaponType: value,
//   });

export const subWeaponType =
  <
    T extends SubWeaponType,
    S extends {
      mainWeaponType: MainWeaponType;
    }
  >(
    value: AvailableSubWeaponType<T, S>
  ) =>
  (
    status: S
  ): S & {
    subWeaponType: AvailableSubWeaponType<T, S>;
  } => ({
    ...status,
    subWeaponType: value,
  });

export const subWeaponATK =
  (value: number) =>
  <
    S extends {
      subWeaponType:
        | Arrow
        | Dagger
        | Katana
        | OneHandedSword
        | Knuckle
        | MagicDevice;
    }
  >(
    status: S
  ): S & { subWeaponATK: number } => {
    return { ...status, subWeaponATK: value };
  };

export const subWeaponRefinement =
  (value: number) =>
  <
    S extends {
      subWeaponType:
        | Katana
        | OneHandedSword
        | Knuckle
        | MagicDevice
        | Shield;
    }
  >(
    status: S
  ): S & { subWeaponRefinement: number } => {
    return { ...status, subWeaponRefinement: value };
  };

export const subWeaponStability =
  (value: number) =>
  <
    S extends {
      subWeaponType:
        | Arrow
        | Dagger
        | Katana
        | OneHandedSword
        | Knuckle
        | MagicDevice;
    }
  >(
    status: S
  ): S & { subWeaponStability: number } => {
    return { ...status, subWeaponStability: value };
  };

export const subWeaponDefense =
  (value: number) =>
  <
    S extends {
      subWeaponType: Shield;
    }
  >(
    status: S
  ): S & { subWeaponDefense: number } => {
    return { ...status, subWeaponDefense: value };
  };

export const scrollMPReduction =
  (value: number) =>
  <
    S extends {
      subWeaponType: NinjutsuScroll;
    }
  >(
    status: S
  ): S & { scrollMPReduction: number } => {
    return { ...status, scrollMPReduction: value };
  };

export const scrollCastTimeReduction =
  (value: number) =>
  <
    S extends {
      subWeaponType: NinjutsuScroll;
    }
  >(
    status: S
  ): S & { scrollCastTimeReduction: number } => {
    return { ...status, scrollCastTimeReduction: value };
  };

export const subWeaponStats =
  (value: StatGroupWithPredicate[]) =>
  <S>(status: S): S & { subWeaponStats: StatGroupWithPredicate[] } => {
    return { ...status, subWeaponStats: value };
  };
