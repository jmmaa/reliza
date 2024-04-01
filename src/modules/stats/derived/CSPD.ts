import { Character } from "../../../types";

import {
  floor,
  get,
  sum,
  total,
  flattenStatsFromEquipment,
} from "../../utils";
import { totalAGI, totalDEX } from "../basic";

export const magicWarriorMasteryTotalFlatCSPD = (character: Character) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device" ? skillLevel * 10 : 0;

  return total;
};

export const magicWarriorMasteryTotalPercentCSPD = (
  character: Character
) => {
  const skillLevel = character.skills.magicBlade.magicWarriorMastery.level;

  const total =
    character.subWeapon.type === "magic-device"
      ? skillLevel * 1 + Math.max(skillLevel - 5, 0)
      : 0;

  return total;
};

export const totalBaseCSPD = (character: Character) => {
  const total = floor(
    character.level +
      1.16 * totalAGI(character) +
      2.94 * totalDEX(character)
  );

  return total;
};

export const totalPercentCSPD = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentCSPD"))
    .reduce(sum, 0);

  const fromSkills = magicWarriorMasteryTotalPercentCSPD(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatCSPD = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatCSPD"))
    .reduce(sum, 0);

  const fromSkills = magicWarriorMasteryTotalFlatCSPD(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalCSPD = (character: Character) => {
  return total(
    totalBaseCSPD(character),
    totalPercentCSPD(character),
    totalFlatCSPD(character)
  );
};
