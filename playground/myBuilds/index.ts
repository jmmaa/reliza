import { StatGroup, UserDefined } from "../../src";

export const fullBlossomCharmstone: UserDefined<StatGroup> = {
  default: {
    flatCSPD: 750,
    flatASPD: 750,
    flatMaxMP: 200,
    ailmentResistance: -8,
  },
};

export const starWizard: UserDefined<StatGroup> = {
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

export const screamShadow: UserDefined<StatGroup> = {
  default: {
    flatMaxMP: 300,
    percentDEF: -40,
    flatCSPD: 1000,
    percentCriticalRate: 20,
  },
};

export const cookieWings: UserDefined<StatGroup> = {
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

export const jibrilIII: UserDefined<StatGroup> = {
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

export const mieli: UserDefined<StatGroup> = {
  default: {
    flatASPD: 400,
    flatCSPD: 400,
    percentCriticalRate: 20,
    percentMaxHP: -20,
    magicPierce: 10,
  },
};

export const bangrudom: UserDefined<StatGroup> = {
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

export const gegner: UserDefined<StatGroup> = {
  default: {
    percentINT: 6,
    percentMATK: 10,
    percentCSPD: 40,
    percentAMPR: 10,
  },
};

export const torexesa: UserDefined<StatGroup> = {
  default: {
    percentMATK: 10,
    percentATK: 10,
    flatMaxMP: -200,
    flatAMPR: 4,
  },
};

export const diark: UserDefined<StatGroup> = {
  default: {
    percentMATK: 8,
    percentCSPD: -16,
    magicPierce: 20,
  },
};

export const vatudo: UserDefined<StatGroup> = {
  default: {
    percentMATK: 10,
    percentMDEF: -30,
    aggro: -11,
    magicPierce: 7,
  },
};

export const macaronHead: UserDefined<StatGroup> = {
  default: {
    flatCSPD: 750,
    percentCSPD: 50,
    magicPierce: 25,
  },
  withNinjutsuScroll: {
    physicalPierce: 25,
  },
};
