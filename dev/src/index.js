import WrappingLetters from "../../src";
// import WrappingLetters from "../../lib";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

function specialTag(element) {
  return (
    <a href="https://ttager.page/" target="_blank">
      {element}
    </a>
  );
}

function devStructure({ letter, cssClass, specilStructure }) {
  const [Component, SetComponent] = React.useState();

  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: ${letter}, `}</span>
      <span className={cssClass}>{`CLASS: ${cssClass}`}</span>
    </div>
  );
  const Good = (
    <div className="container">
      <a href="htp..." className={cssClass}>{`LETTER: ${letter}, `}</a>
      <span className={cssClass}>{`CLASS: ${cssClass}`}</span>
    </div>
  );

  React.useEffect(() => {
    if (specilStructure.Good) {
      //...
    } else {
      //...
    }
  }, []);

  return <Component />;
}

function structure({ letter, cssClass }) {
  const Default = (
    <div className="container">
      <span className={cssClass}>{`LETTER: "${letter}", `}</span>
      <span className={cssClass}>{`CLASS: "${cssClass}"`}</span>
    </div>
  );
  return Default;
}

function App() {
  return (
    <>
      <WrappingLetters
        text="This is a short sentence for an example test OwO"
        textOptions={{
          ClassToAdd: "class",
          SelectClass: {
            // new object with the class to add []
            wordToSearch: [
              "a",
              "OwO",
              "sentence",
              "sent",
              "short",
              "example",
              "This",
              "is",
            ],
            classToAdd: [
              "special-class-1",
              "special-class-2",
              "special-class-3",
            ],
            spaceBetweenWord: true,
          },
          SpecialWrapp: {
            wordToSearch: "good",
            structureToAdd: specialTag,
          },
          // PerWord: true,
        }}
        // structure={structure}
      />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
