import { Character } from "../../../types";
import {
  quickSlashTotalFlatASPD,
  quickSlashTotalPercentASPD,
} from "../../bladeSkills";
import {
  berserkTotalFlatASPD,
  berserkTotalPercentASPD,
} from "../../bladeSkills";
import { dualSwordControlTotalFlatASPD } from "../../dualSwordSkills";
import {
  godspeedWieldTotalFlatASPD,
  quickAuraTotalFlatASPD,
  quickAuraTotalPercentASPD,
} from "../../halberdSkills";
import { martialDisciplineTotalFlatASPD } from "../../martialSkills";
import {
  sum,
  get,
  floor,
  flattenStatsFromEquipment,
  isDualWielder,
  total,
} from "../../utils";
import { totalAGI, totalDEX, totalINT, totalSTR } from "../basic";
import {
  armorTypePercentASPDModifier,
  subWeaponShieldPercentASPDModifier,
} from "./modifiers";

// import * as pino from "@jmmaa/pino";

// TODO: erase pino and implement an explicit calculation instead!

export const totalDualWieldBaseASPD = (character: Character) =>
  floor(
    100 +
      character.level +
      totalAGI(character) * 4 +
      (totalAGI(character) + totalSTR(character) - 1) / 5,
  );

export const totalOneHandedSwordBaseASPD = (character: Character) =>
  floor(
    100 +
      character.level +
      totalAGI(character) * 4 +
      (totalAGI(character) + totalSTR(character) - 1) / 5,
  );

export const totalTwoHandedSwordBaseASPD = (character: Character) =>
  floor(
    50 +
      character.level +
      totalAGI(character) * 2 +
      (totalAGI(character) + totalSTR(character) - 1) / 5,
  );

export const totalBowBaseASPD = (character: Character) =>
  floor(
    75 +
      character.level +
      totalAGI(character) * 3 +
      (totalAGI(character) + totalDEX(character) * 2 - 1) / 10,
  );

export const totalBowgunBaseASPD = (character: Character) =>
  floor(
    30 +
      character.level +
      totalAGI(character) * 2.2 +
      totalDEX(character) * 0.2,
  );

export const totalStaffBaseASPD = (character: Character) =>
  floor(
    60 +
      character.level +
      totalAGI(character) +
      (totalAGI(character) + totalINT(character) - 1) / 5,
  );

export const totalMagicDeviceBaseASPD = (character: Character) =>
  floor(
    90 +
      character.level +
      totalAGI(character) * 4 +
      (totalINT(character) - 1) / 5,
  );

export const totalKnuckleBaseASPD = (character: Character) =>
  floor(
    120 +
      character.level +
      totalAGI(character) * 4.6 +
      totalDEX(character) / 10 +
      totalSTR(character) / 10,
  );

export const totalHalberdBaseASPD = (character: Character) =>
  floor(
    25 +
      character.level +
      totalAGI(character) * 3.5 +
      totalSTR(character) * 0.2,
  );

export const totalKatanaBaseASPD = (character: Character) =>
  floor(
    200 +
      character.level +
      totalAGI(character) * 3.9 +
      totalSTR(character) * 0.3,
  );

export const totalBareHandBaseASPD = (character: Character) =>
  floor(1000 + character.level + totalAGI(character) * 9.6);

// export const totalBaseASPD = (character: Character) => {
//   return (
//     isDualWielder(character) ?
//       pino.dualWieldBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//       )
//     : character.mainWeapon.type === "one-handed-sword" ?
//       pino.oneHandedSwordBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//       )
//     : character.mainWeapon.type === "two-handed-sword" ?
//       pino.twoHandedSwordBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//       )
//     : character.mainWeapon.type === "bow" ?
//       pino.bowBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalDEX(character),
//       )
//     : character.mainWeapon.type === "bowgun" ?
//       pino.bowgunBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalDEX(character),
//       )
//     : character.mainWeapon.type === "staff" ?
//       pino.staffBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalINT(character),
//       )
//     : character.mainWeapon.type === "magic-device" ?
//       pino.magicDeviceBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalINT(character),
//       )
//     : character.mainWeapon.type === "knuckle" ?
//       pino.knuckleBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//         totalDEX(character),
//       )
//     : character.mainWeapon.type === "katana" ?
//       pino.katanaBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//       )
//     : character.mainWeapon.type === "halberd" ?
//       pino.halberdBaseAttackSpeed(
//         character.level,
//         totalAGI(character),
//         totalSTR(character),
//       )
//     : character.mainWeapon.type === "bare-hand" ?
//       pino.bareHandBaseAttackSpeed(character.level, totalAGI(character))
//     : 0
//   );
// };

