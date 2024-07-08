import { StatId } from "../../..";
import { type IntermediateConfig } from "../../../types";
import { unarmedMasteryTotalFlatWeaponATK } from "../../bareHandSkills";
import { swordMasteryTotalPercentWeaponATK } from "../../bladeSkills";
import { busterBladeTotalPercentWeaponATK } from "../../bladeSkills/busterBlade";
import { flashBlastTotalPercentMainWeaponATK } from "../../dualSwordSkills";
import { halberdMasteryTotalPercentWeaponATK } from "../../halberdSkills";
import { magicMasteryTotalPercentWeaponATK } from "../../magicSkills/magicMastery";
import { martialMasteryTotalPercentWeaponATK } from "../../martialSkills";
import {
  bushidoTotalPercentWeaponATK,
  twoHandedTotalPercentWeaponATK,
} from "../../mononofuSkills";
import { samuraiArcheryTotalFlatWeaponATK } from "../../shotSkills";
import { shotMasteryTotalPercentWeaponATK } from "../../shotSkills/shotMastery";
import { braveAuraTotalPercentWeaponATK } from "../../supportSkills";
import {
  get,
  sum,
  total,
  flattenedStats,
  isDualWielder,
  floor,
} from "../../utils";

export const totalMainWeaponRefinementBonusMainWeaponATK = (
  config: IntermediateConfig,
) =>
  floor(
    config["character.mainweapon.ATK"] *
      (config["character.mainweapon.refinement"] ** 2 / 100),
  ) + config["character.mainweapon.refinement"];
export const totalSubWeaponRefinementBonusSubWeaponATK = (
  config: IntermediateConfig,
) =>
  isDualWielder(config) ?
    floor(
      config["character.mainweapon.ATK"] *
        (config["character.mainweapon.refinement"] ** 2 / 200),
    ) + config["character.mainweapon.refinement"]
  : 0;

export const totalPercentWeaponATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentWeaponATK)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalPercentWeaponATKFromSkills = (
  config: IntermediateConfig,
) =>
  swordMasteryTotalPercentWeaponATK(config) +
  shotMasteryTotalPercentWeaponATK(config) +
  martialMasteryTotalPercentWeaponATK(config) +
  magicMasteryTotalPercentWeaponATK(config) +
  halberdMasteryTotalPercentWeaponATK(config) +
  bushidoTotalPercentWeaponATK(config) +
  twoHandedTotalPercentWeaponATK(config) +
  braveAuraTotalPercentWeaponATK(config) +
  busterBladeTotalPercentWeaponATK(config);

export const totalPercentWeaponATK = (config: IntermediateConfig) =>
  totalPercentWeaponATKFromEquipment(config) +
  totalPercentWeaponATKFromSkills(config);

export const totalFlatWeaponATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatWeaponATK)
    .map((stat) => stat[1])
    .reduce(sum, 0);

export const totalFlatWeaponATKFromSkills = (config: IntermediateConfig) =>
  samuraiArcheryTotalFlatWeaponATK(config) +
  unarmedMasteryTotalFlatWeaponATK(config);

export const totalFlatWeaponATK = (config: IntermediateConfig) =>
  totalFlatWeaponATKFromEquipment(config) +
  totalFlatWeaponATKFromSkills(config);

export const totalMainWeaponATK = (config: IntermediateConfig) =>
  total(
    config["character.mainweapon.ATK"],
    totalPercentWeaponATK(config) +
      flashBlastTotalPercentMainWeaponATK(config),
    totalFlatWeaponATK(config) +
      totalMainWeaponRefinementBonusMainWeaponATK(config),
  );

export const totalSubWeaponATK = (config: IntermediateConfig) =>
  isDualWielder(config) ?
    total(
      config["character.subweapon.ATK"],
      totalPercentWeaponATK(config),
      totalFlatWeaponATK(config),
    ) + totalSubWeaponRefinementBonusSubWeaponATK(config)
  : 0;
