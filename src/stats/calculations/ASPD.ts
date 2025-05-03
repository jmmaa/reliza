import { type StatCalcConfig } from "../types";
import {
  add,
  bladeSkills,
  characterLevel,
  D,
  dualSwordSkills,
  flattenedStats,
  halberdSkills,
  isUsingDualSwords,
  isUsingMainBOW,
  isUsingMainBWG,
  isUsingMainHAL,
  isUsingMainKN,
  isUsingMainKTN,
  isUsingMainMD,
  isUsingMainOHS,
  isUsingMainSTF,
  isUsingMainTHS,
  martialSkills,
  regislets,
  total,
} from "../utils";
import { totalAGI } from "./AGI";
import { totalDEX } from "./DEX";
import { totalINT } from "./INT";
import { totalSTR } from "./STR";
import {
  armorTypePercentASPDModifier,
  subWeaponShieldPercentASPDModifier,
} from "./equipmentModifiers";

export const quickSlashPercentASPDPassive = (config: StatCalcConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).quickSlash.level
  : 0;

export const quickSlashFlatASPDPassive = (config: StatCalcConfig) =>
  isUsingMainOHS(config) || isUsingMainTHS(config) ?
    bladeSkills(config).quickSlash.level * 10
  : 0;

export const martialDisciplinePercentASPDPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainKN(config) ?
    martialSkills(config).martialDiscipline.level
  : 0;

export const martialDisciplineFlatASPDPassive = (
  config: StatCalcConfig,
) =>
  isUsingMainKN(config) ?
    martialSkills(config).martialDiscipline.level * 10
  : 0;

export const quickAuraFlatASPDBuff = (config: StatCalcConfig) =>
  halberdSkills(config).quickAura.buffIsActive ?
    halberdSkills(config).quickAura.level * 50
  : 0;
export const quickAuraPercentASPDBuff = (config: StatCalcConfig) =>
  halberdSkills(config).quickAura.buffIsActive ?
    D.floor(
      D(halberdSkills(config).quickAura.level).times(D(2.5)),
    ).toNumber()
  : 0;

export const godspeedWieldFlatASPDBuff = (config: StatCalcConfig) =>
  halberdSkills(config).godspeedWield.buffIsActive ?
    isUsingMainHAL(config) ?
      30 *
        halberdSkills(config).godspeedWield.level *
        halberdSkills(config).godspeedWield.stacks +
      100 * halberdSkills(config).godspeedWield.stacks
    : 30 *
      halberdSkills(config).godspeedWield.level *
      halberdSkills(config).godspeedWield.stacks
  : 0;

export const dualSwordControlFlatASPDPassive = (config: StatCalcConfig) =>
  isUsingDualSwords(config) ?
    50 * dualSwordSkills(config).dualSwordControl.level
  : 0;

export const regisletAttackSpeedBoostFlatASPD = (config: StatCalcConfig) =>
  regislets(config).attackSpeedBoost.level;

export const berserkPercentASPDBuff = (config: StatCalcConfig) =>
  bladeSkills(config).berserk.buffIsActive ?
    bladeSkills(config).berserk.level * 10
  : 0;

export const berserkFlatASPDBuff = (config: StatCalcConfig) =>
  bladeSkills(config).berserk.buffIsActive ?
    bladeSkills(config).berserk.level * 100
  : 0;

export const totalDualWieldBaseASPD = (config: StatCalcConfig) => {
  const PRIMARY = D(100);
  const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(4.2);
  const YIELD_VAL_FROM_STR = D(totalSTR(config)).times(0.2);
  const LEVEL = D(characterLevel(config));

  const total = D.round(
    PRIMARY.plus(LEVEL).plus(YIELD_VAL_FROM_AGI).plus(YIELD_VAL_FROM_STR),
  ).toNumber();

  return total;
};

export const totalOneHandedSwordBaseASPD = (config: StatCalcConfig) => {
  const PRIMARY = D(100);
  const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(4.2);
  const YIELD_VAL_FROM_STR = D(totalSTR(config)).times(0.2);
  const LEVEL = D(characterLevel(config));

  const total = D.round(
    PRIMARY.plus(LEVEL).plus(YIELD_VAL_FROM_AGI).plus(YIELD_VAL_FROM_STR),
  ).toNumber();

  return total;
};

export const totalTwoHandedSwordBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   50 +
  //     characterLevel(config) +
  //     totalAGI(config) * 2 +
  //     (totalAGI(config) + totalSTR(config) - 1) / 5,
  // );
  {
    const PRIMARY = D(50);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(2.1);
    const YIELD_VAL_FROM_STR = D(totalSTR(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_STR),
    ).toNumber();

    return total;
  };

export const totalBowBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   75 +
  //     characterLevel(config) +
  //     totalAGI(config) * 3 +
  //     (totalAGI(config) + totalDEX(config) * 2 - 1) / 10,
  // );

  {
    const PRIMARY = D(75);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(3.1);
    const YIELD_VAL_FROM_DEX = D(totalDEX(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_DEX),
    ).toNumber();

    return total;
  };

export const totalBowgunBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   30 +
  //     characterLevel(config) +
  //     totalAGI(config) * 2.2 +
  //     totalDEX(config) * 0.2,
  // );
  {
    const PRIMARY = D(30);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(2.2);
    const YIELD_VAL_FROM_DEX = D(totalDEX(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_DEX),
    ).toNumber();

    return total;
  };

