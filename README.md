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
- [x] hidden talent (need to figure how is this calculated)
- [x] hunter bowgun
- [x] magic warrior mastery
- [x] conversion
- [x] magic skin
- [x] ninja spirit
- [x] shield mastery
- [x] force shield
- [x] magical shield
- [x] heavy armor mastery
- [x] advanced guard
- [x] light armor mastery
- [x] advanced evasion
- [x] hp boost
- [x] mp boost
- [x] magic UP
- [x] increased energy
- [ ] spell burst
- [x] attack UP
- [x] intimidating power
- [x] critical UP
- [x] defense UP
- [x] defense mastery
- [x] dodge UP
- [x] accuracy UP
