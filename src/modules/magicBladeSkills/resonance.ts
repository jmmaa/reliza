import { Character, Entries } from "../../types";
import {
  focusResonanceTotalReduction,
  powerResonanceTotalReduction,
  speedResonanceTotalReduction,
} from "../regislets";
import { floor } from "../utils";

export const resonance = (character: Character) =>
  character.skills.magicBladeSkills.resonance;
export const resonanceLevel = (character: Character) =>
  resonance(character).level;
export const resonanceIsActive = (character: Character) =>
  resonance(character).isActive;

export const resonanceCurrentSetActive = (character: Character) =>
  resonance(character).currentSetActive;

export const regisletEntries = (character: Character) =>
  Object.entries(character.regislets) as Entries<
    typeof character.regislets
  >;

// export const powerResonanceLevel = (character: Character) =>
//   character.regislets.powerResonance.level;
// export const speedResonanceLevel = (character: Character) =>
//   character.regislets.speedResonance.level;
// export const focusResonanceLevel = (character: Character) =>
//   character.regislets.speedResonance.level;

export const activeResonanceRegislet = (character: Character) =>
  regisletEntries(character)
    .filter(
      (value) =>
        value[0] === "focusResonance" ||
        value[0] === "speedResonance" ||
        value[0] === "powerResonance",
    )
    .filter((value) => value[1].level > 0)
    .map((value) => value[0])
    .reduce((_, next) => next, "none"); // get first item

// export const resonanceTotalFlatATK = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const powerResonance = character.regislets.powerResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isPowerResonanceRegisletActive =
//     activeResonanceRegislet === "powerResonance";

//   const total =
//     isPowerResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           resonance.level * 2 +
//             subweapon.refinement * 2 -
//             (resonance.level * 2 + subweapon.refinement * 2) *
//               ((95 - 5 * powerResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "ATK/MATK" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(resonance.level * 2 + subweapon.refinement * 2)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatATK = (character: Character) =>
  activeResonanceRegislet(character) === "powerResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        resonanceLevel(character) * 2 +
          character.subWeapon.refinement * 2 -
          (resonanceLevel(character) * 2 +
            character.subWeapon.refinement * 2) *
            (powerResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "ATK/MATK"
  ) ?
    floor(
      resonanceLevel(character) * 2 + character.subWeapon.refinement * 2,
    )
  : 0;

// ---------------------------------------------------------------------------------------------------------
// export const resonanceTotalFlatMATK = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const powerResonance = character.regislets.powerResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isPowerResonanceRegisletActive =
//     activeResonanceRegislet === "powerResonance";

//   const total =
//     isPowerResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           resonance.level * 2 +
//             subweapon.refinement * 2 -
//             (resonance.level * 2 + subweapon.refinement * 2) *
//               ((95 - 5 * powerResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "ATK/MATK" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(resonance.level * 2 + subweapon.refinement * 2)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatMATK = (character: Character) =>
  activeResonanceRegislet(character) === "powerResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        resonanceLevel(character) * 2 +
          character.subWeapon.refinement * 2 -
          (resonanceLevel(character) * 2 +
            character.subWeapon.refinement * 2) *
            (powerResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "ATK/MATK"
  ) ?
    floor(
      resonanceLevel(character) * 2 + character.subWeapon.refinement * 2,
    )
  : 0;

// export const resonanceTotalFlatASPD = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const speedResonance = character.regislets.speedResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isSpeedResonanceRegisletActive =
//     activeResonanceRegislet === "speedResonance";

//   const total =
//     isSpeedResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           resonance.level * 25 +
//             subweapon.refinement * 50 -
//             (resonance.level * 25 + subweapon.refinement * 50) *
//               ((95 - 5 * speedResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "ASPD/CSPD" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(resonance.level * 25 + subweapon.refinement * 50)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatASPD = (character: Character) =>
  activeResonanceRegislet(character) === "speedResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        resonanceLevel(character) * 25 +
          character.subWeapon.refinement * 50 -
          (resonanceLevel(character) * 25 +
            character.subWeapon.refinement * 50) *
            (speedResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "ASPD/CSPD"
  ) ?
    floor(
      resonanceLevel(character) * 25 + character.subWeapon.refinement * 50,
    )
  : 0;

