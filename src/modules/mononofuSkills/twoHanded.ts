import type { IntermediateConfig } from "../../types";
import { totalATK } from "../stats";
import { floor } from "../utils";

export const twoHandedLevel = (config: IntermediateConfig) =>
  config["character.skills.mononofuSkills.twoHanded.level"];

export const isNinjaSpiritMaxed = (config: IntermediateConfig) =>
  config["character.skills.ninjaSkills.ninjaSpirit.level"] === 10;

export const twoHandedTotalPercentWeaponATK = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "katana" ||
    config["character.mainweapon.type"] === "one-handed-sword" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    (
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)) ||
      config["character.subweapon.type"] === "none"
    ) ?
      twoHandedLevel(config)
    : 0
  : config["character.subweapon.type"] === "none" ? twoHandedLevel(config)
  : 0;

export const twoHandedTotalPercentAccuracy = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "katana" ||
    config["character.mainweapon.type"] === "one-handed-sword" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    (
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)) ||
      config["character.subweapon.type"] === "none"
    ) ?
      twoHandedLevel(config)
    : 0
  : config["character.subweapon.type"] === "none" ? twoHandedLevel(config)
  : 0;

export const twoHandedTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  (
    config["character.mainweapon.type"] === "katana" ||
    config["character.mainweapon.type"] === "one-handed-sword" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    (
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)) ||
      config["character.subweapon.type"] === "none"
    ) ?
      config["character.mainweapon.type"] === "katana" ?
        twoHandedLevel(config)
      : (
        config["character.mainweapon.type"] === "one-handed-sword" ||
        config["character.mainweapon.type"] === "magic-device"
      ) ?
        floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config["character.subweapon.type"] === "none" ?
    floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalStability = (config: IntermediateConfig) =>
  (
    config["character.mainweapon.type"] === "katana" ||
    config["character.mainweapon.type"] === "one-handed-sword" ||
    config["character.mainweapon.type"] === "magic-device"
  ) ?
    (
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)) ||
      config["character.subweapon.type"] === "none"
    ) ?
      config["character.mainweapon.type"] === "katana" ?
        twoHandedLevel(config)
      : (
        config["character.mainweapon.type"] === "one-handed-sword" ||
        config["character.mainweapon.type"] === "magic-device"
      ) ?
        floor(twoHandedLevel(config) * 0.5)
      : 0
    : 0
  : config["character.subweapon.type"] === "none" ?
    floor(twoHandedLevel(config) * 0.5)
  : 0;

export const twoHandedTotalATKOnCrit = (config: IntermediateConfig) =>
  (
    config["character.mainweapon.type"] === "katana" &&
    (config["character.subweapon.type"] === "none" ||
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)))
  ) ?
    totalATK(config) * floor((100 + 5 * twoHandedLevel(config)) / 100)
  : 0;
