import Decimal from "decimal.js";

Decimal.set({ precision: 15, rounding: 1 });

export type DamageCalcConfig = {
  player: {
    level: number;
    isAffectedByLethargy: boolean;

    totalBaseINT: number;
    overlimitLevel: number;
    isOverlimitBuffActive: boolean;

    ultimaLionRageLevel: number;
    isUltimaLionRageBuffActive: boolean;

    braveAuraLevel: number;
    isBraveAuraBuffActive: boolean;

    manaRechargeLevel: number;
    isManaRechargeBuffActive: boolean;

    auraBladeLevel: number;
    isAuraBladeBuffActive: boolean;

    flashBlinkLevel: number;
    isFlashBlinkBuffActive: boolean;

    spellBurstLevel: number;

    longRangeLevel: number;
    swordTechniquesLevel: number;
    martialDisciplineLevel: number;
    whackLevel: number;
    concentrateLevel: number;

    totalPercentUnsht: number;
    totalFlatUnsht: number;
    totalPercentStab: number;
    totalPercentSRD: number;
    totalPercentLRD: number;
    totalPercentFinalCDMG: number;
    totalDTEarth: number;
    totalDTFire: number;
    totalDTWater: number;
    totalDTWind: number;
    totalDTLight: number;
    totalDTDark: number;
    totalDTNeutral: number;
  };

  target: {
    level: number;
    resistance: number;
    defense: number;
    currentProrationValue: number;
    weaponResistance: number;
    element:
      | "LIGHT"
      | "DARK"
      | "EARTH"
      | "WIND"
      | "FIRE"
      | "WATER"
      | "NEUTRAL";
  };

  damage: {
    damageSource:
      | "DUAL_SWORDS"
      | "MAGICAL"
      | "PHYSICAL"
      | "WIZARD"
      | "MAGIC_WARRIOR"
      | "DRACONIC_CHARGE_2ND_HIT";

    base: number;
    pierce: number;
    constant: number;
    innateMultiplier: number;

    // --- crit-related ---
    criticalDamageMultiplierCalculation:
      | "PHYSICAL"
      | "MAGICAL"
      | "DUAL_BRINGER";

    // --- distance-related ---
    distanceMultiplierCalculation: "SRD" | "LRD" | "PLACED";

    // --- stability-related ---
    stabilityCalculation: "MAGICAL" | "PHYSICAL";
    isGrazed: boolean;

    // --- element-related ---
    fixedElement:
      | "LIGHT"
      | "DARK"
      | "EARTH"
      | "WIND"
      | "FIRE"
      | "WATER"
      | "NEUTRAL";
    mainWeaponElement:
      | "LIGHT"
      | "DARK"
      | "EARTH"
      | "WIND"
      | "FIRE"
      | "WATER"
      | "NEUTRAL";
    subWeaponElement:
      | "LIGHT"
      | "DARK"
      | "EARTH"
      | "WIND"
      | "FIRE"
      | "WATER"
      | "NEUTRAL";
    isAffectedByBonusDTEFromINT: boolean;

    // --- skill-related ---
    isAffectedByLongRangePassive: boolean;
    isAffectedBySwordTechniques: boolean;
    isAffectedByMartialDiscipline: boolean;
    isAffectedByWhack: boolean;
    isAffectedByConcentrate: boolean;

    // --- combo-related ---
    numberOfConsecutiveTagsInCombo: number; // shud be from 1-9
    positionAfterSaveTaggedSkill: number; // shud be from 1-9
    isAfterSmiteTaggedSkill: boolean;
    isBloodsuckerSpiritEffectActive: boolean;
    comboCount: number; // shud be from 1-9
    comboTagUsed: "SAVE" | "CONSECUTIVE" | "SMITE" | "BLOODSUCKER";

    // --- other multipliers ---
    dropRateGemRelatedMultiplier: number;
    isGuarded: boolean;
  };
};

