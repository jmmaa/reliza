import { damage, defaultDamageMetadata } from "../..";
import { Character, Target } from "../../types";
import {
  mainWeaponElement,
  totalDamageToDark,
  totalDamageToEarth,
  totalDamageToFire,
  totalDamageToLight,
  totalDamageToWater,
  totalDamageToWind,
  totalLongRangeDamage,
  totalMagicCriticalDamage,
  totalMagicDamageToElementBasedFromINT,
  totalMagicStability,
} from "../stats";

export const magicArrows = (character: Character) =>
  character.skills.magicSkills.magicArrows;

export const magicArrowsLevel = (character: Character) =>
  magicArrows(character).level;

export const magicArrowsInnateSkillDamageModifier = (
  character: Character,
) =>
  character.mainWeapon.type === "staff" ?
    65 + 25 + 6 * magicArrowsLevel(character)
  : 65 + 6 * magicArrowsLevel(character);

export const magicArrowsConstant = (character: Character) =>
  40 + magicArrowsLevel(character);

export const magicArrowsDamage =
  (character: Character) => (target: Target) =>
    damage(defaultDamageMetadata)
      .characterLevel(character.level)
      .targetLevel(target.level)
      .defense(target.MDEF)
      .innateSkillDamageModifier(
        magicArrowsInnateSkillDamageModifier(character),
      )
      .stability(totalMagicStability(character))
      .elementDamageModifier(
        mainWeaponElement(character) !== "neutral" ?
          (
            mainWeaponElement(character) === "dark" &&
            target.element === "light"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToLight(character) +
            25
          : (
            mainWeaponElement(character) === "light" &&
            target.element === "dark"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToDark(character) +
            25
          : (
            mainWeaponElement(character) === "fire" &&
            target.element === "earth"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToEarth(character) +
            25
          : (
            mainWeaponElement(character) === "earth" &&
            target.element === "wind"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToWind(character) +
            25
          : (
            mainWeaponElement(character) === "wind" &&
            target.element === "water"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToWater(character) +
            25
          : (
            mainWeaponElement(character) === "water" &&
            target.element === "fire"
          ) ?
            totalMagicDamageToElementBasedFromINT(character) +
            totalDamageToFire(character) +
            25
          : totalMagicDamageToElementBasedFromINT(character)
          //
        : target.element === "light" ? totalDamageToLight(character)
        : target.element === "dark" ? totalDamageToDark(character)
        : target.element === "earth" ? totalDamageToEarth(character)
        : target.element === "wind" ? totalDamageToWind(character)
        : target.element === "water" ? totalDamageToWater(character)
        : target.element === "fire" ? totalDamageToFire(character)
        : 0,
      )
      .criticalDamageModifier(totalMagicCriticalDamage(character))
      .distanceDependentDamageModifier(totalLongRangeDamage(character))
      .constant(magicArrowsConstant(character));
