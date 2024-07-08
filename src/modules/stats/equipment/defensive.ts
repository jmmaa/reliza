import type { IntermediateConfig } from "../../../types";

export const totalEquipmentDEF = (config: IntermediateConfig) =>
  (config["character.subweapon.type"] === "shield" ?
    config["character.subweapon.DEF"]
  : 0) +
  config["character.armor.DEF"] +
  config["character.additionalGear.DEF"] +
  config["character.specialGear.DEF"];

export const totalRefinementReduction = (config: IntermediateConfig) =>
  ((
    config["character.subweapon.type"] === "shield" ||
    (config["character.subweapon.type"] === "magic-device" && // magic skin
      config["character.skills.magicBladeSkills.magicSkin.level"] > 0)
  ) ?
    config["character.subweapon.refinement"]
  : 0) +
  config["character.armor.refinement"] +
  config["character.additionalGear.refinement"];
