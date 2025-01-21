import { type Config } from "../data";
import {
  bladeSkills,
  isUsingDualSwords,
  isUsingMainOHS,
  isUsingMainTHS,
} from "../utils";

export const hardHitLevel = (config: Config) =>
  bladeSkills(config).hardhit.level;

export const hardHitMPCost = (config: Config) => 100;

export const hardHitSkillMultiplier = (config: Config) =>
  100 + 5 * hardHitLevel(config) + (isUsingMainTHS(config) ? 5 : 0);

export const hardHitSkillConstant = (config: Config) =>
  50 + 5 * hardHitLevel(config);

export const hardHitAilmentChance = (config: Config) => {
  const level = hardHitLevel(config);

  return (
    level === 1 ? 9
    : level === 2 ? 14
    : level === 3 ? 19
    : level === 4 ? 23
    : level === 5 ? 27
    : level === 6 ? 32
    : level === 7 ? 37
    : level === 8 ? 41
    : level === 9 ? 45
    : level === 10 ? 50
    : 50 + (isUsingMainOHS(config) || isUsingDualSwords(config) ? 50 : 0)
  );
};

export const hardHitHitCount = (config: Config) => 1;

export const calculateHardHit = (config: Config) => ({
  hardHitLevel: hardHitLevel(config),
  hardHitMPCost: hardHitMPCost(config),
  hardHitSkillMultiplier: hardHitSkillMultiplier(config),
  hardHitSkillConstant: hardHitSkillConstant(config),
  hardHitAilmentChance: hardHitAilmentChance(config),
  hardHitHitCount: hardHitHitCount(config),
});

// const chance = (x: number) => (41 / 9) * x + 40 / 9;

// console.log([
//   { level: 1, chance: chance(1) },
//   { level: 2, chance: chance(2) },
//   { level: 3, chance: chance(3) },
//   { level: 4, chance: chance(4) },
//   { level: 5, chance: chance(5) },
//   { level: 6, chance: chance(6) },
//   { level: 7, chance: chance(7) },
//   { level: 8, chance: chance(8) },
//   { level: 9, chance: chance(9) },
//   { level: 10, chance: chance(10) },
// ]);

// FINISH OTHER SKILLS
