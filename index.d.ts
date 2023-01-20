type SeekerWordType = Array<string | string[]> | string;

type SpecialWrappElementsToGive = HTMLElement | HTMLElement[];

type SelectClassElementsToGive = string | string[];

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

interface WrappingLetters {
  text: string;
  classes: string;
  wrapping: unknown;
}

interface WLProps {
  text?: string;
  textOptions?: {
    ClassToAdd?: string;
    SelecClass?: {
      wordToSearch: SeekerWordType;
      classToAdd: SelectClassElementsToGive;
    };
    SpecialWrapp?: {
      wordToSearch: SeekerWordType;
      structuretToAdd: SpecialWrappElementsToGive;
    };
    PerWord?: boolean;
  };
  memo?: boolean;
}

interface SeekersBaseInterface {
  name: string;
  SpecialArray?: {
    targets?: SeekerWordType;
    elementsToGive?: SpecialWrappElementsToGive | SelectClassElementsToGive;
    process?: () => unknown;
  };
  __error: VoidFunction;
  __process: () => SpecialWrappProcessReturn | SelectClassProcessReturn;
}
