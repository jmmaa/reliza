import { type Config } from "../data";
import {
  isUsingSubMD,
  isUsingSubShield,
  magicBladeSkills,
} from "../utils";

export const totalEquipmentDEF = (config: Config) =>
  (isUsingSubShield(config) ? config.equipments.subweapon.DEF : 0) +
  config.equipments.armor.DEF +
  config.equipments.additionalGear.DEF +
  config.equipments.specialGear.DEF;

export const totalRefinementReduction = (config: Config) =>
  ((
    isUsingSubShield(config) ||
    (isUsingSubMD(config) && magicBladeSkills(config).magicSkin.level > 0)
  ) ?
    config.equipments.subweapon.refinement
  : 0) +
  config.equipments.armor.refinement +
  config.equipments.additionalGear.refinement;

export const calculateDefensive = (config: Config) => ({
  totalEquipmentDEF: totalEquipmentDEF(config),
  totalRefinementReduction: totalRefinementReduction(config),
});
