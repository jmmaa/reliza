import { Character } from "../../../types";
import {
  criticalUPTotalFlatCriticalRate,
  spellBurstTotalMagicCriticalRateConversion,
} from "../../battleSkills";
import {
  dualSwordControlTotalPercentCriticalRate,
  dualSwordMasteryTotalPercentCriticalRate,
} from "../../dualSwordSkills";
import {
  criticalSpearTotalFlatCriticalRate,
  criticalSpearTotalPercentCriticalRate,
} from "../../halberdSkills";
import { twoHandedTotalFlatCriticalRate } from "../../mononofuSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";

export const totalBaseCriticalRate = (character: Character) =>
  floor(25 + character.CRT / 3.4);

export const totalPercentCriticalRateFromEquipment = (
  character: Character,
) =>
  flattenStatsFromEquipment(character)
    .map(get("percentCriticalRate"))
    .reduce(sum, 0);

export const totalPercentCriticalRateFromSkills = (character: Character) =>
  criticalSpearTotalPercentCriticalRate(character) +
  dualSwordMasteryTotalPercentCriticalRate(character) +
  dualSwordControlTotalPercentCriticalRate(character);

export const totalPercentCriticalRate = (character: Character) =>
  totalPercentCriticalRateFromEquipment(character) +
  totalPercentCriticalRateFromSkills(character);

export const totalFlatCriticalRateFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatCriticalRate"))
    .reduce(sum, 0);

export const totalFlatCriticalRateFromSkills = (character: Character) =>
  criticalSpearTotalFlatCriticalRate(character) +
  twoHandedTotalFlatCriticalRate(character) +
  criticalUPTotalFlatCriticalRate(character);

export const totalFlatCriticalRate = (character: Character) =>
  totalFlatCriticalRateFromEquipment(character) +
  totalFlatCriticalRateFromSkills(character);

export const totalCriticalRate = (character: Character) => {
  return total(
    totalBaseCriticalRate(character),
    totalPercentCriticalRate(character),
    totalFlatCriticalRate(character),
  );
};

//

export const totalMagicCriticalRateConversion = (character: Character) =>
  spellBurstTotalMagicCriticalRateConversion(character);

export const totalMagicCriticalRate = (character: Character) =>
  floor(
    totalCriticalRate(character) *
      (totalMagicCriticalRateConversion(character) / 100),
  );

// add edge cases?
export const totalMagicCriticalRateAgainstWeakenedTarget = (
  character: Character,
) => {
  const total =
    totalCriticalRate(character) *
    ((totalMagicCriticalRateConversion(character) + 50) / 100);

  return total;
};
