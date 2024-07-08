import { IntermediateConfig } from "../../types";
import {
  totalBaseATK,
  totalFlatATK,
  totalMATK,
  totalPercentATKFromEquipment,
  totalPercentATKFromSkills,
} from "../stats";
import { floor, total } from "../utils";

export const totalPercentATKForWizardSkills = (
  config: IntermediateConfig,
) =>
  totalPercentATKFromEquipment(config) + totalPercentATKFromSkills(config);

export const totalATKForWizardSkills = (config: IntermediateConfig) =>
  floor(
    total(
      totalBaseATK(config),
      totalPercentATKForWizardSkills(config),
      totalFlatATK(config),
    ) * 0.25,
  );

export const totalMATKForWizardSkills = (config: IntermediateConfig) =>
  floor(totalMATK(config) * 0.75);

export const totalWizardATK = (config: IntermediateConfig) =>
  totalATKForWizardSkills(config) + totalMATKForWizardSkills(config);
