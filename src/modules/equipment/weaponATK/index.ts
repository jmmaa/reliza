import { Character } from "../../../std/types";
import * as pino from "@jmmaa/pino";
import { flattenStatsFromEquipment, isDualWielder } from "../../utils";
import { get, sum, total } from "../../../std/op";

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

export const swordMasteryTotalPercentWeaponATK = (
  character: Character
) => {
  const skillLevel = character.skills.blade.swordMastery.level;

  const total =
    character.mainWeapon.type === "one-handed-sword" ||
    character.mainWeapon.type === "two-handed-sword"
      ? skillLevel * 3
      : 0;
  return total;
};

export const bushidoTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.mononofu.bushido.level;

  const total =
    character.mainWeapon.type === "katana" ? skillLevel * 3 : 0;

  return total;
};

export const braveAuraTotalPercentWeaponATK = (character: Character) => {
  const skillLevel = character.skills.support.braveAura.level;
  const isActive = character.skills.support.braveAura.isActive;

  const total = isActive ? 10 + skillLevel * 2 : 0;

  return total;
};

export const totalPercentWeaponATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("percentWeaponATK"))
    .reduce(sum, 0);

  const fromSkills =
    swordMasteryTotalPercentWeaponATK(character) +
    bushidoTotalPercentWeaponATK(character) +
    braveAuraTotalPercentWeaponATK(character);

  const total = fromEquipments + fromSkills;

  return total;
};

export const totalFlatWeaponATK = (character: Character) => {
  const fromEquipments = flattenStatsFromEquipment(character)
    .map(get("flatWeaponATK"))
    .reduce(sum, 0);

  const total = fromEquipments;

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
  const t0tal = isDualWielder(character)
    ? total(
        character.subWeapon.ATK,
        totalPercentWeaponATK(character),
        totalFlatWeaponATK(character)
      ) + totalSubWeaponRefinementBonusSubWeaponATK(character)
    : 0;

  return t0tal;
};
