import type { Config } from "../../types";
import { floor } from "../utils";

export const hunterBowgunLevel = (config: Config) =>
  config["character.skills.hunterSkills.hunterBowgun.level"];

export const hunterBowgunTotalBaseATK = (config: Config) =>
  (
    config["character.mainweapon.type"] === "bowgun" &&
    !(
      config["character.subweapon.type"] === "arrow" ||
      config["character.subweapon.type"] === "none"
    )
  ) ?
    (1 + (floor(hunterBowgunLevel(config) * 1.5) * 5) / 3 / 100) *
    config["character.mainweapon.ATK"]
  : 0;
