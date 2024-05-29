import type { Config } from "../../../types";
import { equipmentStatSources, get } from "../../utils";

export const mainWeaponElement = (config: Config) =>
  equipmentStatSources(config)["character.mainweapon.stats"].reduce(
    (prev, value) =>
      value["element"] !== "neutral" ? value["element"] : prev,
    "neutral",
  );

export const subWeaponElement = (config: Config) =>
  equipmentStatSources(config)["character.subweapon.stats"].reduce(
    (prev, value) =>
      value["element"] !== "neutral" ? value["element"] : prev,
    "neutral",
  );
