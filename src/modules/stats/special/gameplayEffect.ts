import { StatId, type Config } from "../../../types";
import { flattenedStats, get, sum } from "../../utils";

export const isFlinchUnavailable = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flinchUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const isStunUnavailable = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.stunUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const isTumbleUnavailable = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.tumbleUnavailable)
    .map((stat) => stat[1])
    .reduce(sum, 0) > 0;

export const itemCooldown = (config: Config) =>
  10 -
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.itemCooldown)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const invincibleAid = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.invincibleAid)
    .map((stat) => stat[1])
    .reduce(sum, 0);
