import { Status } from "./calc";
import {
  totalCriticalDamage,
  totalMagicPierce,
  totalMATK,
} from "./internals";
import { Config } from "./internals/data";

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

  dmg = baseDamage(d) - effectiveDefense(d);
  dmg = Math.floor(dmg);

  dmg += d.constant;

  dmg += d.flatUnsheatheAttack;

  dmg *= d.criticalDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.elementRelatedDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.innateDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.percentUnsheatheAttack / 100;
  dmg = Math.floor(dmg);

  dmg *= d.stabilityDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.prorationDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.skillRelatedDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.distanceRelatedDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.lethargyDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.lastDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.comboRelatedDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.dropRateGemRelatedDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  dmg *= d.ultimaLionRageDamageMultiplier / 100;
  dmg = Math.floor(dmg);

  return Math.floor(dmg);
};

const sampleMBURST = calculateGenericDamage({
  defense: 3210,
  resistance: 7,
  sourceLevel: 290,
  targetLevel: 218,
  pierce: 100,
  base: 8729,
  criticalDamageMultiplier: 246,
  stabilityDamageMultiplier: 110,
  constant: 500,
  innateDamageMultiplier: 2600,
  skillRelatedDamageMultiplier: 110,
  lastDamageMultiplier: 120,
  lethargyDamageMultiplier: 100,
  guardDamageMultiplier: 100,
  prorationDamageMultiplier: 250,
  distanceRelatedDamageMultiplier: 121,
  comboRelatedDamageMultiplier: 150,
  elementRelatedDamageMultiplier: 260,
  ultimaLionRageDamageMultiplier: 100,
  dropRateGemRelatedDamageMultiplier: 100,
  flatUnsheatheAttack: 0,
  percentUnsheatheAttack: 100,
});

console.log(sampleMBURST);

export type DamageConfig = {
  isUnsheatheAttack: boolean;
  isGrazed: boolean;
  isGuarded: boolean;

  // constantCalcFunc: (config: Config, target: Target) => number;
  // innateDamageMultiplierCalcFunc: (
  //   config: Config,
  //   target: Target,
  // ) => number;
  // elementalDamageMultiplierCalcFunc: (
  //   config: Config,
  //   target: Target,
  // ) => number;
  // baseCalcFunc: (config: Config, target: Target) => number;
};

export type DamageCalcFunc = (
  target: Target,
  dmgConfig: DamageConfig,
) => number;

export const calculateMagicBurstDamage =
  (config: Config) =>
  (
    target: Target, // dmgConfig: DamageConfig
  ) =>
    calculateGenericDamage({
      defense: target.MDEF,
      resistance: target.magicalResistance,

      sourceLevel: config.properties.level,
      targetLevel: target.level,
      pierce: totalMagicPierce(config),
      base: totalMATK(config),
      criticalDamageMultiplier: totalCriticalDamage(config),
      stabilityDamageMultiplier: 110,
      constant: 200 + 30 * config.skillTrees.magicSkills.magicburst.level,
      innateDamageMultiplier:
        (
          1500 +
            config.skillTrees.magicSkills.magicburst.level * 60 +
            config.equipments.mainweapon.type ===
          "STAFF"
        ) ?
          config.properties.INT / 100
        : config.equipments.mainweapon.type === "MAGIC_DEVICE" ?
          config.properties.INT / 200
        : 0,

      skillRelatedDamageMultiplier: 110,
      lastDamageMultiplier: 120,
      lethargyDamageMultiplier: 100,
      guardDamageMultiplier: 100,
      prorationDamageMultiplier: target.currentProrationMultiplier,
      distanceRelatedDamageMultiplier: 121,
      comboRelatedDamageMultiplier: 150,
      elementRelatedDamageMultiplier: 260,
      ultimaLionRageDamageMultiplier: 100,
      dropRateGemRelatedDamageMultiplier: 100,
      flatUnsheatheAttack: 0,
      percentUnsheatheAttack: 100,
    });
