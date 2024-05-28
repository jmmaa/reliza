import { Config } from "../../types";
import { isDualWielder } from "../utils";

export const godspeedLevel = (config: Config) =>
  config["character.skills.dualSwordSkills.godspeed.level"];

export const godspeedTotalFlatAGI = (config: Config) =>
  godspeedLevel(config) + Math.max(godspeedLevel(config) - 5, 0);

export const godspeedTotalPercentUnsheatheAttack = (config: Config) =>
  isDualWielder(config) ?
    godspeedLevel(config) + 15
  : godspeedLevel(config) + 5;
