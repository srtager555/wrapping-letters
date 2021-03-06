const wrappLetter = require("../process/wrappLetter.process");

function structure({ letter, cssClass }) {
  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: "${letter}", `}</span>
      <span className={cssClass}>{`CLASS: "${cssClass}"`}</span>
    </div>
  );
  return Default;
}
function baseStructure({ letter, cssClass, specialStructure = {} }) {
  function DEFAULT_COMPONENT({ letter, cssClass }) {
    return <span className={cssClass}>{letter}</span>;
  }

  const {
    hasModification = false,
    NewTagStructure = () => (
      <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
    ),
  } = specialStructure;

  return hasModification ? (
    <NewTagStructure />
  ) : (
    <DEFAULT_COMPONENT letter={letter} cssClass={cssClass} />
  );
}

// if the user has a custom structure here it will be changed by it

test("Should be return the same array (SBW: true)", () => {
  const Structure = structure || baseStructure;

  const crumbledText = [
    " ",
    "T",
    "h",
    "i",
    "s",
    " ",
    "i",
    "s",
    " ",
    "a",
    " ",
    "s",
    "h",
    "o",
    "r",
    "t",
    " ",
    "s",
    "e",
    "n",
    "t",
    "e",
    "c",
    "e",
    " ",
    "f",
    "o",
    "r",
    " ",
    "a",
    "n",
    " ",
    "e",
    "x",
    "a",
    "m",
    "p",
    "l",
    "e",
    " ",
    "t",
    "e",
    "s",
    "t",
    " ",
    "O",
    "w",
    "O",
    " ",
  ];

  const arrWrapp = [
    ["T", "class special-class-1"],
    ["h", "class special-class-1"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["i", "class special-class-1"],
    ["s", "class special-class-1"],
    [" ", "class"],
    ["a", "class special-class-1"],
    [" ", "class"],
    ["s", "class special-class-1"],
    ["h", "class special-class-1"],
    ["o", "class special-class-1"],
    ["r", "class special-class-1"],
    ["t", "class special-class-1"],
    [" ", "class"],
    ["s", "class special-class-3"],
    ["e", "class special-class-3"],
    ["n", "class special-class-3"],
    ["t", "class special-class-3"],
    ["e", "class special-class-3"],
    ["c", "class special-class-3"],
    ["e", "class special-class-3"],
    [" ", "class"],
    ["f", "class"],
    ["o", "class"],
    ["r", "class"],
    [" ", "class"],
    ["a", "class"],
    ["n", "class"],
    [" ", "class"],
    ["e", "class special-class-1"],
    ["x", "class special-class-1"],
    ["a", "class special-class-1"],
    ["m", "class special-class-1"],
    ["p", "class special-class-1"],
    ["l", "class special-class-1"],
    ["e", "class special-class-1"],
    [" ", "class"],
    ["t", "class"],
    ["e", "class"],
    ["s", "class"],
    ["t", "class"],
    [" ", "class"],
    ["O", "class special-class-2"],
    ["w", "class special-class-2"],
    ["O", "class special-class-2"],
  ];

  const wrappResponse = wrappLetter.WrappLetter({
    SelectClass: {
      searchWordValue: [
        "a",
        "OwO",
        "sentence",
        "sent",
        "short",
        "example",
        "This",
        "is",
      ],
      specialClass: ["special-class-1", "special-class-2", "special-class-3"],
      spaceBetweenWord: true,
    },
    crumbledText,
    ClassToAdd: "class",
    Structure,
    specialStructure: false,
    PerWord: false,
    test: true,
  });

  expect(wrappResponse).toStrictEqual(arrWrapp);
});

test("Should be return the same array (PerWord: true)", () => {
  const Structure = structure || baseStructure;

  const crumbledText = [
    "This",
    "is",
    "a",
    "short",
    "sentece",
    "for",
    "an",
    "example",
    "test",
    "OwO",
  ];

  const arrWrapp = [
    ["This ", "class special-class-1"],
    ["is ", "class special-class-1"],
    ["a ", "class special-class-1"],
    ["short ", "class special-class-1"],
    ["sentece ", "class special-class-3"],
    ["for ", "class"],
    ["an ", "class"],
    ["example ", "class special-class-1"],
    ["test ", "class"],
    ["OwO", "class special-class-2"],
  ];

  const wrappResponse = wrappLetter.WrappLetter({
    SelectClass: {
      searchWordValue: [
        "a",
        "OwO",
        "sentence",
        "sent",
        "short",
        "example",
        "This",
        "is",
      ],
      specialClass: ["special-class-1", "special-class-2", "special-class-3"],
      spaceBetweenWord: false,
    },
    crumbledText,
    ClassToAdd: "class",
    Structure,
    specialStructure: false,
    PerWord: true,
    test: true,
  });

  expect(wrappResponse).toStrictEqual(arrWrapp);
});
