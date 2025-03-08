import { type StatCalcConfig } from "../types";
import {
  add,
  bareHandSkills,
  bladeSkills,
  dualSwordSkills,
  flattenedStats,
  halberdSkills,
  isNotUsingSubWeapon,
  isUsingBareHand,
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
  isUsingSubKTN,
  isUsingSubScroll,
  magicSkills,
  martialSkills,
  mononofuSkills,
  ninjaSkills,
  shotSkills,
  supportSkills,
  total,
} from "../utils";

export const unarmedMasteryFlatWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingBareHand(config) && isNotUsingSubWeapon(config) ?
    Math.floor(
      (config.properties.level *
        bareHandSkills(config).unarmedMastery.level) /
        10,
    )
  : 0;

export const twoHandedTotalPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  (
    isUsingMainKTN(config) ||
    isUsingMainOHS(config) ||
    isUsingMainMD(config)
  ) ?
    (
      (isUsingSubScroll(config) &&
        ninjaSkills(config).ninjaSpirit.level === 10) ||
      isNotUsingSubWeapon(config)
    ) ?
      mononofuSkills(config).twoHanded.level
    : 0
  : isNotUsingSubWeapon(config) ? mononofuSkills(config).twoHanded.level
  : 0;

export const shotMasteryPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainBWG(config) || isUsingMainBOW(config) ?
    shotSkills(config).shotMastery.level * 3
  : 0;

export const samuraiArcheryFlatWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainBOW(config) && isUsingSubKTN(config) ?
    Math.min(
      Math.floor(
        config.equipments.subweapon.ATK *
          0.1 *
          shotSkills(config).samuraiArchery.level,
      ),
      Math.floor(
        config.equipments.mainweapon.ATK *
          Math.floor(config.equipments.mainweapon.stability / 100) *
          0.1 *
          shotSkills(config).samuraiArchery.level,
      ),
    )
  : 0;

export const martialMasteryPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainKN(config) ?
    martialSkills(config).martialMastery.level * 3
  : 0;

export const magicMasteryPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    magicSkills(config).magicMastery.level * 3
  : 0;

export const halberdMasteryPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainHAL(config) ?
    halberdSkills(config).halberdMastery.level * 3
  : 0;

export const flashBlastPercentMainWeaponATKBuff = (
  config: StatCalcConfig,
) =>
  dualSwordSkills(config).flashblast.buffIsActive ?
    (
      isUsingDualSwords(config) &&
      dualSwordSkills(config).flashblast.level > 0
    ) ?
      25
    : 0
  : 0;

export const busterBladePercentWeaponATKBuff = (config: StatCalcConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).busterBlade.buffIsActive ?
      bladeSkills(config).busterBlade.level
    : 0
  : 0;

export const bushidoPercentWeaponATKPassive = (config: StatCalcConfig) =>
  isUsingMainKTN(config) ? mononofuSkills(config).bushido.level * 3 : 0;

export const braveAuraPercentWeaponATKBuff = (config: StatCalcConfig) =>
  supportSkills(config).braveAura.buffIsActive ?
    10 + supportSkills(config).braveAura.level * 2
  : 0;

export const swordMasteryPercentWeaponATKPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).swordMastery.level * 3
  : 0;

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  config: StatCalcConfig,
) =>
  Math.floor(
    config.equipments.mainweapon.ATK *
      (config.equipments.mainweapon.refinement ** 2 / 100),
  ) + config.equipments.mainweapon.refinement;
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  config: StatCalcConfig,
) =>
  isUsingDualSwords(config) ?
    Math.floor(
      config.equipments.subweapon.ATK *
        (config.equipments.subweapon.refinement ** 2 / 200),
    ) + config.equipments.subweapon.refinement
  : 0;

export const totalPercentWeaponATKFromEquipment = (
  config: StatCalcConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentWeaponATKFromSkills = (config: StatCalcConfig) =>
  swordMasteryPercentWeaponATKPassive(config) +
  shotMasteryPercentWeaponATKPassive(config) +
  martialMasteryPercentWeaponATKPassive(config) +
  magicMasteryPercentWeaponATKPassive(config) +
  halberdMasteryPercentWeaponATKPassive(config) +
  bushidoPercentWeaponATKPassive(config) +
  twoHandedTotalPercentWeaponATKPassive(config) +
  braveAuraPercentWeaponATKBuff(config) +
  busterBladePercentWeaponATKBuff(config);

export const totalPercentWeaponATK = (config: StatCalcConfig) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatWeaponATKFromSkills = (config: StatCalcConfig) =>
  samuraiArcheryFlatWeaponATKPassive(config) +
  unarmedMasteryFlatWeaponATKPassive(config);

export const totalFlatWeaponATK = (config: StatCalcConfig) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: StatCalcConfig) =>
  total(
    config.equipments.mainweapon.ATK,
    totalPercentWeaponATK(config) +
      flashBlastPercentMainWeaponATKBuff(config),
    totalFlatWeaponATK(config) +
      totalMainWeaponRefinementBonusMainWeaponATK(config),
  );

export const totalSubWeaponATK = (config: StatCalcConfig) =>
  isUsingDualSwords(config) ?
    total(
      config.equipments.subweapon.ATK,
      totalPercentWeaponATK(config),
      totalFlatWeaponATK(config),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(config)
  : 0;

export const calculateWeaponATK = (config: StatCalcConfig) => ({
  totalBaseMainWeaponATK: config.equipments.mainweapon.ATK,
  totalBaseSubWeaponATK: config.equipments.subweapon.ATK,

  totalPercentWeaponATK: totalPercentWeaponATK(config),
  totalFlatWeaponATK: totalFlatWeaponATK(config),
  totalMainWeaponATK: totalMainWeaponATK(config),
  totalSubWeaponATK: totalSubWeaponATK(config),
});
