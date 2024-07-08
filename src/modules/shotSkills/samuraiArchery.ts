import type { IntermediateConfig } from "../../types";
import { floor } from "../utils";

export const samuraiArcheryLevel = (config: IntermediateConfig) =>
  config["character.skills.shotSkills.samuraiArchery.level"];

export const samuraiArcheryStacks = (config: IntermediateConfig) =>
  config["character.skills.shotSkills.samuraiArchery.stacks"];

export const samuraiArcheryTotalFlatWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bow" &&
    config["character.subweapon.type"] === "katana"
  ) ?
    Math.min(
      floor(
        config["character.subweapon.ATK"] *
          0.1 *
          samuraiArcheryLevel(config),
      ),
      floor(
        config["character.mainweapon.ATK"] *
          floor(config["character.mainweapon.stability"] / 100) *
          0.1 *
          samuraiArcheryLevel(config),
      ),
    )
  : 0;

export const samuraiArcheryTotalStability = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bow" &&
    config["character.subweapon.type"] === "katana"
  ) ?
    floor(config["character.subweapon.stability"] / 4)
  : 0;
export const samuraiArcheryTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "bow" &&
    config["character.subweapon.type"] === "katana"
  ) ?
    samuraiArcheryLevel(config) * samuraiArcheryStacks(config)
  : 0;
