// base attack speed

export const twoHandedSwordBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 50 + level + 2 * AGI + (AGI + STR - 1) / 5;

export const dualWieldBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 100 + level + 4 * AGI + (AGI + STR - 1) / 5;

export const bowBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 75 + level + 3 * AGI + (AGI + 2 * DEX - 1) / 10;

export const bowgunBaseAttackSpeed = (
  level: number,
  AGI: number,
  DEX: number
) => 30 + level + 2.2 * AGI + 0.2 * DEX;

export const staffBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 60 + level + AGI + (4 * AGI + INT - 1) / 5;

export const magicDeviceBaseAttackSpeed = (
  level: number,
  AGI: number,
  INT: number
) => 90 + level + 4 * AGI + (INT - 1) / 5;

export const knuckleBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number,
  DEX: number
) => 120 + level + 4.6 * AGI + DEX / 10 + STR / 10;

export const katanaBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 200 + level + 3.9 * AGI + 0.3 * STR;

export const halberdBaseAttackSpeed = (
  level: number,
  AGI: number,
  STR: number
) => 25 + level + 3.5 * AGI + 0.2 * STR;

export const bareHandBaseAttackSpeed = (level: number, AGI: number) =>
  1000 + level + 9.6 * AGI;

export const actionTimeReduction = (attackSpeed: number) => {
  const raw = Math.floor((attackSpeed - 1000) / 180);

  const effective = raw > 50 ? 50 : raw;

  return effective / 100;
};

// max hp

export const baseMaxHP = (level: number, VIT: number) =>
  93 + ((VIT + 22.4) * level) / 3;

// max mp

export const baseMaxMP = (level: number, INT: number, TEC: number) =>
  TEC > 0 ? 100 + level + INT / 10 + (TEC - 1) : 100 + level + INT / 10;

// ailment resistance

export const baseAilmentResistance = (MTL: number) => MTL / 3.4;

// critical rate

export const baseCriticalRate = (CRT: number) => 25 + CRT / 3.4;

// critical damage

export const baseCriticalDamage = (AGI: number, STR: number) =>
  STR >= AGI ? 150 + STR / 5 : 150 + (STR + AGI) / 10;

// cast speed

export const baseCastSpeed = (level: number, AGI: number, DEX: number) =>
  level + (1.16 * AGI + 2.94 * DEX);

export const castTimeReduction = (castSpeed: number) =>
  castSpeed > 1000
    ? (((castSpeed - 1000) / 90) * 0.5 + 50) / 100
    : castSpeed / 20 / 100;

// ampr

export const attackMPRecovery = (maxMP: number) => 10 + maxMP / 100;

// weapon attack

export const weaponAttackRefinementBonus = (
  refinementValue: number,
  baseWeaponAttack: number
) => {
  const percent = refinementValue ** 2 / 100;

  const flat = refinementValue;

  const refinementBonus = Math.floor(baseWeaponAttack * percent + flat);

  return refinementBonus;
};

export const subWeaponAttackRefinementBonus = (
  refinementValue: number,
  baseSubWeaponAttack: number
) => {
  /*
  
    the actual calculation based on phantom library is:
  
    Sub Weapon ATK = Attack value of subhand sword * 
    (1 + Weapon ATK%/100 + refine of weapon²/200) + refine of weapon + flat Weapon ATK
  
    however it seems like its an inconsistency in the coryn.club example, imma search more on this.
  
    */
  const percent = refinementValue ** 2 / 200;

  const flat = refinementValue;

  return Math.floor(baseSubWeaponAttack * percent + flat);
};

// stability

export const oneHandedSwordStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + 3 * DEX) / 40;

export const twoHandedSwordStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 10;

// essentially the same to ohs stab
export const dualWieldStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + 3 * DEX) / 40;

export const dualWieldSubStability = (
  subWeaponStability: number,
  STR: number,
  AGI: number
) => subWeaponStability / 2 + (3 * STR + 2 * AGI) / 50;

export const bowStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + DEX) / 20;

export const bowgunStability = (weaponStability: number, STR: number) =>
  weaponStability + STR / 20;

export const staffStability = (weaponStability: number, STR: number) =>
  weaponStability + STR / 20;

export const magicDeviceStability = (
  weaponStability: number,
  DEX: number
) => weaponStability + DEX / 10;

export const knuckleStability = (weaponStability: number, DEX: number) =>
  weaponStability + DEX / 40;

export const halberdStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (STR + DEX) / 20;

export const katanaStability = (
  weaponStability: number,
  STR: number,
  DEX: number
) => weaponStability + (3 * STR + DEX) / 40;

export const bareHandStability = (weaponStability: number, DEX: number) =>
  weaponStability + DEX / 3;

export const magicStability = (stability: number) => (100 + stability) / 2;

// drop rate
export const baseDropRate = (LUK: number) => Math.floor(LUK / 5);

// ATK

export const oneHandedSwordBaseAttack = (
  level: number,
  weaponAttack: number,
  STR: number,
  DEX: number
) => level + STR * 2 + DEX * 2 + weaponAttack;

// scratch

const cspd = castTimeReduction(6380);

console.log(cspd);
