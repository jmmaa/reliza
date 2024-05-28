import { Config } from "../../types";

export const magicSkinLevel = (config: Config) =>
  config["character.skills.magicBladeSkills.magicSkin.level"];

export const magicSkinTotalRefinementReduction = (config: Config) =>
  (
    config["character.subweapon.type"] === "magic-device" &&
    magicSkinLevel(config) > 0
  ) ?
    config["character.subweapon.refinement"]
  : 0;
