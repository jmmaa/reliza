import { type StatMapBuilder } from "../../src";

export const fullBlossomCharmstone: StatMapBuilder = (config) => [
  ["FLAT_CSPD", 750],
  ["FLAT_ASPD", 750],
  ["FLAT_MAX_MP", 200],
  ["AILMENT_RESISTANCE", -8],
];

export const starWizard: StatMapBuilder = (config) => [
  ["PERCENT_MATK", 9],
  ["PERCENT_CSPD", 9],
  ["ANTICIPATE", 9],
  config.equipments.mainweapon.type === "MAIN_STF" ?
    ["AGGRO", -9]
  : ["AGGRO", 0],
  config.equipments.subweapon.type === "SUB_SHIELD" ?
    ["AGGRO", 9]
  : ["AGGRO", 0],
];

export const screamShadow: StatMapBuilder = (config) => [
  ["FLAT_MAX_MP", 300],
  ["PERCENT_DEF", -40],
  ["FLAT_CSPD", 1000],
  ["PERCENT_CRITICAL_RATE", 20],
];

export const cookieWings: StatMapBuilder = (config) => [
  (
    config.equipments.subweapon.type === "SUB_MD" ||
    config.equipments.mainweapon.type === "MAIN_MD"
  ) ?
    ["MAGIC_PIERCE", 25]
  : ["MAGIC_PIERCE", 0],

  ["PERCENT_DEX", 5],
  ["LONG_RANGE_DAMAGE", 10],
];

export const jibrilIII: StatMapBuilder = (config) => [
  ["LONG_RANGE_DAMAGE", 11],
  ["SHORT_RANGE_DAMAGE", 9],
  ["FLAT_CRITICAL_RATE", 16],
  ["FLAT_NATURAL_MP_REGEN", 6],
  ["PERCENT_NATURAL_MP_REGEN", 12],
  ["FLAT_MAX_MP", 100],
  ["ANTICIPATE", 3],
];

export const mieli: StatMapBuilder = (config) => [
  ["FLAT_CSPD", 400],
  ["FLAT_ASPD", 400],
  ["PERCENT_CRITICAL_RATE", 20],
  ["PERCENT_MAX_HP", -20],
  ["MAGIC_PIERCE", 10],
];

export const bangrudom: StatMapBuilder = (config) => [
  ["PERCENT_MAX_HP", -20],
  ["PERCENT_ATK", 10],
  ["PERCENT_MATK", 10],
  ["PERCENT_ASPD", 10],
  ["PERCENT_CSPD", 10],

  config.equipments.subweapon.type === "SUB_SHIELD" ?
    ["PERCENT_DEX", 5]
  : ["PERCENT_DEX", 0],
  config.equipments.armor.type === "LIGHT_ARMOR" ?
    ["MAGIC_PIERCE", 5]
  : ["MAGIC_PIERCE", 0],
];

export const gegner: StatMapBuilder = (config) => [
  ["PERCENT_INT", 6],
  ["PERCENT_MATK", 10],
  ["PERCENT_CSPD", 40],
  ["PERCENT_ATTACK_MP_RECOVERY", 10],
];

export const torexesa: StatMapBuilder = (config) => [
  ["PERCENT_MATK", 10],
  ["PERCENT_ATK", 10],
  ["FLAT_MAX_MP", -200],
  ["FLAT_ATTACK_MP_RECOVERY", 4],
];

export const diark: StatMapBuilder = (config) => [
  ["PERCENT_MATK", 8],
  ["PERCENT_CSPD", -16],
  ["MAGIC_PIERCE", 20],
];

export const vatudo: StatMapBuilder = (config) => [
  ["PERCENT_MATK", 10],
  ["PERCENT_MDEF", -30],
  ["AGGRO", -11],
  ["MAGIC_PIERCE", 7],
];
