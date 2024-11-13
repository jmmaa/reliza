import { calculate } from "reliza";
import { Config } from "reliza/lib/types/data";
import { StatId } from "reliza/lib/types/internals/data";

const config = {
  properties: {
    AGI: 1,
  },

  equipments: {
    additionalGear: {
      DEF: 0,
      stats: (c) => [
        [5, 5],
        [45, 25],
        [47, 10],
      ],
    },
  },
} as Config;

const calculations = calculate(config);

console.log(calculations);

// need to make mapper for stats to stat id
