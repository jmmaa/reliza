import { character, magicBladeSkills, regislets, skills } from "../..";
import { resonanceTotalFlatATK } from "./resonance";

test("resonance", () => {
  const myCharacter = character({
    mainWeapon: {
      type: "one-handed-sword",
      ATK: 200,
      refinement: 15,
      stability: 0,
      stats: [],
      crystals: [],
    },
    subWeapon: {
      type: "magic-device",
      ATK: 200,
      DEF: 0,
      refinement: 15,
      stability: 0,
      scrollCastTimeReduction: 0,
      scrollMPReduction: 0,
      stats: [],
      crystals: [],
    },

    skills: skills({
      magicBladeSkills: magicBladeSkills({
        resonance: {
          level: 10,
          isActive: true,
          currentSetActive: "ASPD/CSPD",
        },
      }),
    }),

    regislets: regislets({
      powerResonance: { level: 9 },
    }),
  });

  myCharacter.skills.magicBladeSkills.resonance.level = 10;
  myCharacter.regislets.powerResonance.level = 1;

  expect(myCharacter.skills.magicBladeSkills.resonance.level).toEqual(10);
  expect(myCharacter.regislets.powerResonance.level).toEqual(1);

  let resoFlatATK: number;

  resoFlatATK = resonanceTotalFlatATK(myCharacter);

  expect(resoFlatATK).toEqual(5);

  myCharacter.skills.magicBladeSkills.resonance.level = 10;
  myCharacter.regislets.powerResonance.level = 9;

  expect(myCharacter.skills.magicBladeSkills.resonance.level).toEqual(10);
  expect(myCharacter.regislets.powerResonance.level).toEqual(9);

  resoFlatATK = resonanceTotalFlatATK(myCharacter);

  expect(resoFlatATK).toEqual(25);

  myCharacter.skills.magicBladeSkills.resonance.level = 10;
  myCharacter.regislets.powerResonance.level = 2;

  expect(myCharacter.skills.magicBladeSkills.resonance.level).toEqual(10);
  expect(myCharacter.regislets.powerResonance.level).toEqual(2);

  resoFlatATK = resonanceTotalFlatATK(myCharacter);

  expect(resoFlatATK).toEqual(7);
});
