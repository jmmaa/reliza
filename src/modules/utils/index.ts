import { Character } from "../../std/types";
import { concat } from "../../std/op";

export const isDualWielder = (character: Character) => {
  return (
    character.mainWeapon.type === "one-handed-sword" &&
    character.subWeapon.type === "one-handed-sword" &&
    character.skills.dualSword.dualSwordMastery.level > 0
  );
};

export const isUsingStatAccessibleSubWeapon = (character: Character) =>
  character.subWeapon.type === "arrow" ||
  character.subWeapon.type === "dagger" ||
  character.subWeapon.type === "ninjutsu-scroll" ||
  character.subWeapon.type === "shield";

export const flattenStatsFromEquipment = (character: Character) => {
  const equipmentStats = isUsingStatAccessibleSubWeapon(character)
    ? [
        character.mainWeapon.stats,
        character.subWeapon.stats,
        character.additionalGear.stats,
        character.armor.stats,
        character.specialGear.stats,
      ]
    : [
        character.mainWeapon.stats,
        character.additionalGear.stats,
        character.armor.stats,
        character.specialGear.stats,
      ];

  const equipmentCrystals = [
    character.mainWeapon.crystals,
    // character.subWeapon.crystals,
    character.additionalGear.crystals,
    character.armor.crystals,
    character.specialGear.crystals,
  ];

  const external = [character.foodBuffs, character.consumables];

  const flattened = equipmentStats
    .concat(external)
    .concat(equipmentCrystals.reduce(concat))
    .reduce(concat);

  return flattened;
};
