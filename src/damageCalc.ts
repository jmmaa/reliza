export type Target = {
  magicalResistance: number;
  physicalResistance: number;
  weaponResistance: number;

  element: "light" | "dark" | "earth" | "wind" | "fire" | "water";

  currentProrationMultiplier: number;

  MDEF: number;
  DEF: number;

  criticalResistance: number;

  distance: number;

  level: number;
};

export type DamageInstance = {
  sourceLevel: number;
  targetLevel: number;
  base: number;
  pierce: number;
  resistance: number;
  defense: number;
  constant: number;
  flatUnsheatheAttack: number;
  criticalDamageMultiplier: number;
  elementRelatedDamageMultiplier: number;
  innateDamageMultiplier: number;
  percentUnsheatheAttack: number;
  stabilityDamageMultiplier: number;
  prorationDamageMultiplier: number;
  skillRelatedDamageMultiplier: number;
  distanceRelatedDamageMultiplier: number;
  lethargyDamageMultiplier: number;
  lastDamageMultiplier: number;
  comboRelatedDamageMultiplier: number;
  dropRateGemRelatedDamageMultiplier: number;
  guardDamageMultiplier: number;
  ultimaLionRageDamageMultiplier: number;
};

export const baseDamage = (d: DamageInstance) =>
  (d.base + d.sourceLevel - d.targetLevel) * ((100 - d.resistance) / 100);

export const effectiveDefense = (d: DamageInstance) =>
  d.defense * (1 - d.pierce / 100);

export const calculateGenericDamage = (d: DamageInstance) => {
  let dmg;

  dmg = Math.round(baseDamage(d)) - Math.round(effectiveDefense(d));
  dmg = Math.round(dmg);

  dmg += d.constant;

  dmg += d.flatUnsheatheAttack;

  dmg *= d.criticalDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.elementRelatedDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.innateDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.percentUnsheatheAttack / 100;
  dmg = Math.round(dmg);

  dmg *= d.stabilityDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.prorationDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.skillRelatedDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.distanceRelatedDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.lethargyDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.lastDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.comboRelatedDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.dropRateGemRelatedDamageMultiplier / 100;
  dmg = Math.round(dmg);

  dmg *= d.ultimaLionRageDamageMultiplier / 100;
  dmg = Math.round(dmg);

  return dmg;
};
