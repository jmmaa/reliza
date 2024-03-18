import { get, sum, total } from "../../../std/op";
import { Character } from "../../../std/types";
import { flattenStatsFromEquipment } from "../../utils";

export const godSpeedFlatAGI = (character: Character) => {
  const skillLevel = character.skills.dualSword.godspeed.level;

  const total = skillLevel * 1 + Math.max(skillLevel - 5, 0);
  return total;
};

export const totalPercentAGI = (character: Character) => {
  return flattenStatsFromEquipment(character)
    .map(get("percentAGI"))
    .reduce(sum, 0);
};

export const totalFlatAGI = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatAGI"))
    .reduce(sum, 0);

  const fromSkills = godSpeedFlatAGI(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalAGI = (character: Character) => {
  return total(
    character.AGI,
    totalPercentAGI(character),
    totalFlatAGI(character)
  );
};
