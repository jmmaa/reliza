import type { IntermediateConfig } from "../../types";
import { isDualWielder } from "../utils";

export const flashBlastLevel = (config: IntermediateConfig) =>
  config["character.skills.dualSwordSkills.flashBlast.level"];

export const flashBlastIsActive = (config: IntermediateConfig) =>
  config["character.skills.dualSwordSkills.flashBlast.isActive"];

export const flashBlastTotalPercentUnsheatheAttack = (
  config: IntermediateConfig,
) => (flashBlastIsActive(config) ? flashBlastLevel(config) : 0);

export const flashBlastTotalPercentMainWeaponATK = (
  config: IntermediateConfig,
) =>
  flashBlastIsActive(config) ?
    isDualWielder(config) && flashBlastLevel(config) > 0 ?
      25
    : 0
  : 0;
