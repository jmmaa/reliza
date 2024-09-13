import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import { flattenedStats, get, sum } from "../../utils";

export const isFlinchUnavailable = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flinchUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const isStunUnavailable = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.stunUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const isTumbleUnavailable = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.tumbleUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const itemCooldown = (config: IntermediateConfig) =>
  10 -
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.itemCooldown)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const invincibleAid = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.invincibleAid)
    .map((stat) => stat[1])
    .reduce(sum, 0);
