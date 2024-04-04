import { Character } from "../../types";
import { floor } from "../utils";

// conditions
// - resonance regislets only activate the first one on top of the stack
// - resonance regislets are only active if they have level  > 0

export const resonanceTotalFlatATK = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;

  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as {
    [K in keyof typeof regislets]: [K, (typeof regislets)[K]];
  }[keyof typeof regislets][];

  const powerResonance = character.regislets.powerResonance;

  console.log(
    regisletEntries
      .filter(
        (value) =>
          value[0] === "focusResonance" ||
          value[0] === "speedResonance" ||
          value[0] === "powerResonance"
      )
      .filter((value) => value[1].level > 0)
      .map((value) => value[0])
    // .reduce((_, next) => next, "none") // get first item
  );

  const activeResonanceRegislet = regisletEntries
    .filter(
      (value) =>
        value[0] === "focusResonance" ||
        value[0] === "speedResonance" ||
        value[0] === "powerResonance"
    )
    .filter((value) => value[1].level > 0)
    .map((value) => value[0])
    .reduce((_, next) => next, "none"); // get first item

  const isPowerResonanceRegisletActive =
    activeResonanceRegislet === "powerResonance";

  console.log(activeResonanceRegislet);

  const total = isPowerResonanceRegisletActive
    ? resonance.isActive && subweapon.type === "magic-device"
      ? floor(
          resonance.level * 2 +
            subweapon.refinement * 2 -
            (resonance.level * 2 + subweapon.refinement * 2) *
              ((95 - 5 * powerResonance.level) / 100)
        )
      : 0
    : resonance.isActive &&
      resonance.currentSetActive === "ATK/MATK" &&
      subweapon.type === "magic-device"
    ? floor(resonance.level * 2 + subweapon.refinement * 2)
    : 0;

  return total;
};

export const resonanceTotalFlatMATK = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;

  const total =
    resonance.isActive &&
    resonance.currentSetActive === "ATK/MATK" &&
    subweapon.type === "magic-device"
      ? resonance.level * 2 + subweapon.refinement * 2
      : 0;

  return total;
};

export const resonanceTotalFlatASPD = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;

  const total =
    resonance.isActive &&
    resonance.currentSetActive === "ASPD/CSPD" &&
    subweapon.type === "magic-device"
      ? resonance.level * 25 + subweapon.refinement * 50
      : 0;

  return total;
};

export const resonanceTotalFlatCSPD = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;

  const total =
    resonance.isActive &&
    resonance.currentSetActive === "ASPD/CSPD" &&
    subweapon.type === "magic-device"
      ? resonance.level * 25 + subweapon.refinement * 50
      : 0;

  return total;
};

export const resonanceTotalFlatAccuracy = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;

  const total =
    resonance.isActive &&
    resonance.currentSetActive === "ASPD/CSPD" &&
    subweapon.type === "magic-device"
      ? resonance.level * 25 + subweapon.refinement * 50
      : 0;

  return total;
};
