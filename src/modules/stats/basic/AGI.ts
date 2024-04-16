import { Character } from "../../../types";
import { godspeedTotalFlatAGI } from "../../dualSwordSkills";
import { sum, total, flattenStatsFromEquipment, get } from "../../utils";

export const totalPercentAGIFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentAGI"))
    .reduce(sum, 0);

export const totalPercentAGI = (character: Character) =>
  totalPercentAGIFromEquipment(character);

export const totalFlatAGIFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatAGI")).reduce(sum, 0);

export const totalFlatAGI = (character: Character) =>
  totalFlatAGIFromEquipment(character) + godspeedTotalFlatAGI(character);

export const totalAGI = (character: Character) =>
  total(
    character.AGI,
    totalPercentAGI(character),
    totalFlatAGI(character),
  );
