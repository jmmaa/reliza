import * as pino from "@jmmaa/pino";
import { accumulate, pipe } from "../helper";
import { DeclaredStatusMap } from "../types";

export const totalMotionSpeed = <
  S extends DeclaredStatusMap & { totalASPD: number }
>(
  status: S
) => {
  const accumulated = accumulate(status, "motionSpeed");

  const fromASPD = pino.actionTimeReduction(status.totalASPD);

  const total = fromASPD + accumulated;

  return { ...status, totalMotionSpeed: total };
};

export const calculateMotionSpeed = <
  S extends DeclaredStatusMap & { totalASPD: number }
>(
  status: S
): S & { totalMotionSpeed: number } => {
  const calcs = pipe(status)._(totalMotionSpeed);

  return calcs.value;
};
