import { Character } from "../../../types";
import { dualSwordMasteryPercentCriticalRatePenaltyReduction } from "../../dualSwordSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";

export const totalBaseCriticalRate = (character: Character) => {
  const total = floor(25 + character.CRT / 3.4);

  return total;
};

export const totalPercentCriticalRate = (character: Character) => {
  const fromEquipments =
    flattenStatsFromEquipment(character)
      .map(get("percentCriticalRate"))
      .reduce(sum, 0) +
    dualSwordMasteryPercentCriticalRatePenaltyReduction(character);

  const total = fromEquipments;

  return total;
};

export const totalFlatCriticalRate = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatCriticalRate"))
    .reduce(sum, 0);

  const total = fromEquipments;

  return total;
};

export const totalCriticalRate = (character: Character) => {
  return total(
    totalBaseCriticalRate(character),
    totalPercentCriticalRate(character),
    totalFlatCriticalRate(character)
  );
};

//

export const spellBurstTotalCriticalRateRatio = (character: Character) => {
  const skillLevel = character.skills.battleSkills.spellBurst.level;
  const total = 2.5 * skillLevel;
  return total;
};

export const totalMagicCriticalRateRatio = (character: Character) => {
  const total = spellBurstTotalCriticalRateRatio(character);

  return total;
};

export const totalMagicCriticalRate = (character: Character) => {
  const total = floor(
    totalCriticalRate(character) *
      (totalMagicCriticalRateRatio(character) / 100)
  );

  return total;
};

// add edge cases?

export const totalMagicCriticalRateAgainstWeakenedTarget = (
  character: Character
) => {
  const total =
    totalCriticalRate(character) *
    ((totalMagicCriticalRateRatio(character) + 50) / 100);

  return total;
};
