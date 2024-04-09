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

## Todo

#### Passives

- [x] shot mastery
- [x] samurai archery
- [x] magic mastery
- [x] martial mastery
- [x] martial discipline
- [x] aggravate
- [x] strong chase attack
- [x] halberd mastery
- [x] critical spear
- [x] bushido
- [x] two-handed
- [x] dual sword mastery
- [x] dual sword control
- [x] god speed
- [x] unarmed mastery
- [x] ultima qi charge
- [ ] hidden talent (need to figure how is this calculated)
- [ ] hunter bowgun
- [ ] magic warrior mastery
- [ ] conversion
- [ ] magic skin
- [ ] ninja spirit
- [ ] shield mastery
- [ ] force shield
- [ ] magical shield
- [ ] heavy armor mastery
- [ ] advanced guard
- [ ] light armor mastery
- [ ] advanced evasion
- [ ] hp boost
- [ ] mp boost
- [ ] magic UP
- [ ] increased energy
- [ ] spell burst
- [ ] attack UP
- [ ] intimidating power
- [ ] critical UP
- [ ] defense UP
- [ ] defense mastery
- [ ] dodge UP
- [ ] accuracy UP
