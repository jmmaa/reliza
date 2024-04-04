import { Character, Entries } from "../../types";
import { floor } from "../utils";

export const resonanceTotalFlatATK = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const powerResonance = character.regislets.powerResonance;

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
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const powerResonance = character.regislets.powerResonance;

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

export const resonanceTotalFlatASPD = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const speedResonance = character.regislets.speedResonance;

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

  const isSpeedResonanceRegisletActive =
    activeResonanceRegislet === "speedResonance";

  const total = isSpeedResonanceRegisletActive
    ? resonance.isActive && subweapon.type === "magic-device"
      ? floor(
          resonance.level * 25 +
            subweapon.refinement * 50 -
            (resonance.level * 25 + subweapon.refinement * 50) *
              ((95 - 5 * speedResonance.level) / 100)
        )
      : 0
    : resonance.isActive &&
      resonance.currentSetActive === "ASPD/CSPD" &&
      subweapon.type === "magic-device"
    ? floor(resonance.level * 25 + subweapon.refinement * 50)
    : 0;

  return total;
};

export const resonanceTotalFlatCSPD = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const speedResonance = character.regislets.speedResonance;

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

  const isSpeedResonanceRegisletActive =
    activeResonanceRegislet === "speedResonance";

  const total = isSpeedResonanceRegisletActive
    ? resonance.isActive && subweapon.type === "magic-device"
      ? floor(
          resonance.level * 25 +
            subweapon.refinement * 50 -
            (resonance.level * 25 + subweapon.refinement * 50) *
              ((95 - 5 * speedResonance.level) / 100)
        )
      : 0
    : resonance.isActive &&
      resonance.currentSetActive === "ASPD/CSPD" &&
      subweapon.type === "magic-device"
    ? floor(resonance.level * 25 + subweapon.refinement * 50)
    : 0;

  return total;
};

export const resonanceTotalFlatAccuracy = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const focusResonance = character.regislets.focusResonance;

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

  const isFocusResonanceRegisletActive =
    activeResonanceRegislet === "focusResonance";

  const total = isFocusResonanceRegisletActive
    ? resonance.isActive && subweapon.type === "magic-device"
      ? floor(
          35 +
            resonance.level * 2 +
            subweapon.refinement * 3 -
            (35 + resonance.level * 2 + subweapon.refinement * 3) *
              ((95 - 5 * focusResonance.level) / 100)
        )
      : 0
    : resonance.isActive &&
      resonance.currentSetActive === "Accuracy/CriticalRate" &&
      subweapon.type === "magic-device"
    ? floor(35 + resonance.level * 2 + subweapon.refinement * 3)
    : 0;

  return total;
};

export const resonanceTotalFlatCriticalRate = (character: Character) => {
  const resonance = character.skills.magicBladeSkills.resonance;
  const subweapon = character.subWeapon;
  const regislets = character.regislets;

  const regisletEntries = Object.entries(regislets) as Entries<
    typeof regislets
  >;

  const focusResonance = character.regislets.focusResonance;

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

  const isFocusResonanceRegisletActive =
    activeResonanceRegislet === "focusResonance";

  const total = isFocusResonanceRegisletActive
    ? resonance.isActive && subweapon.type === "magic-device"
      ? floor(
          15 +
            resonance.level * 2 +
            subweapon.refinement * 3 -
            (35 + resonance.level * 2 + subweapon.refinement * 3) *
              ((95 - 5 * focusResonance.level) / 100)
        )
      : 0
    : resonance.isActive &&
      resonance.currentSetActive === "Accuracy/CriticalRate" &&
      subweapon.type === "magic-device"
    ? floor(10 + resonance.level * 2 + subweapon.refinement * 3)
    : 0;

  return total;
};
