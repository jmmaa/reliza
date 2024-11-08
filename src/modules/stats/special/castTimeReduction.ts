import type { IntermediateConfig } from "../../../types";
import { floor } from "../../utils";
import { totalCSPD } from "../derived";

export const totalCastTimeReduction = (config: IntermediateConfig) =>
  floor(
    totalCSPD(config) > 1000 ?
      50 + ((totalCSPD(config) - 1000) / 90) * 0.5
    : totalCSPD(config) / 20,
  );
