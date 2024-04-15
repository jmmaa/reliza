import { Character } from "../../../types";
import { godspeedWieldTotalPercentEvasionRecharge } from "../../halberdSkills";
import { flattenStatsFromEquipment, get, sum } from "../../utils";

export const totalBaseEvasionRecharge = (character: Character) => {
  // TODO
};

export const totalPercentEvasionRecharge = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("evasionRecharge"))
    .reduce(sum, 0);
  const fromSkills = godspeedWieldTotalPercentEvasionRecharge(character);

  const total = fromEquipments + fromSkills;

  return total;
};

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now
