import {
  AdditionalGear,
  calculate,
  MainWeapon,
  SpecialGear,
  StatGroup,
  UserDefined,
} from "../../src";

const fubbit: UserDefined<StatGroup> = {
  default: {
    percentATK: 6,
    physicalPierce: 20,
    aggro: -15,
    ailmentResistance: -15,
    flatMaxMP: -200,
  },
};

const donProfundo: UserDefined<StatGroup> = {
  default: {
    percentATK: 10,
    percentSTR: 7,
    percentCriticalRate: 8,
    percentDEF: -27,
  },
};

const etoise: UserDefined<StatGroup> = {
  default: {
    percentCriticalRate: 40,
    motionSpeed: 5,
    flatASPD: 1100,
    percentCSPD: -70,
  },
};

const aubergineDragonAuvio: UserDefined<StatGroup> = {
  default: {
    flatMaxMP: 300,
    shortRangeDamage: 4,
    longRangeDamage: -12,
    flatASPD: 500,
    percentCSPD: -70,
  },

  withNinjutsuScroll: {
    percentUnsheatheATK: 5,
    flatCriticalRate: 5,
  },
};

const altadar: UserDefined<StatGroup> = {
  default: {
    stability: 11,
    percentSTR: 6,
    percentVIT: 6,
  },

  withLightArmor: {
    shortRangeDamage: 11,
    stability: -5,
  },

  withHeavyArmor: {
    shortRangeDamage: 11,
    stability: -5,
  },
};

const bemoz: UserDefined<StatGroup> = {
  default: {
    percentATK: 6,
    percentMATK: 6,
    physicalPierce: 8,
    magicPierce: 8,
    flatCriticalRate: 17,
    flatMaxMP: -150,
  },
};

const goblinZucotto: UserDefined<StatGroup> = {
  default: {
    percentATK: 10,
    physicalPierce: 10,
    percentMaxHP: 24,
    aggro: -15,
  },

  withShield: {
    motionSpeed: 1,
  },
};

const evilLefina: UserDefined<StatGroup> = {
  default: {
    percentATK: 8,
    physicalPierce: 10,
    flatCriticalRate: 12,
    percentMATK: -4,
    physicalResistance: -20,
  },
  withHeavyArmor: {
    physicalResistance: 24,
  },
};

const eerieBirdWarblade = (config: {
  weaponATK: number;
  refinement: number;
  crystal1?: UserDefined<StatGroup>;
  crystal2?: UserDefined<StatGroup>;
}): UserDefined<MainWeapon> => ({
  type: "OHS",
  ATK: config.weaponATK,
  refinement: config.refinement,
  stability: 60,
  stats: {
    default: {
      percentATK: 11,
      shortRangeDamage: 11,
      percentCriticalDamage: 11,
      flatASPD: 750,
      flatMaxHP: 5000,
    },
  },
  crystal1: config.crystal1 || {},
  crystal2: config.crystal2 || {},
});

const winkingGingerBreadMan = (config: {
  DEF: number;
  refinement: number;
  crystal1?: UserDefined<StatGroup>;
  crystal2?: UserDefined<StatGroup>;
}): UserDefined<AdditionalGear> => ({
  DEF: config.DEF,
  refinement: config.refinement,
  stats: {
    default: {
      percentATK: 6,
      physicalPierce: 18,
      percentCriticalRate: -5,
    },
  },
  crystal1: config.crystal1 || {},
  crystal2: config.crystal2 || {},
});

const beastLordRing = (config: {
  DEF: number;
  crystal1?: UserDefined<StatGroup>;
  crystal2?: UserDefined<StatGroup>;
}): UserDefined<SpecialGear> => ({
  DEF: config.DEF,
  stats: {
    default: {
      motionSpeed: 5,
      flatMaxMP: 500,
      flatDodge: 50,
      percentCriticalRate: -50,
    },
  },
  crystal1: config.crystal1 || {},
  crystal2: config.crystal2 || {},
});

const calculations = calculate({
  properties: {
    DEX: 277,
    STR: 510,
    level: 305,
  },

  equipments: {
    mainweapon: eerieBirdWarblade({
      weaponATK: 637,
      refinement: 15,
      crystal1: fubbit,
      crystal2: donProfundo,
    }),

    subweapon: {
      type: "MD",
      stats: {
        default: { lightElement: 1 },
      },

      refinement: 15,
    },

    additionalGear: winkingGingerBreadMan({
      DEF: 0,
      refinement: 15,
      crystal1: goblinZucotto,
      crystal2: evilLefina,
    }),

    armor: {
      DEF: 0,
      type: "LIGHT_ARMOR",
      stats: {
        default: {
          damageToEarth: 22,
          percentCriticalDamage: 11,
          flatCriticalDamage: 22,
          flatCriticalRate: 28,
        },
      },
      crystal1: altadar,
      crystal2: bemoz,
    },

    specialGear: beastLordRing({
      DEF: 0,
      crystal1: etoise,
      crystal2: aubergineDragonAuvio,
    }),
  },

  statModifiers: {
    magicBladeSkills: {
      magicWarriorMastery: { level: 10 },
      resonance: { level: 10, buffIsActive: true, set: "C" },
    },

    battleSkills: {
      attackUP: { level: 10 },
      criticalUP: { level: 10 },
    },

    bladeSkills: {
      berserk: { level: 10, buffIsActive: true },
      quickSlash: { level: 10 },
      swordMastery: { level: 10 },
      warCry: { level: 10, buffIsActive: true },
    },

    supportSkills: {
      braveAura: { level: 10, buffIsActive: true },
    },

    halberdSkills: {
      quickAura: { level: 10, buffIsActive: true },
    },

    regislets: {
      magicAttackBoost: { level: 30 },
      magicSpeedBoost: { level: 100 },
      attackSpeedBoost: { level: 100 },
      focusResonance: { level: 9 },
    },
  },

  consumables: [
    { physicalPierce: 10 },
    { percentWeaponATK: 30 },
    { flatCriticalDamage: 12 },
    { physicalPierce: 24 }, // from ava
    { flatASPD: 1000 }, // tera
    { percentATK: 3 },
    { damageToEarth: 5 },
  ],

  foodBuffs: [
    { flatCriticalRate: 30 },
    { flatMaxMP: 1000 },
    { flatSTR: 30 },
    { damageToEarth: 15 },
    { flatWeaponATK: 100 },
  ],
});

console.log(
  calculations.totalBaseATK,
  calculations.totalPercentATK,
  calculations.totalATK,
);
