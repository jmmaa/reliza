import { Character } from "../../types";

export const siphonBarrierTotalPhysicalResistance = (
  character: Character
) => {
  const isMainMD = character.mainWeapon.type === "magic-device";
  const isSubMD = character.mainWeapon.type === "magic-device";

  const skillLevel = character.skills.magicBladeSkills.siphonBarrier.level;

  const total = isMainMD || isSubMD ? skillLevel * 9 : 0;

  return total;
};

export const siphonBarrierTotalMagicResistance = (
  character: Character
) => {
  const isMainMD = character.mainWeapon.type === "magic-device";
  const isSubMD = character.mainWeapon.type === "magic-device";

  const skillLevel = character.skills.magicBladeSkills.siphonBarrier.level;

  const total = isMainMD || isSubMD ? skillLevel * 9 : 0;

  return total;
};

// not included in calc yet!
