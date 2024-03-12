import { DeclaredStatusMap, ElementType } from "../types";

export const determineMainWeaponElement = <S extends DeclaredStatusMap>(
  status: S
): ElementType => {
  return status.mainWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as ElementType);
};

export const determineSubWeaponElement = <S extends DeclaredStatusMap>(
  status: S
): ElementType => {
  return status.subWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as ElementType);
};

export const mainWeaponElement = <S extends DeclaredStatusMap>(
  status: S
): S & { mainWeaponElement: ElementType } => {
  return {
    ...status,
    mainWeaponElement: determineMainWeaponElement(status),
  };
};

export const subWeaponElement = <S extends DeclaredStatusMap>(
  status: S
): S & { subWeaponElement: ElementType } => {
  return {
    ...status,
    subWeaponElement: determineSubWeaponElement(status),
  };
};
