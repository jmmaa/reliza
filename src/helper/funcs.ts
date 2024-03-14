import {
  NumericalStats,
  StatMap,
  Effect,
  DeclaredStatusMap,
} from "../types";
import { defaultDeclaredStatusMap, defaultStatMap } from "./default";

export const pipe = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => pipe(f(value)),
  };
};

export const evaluateNumericStat = <
  S extends DeclaredStatusMap,
  E extends Effect<DeclaredStatusMap>[]
>(
  status: S,
  container: E,
  key: keyof NumericalStats,
  filter: (v: number) => boolean
) => {
  return container.reduce((total, statGroup) => {
    return statGroup.predicate(status) && filter(statGroup.stats[key])
      ? statGroup.stats[key] + total
      : total;
  }, 0);
};

// export const evaluateStat = <
//   S extends DeclaredStatusMap,
//   E extends Effect<DeclaredStatusMap>[]
// >(
//   status: S,
//   container: E,
//   key: keyof StatMap,
//   filter: <V>(v: V) => boolean
// ) => {
//   if (key === "element") {
//     return container.reduce((ele, statGroup) => {
//       return statGroup.predicate(status) && filter(statGroup.stats[key])
//         ? statGroup.stats[key]
//         : ele;
//     }, "neutral");
//   } else if (
//     key === "tumbleUnavailable" ||
//     key === "flinchUnavailable" ||
//     key === "stunUnavailable"
//   ) {
//     return container.reduce((bool, statGroup) => {
//       return statGroup.predicate(status) && filter(statGroup.stats[key])
//         ? statGroup.stats[key] || bool
//         : bool;
//     }, false);
//   } else {
//     return evaluateNumericStat(status, container, key, filter);
//   }
// };

// export const query = <S extends DeclaredStatusMap>(status: S) => {
//   return {
//     accumulate: (key: keyof NumericalStats) => {
//       return sum([
//         evaluateNumericStat(
//           status,
//           status.mainWeaponStats,
//           key,
//           (_) => true
//         ),
//         evaluateNumericStat(
//           status,
//           status.subWeaponStats,
//           key,
//           (_) => true
//         ),
//         evaluateNumericStat(
//           status,
//           status.additionalGearStats,
//           key,
//           (_) => true
//         ),
//       ]);
//     },
//   };
// };

export const accumulateFromMainWeaponStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = evaluateNumericStat(
    status,
    status.mainWeaponStats,
    stat,
    filter
  );

  return total;
};

export const accumulateFromMainWeaponCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = status.mainWeaponCrystals.reduce((total, container) => {
    return evaluateNumericStat(status, container, stat, filter) + total;
  }, 0);

  return total;
};

export const accumulateFromSubWeaponStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  if (
    status.subWeaponType === "arrow" ||
    status.subWeaponType === "dagger" ||
    status.subWeaponType === "shield" ||
    status.subWeaponType === "ninjutsu-scroll"
  ) {
    const total = evaluateNumericStat(
      status,
      status.subWeaponStats,
      stat,
      filter
    );

    return total;
  } else {
    return 0;
  }
};

export const accumulateFromAdditionalGearStats = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = evaluateNumericStat(
    status,
    status.additionalGearStats,
    stat,
    filter
  );

  return total;
};

export const accumulateFromAdditionalGearCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = status.additionalGearCrystals.reduce(
    (total, container) => {
      return evaluateNumericStat(status, container, stat, filter) + total;
    },
    0
  );

  return total;
};

export const accumulateFromArmorStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = evaluateNumericStat(
    status,
    status.armorStats,
    stat,
    filter
  );

  return total;
};

export const accumulateFromArmorCrystals = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = status.armorCrystals.reduce((total, container) => {
    return evaluateNumericStat(status, container, stat, filter) + total;
  }, 0);

  return total;
};

export const accumulateFromSpecialGearStats = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = evaluateNumericStat(
    status,
    status.specialGearStats,
    stat,
    filter
  );

  return total;
};

export const accumulateFromSpecialGearCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S,
  filter: (v: number) => boolean
) => {
  const total = status.specialGearCrystals.reduce((total, container) => {
    return evaluateNumericStat(status, container, stat, filter) + total;
  }, 0);

  return total;
};

export const accumulate = <S extends DeclaredStatusMap>(
  status: S,
  stat: keyof NumericalStats
) => {
  const total = sum([
    accumulateFromMainWeaponStats(stat, status, (_) => true),
    accumulateFromMainWeaponCrystals(stat, status, (_) => true),

    accumulateFromSubWeaponStats(stat, status, (_) => true),

    accumulateFromAdditionalGearStats(stat, status, (_) => true),
    accumulateFromAdditionalGearCrystals(stat, status, (_) => true),

    accumulateFromArmorStats(stat, status, (_) => true),
    accumulateFromArmorCrystals(stat, status, (_) => true),

    accumulateFromSpecialGearStats(stat, status, (_) => true),
    accumulateFromSpecialGearCrystals(stat, status, (_) => true),
  ]);

  return total;
};

export const accumulateWithFilter = <S extends DeclaredStatusMap>(
  status: S,
  stat: keyof NumericalStats,
  filter: (v: number) => boolean
) => {
  const total = sum([
    accumulateFromMainWeaponStats(stat, status, filter),
    accumulateFromMainWeaponCrystals(stat, status, filter),

    accumulateFromSubWeaponStats(stat, status, filter),

    accumulateFromAdditionalGearStats(stat, status, filter),
    accumulateFromAdditionalGearCrystals(stat, status, filter),

    accumulateFromArmorStats(stat, status, filter),
    accumulateFromArmorCrystals(stat, status, filter),

    accumulateFromSpecialGearStats(stat, status, filter),
    accumulateFromSpecialGearCrystals(stat, status, filter),
  ]);

  return total;
};

export const status = (
  declarations: Partial<DeclaredStatusMap>
): Partial<DeclaredStatusMap> & DeclaredStatusMap => ({
  ...(defaultDeclaredStatusMap as DeclaredStatusMap),
  ...declarations,
});

export const stats = (
  stats: Partial<StatMap>
): Partial<StatMap> & StatMap => ({
  ...(defaultStatMap as StatMap),
  ...stats,
});

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);

export const accumulateEquipmentDef = <S extends DeclaredStatusMap>(
  status: S
) => {
  return (
    status.armorDEF +
    status.additionalGearDEF +
    status.specialGearDEF +
    (status.subWeaponType === "shield" ? status.subWeaponDEF : 0)
  ); // add md def here if magic skin lvl10
};

export const sum = (arr: number[]) => arr.reduce((t, n) => t + n);
