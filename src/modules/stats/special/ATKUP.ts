import { Config } from "../../../types";
import { floor, get, sum, flattenedStats } from "../../utils";

export const totalBaseATKValueFromATKUPAGI = (config: Config) =>
  floor(flattenedStats(config).map(get("ATKUPAGI")).reduce(sum, 0) / 100) *
  config["character.AGI"];

export const totalBaseATKValueFromATKUPDEX = (config: Config) =>
  floor(flattenedStats(config).map(get("ATKUPDEX")).reduce(sum, 0) / 100) *
  config["character.DEX"];

export const totalBaseATKValueFromATKUPINT = (config: Config) =>
  floor(flattenedStats(config).map(get("ATKUPINT")).reduce(sum, 0) / 100) *
  config["character.INT"];

export const totalBaseATKValueFromATKUPSTR = (config: Config) =>
  floor(flattenedStats(config).map(get("ATKUPSTR")).reduce(sum, 0) / 100) *
  config["character.STR"];

export const totalBaseATKValueFromATKUPVIT = (config: Config) =>
  floor(flattenedStats(config).map(get("ATKUPVIT")).reduce(sum, 0) / 100) *
  config["character.VIT"];

export const totalBaseATKValueFromATKUP = (config: Config) =>
  [
    totalBaseATKValueFromATKUPAGI(config),
    totalBaseATKValueFromATKUPDEX(config),
    totalBaseATKValueFromATKUPINT(config),
    totalBaseATKValueFromATKUPSTR(config),
    totalBaseATKValueFromATKUPVIT(config),
  ].reduce(sum);
