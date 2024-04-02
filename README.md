# Reliza

A status calculation library for Toram Online

> still in development!

### Quick Example

```ts
const { character, totalCriticalDamage } = require("@jmmaa/reliza");

const myCharacter = character({
  STR: 247,
  AGI: 465,
});

const myTotalCriticalDamage = totalCriticalDamage(myCharacter);

console.log(myTotalCriticalDamage); // 221
```
