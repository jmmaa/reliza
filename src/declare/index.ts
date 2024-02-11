// This involves all the functions used for declaring the stats

// JUST DO THIS FOR NOW, CHANGE IT LATER WHEN IT BECOMES A PROBLEM

// type Stat<T> = {
//   name: string;
//   value: number;
//   predicate: (status: T) => boolean;
// };

export const conditional = <T>(
  stat: { name: string; value: number },
  predicate: (status: T) => boolean
) => {
  return { ...stat, predicate };
};

export const flatSTR = (
  value: number
): { name: "flatSTR"; value: number } => ({
  name: "flatSTR",
  value: value,
});

export const percentSTR = (
  value: number
): { name: "percentSTR"; value: number } => ({
  name: "percentSTR",
  value,
});

export const flatDEX = (
  value: number
): { name: "flatDEX"; value: number } => ({
  name: "flatDEX",
  value,
});

export const percentDEX = (
  value: number
): { name: "percentDEX"; value: number } => ({
  name: "percentDEX",
  value,
});

export const flatINT = (
  value: number
): { name: "flatINT"; value: number } => ({
  name: "flatINT",
  value,
});

export const percentINT = (
  value: number
): { name: "percentINT"; value: number } => ({
  name: "percentINT",
  value,
});

export const flatVIT = (
  value: number
): { name: "flatVIT"; value: number } => ({
  name: "flatVIT",
  value,
});

export const percentVIT = (
  value: number
): { name: "percentVIT"; value: number } => ({
  name: "percentVIT",
  value,
});

export const flatAGI = (
  value: number
): { name: "flatAGI"; value: number } => ({
  name: "flatAGI",
  value,
});

export const percentAGI = (
  value: number
): { name: "percentAGI"; value: number } => ({
  name: "percentAGI",
  value,
});

export const flatATK = (
  value: number
): { name: "flatATK"; value: number } => ({
  name: "flatATK",
  value,
});

export const percentATK = (
  value: number
): { name: "percentATK"; value: number } => ({
  name: "percentATK",
  value,
});

export const flatMATK = (
  value: number
): { name: "flatMATK"; value: number } => ({
  name: "flatMATK",
  value,
});

export const percentMATK = (
  value: number
): { name: "percentMATK"; value: number } => ({
  name: "percentMATK",
  value,
});

export const flatCriticalRate = (
  value: number
): { name: "flatCriticalRate"; value: number } => ({
  name: "flatCriticalRate",
  value,
});

export const percentCriticalRate = (
  value: number
): { name: "percentCriticalRate"; value: number } => ({
  name: "percentCriticalRate",
  value,
});

export const flatCriticalDamage = (
  value: number
): { name: "flatCriticalDamage"; value: number } => ({
  name: "flatCriticalDamage",
  value,
});

export const percentCriticalDamage = (
  value: number
): { name: "percentCriticalDamage"; value: number } => ({
  name: "percentCriticalDamage",
  value,
});

export const flatWeaponATK = (
  value: number
): { name: "flatWeaponATK"; value: number } => ({
  name: "flatWeaponATK",
  value,
});

export const percentWeaponATK = (
  value: number
): { name: "percentWeaponATK"; value: number } => ({
  name: "percentWeaponATK",
  value,
});

export const flatASPD = (
  value: number
): { name: "flatASPD"; value: number } => ({
  name: "flatASPD",
  value,
});

export const percentASPD = (
  value: number
): { name: "percentASPD"; value: number } => ({
  name: "percentASPD",
  value,
});

export const flatAccuracy = (
  value: number
): { name: "flatAccuracy"; value: number } => ({
  name: "flatAccuracy",
  value,
});

export const percentAccuracy = (
  value: number
): { name: "percentAccuracy"; value: number } => ({
  name: "percentAccuracy",
  value,
});

export const flatMaxHP = (
  value: number
): { name: "flatMaxHP"; value: number } => ({
  name: "flatMaxHP",
  value,
});

export const percentMaxHP = (
  value: number
): { name: "percentMaxHP"; value: number } => ({
  name: "percentMaxHP",
  value,
});

export const flatMaxMP = (
  value: number
): { name: "flatMaxMP"; value: number } => ({
  name: "flatMaxMP",
  value,
});

export const flatCSPD = (
  value: number
): { name: "flatCSPD"; value: number } => ({
  name: "flatCSPD",
  value,
});

export const percentCSPD = (
  value: number
): { name: "percentCSPD"; value: number } => ({
  name: "percentCSPD",
  value,
});

export const flatDEF = (
  value: number
): { name: "flatDEF"; value: number } => ({
  name: "flatDEF",
  value,
});

export const percentDEF = (
  value: number
): { name: "percentDEF"; value: number } => ({
  name: "percentDEF",
  value,
});

