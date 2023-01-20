export function Process__IndexMatchFinder_(
  array: Array<string[] | string> | string,
  word: string
) {
  return array
    .map((element, index) => {
      if (Array.isArray(element)) {
        if (
          element.some((el) => {
            return el === word;
          })
        ) {
          return index;
        }
      }

      if (element === word) return index;

      return -1;
    })
    .find((el) => el != -1);
}

export function Process__SpecialArray_(
  specialArray: SelectClassElementsToGive | SpecialWrappElementsToGive,
  SPECIAL_INDEX: number
) {
  if (Array.isArray(specialArray)) {
    if (SPECIAL_INDEX > specialArray.length - 1) {
      return specialArray[0];
    } else {
      return specialArray[SPECIAL_INDEX];
    }
  } else return specialArray;
}
