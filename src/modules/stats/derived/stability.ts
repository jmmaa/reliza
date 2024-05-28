import { Config } from "../../../types";
import { floor, isDualWielder } from "../../utils";
import { totalDEX, totalSTR } from "../basic";

export const totalDualWieldBaseStability = (config: Config) =>
  floor(
    config["character.mainweapon.stability"] +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (config: Config) =>
  floor(
    config["character.mainweapon.stability"] +
      (totalSTR(config) + totalDEX(config) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (config: Config) =>
  floor(config["character.mainweapon.stability"] + totalDEX(config) / 10);

export const totalBowBaseStability = (config: Config) =>
  floor(
    config["character.mainweapon.stability"] +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalBowgunBaseStability = (config: Config) =>
  floor(config["character.mainweapon.stability"] + totalSTR(config) / 20);

export const totalStaffBaseStability = (config: Config) =>
  floor(config["character.mainweapon.stability"] + totalSTR(config) / 20);

export const totalMagicDeviceBaseStability = (config: Config) =>
  floor(config["character.mainweapon.stability"] + totalDEX(config) / 10);

export const totalKnuckleBaseStability = (config: Config) =>
  floor(config["character.mainweapon.stability"] + totalDEX(config) / 40);

export const totalHalberdBaseStability = (config: Config) =>
  floor(
    config["character.mainweapon.stability"] +
      (totalSTR(config) + totalDEX(config)) / 20,
  );

export const totalKatanaBaseStability = (config: Config) =>
  floor(
    config["character.mainweapon.stability"] +
      (totalSTR(config) * 3 + totalDEX(config)) / 40,
  );
export const totalBareHandBaseStability = (config: Config) =>
  floor(1 + totalDEX(config) / 3);

export const totalBaseStability = (config: Config) =>
  isDualWielder(config) ? totalDualWieldBaseStability(config)
  : config["character.mainweapon.type"] === "one-handed-sword" ?
    totalOneHandedSwordBaseStability(config)
  : config["character.mainweapon.type"] === "two-handed-sword" ?
    totalTwoHandedSwordBaseStability(config)
  : config["character.mainweapon.type"] === "bow" ?
    totalBowBaseStability(config)
  : config["character.mainweapon.type"] === "bowgun" ?
    totalBowgunBaseStability(config)
  : config["character.mainweapon.type"] === "staff" ?
    totalStaffBaseStability(config)
  : config["character.mainweapon.type"] === "magic-device" ?
    totalMagicDeviceBaseStability(config)
  : config["character.mainweapon.type"] === "knuckle" ?
    totalKnuckleBaseStability(config)
  : config["character.mainweapon.type"] === "halberd" ?
    totalHalberdBaseStability(config)
  : config["character.mainweapon.type"] === "katana" ?
    totalKatanaBaseStability(config)
  : totalBareHandBaseStability(config);
