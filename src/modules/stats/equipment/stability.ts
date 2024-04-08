import { Character } from "../../../types";
import { berserkTotalStability } from "../../bladeSkills/berserk";
import { samuraiArcheryTotalStability } from "../../shotSkills/samuraiArchery";
import { floor, get, sum, flattenStatsFromEquipment } from "../../utils";
import { totalBaseStability } from "../derived";

export const totalStability = (character: Character) => {
  const fromBase = totalBaseStability(character);

  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("stability"))
    .reduce(sum, 0);

  const fromSkills =
    berserkTotalStability(character) +
    samuraiArcheryTotalStability(character);

  const total = fromBase + fromEquipments + fromSkills;

  return total;
};

export const totalMagicStability = (character: Character) => {
  const stability = totalStability(character);

  const total = floor((100 + stability) / 2);

  return total;
};