export const totalBaseASPD = (character: Character) =>
  isDualWielder(character) ? totalDualWieldBaseASPD(character)
  : character.mainWeapon.type === "one-handed-sword" ?
    totalOneHandedSwordBaseASPD(character)
  : character.mainWeapon.type === "two-handed-sword" ?
    totalTwoHandedSwordBaseASPD(character)
  : character.mainWeapon.type === "bow" ? totalBowBaseASPD(character)
  : character.mainWeapon.type === "bowgun" ? totalBowgunBaseASPD(character)
  : character.mainWeapon.type === "staff" ? totalStaffBaseASPD(character)
  : character.mainWeapon.type === "magic-device" ?
    totalMagicDeviceBaseASPD(character)
  : character.mainWeapon.type === "knuckle" ?
    totalKnuckleBaseASPD(character)
  : character.mainWeapon.type === "halberd" ?
    totalHalberdBaseASPD(character)
  : character.mainWeapon.type === "katana" ? totalKatanaBaseASPD(character)
  : totalBareHandBaseASPD(character);

export const totalPercentASPDFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character)
    .map(get("percentASPD"))
    .reduce(sum, 0) +
  armorTypePercentASPDModifier(character) +
  subWeaponShieldPercentASPDModifier(character);

export const totalPercentASPDFromSkills = (character: Character) =>
  quickSlashTotalPercentASPD(character) +
  berserkTotalPercentASPD(character) +
  quickAuraTotalPercentASPD(character);

export const totalPercentASPD = (character: Character) =>
  totalPercentASPDFromEquipment(character) +
  totalPercentASPDFromSkills(character);

// export const totalPercentASPD = (character: Character) => {
//   const fromEquipments =
//     flattenStatsFromEquipment(character)
//       .map(get("percentASPD"))
//       .reduce(sum, 0) +
//     armorTypePercentASPDModifier(character) +
//     subWeaponShieldPercentASPDModifier(character);

//   const fromSkills =
//     quickSlashTotalPercentASPD(character) +
//     berserkTotalPercentASPD(character) +
//     quickAuraTotalPercentASPD(character);

//   const total = fromEquipments + fromSkills;

//   return total;
// };

export const totalFlatASPDFromEquipment = (character: Character) =>
  flattenStatsFromEquipment(character).map(get("flatASPD")).reduce(sum, 0);

export const totalFlatASPDFromSkills = (character: Character) =>
  quickSlashTotalFlatASPD(character) +
  berserkTotalFlatASPD(character) +
  martialDisciplineTotalFlatASPD(character) +
  dualSwordControlTotalFlatASPD(character) +
  quickAuraTotalFlatASPD(character) +
  godspeedWieldTotalFlatASPD(character);

export const totalFlatASPD = (character: Character) =>
  totalFlatASPDFromEquipment(character) +
  totalFlatASPDFromSkills(character);

// export const totalFlatASPD = (character: Character) => {
//   const fromEquipments = flattenStatsFromEquipment(character)
//     .map(get("flatASPD"))
//     .reduce(sum, 0);

//   const fromSkills =
//     quickSlashTotalFlatASPD(character) +
//     berserkTotalFlatASPD(character) +
//     martialDisciplineTotalFlatASPD(character) +
//     dualSwordControlTotalFlatASPD(character) +
//     quickAuraTotalFlatASPD(character);

//   const total = fromEquipments + fromSkills;

//   return total;
// };

export const totalASPD = (character: Character) =>
  total(
    totalBaseASPD(character),
    totalPercentASPD(character),
    totalFlatASPD(character),
  );
