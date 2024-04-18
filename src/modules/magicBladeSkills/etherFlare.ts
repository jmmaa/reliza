import { Character } from "../../types";
import { floor } from "../utils";

export const etherFlare = (character: Character) =>
  character.skills.magicBladeSkills.etherFlare;

export const etherFlareLevel = (character: Character) =>
  etherFlare(character).level;

export const etherFlareInflictedIgniteOnEnemy = (character: Character) =>
  etherFlare(character).inflictedIgniteOnEnemey;

export const etherFlareTotalFlatAMPR = (character: Character) =>
  (
    character.subWeapon.type === "magic-device" &&
    etherFlareInflictedIgniteOnEnemy(character)
  ) ?
    15 +
    floor(etherFlareLevel(character) / 6) * 5 +
    floor(etherFlareLevel(character) / 5) * 5
  : 0;
