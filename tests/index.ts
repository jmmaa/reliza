import { stats, status, DEFAULT, calculate } from "reliza";
import { DeclaredStatusMap, Effect } from "reliza";

export const WickedDragonFazzino = [
  {
    predicate: DEFAULT,
    stats: stats({
      percentCSPD: 5,
      percentMATK: 9,
      percentDEX: 7,
    }),
  },
];

export const lilicarolla: Effect<DeclaredStatusMap>[] = [
  {
    predicate: DEFAULT,
    stats: stats({
      percentUnsheatheAttack: 18,
      flatMaxMP: -100,
      percentDodge: -5,
    }),
  },
];

export const prudentBlueShadow: Effect<DeclaredStatusMap>[] = [
  {
    predicate: DEFAULT,
    stats: stats({
      shortRangeDamage: 8,
      longRangeDamage: 8,
      percentUnsheatheAttack: 8,
    }),
  },
];

export const altadar: Effect<DeclaredStatusMap>[] = [
  {
    predicate: DEFAULT,
    stats: stats({
      percentSTR: 6,
      percentVIT: 6,
    }),
  },
  {
    predicate: (status) => status.armorType === "light",
    stats: stats({
      shortRangeDamage: 11,
      stability: -5,
    }),
  },
  {
    predicate: (status) => status.armorType === "heavy",
    stats: stats({
      longRangeDamage: 11,
    }),
  },
];

export const etoise = [
  {
    predicate: DEFAULT,
    stats: stats({
      percentCSPD: -70,
      percentCriticalRate: 40,
      flatASPD: 1100,
      motionSpeed: 5,
    }),
  },
];

export const ohsMwarr = status({
  level: 280,

  INT: 475,
  STR: 247,

  mainWeaponType: "one-handed-sword",
  mainWeaponATK: 504,
  mainWeaponRefinement: 15,
  mainWeaponStability: 80,
  mainWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentMATK: 10,
        percentINT: 10,
        percentCriticalDamage: 10,
        flatCriticalDamage: 22,
        flatCriticalRate: 27,
      }),
    },
  ],

  mainWeaponCrystals: [
    [
      {
        predicate: DEFAULT,
        stats: stats({
          stability: 5,
          magicPierce: 20,
          aggro: -15,
        }),
      },
    ],
  ],

  subWeaponType: "magic-device",
  subWeaponATK: 333,
  subWeaponRefinement: 15,
  subWeaponStats: [
    {
      predicate: DEFAULT,
      stats: stats({ element: "light" }),
    },
  ],

  additionalGearDEF: 200,
  additionalGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentCriticalRate: 50,
        flatCriticalRate: 25,
        magicPierce: 20,
      }),
    },
  ],

  additionalGearCrystals: [prudentBlueShadow, lilicarolla],
  armorDEF: 9,
  armorRefinement: 15,
  armorStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        percentINT: 10,
        percentCriticalDamage: 11,
        flatCriticalDamage: 22,
        percentCriticalRate: 27,
        flatCriticalRate: 27,
        physicalPierce: -7,
        percentAccuracy: -6,
        flatAccuracy: -18,
      }),
    },
  ],
  armorCrystals: [altadar, lilicarolla],

  specialGearDEF: 0,
  specialGearStats: [
    {
      predicate: DEFAULT,
      stats: stats({
        flatASPD: 750,
        flatCSPD: 750,
        flatMaxMP: 200,
        ailmentResistance: -8,
      }),
    },
  ],
  specialGearCrystals: [
    etoise,
    lilicarolla,
    [
      {
        predicate: DEFAULT,
        stats: stats({
          // foodbuffs
          flatINT: 30,
          flatSTR: 30,
          flatCriticalRate: 30,
          flatWeaponATK: 30,

          // regislet
          flatMATK: 30,
        }),
      },
    ],
  ],

  armorType: "light",

  magicWarriorMasteryLevel: 10,
  conversionLevel: 10,
  resonanceLevel: 10,

  // resonanceIsActive: true,
  enchantedSpellLevel: 10,
  dualBringerLevel: 10,
  dualBringerIsActive: false,

  etherFlareLevel: 10,
  elementSlashLevel: 10,
  enchantSwordLevel: 10,
  enchantedBurstLevel: 10,
  unionSwordLevel: 10,

  magicUPLevel: 10,
  increasedEnergyLevel: 10,

  swordMasteryLevel: 10,

  godspeedLevel: 10,
  flashBlastLevel: 10,

  bushidoLevel: 5,
});

console.log(calculate(ohsMwarr));
