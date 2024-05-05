import { damage, defaultDamageMetadata } from "../../src";

const result = damage(defaultDamageMetadata)
  .characterLevel(1)
  .targetLevel(174)
  .defense(174)
  .source(1714)
  .constant(50)
  .resistance(6)
  .pierce(0)
  .proration(100)
  .innateSkillDamageModifier(150)
  .skillDamageModifier(100)
  .elementDamageModifier(100)
  .criticalDamageModifier(125)
  .comboRelatedDamageModifier(100)
  .distanceDependentDamageModifier(100)
  .lastDamageModifier(100)
  .stability(100)
  .calculate(); // TEST THIS SHITTY CALCULATOR

console.log("magic: arrows damage :: ", result);
