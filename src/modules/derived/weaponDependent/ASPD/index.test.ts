import { totalASPD } from ".";

import { character, statMap } from "../../../../std/op";

test("ASPD", () => {
  const sample = character({
    level: 275,

    DEX: 315,
    AGI: 220,
    VIT: 178,

    mainWeapon: {
      type: "magic-device",
      ATK: 99,
      refinement: 0,
      stability: 70,
      stats: [
        statMap({
          percentDEF: 15,
          percentMDEF: 15,
          magicResistance: 30,
          physicalResistance: 30,
          percentCSPD: 100,
          flatCriticalRate: 100,
        }),
      ],
      crystals: [
        [
          statMap({
            percentDEX: 7,
            percentMATK: 9,
            percentCSPD: 5,
          }),
        ],
      ],
    },

    subWeapon: {
      type: "ninjutsu-scroll",
      refinement: 0,
      DEF: 0,
      ATK: 0,
      stability: 0,
      scrollCastTimeReduction: 0,
      scrollMPReduction: 0,
      stats: [
        statMap({
          flatASPD: 250,
        }),
      ],
      crystals: [],
    },

    armor: {
      type: "light",
      refinement: 0,
      DEF: 9,
      stats: [
        statMap({
          percentDEX: 10,
          percentAGI: 10,
          percentASPD: 21,
          percentCSPD: 21,
          percentMaxHP: 10,
        }),
      ],
      crystals: [
        [
          statMap({
            percentINT: 3,
            percentMATK: 7,
            percentCSPD: 35,
            percentAttackMPRecovery: 10,
          }),
        ],
        [
          statMap({
            flatMaxHP: 1000,
            flatASPD: 300,
            tumbleUnavailable: true,
          }),
        ],
      ],
    },

    additionalGear: {
      DEF: 140,
      refinement: 0,
      stats: [
        statMap({
          percentINT: 8,
          percentATK: 8,
          flatAttackMPRecovery: 4,
        }),
      ],
      crystals: [
        [
          statMap({
            percentMATK: 5,
            percentCSPD: 75,
            longRangeDamage: -16,
          }),
        ],
        [
          statMap({
            percentMaxHP: 30,
            flatMaxMP: -300,
            flatASPD: 800,
          }),
        ],
      ],
    },

    specialGear: {
      DEF: 10,

      stats: [
        statMap({ percentMaxHP: 25, flatCriticalRate: 25, aggro: 25 }),
      ],

      crystals: [
        [
          statMap({
            flatASPD: 1100,
            percentCSPD: -70,
            percentCriticalRate: 40,
            motionSpeed: 5,
          }),
        ],
        [
          statMap({
            flatCSPD: 1000,
            percentCriticalRate: 20,
            flatMaxMP: 300,
          }),
        ],
      ],
    },

    // buffs, for now
    consumables: [
      // high cycle
      statMap({
        flatCSPD: 550,
        percentCSPD: 250,
      }),

      // quick motion
      statMap({ flatASPD: 1100, percentASPD: 250 }),
    ],
  });

  expect(totalASPD(sample)).toEqual(9161);
});
