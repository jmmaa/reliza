import { Character, Config } from "../../types";
import { isDualWielder } from "../utils";

export const flashBlastLevel = (config: Config) =>
  config["character.skills.dualSwordSkills.flashBlast.level"];

export const flashBlastIsActive = (config: Config) =>
  config["character.skills.dualSwordSkills.flashBlast.isActive"];

export const flashBlastTotalPercentUnsheatheAttack = (config: Config) =>
  flashBlastIsActive(config) ? flashBlastLevel(config) : 0;

export const flashBlastTotalPercentMainWeaponATK = (config: Config) =>
  flashBlastIsActive(config) ?
    isDualWielder(config) && flashBlastLevel(config) > 0 ?
      25
    : 0
  : 0;
