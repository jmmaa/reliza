import { Character } from "../../../types";
import * as pino from "@jmmaa/pino";
import { totalDEX, totalSTR } from "../basic";
import { isDualWielder } from "../../utils";

export const totalBaseStability = (character: Character) => {
  const fromBase = isDualWielder(character)
    ? pino.dualWieldStability(
        character.mainWeapon.stability,
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "one-handed-sword"
    ? pino.oneHandedSwordStability(
        character.mainWeapon.stability,
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "two-handed-sword"
    ? pino.twoHandedSwordStability(
        character.mainWeapon.stability,
        totalDEX(character)
      )
    : character.mainWeapon.type === "bow"
    ? character.subWeapon.type === "arrow"
      ? pino.bowStability(
          character.mainWeapon.stability,
          character.subWeapon.stability,
          totalSTR(character),
          totalDEX(character)
        )
      : pino.bowStability(
          character.mainWeapon.stability,
          0,
          totalSTR(character),
          totalDEX(character)
        )
    : character.mainWeapon.type === "bowgun"
    ? character.subWeapon.type === "arrow"
      ? pino.bowgunStability(
          character.mainWeapon.stability,
          character.subWeapon.stability,
          totalSTR(character)
        )
      : pino.bowgunStability(
          character.mainWeapon.stability,
          0,
          totalSTR(character)
        )
    : character.mainWeapon.type === "staff"
    ? pino.staffStability(
        character.mainWeapon.stability,
        totalSTR(character)
      )
    : character.mainWeapon.type === "magic-device"
    ? pino.magicDeviceStability(
        character.mainWeapon.stability,
        totalDEX(character)
      )
    : character.mainWeapon.type === "knuckle"
    ? pino.knuckleStability(
        character.mainWeapon.stability,
        totalDEX(character)
      )
    : character.mainWeapon.type === "halberd"
    ? pino.halberdStability(
        character.mainWeapon.stability,
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "katana"
    ? pino.katanaStability(
        character.mainWeapon.stability,
        totalSTR(character),
        totalDEX(character)
      )
    : character.mainWeapon.type === "bare-hand"
    ? pino.bareHandStability(
        character.mainWeapon.stability,
        totalDEX(character)
      )
    : 0;

  const total = fromBase;

  return total;
};
