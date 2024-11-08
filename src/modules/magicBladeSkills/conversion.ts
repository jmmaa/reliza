import type { IntermediateConfig } from "../../types";
import { totalMainWeaponATK } from "../stats";
import { floor } from "../utils";

export const conversionLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.conversion.level"];

export const conversionTotalFlatMATK = (config: IntermediateConfig) =>
  (
    config["character.mainweapon.type"] === "two-handed-sword" ||
    config["character.mainweapon.type"] === "bowgun" ||
    config["character.mainweapon.type"] === "knuckle" ||
    config["character.mainweapon.type"] === "one-handed-sword"
  ) ?
    floor(
      (conversionLevel(config) ** 2 / 100) *
        (config["character.mainweapon.type"] === "knuckle" ?
          totalMainWeaponATK(config) * 0.5
        : totalMainWeaponATK(config)),
    )
  : 0;
