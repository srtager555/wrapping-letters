import { SeekersBase } from "@process/seekersBase.class";

import { error__Filter_SelectClass__ } from "./specialClass.error";
import { process__SelectClass__ } from "./specialClass.process";

export class SelectClass extends SeekersBase {
  constructor(SELECT_CLASS, ATTRIBUTES, crumbledText) {
    function Process({ specialStructure, ClassToAdd, newClass }) {
      return !specialStructure ? [ClassToAdd, newClass].join(" ") : newClass;
    }

    super({
      name: "SelectClass",
      SpecialArray: {
        targets: SELECT_CLASS.wordToSearch,
        elementsToGive: SELECT_CLASS.classToAdd,
        process: (props) => Process(props),
      },
      __process: () =>
        process__SelectClass__({
          SelectClass: ATTRIBUTES.SelectClass,
          PerWord: ATTRIBUTES.PerWord,
          crumbledText: crumbledText,
        }),
      __error: () =>
        error__Filter_SelectClass__(ATTRIBUTES.SelectClass, ATTRIBUTES.PerWord),
    });
  }

  process__SelectClass__(params: {
    SelectClass: SelectClassType;
    crumbledText: string[];
    PerWord: boolean;
  }) {
    // Here the code will transform the user's code
    // to useful information to the code Xd

    const { SelectClass, crumbledText, PerWord } = params;

    const searchWordValue = SelectClass.wordToSearch;
    const specialClass = SelectClass.classToAdd;

    // comprobation for search within words
    if (SelectClass.spaceBetweenWord === true && PerWord === false) {
      crumbledText.push(" ");

      crumbledText.unshift(" ");
    }

    const props = {
      searchWordValue: searchWordValue || "",
      specialClass: specialClass || "",
      spaceBetweenWord: SelectClass.spaceBetweenWord || false,
    };

    if (!Array.isArray(props.searchWordValue))
      props.searchWordValue = [props.searchWordValue];

    return props;
  }
}
