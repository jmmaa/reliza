import { Character } from "../../std/types";
import { sum, get, concat } from "../../std/op";
import { totalBaseCSPD } from "../base";

export const flattenedStatsFromEquipment = (character: Character) => {
  const isStatAccessibleSubweapon =
    character.subWeapon.type === "arrow" ||
    character.subWeapon.type === "dagger" ||
    character.subWeapon.type === "shield" ||
    character.subWeapon.type === "ninjutsu-scroll";

  const equipmentStats = isStatAccessibleSubweapon
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

  const equipmentCrystals = isStatAccessibleSubweapon
    ? [
        character.mainWeapon.crystals,
        character.subWeapon.crystals,
        character.additionalGear.crystals,
        character.armor.crystals,
        character.specialGear.crystals,
      ]
    : [
        character.mainWeapon.crystals,
        character.additionalGear.crystals,
        character.armor.crystals,
        character.specialGear.crystals,
      ];

  const flattened = equipmentStats
    .concat(equipmentCrystals.reduce(concat))
    .reduce(concat);

  return flattened;
};

export const totalPercentDEXFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentDEX"))
    .reduce(sum, 0);
};

export const totalPercentAGIFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentAGI"))
    .reduce(sum, 0);
};

export const totalPercentSTRFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentSTR"))
    .reduce(sum, 0);
};

export const totalPercentINTFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentINT"))
    .reduce(sum, 0);
};

export const totalPercentVITFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentVIT"))
    .reduce(sum, 0);
};

export const totalFlatDEXFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatDEX"))
    .reduce(sum, 0);
};

export const totalFlatAGIFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatAGI"))
    .reduce(sum, 0);
};

export const totalFlatSTRFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatSTR"))
    .reduce(sum, 0);
};

export const totalFlatINTFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatINT"))
    .reduce(sum, 0);
};

export const totalFlatVITFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatVIT"))
    .reduce(sum, 0);
};

// CSPD

export const totalFlatCSPDFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("flatCSPD"))
    .reduce(sum, 0);
};

export const totalPercentCSPDFromEquipment = (character: Character) => {
  return flattenedStatsFromEquipment(character)
    .map(get("percentCSPD"))
    .reduce(sum, 0);
};

export const totalCSPD = (character: Character) =>
  totalBaseCSPD(character) *
    (1 + totalPercentCSPDFromEquipment(character)) +
  totalFlatCSPDFromEquipment(character);
