type SeekerWordType = Array<string | string[]> | string;

type SpecialWrappElementsToGive = HTMLElement | HTMLElement[];

type SelectClassElementsToGive = string | string[];

type process = (
  props: SelectClassProcessProps | SpecialWrappProcessProps
) => SpecialWrappProcessReturn | SelectClassProcessReturn;

type SelectClassType = {
  wordToSearch: SeekerWordType;
  classToAdd: SelectClassElementsToGive;
  spaceBetweenWord?: boolean;
};

interface SpecialWrappProcessReturn {
  hasCustomWrapp: boolean;
  hasCustomProps: boolean;
  wordToWrapp: SeekerWordType;
  wrappToAdd: HTMLElement;
  spaceBetweenWord: boolean;
}
interface SpecialWrappProcessProps {
  wordToSearch: SeekerWordType;
  structureToAdd: SpecialWrappElementsToGive;
  spaceBetweenWord: boolean;
}

interface SelectClassProcessReturn {
  searchWordValue: SeekerWordType;
  specialClass: string | string[];
  spaceBetweenWord: boolean;
}

interface SelectClassProcessProps {
  SelectClass: SelectClassType;
  crumbledText: string[];
  PerWord: boolean;
}

interface WrappingLetters {
  text: string;
  classes: string;
  wrapping: unknown;
}

interface textOptions {
  ClassToAdd?: string;
  SelectClass?: SelectClassType;
  SpecialWrapp?: {
    wordToSearch: SeekerWordType;
    structuretToAdd: SpecialWrappElementsToGive;
  };
  PerWord?: boolean;
}

interface WLProps {
  text?: string;
  textOptions?: textOptions;
  memo?: boolean;
}

interface SeekersBaseInterface {
  name: string;
  SpecialArray?: {
    targets?: SeekerWordType;
    elementsToGive?: SpecialWrappElementsToGive | SelectClassElementsToGive;
    process?: (props: unknown) => unknown;
  };
  __error: VoidFunction;
  __process: process;
}
