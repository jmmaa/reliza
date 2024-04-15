import { Character } from "../../types";
import * as stats from "../stats";

export const calculateInGame = (character: Character) => {
  return {
    AGI: character.AGI,

    DEX: character.DEX,

    INT: character.INT,

    STR: character.STR,

    VIT: character.VIT,

    ATK: stats.totalATK(character),

    MATK: stats.totalMATK(character),

    DEF: stats.totalDEF(character),

    MDEF: stats.totalMDEF(character),

    HIT: stats.totalAccuracy(character),

    FLEE: stats.totalDodge(character),

    ASPD: stats.totalASPD(character),

    CSPD: stats.totalCSPD(character),

    HP: stats.totalMaxHP(character),

    MP: stats.totalMaxMP(character),
  };
};

export const calculateAll = (character: Character) => {
  return {
    // AGI
    totalBaseAGI: character.AGI,
    totalFlatAGI: stats.totalFlatAGI(character),
    totalPercentAGI: stats.totalPercentAGI(character),
    totalAGI: stats.totalAGI(character),

    // DEX
    totalBaseDEX: character.DEX,
    totalFlatDEX: stats.totalFlatDEX(character),
    totalPercentDEX: stats.totalPercentDEX(character),
    totalDEX: stats.totalDEX(character),

    // INT
    totalBaseINT: character.INT,
    totalFlatINT: stats.totalFlatINT(character),
    totalPercentINT: stats.totalPercentINT(character),
    totalINT: stats.totalINT(character),

    // STR
    totalBaseSTR: character.STR,
    totalFlatSTR: stats.totalFlatSTR(character),
    totalPercentSTR: stats.totalPercentSTR(character),
    totalSTR: stats.totalSTR(character),

    // VIT
    totalBaseVIT: character.VIT,
    totalFlatVIT: stats.totalFlatVIT(character),
    totalPercentVIT: stats.totalPercentVIT(character),
    totalVIT: stats.totalVIT(character),
  };
};
