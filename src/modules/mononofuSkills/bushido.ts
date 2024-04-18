import { Character } from "../../types";

export const bushidoLevel = (character: Character) =>
  character.skills.mononofuSkills.bushido.level;

export const bushidoTotalPercentATK = (character: Character) =>
  character.mainWeapon.type === "katana" ?
    bushidoLevel(character) >= 8 ? 3
    : bushidoLevel(character) >= 3 ? 2
    : 1
  : 0;

export const bushidoTotalPercentWeaponATK = (character: Character) =>
  character.mainWeapon.type === "katana" ? bushidoLevel(character) * 3 : 0;

export const bushidoTotalFlatMaxHP = (character: Character) =>
  bushidoLevel(character) * 10;

export const bushidoTotalFlatMaxMP = (character: Character) =>
  bushidoLevel(character) * 10;

export const bushidoTotalFlatAccuracy = (character: Character) =>
  bushidoLevel(character);
