import { Config } from "../../../types";
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

export const totalDualWieldBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) +
  totalDEX(config) * 2 +
  totalAGI(config) +
  totalMainWeaponATK(config);

// A bit skeptical on this one, maybe this does not multiply STR/DEX by 2 if and only if STR/DEX  is equal to 1
export const totalOneHandedSwordBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) * 2 +
  totalDEX(config) * 2 +
  totalMainWeaponATK(config);

export const totalTwoHandedSwordBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) * 3 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalBowBaseATK = (config: Config) =>
  config["character.level"] +
  totalDEX(config) * 3 +
  totalSTR(config) +
  totalMainWeaponATK(config);

export const totalBowgunBaseATK = (config: Config) =>
  config["character.level"] +
  totalDEX(config) * 4 +
  totalMainWeaponATK(config) +
  hunterBowgunTotalBaseATK(config);

export const totalStaffBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) * 3 +
  totalINT(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseATK = (config: Config) =>
  config["character.level"] +
  totalINT(config) * 2 +
  totalAGI(config) * 2 +
  totalMainWeaponATK(config);

export const totalKnuckleBaseATK = (config: Config) =>
  floor(
    config["character.level"] +
      totalAGI(config) * 2 +
      totalDEX(config) * 0.5 +
      totalMainWeaponATK(config),
  );

export const totalHalberdBaseATK = (config: Config) =>
  floor(
    config["character.level"] +
      totalSTR(config) * 2.5 +
      totalAGI(config) * 1.5 +
      totalMainWeaponATK(config),
  );

export const totalKatanaBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) * 1.5 +
  totalDEX(config) * 2.5 +
  totalMainWeaponATK(config);

export const totalBareHandBaseATK = (config: Config) =>
  config["character.level"] +
  totalSTR(config) +
  1 +
  totalMainWeaponATK(config);

export const totalBaseATK = (config: Config) =>
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

export const totalPercentATKFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("percentATK")).reduce(sum, 0) +
  subWeaponMagicDevicePercentATKModifier(config);

export const totalPercentATKFromSkills = (config: Config) =>
  swordMasteryTotalPercentATK(config) +
  shotMasteryTotalPercentATK(config) +
  martialMasteryTotalPercentATK(config) +
  halberdMasteryTotalPercentATK(config) +
  bushidoTotalPercentATK(config) +
  warCryTotalPercentATK(config);

export const totalPercentATK = (config: Config) =>
  totalPercentATKFromEquipment(config) +
  totalPercentATKFromSkills(config) +
  castMasteryTotalPercentATK(config); // this one is a special case, so im not going to include it in skills func;

// this fuhction is only dedicated for wizard atk calculation
export const totalPercentATKForWizardSkills = (config: Config) =>
  totalPercentATKFromEquipment(config) + totalPercentATKFromSkills(config);

export const totalFlatATKFromEquipment = (config: Config) =>
  flattenedStats(config).map(get("flatATK")).reduce(sum, 0) +
  physicalAttackBoostTotalFlatATK(config);

export const totalFlatATKFromSkills = (config: Config) =>
  attackUPTotalFlatATK(config) + intimidatingPowerTotalFlatATK(config);

export const totalFlatATK = (config: Config) =>
  totalFlatATKFromEquipment(config) + totalFlatATKFromSkills(config);

export const totalATK = (config: Config) =>
  total(
    totalBaseATK(config),
    totalPercentATK(config),
    totalFlatATK(config),
  );
