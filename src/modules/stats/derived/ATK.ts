import { StatId } from "../../../types";
import { type IntermediateConfig } from "../../../types";
import {
  attackUPTotalFlatATK,
  intimidatingPowerTotalFlatATK,
} from "../../battleSkills";
import { swordMasteryTotalPercentATK } from "../../bladeSkills";
import { warCryTotalPercentATK } from "../../bladeSkills";
import { halberdMasteryTotalPercentATK } from "../../halberdSkills";
import { hunterBowgunTotalBaseATK } from "../../hunterSkills";
import { martialMasteryTotalPercentATK } from "../../martialSkills";
import { bushidoTotalPercentATK } from "../../mononofuSkills";
import { physicalAttackBoostTotalFlatATK } from "../../regislets";
import { shotMasteryTotalPercentATK } from "../../shotSkills";
import {
  sum,
  floor,
  total,
  flattenedStats,
  isDualWielder,
  get,
} from "../../utils";
import { castMasteryTotalPercentATK } from "../../wizardSkills/castMastery";
import { totalAGI, totalDEX, totalINT, totalSTR } from "../basic";
import { totalMainWeaponATK } from "../equipment";
import {
  totalBaseATKValueFromATKDOWN,
  totalBaseATKValueFromATKUP,
} from "../special";
import { subWeaponMagicDevicePercentATKModifier } from "./modifiers";

export const totalDualWieldBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunTotalBaseATK(config);

export const totalStaffBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: IntermediateConfig) =>
  floor(
    config["character.level"] +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: IntermediateConfig) =>
  floor(
    config["character.level"] +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) * 1.5 +
  totalDEX(config) * 2.5 +
  totalMainWeaponATK(config);

export const totalBareHandBaseATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: IntermediateConfig) =>
  (isDualWielder(config) ? totalDualWieldBaseATK(config)
  : config["character.mainweapon.type"] === "one-handed-sword" ?
    totalOneHandedSwordBaseATK(config)
  : config["character.mainweapon.type"] === "two-handed-sword" ?
    totalTwoHandedSwordBaseATK(config)
  : config["character.mainweapon.type"] === "bow" ? totalBowBaseATK(config)
  : config["character.mainweapon.type"] === "bowgun" ?
    totalBowgunBaseATK(config)
  : config["character.mainweapon.type"] === "staff" ?
    totalStaffBaseATK(config)
  : config["character.mainweapon.type"] === "magic-device" ?
    totalMagicDeviceBaseATK(config)
  : config["character.mainweapon.type"] === "knuckle" ?
    totalKnuckleBaseATK(config)
  : config["character.mainweapon.type"] === "halberd" ?
    totalHalberdBaseATK(config)
  : config["character.mainweapon.type"] === "katana" ?
    totalKatanaBaseATK(config)
  : totalBareHandBaseATK(config)) +
  totalBaseATKValueFromATKUP(config) +
  totalBaseATKValueFromATKDOWN(config);

export const totalPercentATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentATK)
    .map((stat) => stat[1])
    .reduce(sum, 0) + subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: IntermediateConfig) =>
  swordMasteryTotalPercentATK(config) +
  shotMasteryTotalPercentATK(config) +
  martialMasteryTotalPercentATK(config) +
  halberdMasteryTotalPercentATK(config) +
  bushidoTotalPercentATK(config) +
  warCryTotalPercentATK(config);

export const totalPercentATK = (config: IntermediateConfig) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryTotalPercentATK(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation
export const totalPercentATKForWizardSkills = (
  config: IntermediateConfig,
) =>
  totalPercentATKFromEquipment(config) + totalPercentATKFromSkills(config);

export const totalFlatATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatATK)
    .map((stat) => stat[1])
    .reduce(sum, 0) + physicalAttackBoostTotalFlatATK(config);

export const totalFlatATKFromSkills = (config: IntermediateConfig) =>
  attackUPTotalFlatATK(config) + intimidatingPowerTotalFlatATK(config);

export const totalFlatATK = (config: IntermediateConfig) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: IntermediateConfig) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );
