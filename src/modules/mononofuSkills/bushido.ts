import { Config } from "../../types";

export const bushidoLevel = (config: Config) =>
  config["character.skills.mononofuSkills.bushido.level"];

export const bushidoTotalPercentATK = (config: Config) =>
  config["character.mainweapon.type"] === "katana" ?
    bushidoLevel(config) >= 8 ? 3
    : bushidoLevel(config) >= 3 ? 2
    : 1
  : 0;

export const bushidoTotalPercentWeaponATK = (config: Config) =>
  config["character.mainweapon.type"] === "katana" ?
    bushidoLevel(config) * 3
  : 0;

export const bushidoTotalFlatMaxHP = (config: Config) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatMaxMP = (config: Config) =>
  bushidoLevel(config) * 10;

export const bushidoTotalFlatAccuracy = (config: Config) =>
  bushidoLevel(config);
