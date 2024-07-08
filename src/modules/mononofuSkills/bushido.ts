import type { IntermediateConfig } from "../../types";

export const bushidoLevel = (config: IntermediateConfig) =>
  config["character.skills.mononofuSkills.bushido.level"];

export const bushidoTotalPercentATK = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "katana" ?
    bushidoLevel(config) >= 8 ? 3
    : bushidoLevel(config) >= 3 ? 2
    : 1
  : 0;

export const bushidoTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  config["character.mainweapon.type"] === "katana" ?
    bushidoLevel(config) * 3
  : 0;

export const bushidoTotalFlatMaxHP = (config: IntermediateConfig) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatMaxMP = (config: IntermediateConfig) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatAccuracy = (config: IntermediateConfig) =>
  bushidoLevel(config);
