import { Character } from "../../types";
import { floor } from "../utils";

export const samuraiArcheryTotalFlatWeaponATK = (character: Character) => {
  const mainweapon = character.mainWeapon;
  const subweapon = character.subWeapon;
  const isMainBow = mainweapon.type === "bow";
  const isSubKatana = subweapon.type === "katana";
  const skillLevel = character.skills.shotSkills.samuraiArchery.level;

  const total =
    isMainBow && isSubKatana
      ? Math.min(
          floor(subweapon.ATK * 0.1 * skillLevel),
          floor(
            mainweapon.ATK *
              floor(mainweapon.stability / 100) *
              0.1 *
              skillLevel
          )
        )
      : 0;

  return total;
};

export const samuraiArcheryTotalStability = (character: Character) => {
  const mainweapon = character.mainWeapon;
  const subweapon = character.subWeapon;
  const isMainBow = mainweapon.type === "bow";
  const isSubKatana = subweapon.type === "katana";
  const samuraiArchery = character.skills.shotSkills.samuraiArchery;
  const skillLevel = samuraiArchery.level;

  const total =
    isMainBow && isSubKatana && skillLevel > 0
      ? floor(subweapon.stability / 4)
      : 0;

  return total;
};

export const samuraiArcheryTotalPercentAccuracy = (
  character: Character
) => {
  const mainweapon = character.mainWeapon;
  const subweapon = character.subWeapon;
  const isMainBow = mainweapon.type === "bow";
  const isSubKatana = subweapon.type === "katana";
  const samuraiArchery = character.skills.shotSkills.samuraiArchery;
  const skillLevel = samuraiArchery.level;
  const stacks = samuraiArchery.stacks;

  const total = isMainBow && isSubKatana ? skillLevel * stacks : 0;

  return total;
};
