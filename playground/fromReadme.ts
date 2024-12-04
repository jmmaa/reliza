import { calculate } from "reliza";

const myCharacter = calculate({
  properties: {
    STR: 247,
    AGI: 465,
  },
});

console.log(myCharacter.totalCriticalDamage); // 221
