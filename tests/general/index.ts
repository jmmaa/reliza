import {
  character,
  statMap,
  regislets,
  skills,
  magicBladeSkills,
  battleSkills,
  survivalSkills,
  mononofuSkills,
  dualSwordSkills,
  bladeSkills,
  guardSkills,
  calculateInGame,
  calculateAll,
} from "reliza";
import { Character, Crystal } from "reliza/lib/types";

export const lilicarolla = (character: Character) =>
  statMap({
    percentUnsheatheAttack: 18,
    flatMaxMP: -100,
    percentDodge: -5,
  });

export const prudentBlueShadow = (character: Character) =>
  statMap({
    shortRangeDamage: 8,
    longRangeDamage: 8,
    percentUnsheatheAttack: 8,
    flatMaxMP: -150,
  });

export const yuveria = (character: Character) =>
  statMap({
    flatMaxMP: 300,
    physicalResistance: 3,
    magicResistance: 3,
    shortRangeDamage: 6,
    aggro: -15,
  });

export const florizard = (character: Character) =>
  statMap({
    stability: 5,
    magicPierce: 20,
    aggro: -15,
  });

export const altadar = (character: Character) =>
  statMap({
    stability: 6,
    shortRangeDamage: 11,
    percentSTR: 6,
    percentVIT: 6,
  });

export const etoise = (character: Character) =>
  statMap({
    percentCriticalRate: 40,
    flatASPD: 1100,
    motionSpeed: 5,
    percentCSPD: -70,
  });

const myCharacter = character({
  level: 280,

  INT: 475,
  STR: 247,

  mainWeapon: {
    type: "one-handed-sword",
    ATK: 504,
    refinement: 15,
    stability: 80,
    stats: [
      statMap({
        percentMATK: 10,
        percentINT: 10,
        percentCriticalDamage: 10,
        flatCriticalDamage: 22,
        flatCriticalRate: 27,
        flatDodge: -18,
        // flatNaturalMPRegen: -13,
      }),
    ],
    crystals: [florizard],
  },

  subWeapon: {
    type: "magic-device",
    ATK: 333,
    DEF: 0,
    refinement: 15,
    stability: 60,
    scrollCastTimeReduction: 0,
    scrollMPReduction: 0,
    stats: [statMap({ element: "light" })],
    crystals: [],
  },

  armor: {
    refinement: 0,
    DEF: 14,
    type: "light",
    stats: [
      statMap({
        damageToEarth: 22,
        percentCriticalDamage: 11,
        flatCriticalDamage: 22,
        flatCriticalRate: 28,
        physicalPierce: -8,
        percentATK: -14,
        flatAccuracy: -20,
        percentAccuracy: -1,
      }),
    ],

    crystals: [altadar, yuveria],
  },

  additionalGear: {
    DEF: 207,
    refinement: 15,
    stats: [
      statMap({
        magicPierce: 20,
        flatCriticalRate: 25,
        percentCriticalRate: 50,

        // invincible aid
      }),
    ],
    crystals: [prudentBlueShadow, lilicarolla],
  },

  specialGear: {
    DEF: 3,
    stats: [
      statMap({
        flatMaxMP: 200,
        flatASPD: 750,
        flatCSPD: 750,
        ailmentResistance: -8,
      }),
    ],

    crystals: [etoise, lilicarolla],
  },

  skills: skills({
    bladeSkills: bladeSkills({
      swordMastery: { level: 10 },
      quickSlash: { level: 10 },
    }),

    guardSkills: guardSkills({
      lightArmorMastery: { level: 5 },
      mirageEvasion: { level: 10 },
    }),

    magicBladeSkills: magicBladeSkills({
      magicWarriorMastery: {
        level: 10,
      },

      conversion: {
        level: 10,

        isActive: false,
      },

      resonance: {
        level: 10,
        isActive: false,
        currentSetActive: "ASPD/CSPD",
      },

      enchantedSpell: {
        level: 10,
      },

      dualBringer: {
        level: 10,
        isActive: false,
      },

      etherFlare: {
        level: 10,
        inflictedIgniteOnEnemey: false,
      },

      elementSlash: {
        level: 10,
      },

      enchantSword: {
        level: 10,
      },

      enchantedBurst: {
        level: 10,
      },

      unionSword: {
        level: 10,
      },
    }),

    battleSkills: battleSkills({
      magicUP: { level: 10 },
      increasedEnergy: { level: 10 },
      spellBurst: { level: 10 },
      attackUP: { level: 5 },
      criticalUP: { level: 10 },
    }),

    survivalSkills: survivalSkills({
      shortRest: { level: 5 },
      MPBoost: { level: 10 },
    }),

    mononofuSkills: mononofuSkills({
      bushido: { level: 5 },
    }),

    dualSwordSkills: dualSwordSkills({
      godspeed: { level: 10 },
    }),
  }),

  regislets: regislets({
    focusResonance: { level: 9 },
    magicAttackBoost: { level: 30 },
  }),

  foodBuffs: [
    statMap({
      flatCriticalRate: 30,
      flatSTR: 30,
      flatINT: 30,
      flatMaxMP: 1000,
      flatWeaponATK: 44,
    }),
  ],
});

const start = performance.now();
let result = calculateAll(myCharacter);
const end = performance.now();

console.log(result);
console.log(end - start, "ms");
