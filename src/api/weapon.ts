// import {
//   MainWeaponType,
//   SubWeaponType,
//   Shield,
//   NinjutsuScroll,
//   SubWeaponTypeWithATK,
//   SubWeaponTypeWithRefinement,
//   SubWeaponTypeWithStability,
// } from ".././types";

// export const mainWeaponType =
//   <T extends MainWeaponType>(value: T) =>
//   <S>(
//     status: S
//   ): S & {
//     mainWeaponType: T;
//   } => {
//     return {
//       ...status,
//       mainWeaponType: value,
//     };
//   };

// export const mainWeaponATK =
//   (value: number) =>
//   <S>(status: S): S & { mainWeaponATK: number } => {
//     return { ...status, mainWeaponATK: value };
//   };

// export const mainWeaponStability =
//   (value: number) =>
//   <S>(status: S): S & { mainWeaponStability: number } => {
//     return { ...status, mainWeaponStability: value };
//   };

// export const mainWeaponRefinement =
//   (value: number) =>
//   <S>(status: S): S & { mainWeaponRefinement: number } => {
//     return { ...status, mainWeaponRefinement: value };
//   };

// export const mainWeaponStats =
//   <S>(value: StatGroupWithPredicate<S>[]) =>
//   (status: S): S & { mainWeaponStats: StatGroupWithPredicate<S>[] } => {
//     return { ...status, mainWeaponStats: value };
//   };

// export const mainWeaponCrystals =
//   <S>(value: StatGroupWithPredicate<S>[][]) =>
//   (
//     status: S
//   ): S & { mainWeaponCrystals: StatGroupWithPredicate<S>[][] } => {
//     return { ...status, mainWeaponCrystals: value };
//   };

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

// export const subWeaponType =
//   <
//     T extends SubWeaponType,
//     S extends {
//       mainWeaponType: MainWeaponType;
//     }
//   >(
//     value: AvailableSubWeaponType<T, S["mainWeaponType"]>
//   ) =>
//   (
//     status: S
//   ): S & {
//     subWeaponType: AvailableSubWeaponType<T, S["mainWeaponType"]>;
//   } => ({
//     ...status,
//     subWeaponType: value,
//   });

// export const subWeaponATK =
//   <
//     S extends {
//       subWeaponType: SubWeaponType;
//     }
//   >(
//     value: S["subWeaponType"] extends SubWeaponTypeWithATK ? number : 0
//   ) =>
//   (status: S) => {
//     return { ...status, subWeaponATK: value };
//   };

// export const subWeaponRefinement =
//   <S extends { subWeaponType: SubWeaponType }>(
//     value: S["subWeaponType"] extends SubWeaponTypeWithRefinement
//       ? number
//       : 0
//   ) =>
//   (status: S) => {
//     return { ...status, subWeaponRefinement: value };
//   };

// export const subWeaponStability =
//   <S extends { subWeaponType: SubWeaponType }>(
//     value: S["subWeaponType"] extends SubWeaponTypeWithStability
//       ? number
//       : 0
//   ) =>
//   (status: S) => {
//     return { ...status, subWeaponStability: value };
//   };

// export const subWeaponDEF =
//   (value: number) =>
//   <
//     S extends {
//       subWeaponType: Shield;
//     }
//   >(
//     status: S
//   ): S & { subWeaponDEF: number } => {
//     return { ...status, subWeaponDEF: value };
//   };

// export const scrollMPReduction =
//   (value: number) =>
//   <
//     S extends {
//       subWeaponType: NinjutsuScroll;
//     }
//   >(
//     status: S
//   ): S & { scrollMPReduction: number } => {
//     return { ...status, scrollMPReduction: value };
//   };

// export const scrollCastTimeReduction =
//   (value: number) =>
//   <
//     S extends {
//       subWeaponType: NinjutsuScroll;
//     }
//   >(
//     status: S
//   ): S & { scrollCastTimeReduction: number } => {
//     return { ...status, scrollCastTimeReduction: value };
//   };

// export const subWeaponStats =
//   <S>(value: StatGroupWithPredicate<S>[]) =>
//   (status: S): S & { subWeaponStats: StatGroupWithPredicate<S>[] } => {
//     return { ...status, subWeaponStats: value };
//   };
