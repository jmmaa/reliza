import { Character } from "../../../types";
import * as pino from "@jmmaa/pino";
import {
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
} from "../../utils";
import { braveAuraTotalPercentWeaponATK } from "../../supportSkills";
import { bushidoTotalPercentWeaponATK } from "../../mononofuSkills";
import { swordMasteryTotalPercentWeaponATK } from "../../bladeSkills";
import { shotMasteryTotalPercentWeaponATK } from "../../shotSkills/shotMastery";
import { samuraiArcheryTotalFlatWeaponATK } from "../../shotSkills";
import { martialMasteryTotalPercentWeaponATK } from "../../martialSkills";
import { magicMasteryTotalPercentWeaponATK } from "../../magicSkills/magicMastery";

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  character: Character
) => {
  const total = pino.weaponRefinementBonusWeaponAttack(
    character.mainWeapon.refinement,
    character.mainWeapon.ATK
  );

  return total;
};

export const totalSubWeaponRefinementBonusSubWeaponATK = (
  character: Character
) => {
  const total = isDualWielder(character)
    ? pino.subWeaponRefinementBonusSubWeaponAttack(
        character.subWeapon.refinement,
        character.subWeapon.ATK
      )
    : 0;

  return total;
};

export const totalPercentWeaponATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentWeaponATK"))
    .reduce(sum, 0);

  const fromSkills =
    swordMasteryTotalPercentWeaponATK(character) +
    shotMasteryTotalPercentWeaponATK(character) +
    martialMasteryTotalPercentWeaponATK(character) +
    magicMasteryTotalPercentWeaponATK(character) +
    bushidoTotalPercentWeaponATK(character) +
    braveAuraTotalPercentWeaponATK(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatWeaponATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatWeaponATK"))
    .reduce(sum, 0);

  const fromSkills = samuraiArcheryTotalFlatWeaponATK(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalMainWeaponATK = (character: Character) => {
  return (
    total(
      character.mainWeapon.ATK,
      totalPercentWeaponATK(character),
      totalFlatWeaponATK(character)
    ) + totalMainWeaponRefinementBonusMainWeaponATK(character)
  );
};

export const totalSubWeaponATK = (character: Character) => {
  return isDualWielder(character)
    ? total(
        character.subWeapon.ATK,
        totalPercentWeaponATK(character),
        totalFlatWeaponATK(character)
      ) + totalSubWeaponRefinementBonusSubWeaponATK(character)
    : 0;
};
