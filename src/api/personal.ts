// declare
export const level = (value: number) => {
  return <S>(status: S): S & { level: number } => ({
    ...status,
    level: value,
  });
};

export const CRT = (value: number) => {
  return <S>(status: S): S & { CRT: number } => ({
    ...status,
    CRT: value,
  });
};

export const TEC = (value: number) => {
  return <S>(status: S): S & { TEC: number } => ({
    ...status,
    TEC: value,
  });
};

export const MTL = (value: number) => {
  return <S>(status: S): S & { MTL: number } => ({
    ...status,
    MTL: value,
  });
};

export const LUK = (value: number) => {
  return <S>(status: S): S & { LUK: number } => ({
    ...status,
    LUK: value,
  });
};

// calc
export const totalBaseCRT = <S extends { CRT: number }>(
  status: S
): S & { totalBaseCRT: number } => ({
  ...status,
  totalBaseCRT: status.CRT,
});

export const totalBaseLUK = <S extends { LUK: number }>(
  status: S
): S & { totalBaseLUK: number } => ({
  ...status,
  totalBaseLUK: status.LUK,
});

export const totalBaseMTL = <S extends { MTL: number }>(
  status: S
): S & { totalBaseMTL: number } => ({
  ...status,
  totalBaseMTL: status.MTL,
});

export const totalBaseTEC = <S extends { TEC: number }>(
  status: S
): S & { totalBaseTEC: number } => ({
  ...status,
  totalBaseTEC: status.TEC,
});
