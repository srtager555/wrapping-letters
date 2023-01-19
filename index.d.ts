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
      structuretToAdd: HTMLElement;
    };
    PerWord?: boolean;
  };
}
