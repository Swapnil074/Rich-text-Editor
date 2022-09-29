import Home from "./components/slate";
import React, { useState } from "react";

function App() {
  const ExampleDocument = [
    {
      type: "paragraph",
      children: [
        { text: "Hello World! This is my paragraph inside a sample document." },
      ],
    },
  ];

  const [document, updateDocument] = useState(ExampleDocument);

  return (
    <>
      <div className="App">
        <Home document={document} onChange={updateDocument} />
      </div>
    </>
  );
}

export default App;
