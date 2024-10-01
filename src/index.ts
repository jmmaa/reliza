// import * as bareHandSkills from "./modules/bareHandSkills";
// import * as battleSkills from "./modules/battleSkills";
// import * as bladeSkills from "./modules/bladeSkills";
// import * as magicBladeSkills from "./modules/magicBladeSkills";
// import * as stats from "./modules/stats";
// import * as wizardSKills from "./modules/wizardSkills";
// import { IntermediateConfig } from "./types";

export * as bareHandSkills from "./modules/bareHandSkills";
export * as battleSkills from "./modules/battleSkills";
export * as bladeSkills from "./modules/bladeSkills";
export * as magicBladeSkills from "./modules/magicBladeSkills";
export * as stats from "./modules/stats";
export * as wizardSKills from "./modules/wizardSkills";
export * as dualSwordSkills from "./modules/dualSwordSkills";
export * as guardSkills from "./modules/guardSkills";
export * as halberdSkills from "./modules/halberdSkills";
export * as hunterSkills from "./modules/hunterSkills";
export * as magicSkills from "./modules/magicSkills";
export * as martialSkills from "./modules/martialSkills";
export * as mononofuSkills from "./modules/mononofuSkills";
export * as ninjaSkills from "./modules/ninjaSkills";
export * as priestSkills from "./modules/priestSkills";
export * as regislets from "./modules/regislets";
export * as shieldSkills from "./modules/shieldSkills";
export * as shotSkills from "./modules/shotSkills";
export * as supportSkills from "./modules/supportSkills";
export * as survivalSkills from "./modules/survivalSkills";
export * as wizardSkills from "./modules/wizardSkills";

export { IntermediateConfig } from "./types";
export { createIntermediateConfig, StatId } from "./modules/utils";
// export const calculateAll = (config: IntermediateConfig) => ({
//   // AGI
//   totalBaseAGI: config["character.AGI"],
//   totalPercentAGI: stats.totalPercentAGI(config),
//   totalFlatAGI: stats.totalFlatAGI(config),
//   totalAGI: stats.totalAGI(config),

//   // DEX
//   totalBaseDEX: config["character.DEX"],
//   totalPercentDEX: stats.totalPercentDEX(config),
//   totalFlatDEX: stats.totalFlatDEX(config),
//   totalDEX: stats.totalDEX(config),

//   // INT
//   totalBaseINT: config["character.INT"],
//   totalPercentINT: stats.totalPercentINT(config),
//   totalFlatINT: stats.totalFlatINT(config),
//   totalINT: stats.totalINT(config),

//   // STR
//   totalBaseSTR: config["character.STR"],
//   totalPercentSTR: stats.totalPercentSTR(config),
//   totalFlatSTR: stats.totalFlatSTR(config),
//   totalSTR: stats.totalSTR(config),

//   // VIT
//   totalBaseVIT: config["character.VIT"],
//   totalPercentVIT: stats.totalPercentVIT(config),
//   totalFlatVIT: stats.totalFlatVIT(config),
//   totalVIT: stats.totalVIT(config),

//   // MAX HP
//   totalBaseMaxHP: stats.totalBaseMaxHP(config),
//   totalPercentMaxHP: stats.totalPercentMaxHP(config),
//   totalFlatMaxHP: stats.totalFlatMaxHP(config),
//   totalMaxHP: stats.totalMaxHP(config),

//   // MAX MP
//   totalBaseMaxMP: stats.totalBaseMaxMP(config),
//   totalPercentMaxMP: stats.totalPercentMaxMP(config),
//   totalFlatMaxMP: stats.totalFlatMaxMP(config),
//   totalMaxMP: stats.totalMaxMP(config),

//   // DEF
//   totalBaseDEF: stats.totalBaseDEF(config),
//   totalPercentDEF: stats.totalPercentDEF(config),
//   totalFlatDEF: stats.totalFlatDEF(config),
//   totalDEF: stats.totalDEF(config),

//   // MDEF
//   totalBaseMDEF: stats.totalBaseMDEF(config),
//   totalPercentMDEF: stats.totalPercentMDEF(config),
//   totalFlatMDEF: stats.totalFlatMDEF(config),
//   totalMDEF: stats.totalMDEF(config),

//   // Critical Damage
//   totalBaseCriticalDamage: stats.totalBaseCriticalDamage(config),
//   totalPercentCriticalDamage: stats.totalPercentCriticalDamage(config),
//   totalFlatCriticalDamage: stats.totalFlatCriticalDamage(config),
//   totalCriticalDamage: stats.totalCriticalDamage(config),
//   totalMagicCriticalDamage: stats.totalMagicCriticalDamage(config),

//   // Critical Rate
//   totalBaseCriticalRate: stats.totalBaseCriticalRate(config),
//   totalPercentCriticalRate: stats.totalPercentCriticalRate(config),
//   totalFlatCriticalRate: stats.totalFlatCriticalRate(config),
//   totalCriticalRate: stats.totalCriticalRate(config),
//   totalMagicCriticalRate: stats.totalMagicCriticalRate(config),

//   // ATK
//   totalBaseATK: stats.totalBaseATK(config),
//   totalPercentATK: stats.totalPercentATK(config),
//   totalFlatATK: stats.totalFlatATK(config),
//   totalATK: stats.totalATK(config),

//   // MATK
//   totalBaseMATK: stats.totalBaseMATK(config),
//   totalPercentMATK: stats.totalPercentMATK(config),
//   totalFlatMATK: stats.totalFlatMATK(config),
//   totalMATK: stats.totalMATK(config),

//   // CSPD
//   totalBaseCSPD: stats.totalBaseCSPD(config),
//   totalPercentCSPD: stats.totalPercentCSPD(config),
//   totalFlatCSPD: stats.totalFlatCSPD(config),
//   totalCSPD: stats.totalCSPD(config),
//   totalCastTimeReduction: stats.totalCastTimeReduction(config),

//   // pierce
//   magicPierce: stats.totalMagicPierce(config),
//   physicalPierce: stats.totalPhysicalPierce(config),

//   // wizard skills
//   totalWizardATK: wizardSKills.totalWizardATK(config),
//   totalWizardSkillsLearned: wizardSKills.totalWizardSkillsLearned(config),
//   totalWizardSkillsPoints: wizardSKills.totalWizardSkillsPoints(config),

//   // magic warrior skills
//   dualBringerTotalATK: magicBladeSkills.dualBringerTotalATK(config),
//   dualBringerTotalMATK: magicBladeSkills.dualBringerTotalMATK(config),
//   dualBringerTotalMagicCriticalRateConversion:
//     magicBladeSkills.dualBringerTotalMagicCriticalRateConversion(config),
//   dualBringerTotalMagicCriticalDamageConversion:
//     magicBladeSkills.dualBringerTotalMagicCriticalDamageConversion(config),
// });
// export const calculateInGameFormatStatus = (
//   config: IntermediateConfig,
// ) => ({
//   AGI: config["character.AGI"],
//   DEX: config["character.DEX"],
//   INT: config["character.INT"],
//   STR: config["character.STR"],
//   VIT: config["character.VIT"],
//   ATK: stats.totalATK(config),
//   MATK: stats.totalMATK(config),
//   DEF: stats.totalDEF(config),
//   MDEF: stats.totalMDEF(config),
//   HIT: stats.totalAccuracy(config),
//   FLEE: stats.totalDodge(config),
//   ASPD: stats.totalASPD(config),
//   CSPD: stats.totalCSPD(config),
//   HP: stats.totalMaxHP(config),
//   MP: stats.totalMaxMP(config),
// });
