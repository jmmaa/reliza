import { type Config } from "../data";
import { add, flattenedStats } from "../utils";

import { godspeedWieldTotalPercentEvasionRecharge } from "..";

export const totalBaseEvasionRecharge = (config: Config) => {
  // TODO
};

export const totalPercentEvasionRecharge = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "EVASION_RECHARGE")
    .map((stat) => stat[1])
    .reduce(add, 0) + godspeedWieldTotalPercentEvasionRecharge(config);

// NOTE: Not sure for this calculations atm, so i might not be finishing this for now
