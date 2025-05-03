import { RecursePartial } from "../../src/stats";
import { type StatMap } from "../../src/stats/types";

export const fullBlossomCharmstone: RecursePartial<StatMap> = {
  default: {
    flatCSPD: 750,
    flatASPD: 750,
    flatMaxMP: 200,
    ailmentResistance: -8,
  },
};

export const starWizard: RecursePartial<StatMap> = {
  default: {
    percentMATK: 9,
    percentCSPD: 9,
    anticipate: 9,
  },

  withStaffs: {
    aggro: -9,
  },

  withShield: {
    aggro: 9,
  },
};

export const screamShadow: RecursePartial<StatMap> =
  // (config) => [
  //   ["FLAT_MAX_MP", 300],
  //   ["PERCENT_DEF", -40],
  //   ["FLAT_CSPD", 1000],
  //   ["PERCENT_CRITICAL_RATE", 20],
  // ];

  {
    default: {
      flatMaxMP: 300,
      percentDEF: -40,
      flatCSPD: 1000,
      percentCriticalRate: 20,
    },
  };

export const cookieWings: RecursePartial<StatMap> = {
  default: {
    percentDEX: 5,
    longRangeDamage: 10,
    percentAccuracy: 25,
  },
  withMagicTools: {
    magicPierce: 25,
  },
  withArrow: {
    percentAccuracy: 25,
  },
};

export const jibrilIII: RecursePartial<StatMap> =
  // (config) => [
  //   ["LONG_RANGE_DAMAGE", 11],
  //   ["SHORT_RANGE_DAMAGE", 9],
  //   ["FLAT_CRITICAL_RATE", 16],
  //   ["FLAT_NATURAL_MP_REGEN", 6],
  //   ["PERCENT_NATURAL_MP_REGEN", 12],
  //   ["FLAT_MAX_MP", 100],
  //   ["ANTICIPATE", 3],
  // ];

  {
    default: {
      longRangeDamage: 11,
      shortRangeDamage: 9,
      flatCriticalRate: 16,
      flatNMPR: 6,
      percentNMPR: 12,
      flatMaxMP: 100,
      anticipate: 3,
    },
  };

export const mieli: RecursePartial<StatMap> =
  // (config) => [
  //   ["FLAT_CSPD", 400],
  //   ["FLAT_ASPD", 400],
  //   ["PERCENT_CRITICAL_RATE", 20],
  //   ["PERCENT_MAX_HP", -20],
  //   ["MAGIC_PIERCE", 10],
  // ];
  {
    default: {
      flatASPD: 400,
      flatCSPD: 400,
      percentCriticalRate: 20,
      percentMaxHP: -20,
      magicPierce: 10,
    },
  };

export const bangrudom: RecursePartial<StatMap> =
  // (config) => [
  //   ["PERCENT_MAX_HP", -20],
  //   ["PERCENT_ATK", 10],
  //   ["PERCENT_MATK", 10],
  //   ["PERCENT_ASPD", 10],
  //   ["PERCENT_CSPD", 10],

  //   config.equipments.subweapon.type === "SUB_SHIELD" ?
  //     ["PERCENT_DEX", 5]
  //   : ["PERCENT_DEX", 0],
  //   config.equipments.armor.type === "LIGHT_ARMOR" ?
  //     ["MAGIC_PIERCE", 5]
  //   : ["MAGIC_PIERCE", 0],
  // ];

  {
    default: {
      percentMaxHP: -20,
      percentATK: 10,
      percentMATK: 10,
      percentASPD: 10,
      percentCSPD: 10,
    },
    withShield: {
      percentDEX: 5,
    },
    withLightArmor: {
      magicPierce: 5,
    },
  };

export const gegner: RecursePartial<StatMap> =
  // (config) => [
  //   ["PERCENT_INT", 6],
  //   ["PERCENT_MATK", 10],
  //   ["PERCENT_CSPD", 40],
  //   ["PERCENT_ATTACK_MP_RECOVERY", 10],
  // ];

  {
    default: {
      percentINT: 6,
      percentMATK: 10,
      percentCSPD: 40,
      percentAMPR: 10,
    },
  };

export const torexesa: RecursePartial<StatMap> =
  // (config) => [
  //   ["PERCENT_MATK", 10],
  //   ["PERCENT_ATK", 10],
  //   ["FLAT_MAX_MP", -200],
  //   ["FLAT_ATTACK_MP_RECOVERY", 4],
  // ];

  {
    default: {
      percentMATK: 10,
      percentATK: 10,
      flatMaxMP: -200,
      flatAMPR: 4,
    },
  };

export const diark: RecursePartial<StatMap> =
  // (config) => [
  //   ["PERCENT_MATK", 8],
  //   ["PERCENT_CSPD", -16],
  //   ["MAGIC_PIERCE", 20],
  // ];

  {
    default: {
      percentMATK: 8,
      percentCSPD: -16,
      magicPierce: 20,
    },
  };

export const vatudo: RecursePartial<StatMap> =
  // (config) => [
  //   ["PERCENT_MATK", 10],
  //   ["PERCENT_MDEF", -30],
  //   ["AGGRO", -11],
  //   ["MAGIC_PIERCE", 7],
  // ];

  {
    default: {
      percentMATK: 10,
      percentMDEF: -30,
      aggro: -11,
      magicPierce: 7,
    },
  };

export const macaronHead: RecursePartial<StatMap> = {
  default: {
    flatCSPD: 750,
    percentCSPD: 50,
    magicPierce: 25,
  },
  withNinjutsuScroll: {
    physicalPierce: 25,
  },
};