// export const resonanceTotalFlatCSPD = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const speedResonance = character.regislets.speedResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isSpeedResonanceRegisletActive =
//     activeResonanceRegislet === "speedResonance";

//   const total =
//     isSpeedResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           resonance.level * 25 +
//             subweapon.refinement * 50 -
//             (resonance.level * 25 + subweapon.refinement * 50) *
//               ((95 - 5 * speedResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "ASPD/CSPD" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(resonance.level * 25 + subweapon.refinement * 50)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatCSPD = (character: Character) =>
  activeResonanceRegislet(character) === "speedResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        resonanceLevel(character) * 25 +
          character.subWeapon.refinement * 50 -
          (resonanceLevel(character) * 25 +
            character.subWeapon.refinement * 50) *
            (speedResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "ASPD/CSPD"
  ) ?
    floor(
      resonanceLevel(character) * 25 + character.subWeapon.refinement * 50,
    )
  : 0;

// export const resonanceTotalFlatAccuracy = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const focusResonance = character.regislets.focusResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isFocusResonanceRegisletActive =
//     activeResonanceRegislet === "focusResonance";

//   const total =
//     isFocusResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           35 +
//             resonance.level * 2 +
//             subweapon.refinement * 3 -
//             (35 + resonance.level * 2 + subweapon.refinement * 3) *
//               ((95 - 5 * focusResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "Accuracy/CriticalRate" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(35 + resonance.level * 2 + subweapon.refinement * 3)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatAccuracy = (character: Character) =>
  activeResonanceRegislet(character) === "focusResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        35 +
          resonanceLevel(character) * 2 +
          character.subWeapon.refinement * 3 -
          (35 +
            resonanceLevel(character) * 2 +
            character.subWeapon.refinement * 3) *
            (focusResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "Accuracy/CriticalRate"
  ) ?
    floor(
      35 +
        resonanceLevel(character) * 2 +
        character.subWeapon.refinement * 3,
    )
  : 0;

// export const resonanceTotalFlatCriticalRate = (character: Character) => {
//   const resonance = character.skills.magicBladeSkills.resonance;
//   const subweapon = character.subWeapon;
//   const regislets = character.regislets;

//   const regisletEntries = Object.entries(regislets) as Entries<
//     typeof regislets
//   >;

//   const focusResonance = character.regislets.focusResonance;

//   const activeResonanceRegislet = regisletEntries
//     .filter(
//       (value) =>
//         value[0] === "focusResonance" ||
//         value[0] === "speedResonance" ||
//         value[0] === "powerResonance",
//     )
//     .filter((value) => value[1].level > 0)
//     .map((value) => value[0])
//     .reduce((_, next) => next, "none"); // get first item

//   const isFocusResonanceRegisletActive =
//     activeResonanceRegislet === "focusResonance";

//   const total =
//     isFocusResonanceRegisletActive ?
//       resonance.isActive && subweapon.type === "magic-device" ?
//         floor(
//           15 +
//             resonance.level * 2 +
//             subweapon.refinement * 3 -
//             (35 + resonance.level * 2 + subweapon.refinement * 3) *
//               ((95 - 5 * focusResonance.level) / 100),
//         )
//       : 0
//     : (
//       resonance.isActive &&
//       resonance.currentSetActive === "Accuracy/CriticalRate" &&
//       subweapon.type === "magic-device"
//     ) ?
//       floor(10 + resonance.level * 2 + subweapon.refinement * 3)
//     : 0;

//   return total;
// };

export const resonanceTotalFlatCriticalRate = (character: Character) =>
  activeResonanceRegislet(character) === "focusResonance" ?
    (
      resonanceIsActive(character) &&
      character.subWeapon.type === "magic-device"
    ) ?
      floor(
        10 +
          resonanceLevel(character) * 2 +
          character.subWeapon.refinement * 3 -
          (10 +
            resonanceLevel(character) * 2 +
            character.subWeapon.refinement * 3) *
            (focusResonanceTotalReduction(character) / 100),
      )
    : 0
  : (
    resonanceIsActive(character) &&
    character.subWeapon.type === "magic-device" &&
    resonanceCurrentSetActive(character) === "Accuracy/CriticalRate"
  ) ?
    floor(
      10 +
        resonanceLevel(character) * 2 +
        character.subWeapon.refinement * 3,
    )
  : 0;
