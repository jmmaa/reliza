import { type IntermediateConfig } from "../../../types";
import {
  increasedEnergyTotalFlatMATK,
  magicUPTotalFlatMATK,
} from "../../battleSkills";
import {
  conversionTotalFlatMATK,
  magicWarriorMasteryTotalFlatMATK,
} from "../../magicBladeSkills";
import { magicMasteryTotalPercentMATK } from "../../magicSkills/magicMastery";
import { prayerTotalPercentMATK } from "../../priestSkills";
import { magicAttackBoostTotalFlatMATK } from "../../regislets";
import { StatId } from "../../utils";
import {
  floor,
  get,
  sum,
  total,
  flattenedStats,
  isDualWielder,
} from "../../utils";
import { totalAGI, totalDEX, totalINT } from "../basic";
import { totalMainWeaponATK } from "../equipment";
import {
  totalBaseMATKValueFromMATKDOWN,
  totalBaseMATKValueFromMATKUP,
} from "../special";
import { subWeaponKnucklePercentMATKModifier } from "./modifiers";

export const totalDualWieldBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config);

export const totalOneHandedSwordBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config);

export const totalTwoHandedSwordBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config);

export const totalBowBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config);

export const totalBowgunBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config);

export const totalStaffBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalMagicDeviceBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] +
  totalINT(config) * 4 +
  totalDEX(config) +
  totalMainWeaponATK(config);

export const totalKnuckleBaseMATK = (config: IntermediateConfig) =>
  floor(
    config["character.level"] +
      totalINT(config) * 4 +
      totalDEX(config) +
      totalMainWeaponATK(config) * 0.5,
  );

export const totalHalberdBaseMATK = (config: IntermediateConfig) =>
  floor(
    config["character.level"] +
      totalINT(config) * 2 +
      totalDEX(config) +
      totalAGI(config),
  );

export const totalKatanaBaseMATK = (config: IntermediateConfig) =>
  floor(
    config["character.level"] + totalINT(config) * 1.5 + totalDEX(config),
  );

export const totalBareHandBaseMATK = (config: IntermediateConfig) =>
  config["character.level"] + totalINT(config) * 3 + totalDEX(config) + 1;

export const totalBaseMATK = (config: IntermediateConfig) =>
  (isDualWielder(config) ? totalDualWieldBaseMATK(config)
  : config["character.mainweapon.type"] === "one-handed-sword" ?
    totalOneHandedSwordBaseMATK(config)
  : config["character.mainweapon.type"] === "two-handed-sword" ?
    totalTwoHandedSwordBaseMATK(config)
  : config["character.mainweapon.type"] === "bow" ?
    totalBowBaseMATK(config)
  : config["character.mainweapon.type"] === "bowgun" ?
    totalBowgunBaseMATK(config)
  : config["character.mainweapon.type"] === "staff" ?
    totalStaffBaseMATK(config)
  : config["character.mainweapon.type"] === "magic-device" ?
    totalMagicDeviceBaseMATK(config)
  : config["character.mainweapon.type"] === "knuckle" ?
    totalKnuckleBaseMATK(config)
  : config["character.mainweapon.type"] === "halberd" ?
    totalHalberdBaseMATK(config)
  : config["character.mainweapon.type"] === "katana" ?
    totalKatanaBaseMATK(config)
  : totalBareHandBaseMATK(config)) +
  totalBaseMATKValueFromMATKUP(config) +
  totalBaseMATKValueFromMATKDOWN(config);

export const totalPercentMATKFromEquipment = (
  config: IntermediateConfig,
) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.percentMATK)
    .map((stat) => stat[1])
    .reduce(sum, 0) + subWeaponKnucklePercentMATKModifier(config);

export const totalPercentMATKFromSkills = (config: IntermediateConfig) =>
  magicMasteryTotalPercentMATK(config) + prayerTotalPercentMATK(config);

export const totalPercentMATK = (config: IntermediateConfig) =>
  totalPercentMATKFromEquipment(config) +
  totalPercentMATKFromSkills(config);

export const totalFlatMATKFromEquipment = (config: IntermediateConfig) =>
  flattenedStats(config)
    .filter((stat) => stat[0] === StatId.flatMATK)
    .map((stat) => stat[1])
    .reduce(sum, 0) + magicAttackBoostTotalFlatMATK(config);

export const totalFlatMATKFromSkills = (config: IntermediateConfig) =>
  magicUPTotalFlatMATK(config) +
  increasedEnergyTotalFlatMATK(config) +
  magicWarriorMasteryTotalFlatMATK(config) +
  conversionTotalFlatMATK(config);

export const totalFlatMATK = (config: IntermediateConfig) =>
  totalFlatMATKFromEquipment(config) + totalFlatMATKFromSkills(config);

export const totalMATK = (config: IntermediateConfig) =>
  total(
    totalBaseMATK(config),
    totalPercentMATK(config),
    totalFlatMATK(config),
  );
