import { Character } from "../../../types";
import { totalAGI, totalSTR } from "../basic";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";

export const totalBaseCriticalDamage = (character: Character) => {
  const agi = totalAGI(character);

  const str = totalSTR(character);

  const total =
    agi > str ? floor(150 + (agi + str) / 10) : floor(150 + str / 5);

  return total;
};

export const totalPercentCriticalDamage = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentCriticalDamage"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalFlatCriticalDamage = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatCriticalDamage"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalCriticalDamage = (character: Character) => {
  return total(
    totalBaseCriticalDamage(character),
    totalPercentCriticalDamage(character),
    totalFlatCriticalDamage(character)
  );
};

export const spellBurstTotalCriticalDamageRatio = (
  character: Character
) => {
  const skillLevel = character.skills.battle.spellBurst.level;
  const total = 2.5 * skillLevel;
  return total;
};

export const totalMagicCriticalDamageRatio = (character: Character) => {
  const total = 50 + spellBurstTotalCriticalDamageRatio(character);

  return total;
};

export const totalMagicCriticalDamage = (character: Character) => {
  const total = floor(
    100 +
      (totalCriticalDamage(character) - 100) *
        (totalMagicCriticalDamageRatio(character) / 100)
  );

  return total;
};
