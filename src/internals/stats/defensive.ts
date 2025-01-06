import { type Config } from "../data";

import { magicSkinLevel } from "..";

export const totalEquipmentDEF = (config: Config) =>
  (config.equipments.subweapon.type === "SHIELD" ?
    config.equipments.subweapon.DEF
  : 0) +
  config.equipments.armor.DEF +
  config.equipments.additionalGear.DEF +
  config.equipments.specialGear.DEF;

export const totalRefinementReduction = (config: Config) =>
  ((
    config.equipments.subweapon.type === "SHIELD" ||
    (config.equipments.subweapon.type === "MAGIC_DEVICE" && // magic skin
      magicSkinLevel(config) > 0)
  ) ?
    config.equipments.subweapon.refinement
  : 0) +
  config.equipments.armor.refinement +
  config.equipments.additionalGear.refinement;

export const calculateDefensive = (config: Config) => ({
  totalEquipmentDEF: totalEquipmentDEF(config),
  totalRefinementReduction: totalRefinementReduction(config),
});
