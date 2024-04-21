import { Character } from "../../../types";
import { floor } from "../../utils";
import { totalCSPD } from "../derived";

export const totalCastTimeReduction = (character: Character) =>
  floor(
    totalCSPD(character) > 1000 ?
      50 + ((totalCSPD(character) - 1000) / 90) * 0.5
    : totalCSPD(character) / 20,
  );
