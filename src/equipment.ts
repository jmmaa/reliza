import { Stat, SubweaponType, WeaponType } from "./types";
import { merge } from "./utils";

// Weapon

// weapon atk from weapon only
export const mergeTotalRawWeaponATK: (
  _: number,
) => <O extends {}>(_: O) => O & { totalRawWeaponATK: number } =
  (value) => (entity) =>
    merge(entity, { totalRawWeaponATK: value });

// weapon stability from weapon only
export const mergeTotalWeaponStability: (
  _: number,
) => <O extends {}>(_: O) => O & { totalWeaponStability: number } =
  (value) => (entity) =>
    merge(entity, { totalWeaponStability: value });

export const mergeWeaponType: (
  _: WeaponType,
) => <O extends {}>(_: O) => O & { weaponType: WeaponType } =
  (value) => (entity) =>
    merge(entity, { weaponType: value });

export const mergeTotalWeaponRefinement: (
  _: number,
) => <O extends {}>(_: O) => O & { totalWeaponRefinement: number } =
  (value) => (entity) =>
    merge(entity, { totalWeaponRefinement: value });

export const mergeSubweaponType: (
  _: SubweaponType,
) => <O extends {}>(_: O) => O & { subweaponType: SubweaponType } =
  (value) => (entity) =>
    merge(entity, { subweaponType: value });

export const mergeTotalSubweaponRefinement: (
  _: number,
) => <O extends {}>(_: O) => O & { totalSubweaponRefinement: number } =
  (value) => (entity) =>
    merge(entity, { totalSubweaponRefinement: value });

export const mergeTotalRefinementBonusWeaponATK: <
  O extends { totalRawWeaponATK: number; totalWeaponRefinement: number },
>(
  _: O,
) => O & { totalRefinementBonusWeaponATK: number } = (entity) =>
  merge(entity, {
    totalRefinementBonusWeaponATK:
      Math.floor(
        entity.totalRawWeaponATK *
          (entity.totalWeaponRefinement ** 2 / 100),
      ) + entity.totalWeaponRefinement,
  });

export type StatMapBuilder<T> = (_: T) => Stat[];

export const mergeWeaponStatBuilder: <O extends {}>(
  _: StatMapBuilder<O>,
) => (_: O) => O & { weaponStatBuilder: StatMapBuilder<O> } =
  (statMapBuilder) => (entity) =>
    merge(entity, { weaponStatBuilder: statMapBuilder });

export const mergeSubweaponStatBuilder: <O extends {}>(
  _: StatMapBuilder<O>,
) => (_: O) => O & { subweaponStatBuilder: StatMapBuilder<O> } =
  (statMapBuilder) => (entity) =>
    merge(entity, { subweaponStatBuilder: statMapBuilder });

export const mergeAdditionalGearStatBuilder: <O extends {}>(
  _: StatMapBuilder<O>,
) => (_: O) => O & { additionalGearStatBuilder: StatMapBuilder<O> } =
  (statMapBuilder) => (entity) =>
    merge(entity, { additionalGearStatBuilder: statMapBuilder });

export const mergeArmorStatBuilder: <O extends {}>(
  _: StatMapBuilder<O>,
) => (_: O) => O & { armorStatBuilder: StatMapBuilder<O> } =
  (statMapBuilder) => (entity) =>
    merge(entity, { armorStatBuilder: statMapBuilder });

export const mergeSpecialGearStatBuilder: <O extends {}>(
  _: StatMapBuilder<O>,
) => (_: O) => O & { specialGearStatBuilder: StatMapBuilder<O> } =
  (statMapBuilder) => (entity) =>
    merge(entity, { specialGearStatBuilder: statMapBuilder });
