import type { Config } from "../../types";
import { totalATK } from "../stats";
import { floor } from "../utils";

export const twoHandedLevel = (config: Config) =>
  config["character.skills.mononofuSkills.twoHanded.level"];

export const isNinjaSpiritMaxed = (config: Config) =>
  config["character.skills.ninjaSkills.ninjaSpirit.level"] === 10;

export const twoHandedTotalPercentWeaponATK = (config: Config) =>
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

export const twoHandedTotalPercentAccuracy = (config: Config) =>
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

export const twoHandedTotalFlatCriticalRate = (config: Config) =>
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

export const twoHandedTotalStability = (config: Config) =>
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

export const twoHandedTotalATKOnCrit = (config: Config) =>
  (
    config["character.mainweapon.type"] === "katana" &&
    (config["character.subweapon.type"] === "none" ||
      (config["character.subweapon.type"] === "ninjutsu-scroll" &&
        isNinjaSpiritMaxed(config)))
  ) ?
    totalATK(config) * floor((100 + 5 * twoHandedLevel(config)) / 100)
  : 0;
