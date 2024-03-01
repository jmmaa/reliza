import { DeclaredStatus } from "../types";

export const magicWarriorMasteryLevel =
  (level: number) =>
  <S>(status: S) => ({ ...status, magicWarriorMasteryLevel: level });

// calc

export const magicWarriorMastery = <
  S extends DeclaredStatus & {
    totalFlatCSPD: number;
    totalPercentCSPD: number;
    totalFlatMATK: number;
    subWeaponMagicDeviceATKModifier: number;
    magicWarriorMasteryLevel: number;
  }
>(
  status: S
) => {
  const skillLevel = status.magicWarriorMasteryLevel;
  const skillLevelBonus = skillLevel - 5 > 0 ? skillLevel - 5 : 0;

  const bonusFlatMATK = skillLevel * 2 + skillLevelBonus;
  const bonusFlatCSPD = skillLevel * 10;
  const bonusPercentCSPD = skillLevel * 1 + skillLevelBonus;

  return {
    ...status,
    totalFlatCSPD: status.totalFlatCSPD + bonusFlatCSPD,
    totalPercentCSPD: status.totalPercentCSPD + bonusPercentCSPD,
    totalFlatMATK: status.totalFlatMATK + bonusFlatMATK,
  };
};
