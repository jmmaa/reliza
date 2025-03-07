import { Config } from "../data";
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

export const samuraiArcheryStabilityPassive = (config: Config) =>
  isUsingMainBOW(config) && isUsingSubKTN(config) ?
    Math.floor(config.equipments.subweapon.stability / 4)
  : 0;

export const twoHandedStabilityPassive = (config: Config) =>
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

export const berserkStabilityReduction = (config: Config) =>
  bladeSkills(config).berserk.buffIsActive ?
    isUsingMainOHS(config) || isUsingMainTHS(config) ?
      -Math.floor(bladeSkills(config).berserk.level * 2.5)
    : -(bladeSkills(config).berserk.level * 5)
  : 0;

export const totalDualWieldBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalBowBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalBowgunBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalStaffBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalSTR(config) / 20,
  );

export const totalMagicDeviceBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 10,
  );

export const totalKnuckleBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability + totalDEX(config) / 40,
  );

export const totalHalberdBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalKatanaBaseStability = (config: Config) =>
  Math.floor(
    config.equipments.mainweapon.stability +
      (totalSTR(config) * 3 + totalDEX(config)) / 40,
  );
export const totalBareHandBaseStability = (config: Config) =>
  Math.floor(1 + totalDEX(config) / 3);

export const totalBaseStability = (config: Config) =>
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

export const totalStabilityFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "STABILITY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalStabilityFromSkills = (config: Config) =>
  berserkStabilityReduction(config) +
  samuraiArcheryStabilityPassive(config) +
  twoHandedStabilityPassive(config);

export const totalStability = (config: Config) =>
  totalBaseStability(config) +
  totalStabilityFromEquipment(config) +
  totalStabilityFromSkills(config);

/** graze effect lacking here */
export const totalMinimumStability = (config: Config) =>
  totalStability(config);

/** graze effect lacking here */
export const totalMaximumStability = (config: Config) => 100;

export const totalMagicStability = (config: Config) =>
  Math.floor((100 + totalStability(config)) / 2);

export const totalMinimumMagicStability = (config: Config) =>
  totalMagicStability(config);

export const totalMaximumMagicStability = (config: Config) =>
  totalMagicStability(config) > 90 ?
    totalMagicStability(config) - 90 + 100
  : 100;

// finish this

export const calculateStability = (config: Config) => ({
  totalStability: totalStability(config),
  totalMinimumStability: totalMinimumStability(config),
  totalMaximumStability: totalMaximumStability(config),
  totalMagicStability: totalMagicStability(config),
  totalMinimumMagicStability: totalMinimumMagicStability(config),
  totalMaximumMagicStability: totalMaximumMagicStability(config),
});
