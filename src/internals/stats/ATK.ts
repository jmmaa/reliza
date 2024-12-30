import { hunterBowgunTotalBaseATK } from "..";
import { intimidatingPowerTotalFlatATK, attackUPTotalFlatATK } from "..";
import { physicalAttackBoostTotalFlatATK } from "..";
import { warCryTotalPercentATK, swordMasteryTotalPercentATK } from "..";
import { halberdMasteryTotalPercentATK } from "..";
import { martialMasteryTotalPercentATK } from "..";
import { shotMasteryTotalPercentATK } from "..";
import { castMasteryTotalPercentATK } from "..";
import { bushidoTotalPercentATK } from "..";
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
  totalBaseATKValueFromATKUP,
  totalBaseATKValueFromATKDOWN,
} from "./derivativeATK";
import { subWeaponMagicDevicePercentATKModifier } from "./modifiers";
import { totalMainWeaponATK } from "./weaponATK";

export const totalDualWieldBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunTotalBaseATK(config);

export const totalStaffBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: Config) =>
  config.properties.level +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 1.5 +
      totalDEX(config) * 2.5 +
      totalMainWeaponATK(config),
  );

export const totalBareHandBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseATK(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseATK(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseATK(config)
  : isUsingMainBOW(config) ? totalBowBaseATK(config)
  : isUsingMainBWG(config) ? totalBowgunBaseATK(config)
  : isUsingMainSTF(config) ? totalStaffBaseATK(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseATK(config)
  : isUsingMainKN(config) ? totalKnuckleBaseATK(config)
  : isUsingMainHAL(config) ? totalHalberdBaseATK(config)
  : isUsingMainKTN(config) ? totalKatanaBaseATK(config)
  : totalBareHandBaseATK(config) +
    totalBaseATKValueFromATKUP(config) +
    totalBaseATKValueFromATKDOWN(config);

export const totalPercentATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: Config) =>
  swordMasteryTotalPercentATK(config) +
  shotMasteryTotalPercentATK(config) +
  martialMasteryTotalPercentATK(config) +
  halberdMasteryTotalPercentATK(config) +
  bushidoTotalPercentATK(config) +
  warCryTotalPercentATK(config);

export const totalPercentATK = (config: Config) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryTotalPercentATK(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation

export const totalFlatATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + physicalAttackBoostTotalFlatATK(config);

export const totalFlatATKFromSkills = (config: Config) =>
  attackUPTotalFlatATK(config) + intimidatingPowerTotalFlatATK(config);

export const totalFlatATK = (config: Config) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: Config) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );

export const calculateATK = (config: Config) => ({
  totalBaseATK: totalBaseATK(config),
  totalPercentATK: totalPercentATK(config),
  totalFlatATK: totalFlatATK(config),
  totalATK: totalATK(config),
});
