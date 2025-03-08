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

    spellBurstLevel: number;

    longRangeLevel: number;
    swordTechniquesLevel: number;
    martialDisciplineLevel: number;
    whackLevel: number;
    concentrateLevel: number;

    totalPercentUnsht: number;
    totalFlatUnsht: number;
    totalStab: number;
    totalSRD: number;
    totalLRD: number;
  };

  target: {
    level: number;
    resistance: number;
    defense: number;
    currentProrationValue: number;
    weaponResistance: number;
  };

  damage: {
    pierce: number;
    base: number;
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

    isGuarded: boolean;

    // --- element-related ---
    isAffectedByBonusDTEFromINT: boolean;

    // --- skill-related ---
    isAffectedByLongRangePassive: boolean;
    isAffectedBySwordTechniques: boolean;
    isAffectedByMartialDiscipline: boolean;
    isAffectedByWhack: boolean;
    isAffectedByConcentrate: boolean;

    // --- combo related ---
    numberOfConsecutiveTagsInCombo: number; // shud be from 1-9
    positionAfterSaveTaggedSkill: number; // shud be from 1-9
    isAfterSmiteTaggedSkill: boolean;
    isBloodsuckerSpiritEffectActive: boolean;
    comboCount: number; // shud be from 1-9
    comboTagUsed: "SAVE" | "CONSECUTIVE" | "SMITE" | "BLOODSUCKER";
  };
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

  dmg *= d.criticalDamageMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.elementRelatedMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.innateMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.percentUnsheatheAttack;
  dmg = Math.round(dmg);

  dmg *= d.stabilityMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.prorationMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.skillRelatedMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.distanceRelatedMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.lethargyMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.lastDamageMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.comboRelatedMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.dropRateGemRelatedMultiplier;
  dmg = Math.round(dmg);

  dmg *= d.ultimaLionRageMultiplier;
  dmg = Math.round(dmg);

  return dmg;
};

// TODO: finish these calculations
