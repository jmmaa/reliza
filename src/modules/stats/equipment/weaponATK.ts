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
  floor,
} from "../../utils";

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  character: Character,
) =>
  floor(
    character.mainWeapon.ATK *
      (character.mainWeapon.refinement ** 2 / 100),
  ) + character.mainWeapon.refinement;
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  character: Character,
) =>
  isDualWielder(character) ?
    floor(
      character.mainWeapon.ATK *
        (character.mainWeapon.refinement ** 2 / 200) +
        character.mainWeapon.refinement,
    )
  : 0;

export const totalPercentWeaponATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentWeaponATK"))
    .reduce(sum, 0);

export const totalPercentWeaponATKFromSkills = (character: Character) =>
  swordMasteryTotalPercentWeaponATK(character) +
  shotMasteryTotalPercentWeaponATK(character) +
  martialMasteryTotalPercentWeaponATK(character) +
  magicMasteryTotalPercentWeaponATK(character) +
  halberdMasteryTotalPercentWeaponATK(character) +
  bushidoTotalPercentWeaponATK(character) +
  twoHandedTotalPercentWeaponATK(character) +
  braveAuraTotalPercentWeaponATK(character);

export const totalPercentWeaponATK = (character: Character) =>
  totalPercentWeaponATKFromEquipment(character) +
  totalPercentWeaponATKFromSkills(character);

export const totalFlatWeaponATKFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("flatWeaponATK"))
    .reduce(sum, 0);

export const totalFlatWeaponATKFromSkills = (character: Character) =>
  samuraiArcheryTotalFlatWeaponATK(character) +
  unarmedMasteryTotalFlatWeaponATK(character);

export const totalFlatWeaponATK = (character: Character) =>
  totalFlatWeaponATKFromEquipment(character) +
  totalFlatWeaponATKFromSkills(character);

export const totalMainWeaponATK = (character: Character) =>
  total(
    character.mainWeapon.ATK,
    totalPercentWeaponATK(character) +
      flashBlastTotalPercentMainWeaponATK(character),
    totalFlatWeaponATK(character) +
      totalMainWeaponRefinementBonusMainWeaponATK(character),
  );

export const totalSubWeaponATK = (character: Character) =>
  isDualWielder(character) ?
    total(
      character.subWeapon.ATK,
      totalPercentWeaponATK(character),
      totalFlatWeaponATK(character),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(character)
  : 0;
