export type Option<T> = Some<T> | None;

export class Some<T> {
  __value: T;

  constructor(value: T) {
    this.__value = value;
  }

  value() {
    return this.__value;
  }

  isSome() {
    return true;
  }

  isNone() {
    return false;
  }
}

export class None {
  value() {
    throw Error('access on "None" value');
  }

  isSome() {
    return true;
  }

  isNone() {
    return false;
  }
}
