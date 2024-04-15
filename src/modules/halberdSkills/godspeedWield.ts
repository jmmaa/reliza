import { Character } from "../../types";
import { floor } from "../utils";

export const godspeedWieldTotalFlatASPD = (character: Character) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;

  const isMainHAL = character.mainWeapon.type === "halberd";
  const skillLevel = godspeedWield.level;
  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive
    ? isMainHAL
      ? 30 * skillLevel * stacks + 100 * stacks
      : 30 * skillLevel * stacks
    : 0;

  return total;
};

export const godspeedWieldTotalMotionSpeed = (character: Character) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;

  const skillLevel = godspeedWield.level;
  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive ? skillLevel * stacks : 0;

  return total;
};

export const godspeedWieldTotalPhysicalResistance = (
  character: Character,
) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;
  const almightyWield = character.skills.halberdSkills.almightyWield;

  const isMainHAL = character.mainWeapon.type === "halberd";

  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive
    ? isMainHAL
      ? -(
          (100 - 3 * godspeedWield.level) * stacks +
          45 * stacks +
          floor(almightyWield.level * 0.5) * stacks
        )
      : -((100 - 3 * godspeedWield.level) * stacks)
    : 0;

  return total;
};

export const godspeedWieldTotalMagicResistance = (
  character: Character,
) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;
  const almightyWield = character.skills.halberdSkills.almightyWield;

  const isMainHAL = character.mainWeapon.type === "halberd";

  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive
    ? isMainHAL
      ? -(
          (100 - 3 * godspeedWield.level) * stacks +
          45 * stacks +
          floor(almightyWield.level * 0.5) * stacks
        )
      : -((100 - 3 * godspeedWield.level) * stacks)
    : 0;

  return total;
};

export const godspeedWieldTotalFlatMaxMP = (character: Character) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;

  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive ? -(100 * stacks) : 0;

  return total;
};

export const godspeedWieldTotalPercentEvasionRecharge = (
  character: Character,
) => {
  const godspeedWield = character.skills.halberdSkills.godspeedWield;

  const skillLevel = godspeedWield.level;
  const isActive = godspeedWield.isActive;
  const stacks = godspeedWield.stacks;

  const total = isActive ? skillLevel * stacks : 0;

  return total;
};
