import { calculateAll, createIntermediateConfig } from "../src";
import { StatId } from "../src";
import { IntermediateConfig, Stat } from "../src/types";

const diark: Stat[] = [
  [StatId.percentMATK, 8],
  [StatId.magicPierce, 20],
  [StatId.percentCSPD, -16],
];

const vatudo: Stat[] = [
  [StatId.percentMATK, 10],
  [StatId.magicPierce, 7],
  [StatId.percentMDEF, -30],
  [StatId.aggro, -11],
];

const gegner: Stat[] = [
  [StatId.percentMATK, 10],
  [StatId.percentINT, 6],
  [StatId.percentCSPD, 40],
  [StatId.percentAttackMPRecovery, 10],
];

const start = performance.now();

const config = createIntermediateConfig({
  character: {
    level: 285,

    baseStat: {
      basic: {
        INT: 490,
        DEX: 247,
      },
    },

    weapon: {
      type: "staff",
      ATK: 542,
      refinement: 15,
      stability: 50,
      stats: [
        [StatId.fireElement, 1],
        [StatId.percentMATK, 14],
        [StatId.flatCriticalDamage, 22],
        [StatId.flatCriticalRate, 28],
        [StatId.damageToEarth, 22],
      ],
      crystals: [diark, vatudo],
    },

    subweapon: {
      type: "magic-device",
      ATK: 194,
      stability: 70,
      stats: [[StatId.lightElement, 1]],
    },

    armor: {
      DEF: 9,
      type: "light",
      refinement: 15,
      stats: [
        [StatId.damageToEarth, 22],
        [StatId.percentCriticalDamage, 22],
        [StatId.flatCriticalDamage, 22],
        [StatId.flatCriticalRate, 28],
      ],
      crystals: [
        gegner,
        [
          [StatId.percentMaxHP, -20],
          [StatId.percentATK, 10],
          [StatId.percentMATK, 10],
          [StatId.percentASPD, 10],
          [StatId.percentCSPD, 10],
          [StatId.magicPierce, 5],
        ],
      ],
    },

    additionalGear: {
      DEF: 1,
      refinement: 15,
      stats: [
        [StatId.longRangeDamage, 10],
        [StatId.magicPierce, 25],
        [StatId.percentDEX, 5],
      ],
      crystals: [
        [
          [StatId.longRangeDamage, 11],
          [StatId.shortRangeDamage, 9],
          [StatId.flatCriticalRate, 16],
          [StatId.flatMaxMP, 100],
          // nmpr here
        ],
        [
          [StatId.percentMATK, 9],
          [StatId.percentINT, 3],
          [StatId.guardBreak, 10],
        ],
      ],
    },

    specialGear: {
      stats: [
        [StatId.magicPierce, 10],
        [StatId.flatMaxMP, 300],
      ],
      crystals: [
        [
          [StatId.percentCriticalRate, 20],
          [StatId.flatCSPD, 1000],
        ],
        [
          [StatId.percentMATK, 9],
          [StatId.percentCSPD, 9],
        ],
      ],
    },

    skills: {
      wizardSkills: {
        familia: { level: 10 },
        lightning: { level: 10 },
        meteorStrike: { level: 10 },
        blizzard: { level: 10 },
        castMastery: { level: 10 },
        imperialRay: { level: 10 },
        advancedFamilia: { level: 10 },
        stoneBarrier: { level: 10 },
        crystalLaser: { level: 5 },
        manaCrystal: { level: 5 },
        overlimit: { level: 10, isActive: true },
        sorceryGuide: { level: 10 },
      },

      magicBladeSkills: {
        magicWarriorMastery: { level: 10 },
      },

      priestSkills: {
        prayer: { level: 10, isActive: false },
      },
    },

    regislets: {
      magicSpeedBoost: { level: 100 },
    },

    consumables: [
      [StatId.flatCSPD, 700],
      [StatId.magicPierce, 10],
    ],

    foodBuffs: [
      [StatId.flatSTR, 30],
      [StatId.flatMaxMP, 1000],
      [StatId.damageToEarth, 15],
      [StatId.flatWeaponATK, 58],
      [StatId.flatCriticalRate, 30],
    ],
  },
});

console.log(calculateAll(config));

// console.log(flattenedStats(myConfig));

// console.log(totalPercentAGI(myConfig));

// console.log(mainWeaponElement(myConfig));
// console.log(subWeaponElement(myConfig));

const end = performance.now();

console.log(end - start);

// start finishing the config
