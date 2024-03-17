import { Character } from "../../std/types";
import { floor } from "../../std/op";
import {
  totalFlatAGIFromEquipment,
  totalFlatDEXFromEquipment,
  totalPercentAGIFromEquipment,
  totalPercentDEXFromEquipment,
} from "../totalFromEquipment";

export const totalBaseCSPD = (character: Character) => {
  //

  const totalPercentAGI = totalPercentAGIFromEquipment(character);
  const totalFlatAGI = totalFlatAGIFromEquipment(character);

  const totalPercentDEX = totalPercentDEXFromEquipment(character);
  const totalFlatDEX = totalFlatDEXFromEquipment(character);

  const totalAGI = floor(
    character.AGI * (1 + totalPercentAGI / 100) + totalFlatAGI
  );
  const totalDEX = floor(
    character.DEX * (1 + totalPercentDEX / 100) + totalFlatDEX
  );

  const total = floor(character.level + 1.16 * totalAGI + 2.94 * totalDEX);

  return total;
};
