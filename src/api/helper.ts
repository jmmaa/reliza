export type DeclaredStatContainer<S> = {
  weaponStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  weaponCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  armorStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  armorCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  additionalGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  additionalGearCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  specialGearStats?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[];

  specialGearCrystals?: {
    name: string;
    value: number;
    predicate?: (status: S) => boolean;
  }[][];

  foodBuffs?: { name: string; value: number }[];

  consumables?: { name: string; value: number }[][];
};

export const accumulateDeclaredStats = <
  S extends DeclaredStatContainer<S>
>(
  status: S,
  key: string
) => {
  const weaponTotal =
    status.weaponStats !== undefined
      ? status.weaponStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total + curr.value;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const armorTotal =
    status.armorStats !== undefined
      ? status.armorStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total + curr.value;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const additionalGearTotal =
    status.additionalGearStats !== undefined
      ? status.additionalGearStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total + curr.value;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  const specialGearTotal =
    status.specialGearStats !== undefined
      ? status.specialGearStats.reduce((total, curr) => {
          if (curr.name === key) {
            if (curr.predicate !== undefined) {
              return curr.predicate(status) ? total + curr.value : total;
            } else {
              return total + curr.value;
            }
          } else {
            return total;
          }
        }, 0)
      : 0;

  //  export const foodBuffsTotal = <S extends>

  return weaponTotal + armorTotal + additionalGearTotal + specialGearTotal;
};

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * (1 + percent / 100) + flat);
