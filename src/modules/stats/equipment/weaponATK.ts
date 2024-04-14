import { Character } from "../../../types";
import { unarmedMasteryTotalFlatWeaponATK } from "../../bareHandSkills";
import { swordMasteryTotalPercentWeaponATK } from "../../bladeSkills";
import { flashBlastTotalPercentMainWeaponATK } from "../../dualSwordSkills";
import { halberdMasteryTotalPercentWeaponATK } from "../../halberdSkills";
import { magicMasteryTotalPercentWeaponATK } from "../../magicSkills/magicMastery";
import { martialMasteryTotalPercentWeaponATK } from "../../martialSkills";
import {
  bushidoTotalPercentWeaponATK,
  twoHandedTotalPercentWeaponATK,
} from "../../mononofuSkills";
import { samuraiArcheryTotalFlatWeaponATK } from "../../shotSkills";
import { shotMasteryTotalPercentWeaponATK } from "../../shotSkills/shotMastery";
import { braveAuraTotalPercentWeaponATK } from "../../supportSkills";
import {
  get,
  sum,
  total,
  flattenStatsFromEquipment,
  isDualWielder,
} from "../../utils";
import * as pino from "@jmmaa/pino";

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  character: Character,
) => {
  const total = pino.weaponRefinementBonusWeaponAttack(
    character.mainWeapon.refinement,
    character.mainWeapon.ATK,
  );

  return total;
};

export const totalSubWeaponRefinementBonusSubWeaponATK = (
  character: Character,
) => {
  const total = isDualWielder(character)
    ? pino.subWeaponRefinementBonusSubWeaponAttack(
        character.subWeapon.refinement,
        character.subWeapon.ATK,
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
    halberdMasteryTotalPercentWeaponATK(character) +
    bushidoTotalPercentWeaponATK(character) +
    twoHandedTotalPercentWeaponATK(character) +
    braveAuraTotalPercentWeaponATK(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatWeaponATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatWeaponATK"))
    .reduce(sum, 0);

  const fromSkills =
    samuraiArcheryTotalFlatWeaponATK(character) +
    unarmedMasteryTotalFlatWeaponATK(character); // need to confirm that this is considered flat value;

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalMainWeaponATK = (character: Character) => {
  const fromSkills = flashBlastTotalPercentMainWeaponATK(character);

  return (
    total(
      character.mainWeapon.ATK,
      totalPercentWeaponATK(character) + fromSkills,
      totalFlatWeaponATK(character),
    ) + totalMainWeaponRefinementBonusMainWeaponATK(character)
  );
};

export const totalSubWeaponATK = (character: Character) => {
  return isDualWielder(character)
    ? total(
        character.subWeapon.ATK,
        totalPercentWeaponATK(character),
        totalFlatWeaponATK(character),
      ) + totalSubWeaponRefinementBonusSubWeaponATK(character)
    : 0;
};
