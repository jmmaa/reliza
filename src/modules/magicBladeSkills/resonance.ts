import type { IntermediateConfig } from "../../types";
import {
  focusResonanceTotalReduction,
  powerResonanceTotalReduction,
  speedResonanceTotalReduction,
} from "../regislets";
import { entries, floor } from "../utils";

export const resonanceLevel = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.resonance.level"];
export const resonanceIsActive = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.resonance.isActive"];
export const resonanceActiveSet = (config: IntermediateConfig) =>
  config["character.skills.magicBladeSkills.resonance.activeSet"];

export const activeResonanceRegislet = (config: IntermediateConfig) =>
  config["character.regislets.focusResonance.level"] > 0 ? "focusResonance"
  : config["character.regislets.focusResonance.level"] > 0 ?
    "speedResonance"
  : config["character.regislets.powerResonance.level"] > 0 ?
    "powerResonance"
  : "none";

export const resonanceTotalFlatATK = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "powerResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        resonanceLevel(config) * 2 +
          config["character.subweapon.refinement"] * 2 -
          (resonanceLevel(config) * 2 +
            config["character.subweapon.refinement"] * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ATK/MATK"
  ) ?
    floor(
      resonanceLevel(config) * 2 +
        config["character.subweapon.refinement"] * 2,
    )
  : 0;

export const resonanceTotalFlatMATK = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "powerResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        resonanceLevel(config) * 2 +
          config["character.subweapon.refinement"] * 2 -
          (resonanceLevel(config) * 2 +
            config["character.subweapon.refinement"] * 2) *
            (powerResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ATK/MATK"
  ) ?
    floor(
      resonanceLevel(config) * 2 +
        config["character.subweapon.refinement"] * 2,
    )
  : 0;

export const resonanceTotalFlatASPD = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "speedResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        resonanceLevel(config) * 25 +
          config["character.subweapon.refinement"] * 50 -
          (resonanceLevel(config) * 25 +
            config["character.subweapon.refinement"] * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ASPD/CSPD"
  ) ?
    floor(
      resonanceLevel(config) * 25 +
        config["character.subweapon.refinement"] * 50,
    )
  : 0;

export const resonanceTotalFlatCSPD = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "speedResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        resonanceLevel(config) * 25 +
          config["character.subweapon.refinement"] * 50 -
          (resonanceLevel(config) * 25 +
            config["character.subweapon.refinement"] * 50) *
            (speedResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ASPD/CSPD"
  ) ?
    floor(
      resonanceLevel(config) * 25 +
        config["character.subweapon.refinement"] * 50,
    )
  : 0;

export const resonanceTotalFlatAccuracy = (config: IntermediateConfig) =>
  activeResonanceRegislet(config) === "focusResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        35 +
          resonanceLevel(config) * 2 +
          config["character.subweapon.refinement"] * 3 -
          (35 +
            resonanceLevel(config) * 2 +
            config["character.subweapon.refinement"] * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ACC/CRIT"
  ) ?
    floor(
      35 +
        resonanceLevel(config) * 2 +
        config["character.subweapon.refinement"] * 3,
    )
  : 0;

export const resonanceTotalFlatCriticalRate = (
  config: IntermediateConfig,
) =>
  activeResonanceRegislet(config) === "focusResonance" ?
    (
      resonanceIsActive(config) &&
      config["character.subweapon.type"] === "magic-device"
    ) ?
      floor(
        10 +
          resonanceLevel(config) * 2 +
          config["character.subweapon.refinement"] * 3 -
          (10 +
            resonanceLevel(config) * 2 +
            config["character.subweapon.refinement"] * 3) *
            (focusResonanceTotalReduction(config) / 100),
      )
    : 0
  : (
    resonanceIsActive(config) &&
    config["character.subweapon.type"] === "magic-device" &&
    resonanceActiveSet(config) === "ACC/CRIT"
  ) ?
    floor(
      10 +
        resonanceLevel(config) * 2 +
        config["character.subweapon.refinement"] * 3,
    )
  : 0;
