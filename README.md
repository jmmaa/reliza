# Reliza

A status calculation library for Toram Online

> still in development!

### Quick Example

```ts
import { status, calculate } from "@jmmaa/reliza";

const myStatus = status({
  mainWeaponType: "katana",
  STR: 247,
  AGI: 465,
});

const calculated = calculate(myStatus);

console.log(calculated.totalCriticalDamage); // 221
```
