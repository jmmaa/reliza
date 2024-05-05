import { damage, defaultDamageMetadata } from "../..";
import { Character, Target } from "../../types";
import { dualBringerTotalMagicCriticalDamageConversion } from "../magicBladeSkills";
import { longRangeTotalSkillDamageModifier } from "../shotSkills/longRange";
import {
  mainWeaponElement,
  subWeaponElement,
  totalCriticalDamage,
  totalDamageToDark,
  totalDamageToEarth,
  totalDamageToFire,
  totalDamageToLight,
  totalDamageToWater,
  totalDamageToWind,
  totalLongRangeDamage,
  totalMagicCriticalDamageConversion,
  totalMagicDamageToElementBasedFromINT,
  totalMagicPierce,
  totalMagicStability,
  totalMATK,
  totalMaximumMagicStability,
  totalMinimumMagicStability,
  totalShortRangeDamage,
} from "../stats";
import {
  braveAuraTotalLastDamageModifier,
  manaRechargeTotalLastDamageModifier,
} from "../supportSkills";

export const magicArrows = (character: Character) =>
  character.skills.magicSkills.magicArrows;

export const magicArrowsLevel = (character: Character) =>
  magicArrows(character).level;

// damage related

export const magicArrowsTotalSourceValueUsed =
  (character: Character) => (target: Target) =>
    totalMATK(character);

export const magicArrowsTotalDefenseValueUsed =
  (character: Character) => (target: Target) =>
    target.MDEF;

export const magicArrowsTotalResistanceValueUsed =
  (character: Character) => (target: Target) =>
    target.magicResistance;

export const magicArrowsTotalProrationValueUsed =
  (character: Character) => (target: Target) =>
    target.proration;

export const magicArrowsTotalPierceValueUsed =
  (character: Character) => (target: Target) =>
    totalMagicPierce(character);

export const magicArrowsTotalMinimumStability =
  (character: Character) => (target: Target) =>
    totalMinimumMagicStability(character);

export const magicArrowsTotalMaximumStability =
  (character: Character) => (target: Target) =>
    totalMaximumMagicStability(character);

export const magicArrowsTotalInnateSkillDamageModifier =
  (character: Character) => (target: Target) =>
    character.mainWeapon.type === "staff" ?
      65 + 25 + 6 * magicArrowsLevel(character)
    : 65 + 6 * magicArrowsLevel(character);

export const magicArrowsTotalConstant =
  (character: Character) => (target: Target) =>
    40 + magicArrowsLevel(character);

export const magicArrowsElement =
  (character: Character) => (target: Target) =>
    character.mainWeapon.type === "staff" ? mainWeaponElement(character)
    : character.subWeapon.type === "magic-device" ?
      subWeaponElement(character)
    : "neutral";

export const magicArrowsTotalDistanceDependentDamageModifier =
  (character: Character) => (target: Target) =>
    target.distanceFromPlayer <= 7 ?
      100 + totalShortRangeDamage(character)
    : 100 + totalLongRangeDamage(character);

export const magicArrowsTotalElementDamageModifier =
  (character: Character) => (target: Target) =>
    (
      magicArrowsElement(character)(target) === "dark" &&
      target.element === "light"
    ) ?
      100 +
      totalDamageToLight(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : magicArrowsElement(character)(target) && target.element === "dark" ?
      100 +
      totalDamageToDark(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : magicArrowsElement(character)(target) && target.element === "earth" ?
      100 +
      totalDamageToEarth(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : magicArrowsElement(character)(target) && target.element === "wind" ?
      100 +
      totalDamageToWind(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : magicArrowsElement(character)(target) && target.element === "water" ?
      100 +
      totalDamageToWater(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : magicArrowsElement(character)(target) && target.element === "fire" ?
      100 +
      totalDamageToFire(character) +
      25 +
      totalMagicDamageToElementBasedFromINT(character)
    : (
      (character.mainWeapon.type === "staff" ||
        character.mainWeapon.type === "magic-device") &&
      mainWeaponElement(character) !== "neutral"
    ) ?
      100 + totalMagicDamageToElementBasedFromINT(character)
    : 100;

export const magicArrowsTotalCriticalDamageModifier =
  (character: Character) => (target: Target) =>
    Math.floor(
      100 +
        ((totalCriticalDamage(character) - 100) *
          (totalMagicCriticalDamageConversion(character) +
            ((
              character.mainWeapon.type === "one-handed-sword" &&
              character.subWeapon.type === "magic-device"
            ) ?
              dualBringerTotalMagicCriticalDamageConversion(character)
            : 0))) /
          100,
    );

export const magicArrowsTotalSkillDamageModifier =
  (character: Character) => (target: Target) =>
    100 + longRangeTotalSkillDamageModifier(character);

export const magicArrowsTotalLastDamageModifier =
  (character: Character) => (target: Target) =>
    100 +
    braveAuraTotalLastDamageModifier(character) +
    manaRechargeTotalLastDamageModifier(character);

export const magicArrowsDamage =
  (character: Character) => (target: Target) => {
    const context = damage({
      characterLevel: character.level,
      targetLevel: target.level,
      source: magicArrowsTotalSourceValueUsed(character)(target),
      defense: magicArrowsTotalDefenseValueUsed(character)(target),
      resistance: magicArrowsTotalResistanceValueUsed(character)(target),
      proration: magicArrowsTotalProrationValueUsed(character)(target),
      pierce: magicArrowsTotalPierceValueUsed(character)(target),
      constant: magicArrowsTotalConstant(character)(target),
      innateSkillDamageModifier:
        magicArrowsTotalInnateSkillDamageModifier(character)(target),
      elementDamageModifier:
        magicArrowsTotalElementDamageModifier(character)(target),
      criticalDamageModifier:
        magicArrowsTotalCriticalDamageModifier(character)(target),
      distanceDependentDamageModifier:
        magicArrowsTotalDistanceDependentDamageModifier(character)(target),
      lastDamageModifier:
        magicArrowsTotalLastDamageModifier(character)(target),
      flatUnsheatheAttack: 0,
      percentUnsheatheAttack: 100,
      skillDamageModifier:
        magicArrowsTotalSkillDamageModifier(character)(target),
      baseDropGemDamageModifier: 100,
      comboRelatedDamageModifier: 100,
      qadalBurdenDamageModifier: 100,
      ultimaLionRageDamageModifier: 100,
      stability: 100,
      isAffectedByLethargy: false,
      isGrazed: false,
      isGuarded: false,
    });

    const minimumDamage = context
      .stability(magicArrowsTotalMinimumStability(character)(target))
      .calculate();

    const maximumDamage = context
      .stability(magicArrowsTotalMaximumStability(character)(target))
      .calculate();

    const averageDamage = Math.floor((minimumDamage + maximumDamage) / 2);

    return {
      minimumDamage,
      maximumDamage,
      averageDamage,
    };
  };

// IMPLEMENT ALL OF THE DAMAGE SKILLS and DAMAGE CALCULATOR
