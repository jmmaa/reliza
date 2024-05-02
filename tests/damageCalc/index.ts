import { damage, defaultDamageMetadata } from "../../src";

const result = damage(defaultDamageMetadata)
  .characterLevel(280)
  .targetLevel(174)
  .defense(174)
  .source(7761)
  .constant(500)
  .resistance(6)
  .pierce(99)
  .proration(100)
  .innateSkillDamageModifier(2575)
  .skillDamageModifier(100)
  .elementDamageModifier(147)
  .criticalDamageModifier(194)
  .comboRelatedDamageModifier(100)
  .distanceDependentDamageModifier(106)
  .stability(100)
  .calculate(); // TEST THIS SHITTY CALCULATOR

console.log("magic: burst damage :: ", result);
