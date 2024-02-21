import { ArmorType, StatGroupWithPredicate } from "../types";

export const armorType =
  (value: ArmorType) =>
  <S>(status: S): S & { armorType: ArmorType } => ({
    ...status,
    armorType: value,
  });

export const armorRefinement =
  (value: number) =>
  <S>(status: S): S & { armorRefinement: number } => ({
    ...status,
    armorRefinement: value,
  });

export const armorDEF =
  (value: number) =>
  <S>(status: S): S & { armorDEF: number } => {
    return { ...status, armorDEF: value };
  };

export const armorStats =
  <S>(value: StatGroupWithPredicate<S>[]) =>
  (status: S): S & { armorStats: StatGroupWithPredicate<S>[] } => {
    return { ...status, armorStats: value };
  };

// add gear
export const additionalGearRefinement =
  (value: number) =>
  <S>(status: S): S & { additionalGearRefinement: number } => ({
    ...status,
    additionalGearRefinement: value,
  });

export const additionalGearDEF =
  (value: number) =>
  <S>(status: S): S & { additionalGearDEF: number } => {
    return { ...status, additionalGearDEF: value };
  };

export const additionalGearStats =
  <S>(value: StatGroupWithPredicate<S>[]) =>
  (
    status: S
  ): S & { additionalGearStats: StatGroupWithPredicate<S>[] } => {
    return { ...status, additionalGearStats: value };
  };

// special gear

export const specialGearDEF =
  (value: number) =>
  <S>(status: S): S & { specialGearDEF: number } => {
    return { ...status, specialGearDEF: value };
  };

export const specialGearStats =
  <S>(value: StatGroupWithPredicate<S>[]) =>
  (status: S): S & { specialGearStats: StatGroupWithPredicate<S>[] } => {
    return { ...status, specialGearStats: value };
  };
