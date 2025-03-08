import { StatCalcConfig } from "../types";

import { totalCSPD } from "./CSPD";

export const totalCastTimeReduction = (config: StatCalcConfig) =>
  Math.floor(
    totalCSPD(config) > 1000 ?
      50 + ((totalCSPD(config) - 1000) / 90) * 0.5
    : totalCSPD(config) / 20,
  );

export const calculateCastTimeReduction = (config: StatCalcConfig) => ({
  totalCastTimeReduction: totalCastTimeReduction(config),
});
