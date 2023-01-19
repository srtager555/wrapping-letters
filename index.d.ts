type SeekerWordType = Array<string | string[]>;

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
      classToAdd: string | string[];
    };
    SpecialWrapp?: {
      wordToSearch: SeekerWordType;
      structuretToAdd: HTMLElement | HTMLElement[];
    };
    PerWord?: boolean;
  };
  memo?: boolean;
}

interface SeekersBaseInterface {
  name: string;
  SpecialArray?: {
    targets?: SeekerWordType;
    elementsToGive?: HTMLElement | HTMLElement[] | string | string[];
    process?: () => unknown;
  };
  Props?: boolean;
}
