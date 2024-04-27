export type DamageMetadata = {
  characterLevel: number;

  targetLevel: number;

  defense: number; // MDEF/DEF

  resistance: number; // PRES/MRES

  source: number; // effective atk/matk, wizard atk, etc.

  pierce: number; // ppierce/mpierce

  constant: number;

  flatUnsheatheAttack: number;

  criticalDamage: number;

  elementBonus: number;

  // damage multiplier that only affects this type of skill
  multiplier: number;

  percentUnsheatheAttack: number;

  stability: number;

  proration: number;

  // short/long range damage
  distanceMultiplier: number;

  // if character is affected with lethargy
  isAffectedByLethargy: boolean;

  // brave aura, mana recharge, etc.
  lastDamageMultiplier: number;

  // smite, zero stance, save, consecutive, etc.
  comboMultiplier: number;

  // base drop gem damage reducers
  baseDropGemMultiplier: number;

  // guard effect
  isGuarded: boolean;
};

export const defaultDamageMetadata: DamageMetadata = {
  // the percentage values must follow base 100 as default
  characterLevel: 1,

  targetLevel: 1,

  defense: 0,

  resistance: 0,

  source: 0, // effective atk/matk, wizard atk, etc.

  pierce: 0,

  constant: 0,

  flatUnsheatheAttack: 0,

  criticalDamage: 100,

  elementBonus: 100,

  // damage multiplier that only affects this type of skill
  multiplier: 1,

  percentUnsheatheAttack: 100,

  stability: 0,

  proration: 0,

  // short/long range damage
  distanceMultiplier: 0,

  // if character is affected with lethargy
  isAffectedByLethargy: false,

  // brave aura, mana recharge, etc.
  lastDamageMultiplier: 100,

  // smite, zero stance, save, consecutive, etc.
  comboMultiplier: 100,

  // base drop gem damage reducers
  baseDropGemMultiplier: 100,

  // guard effect
  isGuarded: false,
};

export const damageMetaData = (
  metadata: Partial<DamageMetadata>,
): Partial<DamageMetadata> & DamageMetadata => ({
  ...(defaultDamageMetadata as DamageMetadata),
  ...metadata,
});

/*

Base Damage (Auto attacks/Physical skills) = (ATK + player's level - mob's level) * (100 - mob's Physical Resistance)/100
Base Damage (Magic skills) = (MATK + player's level - mob's level) * (100 - mob's Magic Resistance)/100

Effective DEF = Total DEF * (1 - player's Physical Pierce/100)
Effective MDEF = Total MDEF * (1 - player's Magic Pierce/100)
*/

export const baseDamage = (metadata: DamageMetadata) =>
  ((metadata.source + metadata.characterLevel - metadata.targetLevel) *
    (100 - metadata.resistance)) /
  100;

export const effectiveDefense = (metadata: DamageMetadata) =>
  metadata.defense * ((100 - metadata.pierce) / 100);

// damage calculation
export const calculateDamage = (metadata: DamageMetadata) => {};

// continue this TODO
