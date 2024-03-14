import { DeclaredStatusMap } from "../types";

export const magicUPFlatMATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const playerLevel = status.level;
  const skillLevel = status.magicUPLevel;

  const total = (playerLevel * (2.5 * skillLevel)) / 100;
  return {
    ...status,
    magicUPFlatMATK: total,
  };
};

export const increasedEnergyFlatMATK = <S extends DeclaredStatusMap>(
  status: S
) => {
  const playerLevel = status.level;
  const skillLevel = status.increasedEnergyLevel;

  const total = (playerLevel * (2.5 * skillLevel)) / 100;
  return {
    ...status,
    increasedEnergyFlatMATK: total,
  };
};
