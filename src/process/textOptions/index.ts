import { SelectClass } from "./method/SelectClass/SelectClass.class";
import { SpecialWrapp } from "./method/SpecialWrapp/SpecialWrapp.class";

type Default_Attributes = Array<
  string[] | [string, object] | [string, boolean]
>;

export class __TextOptions__process__ {
  textOptions: textOptions;
  text: string;

  constructor(textOptions: textOptions, text: string) {
    this.textOptions = textOptions;
    this.text = text;

    this.#ERRORS_FILTER();
  }

  #DEFAULT_ATTRIBUTES: Default_Attributes = [
    ["ClassToAdd", ""],
    ["SelectClass", {}],
    ["SpecialWrapp", {}],
    ["PerWord", false],
  ];

  #DEFAULT_SEEKERS_ATTRIBUTES = ["SelectClass", "SpecialWrapp"];

  #ERRORS_FILTER() {
    if (typeof this.textOptions !== "object")
      throw new Error('"textOptions" must be an Object --- wrapping-letters');

    checkCorrectKeys(this.textOptions, this.#DEFAULT_ATTRIBUTES);
  }

  // Each attribute of TextOption will returned here
  getProcessAttributes(obj: object) {
    Object.entries(this.#GET_ATTRIBUTES).forEach((element) => {
      obj[element[0]] = this[element[0]].process;
    });

    return obj;
  }

  get takeAttributesTheySeek() {
    return this.#DEFAULT_SEEKERS_ATTRIBUTES.map((el) => this[el]);
  }

  get #GET_ATTRIBUTES(): textOptions {
    const object = {};

    this.#DEFAULT_ATTRIBUTES.forEach((element) => {
      object[element[0]] = this.textOptions[element[0]] || element[1];
    });

    return object;
  }

  get crumbledText() {
    let text: string[];
    if (!this.PerWord.process) text = [" ", ...this.text, " "];
    else text = this.text.split(" ");

    return text;
  }

  // here I did put the methods to will process the Attributes from textOptions
  //
  get ClassToAdd() {
    const CLASSTOADD = this.#GET_ATTRIBUTES.ClassToAdd;

    if (typeof CLASSTOADD !== "string")
      throw new Error("ClassToAdd must be a string");

    return { process: CLASSTOADD };
  }

  get SelectClass() {
    const ATTRIBUTES = this.#GET_ATTRIBUTES;
    const SELECT_CLASS = ATTRIBUTES.SelectClass;
    const crumbledText = this.crumbledText;

    return new SelectClass(SELECT_CLASS, ATTRIBUTES, crumbledText);
  }

  get SpecialWrapp() {
    const SPECIALWRAPPP = this.#GET_ATTRIBUTES.SpecialWrapp;

    return new SpecialWrapp(SPECIALWRAPPP, this.#GET_ATTRIBUTES.PerWord);
  }

  get PerWord() {
    const PERWORD = this.#GET_ATTRIBUTES.PerWord;

    if (typeof PERWORD !== "boolean")
      throw new Error("PerWord must be a boolean");

    return { process: PERWORD };
  }
}

// delfaut value layout and value comprobations
function checkCorrectKeys(
  textOptions: textOptions,
  Default_Attributes: Default_Attributes
) {
  const textOptionsKeys = Object.keys(textOptions);

  // here the code will declare the default value for each key in textOptions

  // A simple comprobation of correct properties
  const containThisProps = (value: string) =>
    Default_Attributes.map((element) => element[0] === value);

  const container = textOptionsKeys.every(containThisProps);

  if (!container) {
    const correctProperties = Default_Attributes.map((element) => element[0]);

    throw new Error(
      `textOptions must contain the following properties: ${correctProperties.join(
        ", "
      )}`
    );
  }
}
