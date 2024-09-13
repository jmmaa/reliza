import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { godspeedWieldTotalPercentEvasionRecharge } from "../../halberdSkills";
import { flattenedStats, get, sum } from "../../utils";

export const totalBaseEvasionRecharge = (config: IntermediateConfig) => {
  // TODO
};

export const totalPercentEvasionRecharge = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.evasionRecharge)
    .map((stat) => stat[1])
    .reduce(sum, 0) + godspeedWieldTotalPercentEvasionRecharge(config);

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now
