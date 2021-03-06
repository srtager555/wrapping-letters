import { whatItIs } from "../common/whatIsIt";

export function error__Filter_SpecialWrapp__(SpecialWrapp) {
  if (whatItIs(SpecialWrapp) != "[object Object]")
    throw new Error("SpecialWrapp must be an Object --- Wrapping Letters");

  if (Object.keys(SpecialWrapp).length === 0) return;

  const { wordToSearch, structureToAdd } = SpecialWrapp;

  if (
    whatItIs(wordToSearch) != "[object String]" &&
    !Array.isArray(wordToSearch)
  ) {
    throw new Error(
      'SpecialWrapp --- "wordToSearch" must be an Array or String'
    );
  }

  if (
    whatItIs(structureToAdd) != "[object Function]" &&
    !Array.isArray(structureToAdd)
  ) {
    throw new Error(
      'SpecialWrapp --- "structureToAdd" must be an Array or Function(component)'
    );
  }
}
