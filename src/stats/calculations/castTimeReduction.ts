import { StatCalcConfig } from "../types";
import { D } from "../utils";

import { totalCSPD } from "./CSPD";

export const totalCastTimeReduction = (config: StatCalcConfig) => {
  const TOTAL_CSPD = totalCSPD(config);

  return TOTAL_CSPD > 1000 ?
      50 + D(TOTAL_CSPD).minus(1000).dividedBy(90).times(0.5).toNumber()
    : D(TOTAL_CSPD).dividedBy(20);
};

export const calculateCastTimeReduction = (config: StatCalcConfig) => ({
  totalCastTimeReduction: totalCastTimeReduction(config),
});
