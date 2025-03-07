import { type Config } from "../data";
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

export const unarmedMasteryFlatWeaponATKPassive = (config: Config) =>
  isUsingBareHand(config) && isNotUsingSubWeapon(config) ?
    Math.floor(
      (config.properties.level *
        bareHandSkills(config).unarmedMastery.level) /
        10,
    )
  : 0;

export const twoHandedTotalPercentWeaponATKPassive = (config: Config) =>
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

export const shotMasteryPercentWeaponATKPassive = (config: Config) =>
  isUsingMainBWG(config) || isUsingMainBOW(config) ?
    shotSkills(config).shotMastery.level * 3
  : 0;

export const samuraiArcheryFlatWeaponATKPassive = (config: Config) =>
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

export const martialMasteryPercentWeaponATKPassive = (config: Config) =>
  isUsingMainKN(config) ?
    martialSkills(config).martialMastery.level * 3
  : 0;

export const magicMasteryPercentWeaponATKPassive = (config: Config) =>
  isUsingMainSTF(config) || isUsingMainMD(config) ?
    magicSkills(config).magicMastery.level * 3
  : 0;

export const halberdMasteryPercentWeaponATKPassive = (config: Config) =>
  isUsingMainHAL(config) ?
    halberdSkills(config).halberdMastery.level * 3
  : 0;

export const flashBlastPercentMainWeaponATKBuff = (config: Config) =>
  dualSwordSkills(config).flashblast.buffIsActive ?
    (
      isUsingDualSwords(config) &&
      dualSwordSkills(config).flashblast.level > 0
    ) ?
      25
    : 0
  : 0;

export const busterBladePercentWeaponATKBuff = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).busterBlade.buffIsActive ?
      bladeSkills(config).busterBlade.level
    : 0
  : 0;

export const bushidoPercentWeaponATKPassive = (config: Config) =>
  isUsingMainKTN(config) ? mononofuSkills(config).bushido.level * 3 : 0;

export const braveAuraPercentWeaponATKBuff = (config: Config) =>
  supportSkills(config).braveAura.buffIsActive ?
    10 + supportSkills(config).braveAura.level * 2
  : 0;

export const swordMasteryPercentWeaponATKPassive = (config: Config) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).swordMastery.level * 3
  : 0;

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  config: Config,
) =>
  Math.floor(
    config.equipments.mainweapon.ATK *
      (config.equipments.mainweapon.refinement ** 2 / 100),
  ) + config.equipments.mainweapon.refinement;
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  config: Config,
) =>
  isUsingDualSwords(config) ?
    Math.floor(
      config.equipments.subweapon.ATK *
        (config.equipments.subweapon.refinement ** 2 / 200),
    ) + config.equipments.subweapon.refinement
  : 0;

export const totalPercentWeaponATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "PERCENT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalPercentWeaponATKFromSkills = (config: Config) =>
  swordMasteryPercentWeaponATKPassive(config) +
  shotMasteryPercentWeaponATKPassive(config) +
  martialMasteryPercentWeaponATKPassive(config) +
  magicMasteryPercentWeaponATKPassive(config) +
  halberdMasteryPercentWeaponATKPassive(config) +
  bushidoPercentWeaponATKPassive(config) +
  twoHandedTotalPercentWeaponATKPassive(config) +
  braveAuraPercentWeaponATKBuff(config) +
  busterBladePercentWeaponATKBuff(config);

export const totalPercentWeaponATK = (config: Config) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatWeaponATKFromSkills = (config: Config) =>
  samuraiArcheryFlatWeaponATKPassive(config) +
  unarmedMasteryFlatWeaponATKPassive(config);

export const totalFlatWeaponATK = (config: Config) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: Config) =>
  total(
    config.equipments.mainweapon.ATK,
    totalPercentWeaponATK(config) +
      flashBlastPercentMainWeaponATKBuff(config),
    totalFlatWeaponATK(config) +
      totalMainWeaponRefinementBonusMainWeaponATK(config),
  );

export const totalSubWeaponATK = (config: Config) =>
  isUsingDualSwords(config) ?
    total(
      config.equipments.subweapon.ATK,
      totalPercentWeaponATK(config),
      totalFlatWeaponATK(config),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(config)
  : 0;

export const calculateWeaponATK = (config: Config) => ({
  totalBaseMainWeaponATK: config.equipments.mainweapon.ATK,
  totalBaseSubWeaponATK: config.equipments.subweapon.ATK,

  totalPercentWeaponATK: totalPercentWeaponATK(config),
  totalFlatWeaponATK: totalFlatWeaponATK(config),
  totalMainWeaponATK: totalMainWeaponATK(config),
  totalSubWeaponATK: totalSubWeaponATK(config),
});
