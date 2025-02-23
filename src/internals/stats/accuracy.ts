import { type Config } from "../data";

import {
  add,
  battleSkills,
  dualSwordSkills,
  flattenedStats,
  isNotUsingSubWeapon,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingSubKTN,
  isUsingSubScroll,
  mononofuSkills,
  ninjaSkills,
  shotSkills,
  total,
} from "../utils";

import { totalDEX } from "./DEX";

export const samuraiArcheryPercentHITBuff = (config: Config) =>
  isUsingMainBOW(config) && isUsingSubKTN(config) ?
    shotSkills(config).samuraiArchery.level *
    shotSkills(config).samuraiArchery.stacks
  : 0;

export const dualSwordControlPercentHITPassive = (config: Config) =>
  isUsingDualSwords(config) ?
    5 + dualSwordSkills(config).dualSwordControl.level * 3
  : 0;

export const dualSwordMasteryPercentHITPassive = (config: Config) =>
  isUsingDualSwords(config) ?
    -55 + dualSwordSkills(config).dualSwordMastery.level * 3
  : 0;

export const twoHandedPercentHITPassive = (config: Config) => {
  const ninjaSpiritLevel = ninjaSkills(config).ninjaSpirit.level;
  const twoHandedLevel = mononofuSkills(config).twoHanded.level;
  const mainOHS = isUsingMainOHS(config);
  const mainMD = isUsingMainMD(config);
  const mainKTN = isUsingMainKTN(config);
  const hasSubScroll = isUsingSubScroll(config);
  const noSub = isNotUsingSubWeapon(config);

  return (
    mainKTN || mainOHS || mainMD ?
      (hasSubScroll && ninjaSpiritLevel === 10) || noSub ?
        twoHandedLevel
      : 0
    : noSub ? twoHandedLevel
    : 0
  );
};

export const bushidoFlatHITPassive = (config: Config) =>
  mononofuSkills(config).bushido.level;

export const accuracyUPFlatHITPassive = (config: Config) =>
  battleSkills(config).accuracyUP.level;

export const totalBaseAccuracy = (config: Config) =>
  Math.floor(config.properties.level + totalDEX(config));

export const totalPercentAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentAccuracyFromSkills = (config: Config) =>
  dualSwordMasteryPercentHITPassive(config) +
  dualSwordControlPercentHITPassive(config) +
  samuraiArcheryPercentHITBuff(config) +
  twoHandedPercentHITPassive(config);

export const totalPercentAccuracy = (config: Config) =>
  totalPercentAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalFlatAccuracyFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ACCURACY")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatAccuracyFromSkills = (config: Config) =>
  bushidoFlatHITPassive(config) + accuracyUPFlatHITPassive(config);

export const totalFlatAccuracy = (config: Config) =>
  totalFlatAccuracyFromEquipment(config) +
  totalFlatAccuracyFromSkills(config);

export const totalAccuracy = (config: Config) =>
  total(
    totalBaseAccuracy(config),
    totalPercentAccuracy(config),
    totalFlatAccuracy(config),
  );

export const calculateAccuracy = (config: Config) => ({
  totalBaseAccuracy: totalBaseAccuracy(config),
  totalPercentAccuracy: totalPercentAccuracy(config),
  totalFlatAccuracy: totalFlatAccuracy(config),
  totalAccuracy: totalAccuracy(config),
});

// TODO
// - saber aura accuracy buff