export type DamageInstance = {
  sourceLevel: number;
  targetLevel: number;
  effectiveSource: number;
  pierce: number;
  resistance: number;
  defense: number;
  constant: number;
  flatUnsheatheAttack: number;
  criticalDamageMultiplier: number;
  elementRelatedMultiplier: number;
  innateMultiplier: number;
  percentUnsheatheAttack: number;
  stabilityMultiplier: number;
  prorationMultiplier: number;
  skillRelatedMultiplier: number;
  distanceRelatedMultiplier: number;
  lethargyMultiplier: number;
  lastDamageMultiplier: number;
  comboRelatedMultiplier: number;
  dropRateGemRelatedMultiplier: number;
  guardMultiplier: number;
  ultimaLionRageMultiplier: number;
};

export const d = Decimal;

export const baseDamage = (dmgInstance: DamageInstance) =>
  d(dmgInstance.effectiveSource)
    .plus(d(dmgInstance.sourceLevel))
    .minus(d(dmgInstance.targetLevel))
    .times(d(d(100).minus(d(dmgInstance.resistance))).dividedBy(100));

export const effectiveDefense = (dmgInstance: DamageInstance) =>
  // FORMULA
  // dmgInstance.defense * (1 - dmgInstance.pierce / 100);

  d(dmgInstance.defense).times(
    d(d(100).minus(dmgInstance.pierce).dividedBy(100)),
  );

export const damage = (dmgInstance: DamageInstance) => {
  let dmg = baseDamage(dmgInstance).minus(effectiveDefense(dmgInstance));

  dmg = dmg.plus(d(dmgInstance.constant));
  dmg = Decimal.round(dmg);

  dmg = dmg.plus(d(dmgInstance.flatUnsheatheAttack));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.criticalDamageMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.elementRelatedMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.innateMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.percentUnsheatheAttack));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.stabilityMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.prorationMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.skillRelatedMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.distanceRelatedMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.lethargyMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.lastDamageMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.comboRelatedMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.dropRateGemRelatedMultiplier));
  dmg = Decimal.round(dmg);

  dmg = dmg.times(d(dmgInstance.ultimaLionRageMultiplier));
  dmg = Decimal.round(dmg);

  return dmg;
};

// TODO: finish these calculations

// console.log(ensureDecimal(123));

// console.log(
//   effectiveDefense({
//     sourceLevel: 290,
//     targetLevel: 1,
//     base: 5078,
//     pierce: 100,
//     resistance: 0,
//     defense: 1,
//     constant: 600,
//     flatUnsheatheAttack: 0,
//     criticalDamageMultiplier: 301,
//     elementRelatedMultiplier: 100,
//     innateMultiplier: 1500,
//     percentUnsheatheAttack: 100,
//     stabilityMultiplier: 100,
//     prorationMultiplier: 100,
//     skillRelatedMultiplier: 100,
//     distanceRelatedMultiplier: 100,
//     lethargyMultiplier: 100,
//     lastDamageMultiplier: 100,
//     comboRelatedMultiplier: 110,
//     dropRateGemRelatedMultiplier: 100,
//     guardMultiplier: 100,
//     ultimaLionRageMultiplier: 100,
//   }),
// );

console.log(
  damage({
    sourceLevel: 290,
    targetLevel: 1,
    effectiveSource: 5078,
    pierce: 50,
    resistance: 0,
    defense: 3210,
    constant: 600,
    flatUnsheatheAttack: 0,
    criticalDamageMultiplier: 3.01,
    elementRelatedMultiplier: 1,
    innateMultiplier: 15,
    percentUnsheatheAttack: 1,
    stabilityMultiplier: 1,
    prorationMultiplier: 1,
    skillRelatedMultiplier: 1,
    distanceRelatedMultiplier: 1,
    lethargyMultiplier: 1,
    lastDamageMultiplier: 1,
    comboRelatedMultiplier: 1.1,
    dropRateGemRelatedMultiplier: 1,
    guardMultiplier: 1,
    ultimaLionRageMultiplier: 1,
  }),
);
// TODO  maybe finish this
