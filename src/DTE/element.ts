import { DeclaredStatus, Element } from "../types";

export const determineMainWeaponElement = <S extends DeclaredStatus>(
  status: S
): Element => {
  return status.mainWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as Element);
};

export const determineSubWeaponElement = <S extends DeclaredStatus>(
  status: S
): Element => {
  return status.subWeaponStats.reduce((ele, statGroup) => {
    return statGroup.predicate(status) ? statGroup.stats["element"] : ele;
  }, "neutral" as Element);
};

export const mainWeaponElement = <S extends DeclaredStatus>(
  status: S
): S & { mainWeaponElement: Element } => {
  return {
    ...status,
    mainWeaponElement: determineMainWeaponElement(status),
  };
};

export const subWeaponElement = <S extends DeclaredStatus>(
  status: S
): S & { subWeaponElement: Element } => {
  return {
    ...status,
    subWeaponElement: determineSubWeaponElement(status),
  };
};
