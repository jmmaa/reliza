import { Character } from "../../../types";
import { floor, isDualWielder } from "../../utils";
import { totalDEX, totalSTR } from "../basic";

export const totalDualWieldBaseStability = (character: Character) =>
  floor(
    character.mainWeapon.stability +
      (totalSTR(character) + totalDEX(character) * 3) / 40,
  );

export const totalOneHandedSwordBaseStability = (character: Character) =>
  floor(
    character.mainWeapon.stability +
      (totalSTR(character) + totalDEX(character) * 3) / 40,
  );

export const totalTwoHandedSwordBaseStability = (character: Character) =>
  floor(character.mainWeapon.stability + totalDEX(character) / 10);

export const totalBowBaseStability = (character: Character) =>
  floor(
    character.mainWeapon.stability +
      (totalSTR(character) + totalDEX(character)) / 20,
  );

export const totalBowgunBaseStability = (character: Character) =>
  floor(character.mainWeapon.stability + totalSTR(character) / 20);

export const totalStaffBaseStability = (character: Character) =>
  floor(character.mainWeapon.stability + totalSTR(character) / 20);

export const totalMagicDeviceBaseStability = (character: Character) =>
  floor(character.mainWeapon.stability + totalDEX(character) / 10);

export const totalKnuckleBaseStability = (character: Character) =>
  floor(character.mainWeapon.stability + totalDEX(character) / 40);

export const totalHalberdBaseStability = (character: Character) =>
  floor(
    character.mainWeapon.stability +
      (totalSTR(character) + totalDEX(character)) / 20,
  );

export const totalKatanaBaseStability = (character: Character) =>
  floor(
    character.mainWeapon.stability +
      (totalSTR(character) * 3 + totalDEX(character)) / 40,
  );
export const totalBareHandBaseStability = (character: Character) =>
  floor(1 + totalDEX(character) / 3);

export const totalBaseStability = (character: Character) =>
  isDualWielder(character) ? totalDualWieldBaseStability(character)
  : character.mainWeapon.type === "one-handed-sword" ?
    totalOneHandedSwordBaseStability(character)
  : character.mainWeapon.type === "two-handed-sword" ?
    totalTwoHandedSwordBaseStability(character)
  : character.mainWeapon.type === "bow" ? totalBowBaseStability(character)
  : character.mainWeapon.type === "bowgun" ?
    totalBowgunBaseStability(character)
  : character.mainWeapon.type === "staff" ?
    totalStaffBaseStability(character)
  : character.mainWeapon.type === "magic-device" ?
    totalMagicDeviceBaseStability(character)
  : character.mainWeapon.type === "knuckle" ?
    totalKnuckleBaseStability(character)
  : character.mainWeapon.type === "halberd" ?
    totalHalberdBaseStability(character)
  : character.mainWeapon.type === "katana" ?
    totalKatanaBaseStability(character)
  : totalBareHandBaseStability(character);
