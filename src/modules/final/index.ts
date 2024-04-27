export type DamageMetadata = {
  // for base
  characterLevel: number;
  targetLevel: number;
  defense: number; // MDEF/DEF
  resistance: number; // PRES/MRES
  source: number; // effective atk/matk, wizard atk, etc.
  pierce: number; // ppierce/mpierce
  constant: number;
  flatUnsheatheAttack: number;

  // percentages
  percentCriticalDamage: number;

  percentElementDamage: number;

  // damage multiplier that only affects this type of skill
  percentInnateSkillDamage: number;

  percentUnsheatheAttack: number;

  percentMinimum: number;

  percentMaximum: number;

  percentProration: number;

  // sword techniques, etc.
  percentSkillDamage: number;

  // short/long range damage
  percentDistanceDependentDamage: number;

  // if character is affected with lethargy
  isAffectedByLethargy: boolean;

  // brave aura, mana recharge, etc.
  percentLastDamage: number;

  // smite, zero stance, save, consecutive, etc.
  percentComboRelatedDamage: number;

  // base drop gem damage reducers
  percentBaseDropGemDamage: number;

  // guard effect
  isGuarded: boolean;

  // ultima lion rage
  percentUltimaLionRageDamage: number;
};

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

export const additive = (metadata: DamageMetadata) =>
  baseDamage(metadata) -
  effectiveDefense(metadata) +
  metadata.flatUnsheatheAttack +
  metadata.constant;

export const criticalDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentCriticalDamage / 100;

export const elementDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentElementDamage / 100;

export const innateSkillDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentInnateSkillDamage / 100;

export const unsheatheAttackMultiplier = (metadata: DamageMetadata) =>
  metadata.percentUnsheatheAttack / 100;

export const minimumDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentMinimum / 100;

export const maximumDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentMaximum / 100;

export const prorationMultiplier = (metadata: DamageMetadata) =>
  metadata.percentProration / 100;

export const skillDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentSkillDamage / 100;

export const distanceDependentDamage = (metadata: DamageMetadata) =>
  metadata.percentDistanceDependentDamage / 100;

export const lethargyEffect = (metadata: DamageMetadata) =>
  (metadata.isAffectedByLethargy ? 70 : 100) / 100;

export const lastDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentLastDamage / 100;

export const comboRelatedDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentComboRelatedDamage / 100;

export const baseDropGemDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentBaseDropGemDamage / 100;

export const ultimaLionRageDamageMultiplier = (metadata: DamageMetadata) =>
  metadata.percentUltimaLionRageDamage / 100;

export const multiplicative = (metadata: DamageMetadata) =>
  criticalDamageMultiplier(metadata) *
  elementDamageMultiplier(metadata) *
  innateSkillDamageMultiplier(metadata) *
  unsheatheAttackMultiplier(metadata) *
  prorationMultiplier(metadata) *
  skillDamageMultiplier(metadata) *
  distanceDependentDamage(metadata) *
  lethargyEffect(metadata) *
  lastDamageMultiplier(metadata) *
  comboRelatedDamageMultiplier(metadata) *
  baseDropGemDamageMultiplier(metadata) *
  ultimaLionRageDamageMultiplier(metadata);

// damage calculation
export const calculateMinimumDamage = (metadata: DamageMetadata) =>
  additive(metadata) *
  multiplicative(metadata) *
  minimumDamageMultiplier(metadata);

export const calculateMaximumDamage = (metadata: DamageMetadata) =>
  additive(metadata) *
  multiplicative(metadata) *
  maximumDamageMultiplier(metadata);

// continue this TODO