export const totalStaffBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   60 +
  //     characterLevel(config) +
  //     totalAGI(config) +
  //     (totalAGI(config) + totalINT(config) - 1) / 5,
  // );
  {
    const PRIMARY = D(60);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(1.8);
    const YIELD_VAL_FROM_INT = D(totalINT(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_INT),
    ).toNumber();

    return total;
  };

export const totalMagicDeviceBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   90 +
  //     characterLevel(config) +
  //     totalAGI(config) * 4 +
  //     (totalINT(config) - 1) / 5,
  // );
  {
    const PRIMARY = D(90);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(4);
    const YIELD_VAL_FROM_INT = D(totalINT(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_INT),
    ).toNumber();

    return total;
  };

export const totalKnuckleBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   120 +
  //     characterLevel(config) +
  //     totalAGI(config) * 4.6 +
  //     totalDEX(config) / 10 +
  //     totalSTR(config) / 10,
  // );

  {
    const PRIMARY = D(120);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(4.6);
    const YIELD_VAL_FROM_INT = D(totalINT(config)).times(0.1);
    const YIELD_VAL_FROM_DEX = D(totalDEX(config)).times(0.1);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_INT)
        .plus(YIELD_VAL_FROM_DEX),
    ).toNumber();

    return total;
  };

export const totalHalberdBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   25 +
  //     characterLevel(config) +
  //     totalAGI(config) * 3.5 +
  //     totalSTR(config) * 0.2,
  // );

  {
    const PRIMARY = D(25);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(3.5);
    const YIELD_VAL_FROM_STR = D(totalSTR(config)).times(0.2);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_STR),
    ).toNumber();

    return total;
  };

export const totalKatanaBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(
  //   200 +
  //     characterLevel(config) +
  //     totalAGI(config) * 3.9 +
  //     totalSTR(config) * 0.3,
  // );

  {
    const PRIMARY = D(25);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(3.9);
    const YIELD_VAL_FROM_STR = D(totalSTR(config)).times(0.3);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL)
        .plus(YIELD_VAL_FROM_AGI)
        .plus(YIELD_VAL_FROM_STR),
    ).toNumber();

    return total;
  };

export const totalBareHandBaseASPD = (config: StatCalcConfig) =>
  // Math.floor(1000 + characterLevel(config) + totalAGI(config) * 9.6);
  {
    const PRIMARY = D(1000);
    const YIELD_VAL_FROM_AGI = D(totalAGI(config)).times(9.6);
    const LEVEL = D(characterLevel(config));

    const total = D.round(
      PRIMARY.plus(LEVEL).plus(YIELD_VAL_FROM_AGI),
    ).toNumber();

    return total;
  };

export const totalBaseASPD = (config: StatCalcConfig) =>
  isUsingDualSwords(config) ? totalDualWieldBaseASPD(config)
  : isUsingMainOHS(config) ? totalOneHandedSwordBaseASPD(config)
  : isUsingMainTHS(config) ? totalTwoHandedSwordBaseASPD(config)
  : isUsingMainBOW(config) ? totalBowBaseASPD(config)
  : isUsingMainBWG(config) ? totalBowgunBaseASPD(config)
  : isUsingMainSTF(config) ? totalStaffBaseASPD(config)
  : isUsingMainMD(config) ? totalMagicDeviceBaseASPD(config)
  : isUsingMainKN(config) ? totalKnuckleBaseASPD(config)
  : isUsingMainHAL(config) ? totalHalberdBaseASPD(config)
  : isUsingMainKTN(config) ? totalKatanaBaseASPD(config)
  : totalBareHandBaseASPD(config);

export const totalPercentASPDFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.percentASPD)
    .reduce(add, 0) +
  armorTypePercentASPDModifier(config) +
  subWeaponShieldPercentASPDModifier(config);

export const totalPercentASPDFromSkills = (config: StatCalcConfig) =>
  quickSlashPercentASPDPassive(config) +
  berserkPercentASPDBuff(config) +
  quickAuraPercentASPDBuff(config) +
  martialDisciplinePercentASPDPassive(config);

export const totalPercentASPD = (config: StatCalcConfig) =>
  totalPercentASPDFromEquipment(config) +
  totalPercentASPDFromSkills(config);

export const totalFlatASPDFromEquipment = (config: StatCalcConfig) =>
  flattenedStats(config)
    .map((stat) => stat.flatASPD)
    .reduce(add, 0) + regisletAttackSpeedBoostFlatASPD(config);

export const totalFlatASPDFromSkills = (config: StatCalcConfig) =>
  quickAuraFlatASPDBuff(config) +
  berserkFlatASPDBuff(config) +
  martialDisciplineFlatASPDPassive(config) +
  dualSwordControlFlatASPDPassive(config) +
  quickAuraFlatASPDBuff(config) +
  godspeedWieldFlatASPDBuff(config);

export const totalFlatASPD = (config: StatCalcConfig) =>
  totalFlatASPDFromEquipment(config) + totalFlatASPDFromSkills(config);

export const totalASPD = (config: StatCalcConfig) =>
  total(
    totalBaseASPD(config),
    totalPercentASPD(config),
    totalFlatASPD(config),
  );

export const calculateASPD = (config: StatCalcConfig) => ({
  totalBaseASPD: totalBaseASPD(config),
  totalFlatASPD: totalFlatASPD(config),
  totalPercentASPD: totalPercentASPD(config),
  totalASPD: totalASPD(config),
});
