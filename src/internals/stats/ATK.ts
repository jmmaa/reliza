import { type Config } from "../data";
import {
  add,
  battleSkills,
  bladeSkills,
  createRestrictionFrom,
  flattenedStats,
  halberdSkills,
  hunterSkills,
  isNotUsingSubWeapon,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainBWG,
  isUsingMainHAL,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainSTF,
  isUsingMainTHS,
  isUsingSubArrow,
  mainWeaponType,
  martialSkills,
  mononofuSkills,
  regislets,
  shotSkills,
  subWeaponType,
  total,
  wizardSkills,
} from "../utils";
import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";
import { totalINT } from "./INT";
import { totalSTR } from "./STR";
import {
  totalBaseATKValueFromATKDOWN,
  totalBaseATKValueFromATKUP,
} from "./derivativeATK";
import { subWeaponMagicDevicePercentATKModifier } from "./equipmentModifiers";
import { totalMainWeaponATK } from "./weaponATK";

export const wizardSkillWeaponRestriction = createRestrictionFrom([
  "MAIN_STF",
  "MAIN_MD",
]);

export const attackUPFlatATKPassive = (config: Config) =>
  Math.floor(
    (config.properties.level *
      (2.5 * battleSkills(config).attackUP.level)) /
      100,
  );

export const bushidoPercentATKPassive = (config: Config) =>
  isUsingMainKTN(config) ?
    mononofuSkills(config).bushido.level >= 8 ? 3
    : mononofuSkills(config).bushido.level >= 3 ? 2
    : 1
  : 0;

export const castMasteryPercentATKReduction = (config: Config) =>
  (
    createRestrictionFrom(["MAIN_STF", "MAIN_MD"]).satisfies(
      mainWeaponType(config),
      subWeaponType(config),
    ) && wizardSkills(config).castMastery.level > 0
  ) ?
    -Math.ceil(50 - 2.5 * wizardSkills(config).castMastery.level)
  : 0;

export const regisletPhysicalAttackBoostFlatATK = (config: Config) =>
  regislets(config).physicalAttackBoost.level;

export const warCryPercentATKBuff = (config: Config) =>
  bladeSkills(config).warCry.buffIsActive ?
    isUsingMainTHS(config) ? bladeSkills(config).warCry.level * 10 + 5
    : bladeSkills(config).warCry.level * 10
  : 0;

export const swordMasteryPercentATKPassive = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).swordMastery.level >= 8 ? 3
    : bladeSkills(config).swordMastery.level >= 3 ? 2
    : 1
  : 0;

export const shotMasteryPercentATKPassive = (config: Config) =>
  isUsingMainBWG(config) || isUsingMainBOW(config) ?
    shotSkills(config).shotMastery.level >= 8 ? 3
    : shotSkills(config).shotMastery.level >= 3 ? 2
    : 1
  : 0;

export const martialMasteryPercentATKPassive = (config: Config) =>
  isUsingMainKN(config) ?
    martialSkills(config).martialMastery.level >= 8 ? 3
    : martialSkills(config).martialMastery.level >= 3 ? 2
    : 1
  : 0;

export const intimidatingPowerFlatATKPassive = (config: Config) =>
  Math.floor(
    (config.properties.level *
      (2.5 * battleSkills(config).intimidatingPower.level)) /
      100,
  );

export const halberdMasteryPercentATKPassive = (config: Config) =>
  isUsingMainHAL(config) ?
    halberdSkills(config).halberdMastery.level >= 8 ? 3
    : halberdSkills(config).halberdMastery.level >= 3 ? 2
    : 1
  : 0;

export const hunterBowgunBaseATKPassive = (
  config: Config, // TODO THIS SKILL
) =>
  (
    isUsingMainBWG(config) &&
    !(isUsingSubArrow(config) || isNotUsingSubWeapon(config))
  ) ?
    (1 +
      (Math.floor(hunterSkills(config).hunterBowgun.level * 1.5) * 5) /
        3 /
        100) *
    config.equipments.mainweapon.ATK
  : 0;

export const totalDualWieldBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: Config) =>
  config.properties.level +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunBaseATKPassive(config);

export const totalStaffBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: Config) =>
  config.properties.level +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: Config) =>
  Math.floor(
    config.properties.level +
      totalSTR(config) * 1.5 +
      totalDEX(config) * 2.5 +
      totalMainWeaponATK(config),
  );

export const totalBareHandBaseATK = (config: Config) =>
  config.properties.level +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: Config) =>
  isUsingDualSwords(config) ? totalDualWieldBaseATK(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseATK(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseATK(config)
  : isUsingMainBOW(config) ? totalBowBaseATK(config)
  : isUsingMainBWG(config) ? totalBowgunBaseATK(config)
  : isUsingMainSTF(config) ? totalStaffBaseATK(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseATK(config)
  : isUsingMainKN(config) ? totalKnuckleBaseATK(config)
  : isUsingMainHAL(config) ? totalHalberdBaseATK(config)
  : isUsingMainKTN(config) ? totalKatanaBaseATK(config)
  : totalBareHandBaseATK(config) +
    totalBaseATKValueFromATKUP(config) +
    totalBaseATKValueFromATKDOWN(config);

export const totalPercentATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: Config) =>
  swordMasteryPercentATKPassive(config) +
  shotMasteryPercentATKPassive(config) +
  martialMasteryPercentATKPassive(config) +
  halberdMasteryPercentATKPassive(config) +
  bushidoPercentATKPassive(config) +
  warCryPercentATKBuff(config);

export const totalPercentATK = (config: Config) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryPercentATKReduction(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation

export const totalFlatATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0) + regisletPhysicalAttackBoostFlatATK(config);

export const totalFlatATKFromSkills = (config: Config) =>
  attackUPFlatATKPassive(config) + intimidatingPowerFlatATKPassive(config);

export const totalFlatATK = (config: Config) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: Config) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );

export const calculateATK = (config: Config) => ({
  totalBaseATK: totalBaseATK(config),
  totalPercentATK: totalPercentATK(config),
  totalFlatATK: totalFlatATK(config),
  totalATK: totalATK(config),
});
