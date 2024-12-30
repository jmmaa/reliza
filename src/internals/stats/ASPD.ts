import {
  quickSlashTotalPercentASPD,
  quickSlashTotalFlatASPD,
  berserkTotalFlatASPD,
  berserkTotalPercentASPD,
} from "..";
import {
  martialDisciplineTotalFlatASPD,
  martialDisciplineTotalPercentASPD,
} from "..";
import { dualSwordControlTotalFlatASPD } from "..";
import {
  quickAuraTotalFlatASPD,
  quickAuraTotalPercentASPD,
  godspeedWieldTotalFlatASPD,
} from "..";
import { attackSpeedBoostTotalFlatASPD } from "..";
import { type Config } from "../data";
import {
  flattenedStats,
  add,
  total,
  characterLevel,
  isUsingMainBOW,
  isUsingDualSwords,
  isUsingMainOHS,
  isUsingMainTHS,
  isUsingMainHAL,
  isUsingMainSTF,
  isUsingMainBWG,
  isUsingMainKN,
  isUsingMainMD,
  isUsingMainKTN,
} from "../utils";
import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";
import { totalINT } from "./INT";
import { totalSTR } from "./STR";
import {
  armorTypePercentASPDModifier,
  subWeaponShieldPercentASPDModifier,
} from "./modifiers";

export const totalDualWieldBaseASPD = (config: Config) =>
  Math.floor(
    100 +
      characterLevel(config) +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalOneHandedSwordBaseASPD = (config: Config) =>
  Math.floor(
    100 +
      characterLevel(config) +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalTwoHandedSwordBaseASPD = (config: Config) =>
  Math.floor(
    50 +
      characterLevel(config) +
      totalAGI(config) * 2 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalBowBaseASPD = (config: Config) =>
  Math.floor(
    75 +
      characterLevel(config) +
      totalAGI(config) * 3 +
      (totalAGI(config) + totalDEX(config) * 2 - 1) / 10,
  );

export const totalBowgunBaseASPD = (config: Config) =>
  Math.floor(
    30 +
      characterLevel(config) +
      totalAGI(config) * 2.2 +
      totalDEX(config) * 0.2,
  );

export const totalStaffBaseASPD = (config: Config) =>
  Math.floor(
    60 +
      characterLevel(config) +
      totalAGI(config) +
      (totalAGI(config) + totalINT(config) - 1) / 5,
  );

export const totalMagicDeviceBaseASPD = (config: Config) =>
  Math.floor(
    90 +
      characterLevel(config) +
      totalAGI(config) * 4 +
      (totalINT(config) - 1) / 5,
  );

export const totalKnuckleBaseASPD = (config: Config) =>
  Math.floor(
    120 +
      characterLevel(config) +
      totalAGI(config) * 4.6 +
      totalDEX(config) / 10 +
      totalSTR(config) / 10,
  );

export const totalHalberdBaseASPD = (config: Config) =>
  Math.floor(
    25 +
      characterLevel(config) +
      totalAGI(config) * 3.5 +
      totalSTR(config) * 0.2,
  );

export const totalKatanaBaseASPD = (config: Config) =>
  Math.floor(
    200 +
      characterLevel(config) +
      totalAGI(config) * 3.9 +
      totalSTR(config) * 0.3,
  );

export const totalBareHandBaseASPD = (config: Config) =>
  Math.floor(1000 + characterLevel(config) + totalAGI(config) * 9.6);

export const totalBaseASPD = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseASPD(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseASPD(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseASPD(config)
  : isUsingMainBOW(config) ? totalBowBaseASPD(config)
  : isUsingMainBWG(config) ? totalBowgunBaseASPD(config)
  : isUsingMainSTF(config) ? totalStaffBaseASPD(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseASPD(config)
  : isUsingMainKN(config) ? totalKnuckleBaseASPD(config)
  : isUsingMainHAL(config) ? totalHalberdBaseASPD(config)
  : isUsingMainKTN(config) ? totalKatanaBaseASPD(config)
  : totalBareHandBaseASPD(config);

export const totalPercentASPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ASPD")
    .map((stat) => stat[1])
    .reduce(add, 0) +
  armorTypePercentASPDModifier(config) +
  subWeaponShieldPercentASPDModifier(config);

export const totalPercentASPDFromSkills = (config: Config) =>
  quickSlashTotalPercentASPD(config) +
  berserkTotalPercentASPD(config) +
  quickAuraTotalPercentASPD(config) +
  martialDisciplineTotalPercentASPD(config);

export const totalPercentASPD = (config: Config) =>
  totalPercentASPDFromEquipment(config) +
  totalPercentASPDFromSkills(config);

export const totalFlatASPDFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ASPD")
    .map((stat) => stat[1])
    .reduce(add, 0) + attackSpeedBoostTotalFlatASPD(config);

export const totalFlatASPDFromSkills = (config: Config) =>
  quickSlashTotalFlatASPD(config) +
  berserkTotalFlatASPD(config) +
  martialDisciplineTotalFlatASPD(config) +
  dualSwordControlTotalFlatASPD(config) +
  quickAuraTotalFlatASPD(config) +
  godspeedWieldTotalFlatASPD(config);

export const totalFlatASPD = (config: Config) =>
  totalFlatASPDFromEquipment(config) + totalFlatASPDFromSkills(config);

export const totalASPD = (config: Config) =>
  total(
    totalBaseASPD(config),
    totalPercentASPD(config),
    totalFlatASPD(config),
  );

export const calculateASPD = (config: Config) => ({
  totalBaseASPD: totalBaseASPD(config),
  totalFlatASPD: totalFlatASPD(config),
  totalPercentASPD: totalPercentASPD(config),
  totalASPD: totalASPD(config),
});
