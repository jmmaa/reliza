import { defaultStatMap, statMap } from "../..";
import { Config, Entries, Target } from "../../types";

export const total = (base: number, percent: number, flat: number) =>
  Math.floor(base * ((100 + percent) / 100)) + flat;

export const sum = (first: number, second: number) => first + second;

export const product = (first: number, second: number) => first * second;

export const get =
  <M extends {}, K extends keyof M>(key: K) =>
  (map: M) =>
    map[key];

export const floor = Math.floor;

export const max = Math.max;

export const min = Math.min;

export const concat = <V>(first: V[], second: V[]) => first.concat(second);

export const entries = <T extends {}>(o: T) =>
  Object.entries(o) as Entries<T>;

export const equipmentStatSources = <T extends Config>(config: T) => ({
  "character.mainweapon.stats": config["character.mainweapon.stats"],
  "character.subweapon.stats":
    (
      config["character.subweapon.type"] === "arrow" ||
      config["character.subweapon.type"] === "dagger" ||
      config["character.subweapon.type"] === "ninjutsu-scroll" ||
      config["character.subweapon.type"] === "shield"
    ) ?
      config["character.subweapon.stats"]
    : [defaultStatMap],
  "character.additionalGear.stats":
    config["character.additionalGear.stats"],
  "character.armor.stats": config["character.armor.stats"],
  "character.specialGear.stats": config["character.specialGear.stats"],
});

export const equipmentCrystalSources = <T extends Config>(config: T) => ({
  "character.mainweapon.crystals": config["character.mainweapon.crystals"],
  "character.subweapon.crystals": [[defaultStatMap]], // need to confirm if subweapon crystals doesnt count
  "character.additionalGear.crystals":
    config["character.additionalGear.crystals"],
  "character.armor.crystals": config["character.armor.crystals"],
  "character.specialGear.crystals":
    config["character.specialGear.crystals"],
});

export const flattenedStats = (config: Config) =>
  entries(equipmentStatSources(config))
    .map((value) => value[1]) // extract statmaps
    .concat(
      entries(equipmentCrystalSources(config))
        .map((value) => value[1]) // extract nested statmaps
        .map((crystalSources) =>
          crystalSources.reduce((left, right) => left.concat(right), []),
        )
        .map((value) => value[1]),
    )
    .reduce((left, right) => left.concat(right))
    .concat(config["character.consumables"])
    .concat(config["character.foodBuffs"]);

// //  -- data accessors --

export const isDualWielder = (config: Config) =>
  config["character.mainweapon.type"] === "one-handed-sword" &&
  config["character.subweapon.type"] === "one-handed-sword" &&
  config["character.skills.dualSwordSkills.dualSwordMastery.level"] > 0;

export const isMainOHS = (config: Config) =>
  config["character.mainweapon.type"] === "one-handed-sword";

export const isMainTHS = (config: Config) =>
  config["character.mainweapon.type"] === "two-handed-sword";
