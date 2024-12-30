import {
  swordMasteryTotalPercentWeaponATK,
  busterBladeTotalPercentWeaponATK,
} from "..";
import { martialMasteryTotalPercentWeaponATK } from "..";
import {
  shotMasteryTotalPercentWeaponATK,
  samuraiArcheryTotalFlatWeaponATK,
} from "..";
import { magicMasteryTotalPercentWeaponATK } from "..";
import {
  bushidoTotalPercentWeaponATK,
  twoHandedTotalPercentWeaponATK,
} from "..";
import { unarmedMasteryTotalFlatWeaponATK } from "..";
import { flashBlastTotalPercentMainWeaponATK } from "..";
import { halberdMasteryTotalPercentWeaponATK } from "..";
import { braveAuraTotalPercentWeaponATK } from "..";
import { type Config } from "../data";
import { isUsingDualSwords, flattenedStats, add, total } from "../utils";

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
  swordMasteryTotalPercentWeaponATK(config) +
  shotMasteryTotalPercentWeaponATK(config) +
  martialMasteryTotalPercentWeaponATK(config) +
  magicMasteryTotalPercentWeaponATK(config) +
  halberdMasteryTotalPercentWeaponATK(config) +
  bushidoTotalPercentWeaponATK(config) +
  twoHandedTotalPercentWeaponATK(config) +
  braveAuraTotalPercentWeaponATK(config) +
  busterBladeTotalPercentWeaponATK(config);

export const totalPercentWeaponATK = (config: Config) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (config: Config) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === "FLAT_WEAPON_ATK")
    .map((stat) => stat[1])
    .reduce(add, 0);

export const totalFlatWeaponATKFromSkills = (config: Config) =>
  samuraiArcheryTotalFlatWeaponATK(config) +
  unarmedMasteryTotalFlatWeaponATK(config);

export const totalFlatWeaponATK = (config: Config) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: Config) =>
  total(
    config.equipments.mainweapon.ATK,
    totalPercentWeaponATK(config) +
      flashBlastTotalPercentMainWeaponATK(config),
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
