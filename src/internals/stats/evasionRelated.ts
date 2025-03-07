import { type Config } from "../data";
import {
  add,
  flattenedStats,
  halberdSkills,
  isUsingDualSwords,
  isUsingLightArmor,
  isUsingMainKN,
  isUsingMainMD,
  isUsingSubDagger,
  isUsingSubKN,
  isUsingSubMD,
} from "../utils";

export const godspeedWieldPercentEvasionRechargeBuff = (config: Config) =>
  halberdSkills(config).godspeedWield.buffIsActive ?
    halberdSkills(config).godspeedWield.level *
    halberdSkills(config).godspeedWield.stacks
  : 0;

export const totalAutoEvasionUsable = (config: Config) => {
  let total = 0;

  total += isUsingLightArmor(config) ? 3 : 0;
  total += isUsingSubDagger(config) ? 2 : 0;
  total += isUsingSubMD(config) ? 4 : 0;
  total += isUsingMainKN(config) ? 1 : 0;
  total += isUsingDualSwords(config) ? 1 : 0;

  return total;
};

export const totalManualEvasionUsable = (config: Config) =>
  totalAutoEvasionUsable(config) * 2;

export const totalBaseEvasionRecharge = (config: Config) =>
  isUsingLightArmor(config) && isUsingSubDagger(config) ? 2
  : (
    isUsingLightArmor(config) &&
    (isUsingSubMD(config) || isUsingMainMD(config))
  ) ?
    3.33
  : (
    isUsingLightArmor(config) &&
    (isUsingSubKN(config) || isUsingMainKN(config))
  ) ?
    1.7
  : isUsingLightArmor(config) && isUsingDualSwords(config) ? 3.33
  : (
    isUsingLightArmor(config) &&
    isUsingMainKN(config) &&
    isUsingSubMD(config)
  ) ?
    1.4
  : (
    isUsingLightArmor(config) &&
    isUsingMainKN(config) &&
    isUsingSubDagger(config)
  ) ?
    1.1
  : isUsingSubMD(config) && isUsingMainKN(config) ? 2
  : isUsingSubDagger(config) && isUsingMainKN(config) ? 1.4
  : isUsingLightArmor(config) ? 5
  : isUsingSubDagger(config) ? 3.33
  : isUsingSubMD(config) || isUsingMainMD(config) ? 10
  : isUsingSubKN(config) || isUsingMainKN(config) ? 2.5
  : isUsingDualSwords(config) ? 10
  : 0;

export const totalPercentEvasionRecharge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EVASION_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + godspeedWieldPercentEvasionRechargeBuff(config);

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now

export const calculateEvasionRelated = (config: Config) => ({
  totalAutoEvasionUsable: totalAutoEvasionUsable(config),
  totalManualEvasionUsable: totalManualEvasionUsable(config),
  totalBaseEvasionRecharge: totalBaseEvasionRecharge(config),
  totalPercentEvasionRecharge: totalPercentEvasionRecharge(config),
});
