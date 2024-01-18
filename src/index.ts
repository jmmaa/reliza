// base attack speed

export const calculateTwoHandedSwordBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 50 + level + 2 * AGI + (AGI + STR - 1) / 5;

export const calculateDualWieldBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 100 + level + 4 * AGI + (AGI + STR - 1) / 5;

export const calculateBowBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 75 + level + 3 * AGI + (AGI + 2 * DEX - 1) / 10;

export const calculateBowgunBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 30 + level + 2.2 * AGI + 0.2 * DEX;

export const calculateStaffBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 60 + level + AGI + (4 * AGI + INT - 1) / 5;

export const calculateMagicDeviceBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 90 + level + 4 * AGI + (INT - 1) / 5;

export const calculateKnuckleBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number,
  DEX: number
) => 120 + level + 4.6 * AGI + DEX / 10 + STR / 10;

export const calculateKatanaBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 200 + level + 3.9 * AGI + 0.3 * STR;

export const calculateHalberdBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 25 + level + 3.5 * AGI + 0.2 * STR;

export const calculateBareHandBaseAttackSpeed = (
  level: number,
  AGI: number
) => 1000 + level + 9.6 * AGI;

const calculateActionTimeReduction = (attackSpeed: number) => {
  const raw = (attackSpeed - 1000) / 180;

  const effective = raw > 50 ? 50 : raw;

  return effective;
};

// max hp

export const calculateBaseMaxHP = (level: number, VIT: number) =>
  93 + ((VIT + 22.4) * level) / 3;

// max mp

export const calculateBaseMaxMP = (
  level: number,
  INT: number,
  TEC: number
) =>
  TEC > 0 ? 100 + level + INT / 10 + (TEC - 1) : 100 + level + INT / 10;

// ailment resistance

export const calculateBaseAilmentResistance = (MTL: number) => MTL / 3.4;

// critical rate

export const calculateBaseCriticalRate = (CRT: number) => 25 + CRT / 3.4;

// critical damage

export const calculateBaseCriticalDamage = (AGI: number, STR: number) =>
  STR >= AGI ? 150 + STR / 5 : 150 + (STR + AGI) / 10;

// cast speed

export const calculateBaseCastSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => level + (1.16 * AGI + 2.94 * DEX);

export const calculateCastingTimeReduction = (castSpeed: number) =>
  castSpeed > 1000
    ? (((castSpeed - 1000) / 90) * 0.5 + 50) / 100
    : castSpeed / 20 / 100;

// ampr

export const calculateAMPR = (maxMP: number) => 10 + maxMP / 100;

// scratch

const actiontime = calculateActionTimeReduction(9341);

const casttime = calculateCastingTimeReduction(10000);

console.log(casttime);

console.log(actiontime);
