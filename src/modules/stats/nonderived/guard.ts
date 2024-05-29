import type { Config } from "../../../types";
import {
  hiddenTalentTotalBaseGuardPower,
  hiddenTalentTotalBaseGuardRecharge,
} from "../../bareHandSkills";
import { heavyArmorMasteryTotalGuardRecharge } from "../../guardSkills";
import { flattenedStats, floor, get, min, sum } from "../../utils";

export const totalBaseGuardPower = (config: Config) =>
  min(
    [
      config["character.armor.type"] === "heavy" ? 5000 : 0,
      config["character.subweapon.type"] === "shield" ? 7500 : 0,
      config["character.mainweapon.type"] === "two-handed-sword" ?
        5000
      : 0,
      config["character.mainweapon.type"] === "halberd" ? 2500 : 0,
      hiddenTalentTotalBaseGuardPower(config),
    ].reduce(sum),
    10000,
  );

export const totalPercentGuardPower = (config: Config) =>
  flattenedStats(config).map(get("guardPower")).reduce(sum, 0);

export const totalGuardPower = (config: Config) =>
  totalBaseGuardPower(config) * (totalPercentGuardPower(config) / 100);

export const totalBaseGuardRecharge = (config: Config) =>
  [
    config["character.armor.type"] === "heavy" ? 25 : 0,
    config["character.subweapon.type"] === "shield" ? 75 : 0,
    config["character.mainweapon.type"] === "two-handed-sword" ? 50 : 0,
    config["character.mainweapon.type"] === "halberd" ? 25 : 0,
    hiddenTalentTotalBaseGuardRecharge(config),
  ].reduce(sum);

export const totalPercentGuardRecharge = (config: Config) =>
  flattenedStats(config).map(get("guardRecharge")).reduce(sum, 0) +
  heavyArmorMasteryTotalGuardRecharge(config);

export const totalGuardRecharge = (config: Config) =>
  floor(
    (totalBaseGuardRecharge(config) * totalPercentGuardRecharge(config)) /
      100,
  );