export const flatMDEF = (
  value: number
): { name: "flatMDEF"; value: number } => ({
  name: "flatMDEF",
  value,
});

export const percentMDEF = (
  value: number
): { name: "percentMDEF"; value: number } => ({
  name: "percentMDEF",
  value,
});

export const flatDodge = (
  value: number
): { name: "flatDodge"; value: number } => ({
  name: "flatDodge",
  value,
});

export const percentDodge = (
  value: number
): { name: "percentDodge"; value: number } => ({
  name: "percentDodge",
  value,
});

export const flatUnsheatheAttack = (
  value: number
): { name: "flatUnsheatheAttack"; value: number } => ({
  name: "flatUnsheatheAttack",
  value,
});

export const percentUnsheatheAttack = (
  value: number
): { name: "percentUnsheatheAttack"; value: number } => ({
  name: "percentUnsheatheAttack",
  value,
});

export const stability = (
  value: number
): { name: "stability"; value: number } => ({
  name: "stability",
  value,
});

export const physicalPierce = (
  value: number
): { name: "physicalPierce"; value: number } => ({
  name: "physicalPierce",
  value,
});

export const magicPierce = (
  value: number
): { name: "magicPierce"; value: number } => ({
  name: "magicPierce",
  value,
});

export const longRangeDamage = (
  value: number
): { name: "longRangeDamage"; value: number } => ({
  name: "longRangeDamage",
  value,
});

export const shortRangeDamage = (
  value: number
): { name: "shortRangeDamage"; value: number } => ({
  name: "shortRangeDamage",
  value,
});

export const motionSpeed = (
  value: number
): { name: "motionSpeed"; value: number } => ({
  name: "motionSpeed",
  value,
});

//

export const ATKUPSTR = (
  value: number
): { name: "ATKUPSTR"; value: number } => ({
  name: "ATKUPSTR",
  value,
});

export const ATKDOWNSTR = (
  value: number
): { name: "ATKDOWNSTR"; value: number } => ({
  name: "ATKDOWNSTR",
  value,
});

export const ATKUPDEX = (
  value: number
): { name: "ATKUPDEX"; value: number } => ({
  name: "ATKUPDEX",
  value,
});

export const ATKDOWNDEX = (
  value: number
): { name: "ATKDOWNDEX"; value: number } => ({
  name: "ATKDOWNDEX",
  value,
});

export const ATKUPINT = (
  value: number
): { name: "ATKUPINT"; value: number } => ({
  name: "ATKUPINT",
  value,
});

export const ATKDOWNINT = (
  value: number
): { name: "ATKDOWNINT"; value: number } => ({
  name: "ATKDOWNINT",
  value,
});

export const ATKUPVIT = (
  value: number
): { name: "ATKUPVIT"; value: number } => ({
  name: "ATKUPVIT",
  value,
});

export const ATKDOWNVIT = (
  value: number
): { name: "ATKDOWNVIT"; value: number } => ({
  name: "ATKDOWNVIT",
  value,
});

export const ATKUPAGI = (
  value: number
): { name: "ATKUPAGI"; value: number } => ({
  name: "ATKUPAGI",
  value,
});

export const ATKDOWNAGI = (
  value: number
): { name: "ATKDOWNAGI"; value: number } => ({
  name: "ATKDOWNAGI",
  value,
});

//

export const MATKUPSTR = (
  value: number
): { name: "MATKUPSTR"; value: number } => ({
  name: "MATKUPSTR",
  value,
});

export const MATKDOWNSTR = (
  value: number
): { name: "MATKDOWNSTR"; value: number } => ({
  name: "MATKDOWNSTR",
  value,
});

export const MATKUPDEX = (
  value: number
): { name: "MATKUPDEX"; value: number } => ({
  name: "MATKUPDEX",
  value,
});

export const MATKDOWNDEX = (
  value: number
): { name: "MATKDOWNDEX"; value: number } => ({
  name: "MATKDOWNDEX",
  value,
});

export const MATKUPINT = (
  value: number
): { name: "MATKUPINT"; value: number } => ({
  name: "MATKUPINT",
  value,
});

export const MATKDOWNINT = (
  value: number
): { name: "MATKDOWNINT"; value: number } => ({
  name: "MATKDOWNINT",
  value,
});

export const MATKUPVIT = (
  value: number
): { name: "MATKUPVIT"; value: number } => ({
  name: "MATKUPVIT",
  value,
});

export const MATKDOWNVIT = (
  value: number
): { name: "MATKDOWNVIT"; value: number } => ({
  name: "MATKDOWNVIT",
  value,
});

export const MATKUPAGI = (
  value: number
): { name: "MATKUPAGI"; value: number } => ({
  name: "MATKUPAGI",
  value,
});

export const MATKDOWNAGI = (
  value: number
): { name: "MATKDOWNAGI"; value: number } => ({
  name: "MATKDOWNAGI",
  value,
});
