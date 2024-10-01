import { type IntermediateConfig } from "../../../types";
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
import { StatId } from "../../utils";
import {
  sum,
  get,
  floor,
  flattenedStats,
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

export const totalDualWieldBaseASPD = (config: IntermediateConfig) =>
  floor(
    100 +
      config["character.level"] +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalOneHandedSwordBaseASPD = (config: IntermediateConfig) =>
  floor(
    100 +
      config["character.level"] +
      totalAGI(config) * 4 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalTwoHandedSwordBaseASPD = (config: IntermediateConfig) =>
  floor(
    50 +
      config["character.level"] +
      totalAGI(config) * 2 +
      (totalAGI(config) + totalSTR(config) - 1) / 5,
  );

export const totalBowBaseASPD = (config: IntermediateConfig) =>
  floor(
    75 +
      config["character.level"] +
      totalAGI(config) * 3 +
      (totalAGI(config) + totalDEX(config) * 2 - 1) / 10,
  );

export const totalBowgunBaseASPD = (config: IntermediateConfig) =>
  floor(
    30 +
      config["character.level"] +
      totalAGI(config) * 2.2 +
      totalDEX(config) * 0.2,
  );

export const totalStaffBaseASPD = (config: IntermediateConfig) =>
  floor(
    60 +
      config["character.level"] +
      totalAGI(config) +
      (totalAGI(config) + totalINT(config) - 1) / 5,
  );

export const totalMagicDeviceBaseASPD = (config: IntermediateConfig) =>
  floor(
    90 +
      config["character.level"] +
      totalAGI(config) * 4 +
      (totalINT(config) - 1) / 5,
  );

export const totalKnuckleBaseASPD = (config: IntermediateConfig) =>
  floor(
    120 +
      config["character.level"] +
      totalAGI(config) * 4.6 +
      totalDEX(config) / 10 +
      totalSTR(config) / 10,
  );

export const totalHalberdBaseASPD = (config: IntermediateConfig) =>
  floor(
    25 +
      config["character.level"] +
      totalAGI(config) * 3.5 +
      totalSTR(config) * 0.2,
  );

export const totalKatanaBaseASPD = (config: IntermediateConfig) =>
  floor(
    200 +
      config["character.level"] +
      totalAGI(config) * 3.9 +
      totalSTR(config) * 0.3,
  );

export const totalBareHandBaseASPD = (config: IntermediateConfig) =>
  floor(1000 + config["character.level"] + totalAGI(config) * 9.6);

export const totalBaseASPD = (config: IntermediateConfig) =>
  isDualWielder(config) ? totalDualWieldBaseASPD(config)
  : config["character.mainweapon.type"] === "one-handed-sword" ?
    totalOneHandedSwordBaseASPD(config)
  : config["character.mainweapon.type"] === "two-handed-sword" ?
    totalTwoHandedSwordBaseASPD(config)
  : config["character.mainweapon.type"] === "bow" ?
    totalBowBaseASPD(config)
  : config["character.mainweapon.type"] === "bowgun" ?
    totalBowgunBaseASPD(config)
  : config["character.mainweapon.type"] === "staff" ?
    totalStaffBaseASPD(config)
  : config["character.mainweapon.type"] === "magic-device" ?
    totalMagicDeviceBaseASPD(config)
  : config["character.mainweapon.type"] === "knuckle" ?
    totalKnuckleBaseASPD(config)
  : config["character.mainweapon.type"] === "halberd" ?
    totalHalberdBaseASPD(config)
  : config["character.mainweapon.type"] === "katana" ?
    totalKatanaBaseASPD(config)
  : totalBareHandBaseASPD(config);

export const totalPercentASPDFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentASPD)
    .map((stat) => stat[1])
    .reduce(sum, 0) +
  armorTypePercentASPDModifier(config) +
  subWeaponShieldPercentASPDModifier(config);

export const totalPercentASPDFromSkills = (config: IntermediateConfig) =>
  quickSlashTotalPercentASPD(config) +
  berserkTotalPercentASPD(config) +
  quickAuraTotalPercentASPD(config);

export const totalPercentASPD = (config: IntermediateConfig) =>
  totalPercentASPDFromEquipment(config) +
  totalPercentASPDFromSkills(config);

export const totalFlatASPDFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatASPD)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatASPDFromSkills = (config: IntermediateConfig) =>
  quickSlashTotalFlatASPD(config) +
  berserkTotalFlatASPD(config) +
  martialDisciplineTotalFlatASPD(config) +
  dualSwordControlTotalFlatASPD(config) +
  quickAuraTotalFlatASPD(config) +
  godspeedWieldTotalFlatASPD(config);

export const totalFlatASPD = (config: IntermediateConfig) =>
  totalFlatASPDFromEquipment(config) + totalFlatASPDFromSkills(config);

export const totalASPD = (config: IntermediateConfig) =>
  total(
    totalBaseASPD(config),
    totalPercentASPD(config),
    totalFlatASPD(config),
  );
