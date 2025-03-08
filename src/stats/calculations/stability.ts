import { StatCalcConfig } from "../types";
import {
  add,
  bladeSkills,
  flattenedStats,
  isNotUsingSubWeapon,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainBWG,
  isUsingMainHAL,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainSTF,
  isUsingMainTHS,
  isUsingSubKTN,
  isUsingSubScroll,
  mononofuSkills,
  ninjaSkills,
} from "../utils";

import { totalDEX } from "./DEX";
import { totalSTR } from "./STR";

export const samuraiArcheryStabilityPassive = (config: StatCalcConfig) =>
  isUsingMainBOW(config) && isUsingSubKTN(config) ?
    Math.floor(config.equipments.subweapon.stability / 4)
  : 0;

export const twoHandedStabilityPassive = (config: StatCalcConfig) =>
  (
    isUsingMainKTN(config) ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (isUsingSubScroll(config) &&
        ninjaSkills(config).ninjaSpirit.level === 10) ||
      isNotUsingSubWeapon(config)
    ) ?
      isUsingMainKTN(config) ? mononofuSkills(config).twoHanded.level
      : isUsingMainOHS(config) || isUsingMainMD(config) ?
        Math.floor(mononofuSkills(config).twoHanded.level * 0.5)
      : 0
    : 0
  : isNotUsingSubWeapon(config) ?
    Math.floor(mononofuSkills(config).twoHanded.level * 0.5)
  : 0;

export const berserkStabilityReduction = (config: StatCalcConfig) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      -Math.floor(bladeSkills(config).berserk.level * 2.5)
    : -(bladeSkills(config).berserk.level * 5)
  : 0;

export const totalDualWieldBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalBowBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalBowgunBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalStaffBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalMagicDeviceBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalKnuckleBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 40,
  );

export const totalHalberdBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalKatanaBaseStability = (config: StatCalcConfig) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) * 3 + totalDEX(config)) / 40,
  );
export const totalBareHandBaseStability = (config: StatCalcConfig) =>
  Math.floor(1 + totalDEX(config) / 3);

export const totalBaseStability = (config: StatCalcConfig) =>
  isUsingDualSwords(config) ? totalDualWieldBaseStability(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseStability(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseStability(config)
  : isUsingMainBOW(config) ? totalBowBaseStability(config)
  : isUsingMainBWG(config) ? totalBowgunBaseStability(config)
  : isUsingMainSTF(config) ? totalStaffBaseStability(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseStability(config)
  : isUsingMainKN(config) ? totalKnuckleBaseStability(config)
  : isUsingMainHAL(config) ? totalHalberdBaseStability(config)
  : isUsingMainKTN(config) ? totalKatanaBaseStability(config)
  : totalBareHandBaseStability(config);

export const totalStabilityFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "STABILITY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalStabilityFromSkills = (config: StatCalcConfig) =>
  berserkStabilityReduction(config) +
  samuraiArcheryStabilityPassive(config) +
  twoHandedStabilityPassive(config);

export const totalStability = (config: StatCalcConfig) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: StatCalcConfig) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: StatCalcConfig) => 100;

export const totalMagicStability = (config: StatCalcConfig) =>
  Math.floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: StatCalcConfig) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: StatCalcConfig) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;

// finish this

export const calculateStability = (config: StatCalcConfig) => ({
  totalStability: totalStability(config),
  totalMinimumStability: totalMinimumStability(config),
  totalMaximumStability: totalMaximumStability(config),
  totalMagicStability: totalMagicStability(config),
  totalMinimumMagicStability: totalMinimumMagicStability(config),
  totalMaximumMagicStability: totalMaximumMagicStability(config),
});
