import { Character } from "../../../types";
import {
  criticalUPTotalPercentCriticalDamage,
  spellBurstTotalMagicCriticalDamageConversion,
} from "../../battleSkills";
import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalAGI, totalSTR } from "../basic";

export const totalBaseCriticalDamage = (character: Character) => {
  const agi = totalAGI(character);
  const str = totalSTR(character);

  return agi > str ? floor(150 + (agi + str) / 10) : floor(150 + str / 5);
};

export const totalPercentCriticalDamageFromEquipment = (
  character: Character,
) =>
  flattenStatsFromEquipment(character)
    .map(get("percentCriticalDamage"))
    .reduce(sum, 0);

export const totalPercentCriticalDamageFromSkills = (
  character: Character,
) => criticalUPTotalPercentCriticalDamage(character);

export const totalPercentCriticalDamage = (character: Character) =>
  totalPercentCriticalDamageFromEquipment(character) +
  totalPercentCriticalDamageFromSkills(character);

// export const totalFlatCriticalDamageFromEquipment = (
//   character: Character,
// ) =>
//   flattenStatsFromEquipment(character)
//     .map(get("flatCriticalDamage"))
//     .reduce(sum, 0);

export const totalFlatCriticalDamage = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatCriticalDamage"))
    .reduce(sum, 0);

export const totalCriticalDamage = (character: Character) => {
  const val = total(
    totalBaseCriticalDamage(character),
    totalPercentCriticalDamage(character),
    totalFlatCriticalDamage(character),
  );

  return val > 300 ? 300 + floor((val - 300) / 2) : val; // soft cap
};

export const totalMagicCriticalDamageConversion = (character: Character) =>
  50 + spellBurstTotalMagicCriticalDamageConversion(character);

export const totalMagicCriticalDamage = (character: Character) =>
  Math.floor(
    100 +
      (totalCriticalDamage(character) - 100) *
        (totalMagicCriticalDamageConversion(character) / 100),
  );
