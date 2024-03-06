import { NumericalStats, DeclaredStatusMap, StatMap } from "../types";
import { defaultDeclaredStatusMap, defaultStatMap } from "./default";

export const pipe = <T>(value: T) => {
  return {
    value: value,
    _: <N>(f: (value: T) => N) => pipe(f(value)),
  };
};

export const accumulateFromMainWeaponStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.mainWeaponStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromMainWeaponCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.mainWeaponCrystals.reduce((total, statGroups) => {
    return (
      statGroups.reduce((total, statGroup) => {
        return statGroup.predicate(status)
          ? statGroup.stats[stat] + total
          : total;
      }, 0) + total
    );
  }, 0);

  return total;
};

export const accumulateFromSubWeaponStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S
) => {
  if (
    status.subWeaponType === "arrow" ||
    status.subWeaponType === "dagger" ||
    status.subWeaponType === "shield" ||
    status.subWeaponType === "ninjutsu-scroll"
  ) {
    const total = status.subWeaponStats.reduce((total, statGroup) => {
      return statGroup.predicate(status)
        ? statGroup.stats[stat] + total
        : total;
    }, 0);

    return total;
  } else {
    return 0;
  }
};

export const accumulateFromAdditionalGearStats = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.additionalGearStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromAdditionalGearCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.additionalGearCrystals.reduce(
    (total, statGroups) => {
      return (
        statGroups.reduce((total, statGroup) => {
          return statGroup.predicate(status)
            ? statGroup.stats[stat] + total
            : total;
        }, 0) + total
      );
    },
    0
  );

  return total;
};

export const accumulateFromArmorStats = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.armorStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromArmorCrystals = <S extends DeclaredStatusMap>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.armorCrystals.reduce((total, statGroups) => {
    return (
      statGroups.reduce((total, statGroup) => {
        return statGroup.predicate(status)
          ? statGroup.stats[stat] + total
          : total;
      }, 0) + total
    );
  }, 0);

  return total;
};

export const accumulateFromSpecialGearStats = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.specialGearStats.reduce((total, statGroup) => {
    return statGroup.predicate(status)
      ? statGroup.stats[stat] + total
      : total;
  }, 0);

  return total;
};

export const accumulateFromSpecialGearCrystals = <
  S extends DeclaredStatusMap
>(
  stat: keyof NumericalStats,
  status: S
) => {
  const total = status.specialGearCrystals.reduce((total, statGroups) => {
    return (
      statGroups.reduce((total, statGroup) => {
        return statGroup.predicate(status)
          ? statGroup.stats[stat] + total
          : total;
      }, 0) + total
    );
  }, 0);

  return total;
};

export const accumulate = <S extends DeclaredStatusMap>(
  status: S,
  stat: keyof NumericalStats
) => {
  const sum = [
    accumulateFromMainWeaponStats(stat, status),
    accumulateFromMainWeaponCrystals(stat, status),

    accumulateFromSubWeaponStats(stat, status),

    accumulateFromAdditionalGearStats(stat, status),
    accumulateFromAdditionalGearCrystals(stat, status),

    accumulateFromArmorStats(stat, status),
    accumulateFromArmorCrystals(stat, status),

    accumulateFromSpecialGearStats(stat, status),
    accumulateFromSpecialGearCrystals(stat, status),
  ].reduce((t, c) => t + c, 0);

  return sum;
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
