import { calculateAll } from "../src/index";
import {
  createIntermediateConfig,
  flattenedStats,
} from "../src/modules/utils/index";
import { StatId } from "../src/types";
import { IntermediateConfig, Stat } from "../src/types";

const myMage = createIntermediateConfig({
  "character.STR": 50,

  "character.subweapon.type": "one-handed-sword",
  "character.subweapon.stats": (_) => [[StatId.flatCriticalRate, 5]],

  "character.additionalGear.stats": (_) => [[StatId.ATKDOWNAGI, 20]],
});

console.log(calculateAll(myMage));

/** DONT FUCKING DELETE THIS SHIEEET */

// const convertFunctionsToSerializableFunctionTupleFromObj = (obj: object) =>
//   Object.fromEntries(
//     Object.entries(obj).map((pair) =>
//       typeof pair[1] === "function" ?
//         [pair[0], ["function", pair[1].toString()]]
//       : pair,
//     ),
//   );

// const convertSerializableFunctionTupleToFunctionsFromObj = <O extends {}>(
//   obj: O,
// ) =>
//   Object.fromEntries(
//     Object.entries(obj).map((pair) =>
//       Array.isArray(pair[1]) ?
//         pair[1][0] === "function" ?
//           [pair[0], eval(pair[1][1])]
//         : pair
//       : pair,
//     ),
//   );

// export const sample = () => "deez nuts";

// const original = {
//   a: (_) => {},
//   b: sample,
//   c: "hello world!",
// };

// const converted =
//   convertFunctionsToSerializableFunctionTupleFromObj(original);

// const backToOriginal =
//   convertSerializableFunctionTupleToFunctionsFromObj(converted);

// console.log(converted);
// console.log(backToOriginal);

// console.log(backToOriginal.b());

/** DONT FUCKING DELETE THIS SHIEEET */
