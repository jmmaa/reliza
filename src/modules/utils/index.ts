import { StatId } from "../..";
import type { IntermediateConfig, Entries, Stat } from "../../types";

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

export const equipmentStatSources = <T extends IntermediateConfig>(
  config: T,
) => ({
  "character.mainweapon.stats": config["character.mainweapon.stats"],
  "character.subweapon.stats":
    isUsingStatAccessibleSubweapon(config) ?
      config["character.subweapon.stats"]
    : [],
  "character.additionalGear.stats":
    config["character.additionalGear.stats"],
  "character.armor.stats": config["character.armor.stats"],
  "character.specialGear.stats": config["character.specialGear.stats"],
});

export const equipmentCrystalSources = <T extends IntermediateConfig>(
  config: T,
) => ({
  "character.mainweapon.crystals": config["character.mainweapon.crystals"],
  // "character.subweapon.crystals": config["character.subweapon.crystals"], // need to confirm if subweapon crystals doesnt count
  "character.additionalGear.crystals":
    config["character.additionalGear.crystals"],
  "character.armor.crystals": config["character.armor.crystals"],
  "character.specialGear.crystals":
    config["character.specialGear.crystals"],
});

export const flattenedStats = (config: IntermediateConfig) =>
  entries(equipmentStatSources(config))
    .map((value) => value[1]) // extract statmaps
    .concat(
      entries(equipmentCrystalSources(config))
        .map((crystalSources) => crystalSources[1])
        .reduce((left, right) => left.concat(right)),
    )
    .reduce((left, right) => left.concat(right))
    .concat(config["character.consumables"])
    .concat(config["character.foodBuffs"]);

// export const crystalMapping: Record<
//   HardCodedCrystal,
//   (config: Config) => Stat[]
// > = {
//   bangrudom: (config) => [
//     [StatId.percentMaxHP, -20],
//     [StatId.percentATK, 10],
//     [StatId.percentMATK, 10],
//     [StatId.percentASPD, 10],
//     [StatId.percentCSPD, 10],
//     [
//       StatId.percentDEX,
//       config["character.subweapon.type"] === "shield" ? 5 : 0,
//     ],
//     [
//       StatId.magicPierce,
//       config["character.armor.type"] === "light" ? 5 : 0,
//     ],
//   ],
//   diark: (config) => [],
//   dominaredor: (config) => [],
//   "dr. leonardo ii": (config) => [],
//   falburrows: (config) => [],
//   gegner: (config) => [],
//   "ghost forest dark shaman": (config) => [],
//   imitacia: (config) => [],
//   "iron empress": (config) => [],
//   "jibril iii": (config) => [],
//   "prudent blue shadow": (config) => [],
//   "scream shadow": (config) => [],
//   sibylares: (config) => [],
//   "star wizard": (config) => [],
//   "underwater-ruins-monster": (config) => [],
//   vatudo: (config) => [],
//   "red ash dragon rudis": (config) => [],
//   lilicarolla: (config) => [],
//   wiltileaf: (config) => [],
//   "guard golem": (config) => [],
//   torexesa: (config) => [],
// };

// export const crystalSerializer: (
//   config: Config,
// ) => (xtal: WithCustom<HardCodedCrystal>) => Stat[] =
//   (config: Config) => (xtal: WithCustom<HardCodedCrystal>) =>
//     Array.isArray(xtal) ? xtal : crystalMapping[xtal](config);

// //  -- data accessors --

export const isDualWielder = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "one-handed-sword" &&
  config["character.subweapon.type"] === "one-handed-sword" &&
  config["character.skills.dualSwordSkills.dualSwordMastery.level"] > 0;

export const isMainOHS = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "one-handed-sword";

export const isMainTHS = (config: IntermediateConfig) =>
  config["character.mainweapon.type"] === "two-handed-sword";

export const isUsingStatAccessibleSubweapon = (
  config: IntermediateConfig,
) =>
  config["character.subweapon.type"] === "arrow" ||
  config["character.subweapon.type"] === "dagger" ||
  config["character.subweapon.type"] === "ninjutsu-scroll" ||
  config["character.subweapon.type"] === "shield";
