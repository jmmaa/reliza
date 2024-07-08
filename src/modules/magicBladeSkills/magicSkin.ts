import type { IntermediateConfig } from "../../types";

export const magicSkinLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.magicSkin.level"];

export const magicSkinTotalRefinementReduction = (
  config: IntermediateConfig,
) =>
  (
    config["character.subweapon.type"] === "magic-device" &&
    magicSkinLevel(config) > 0
  ) ?
    config["character.subweapon.refinement"]
  : 0;
