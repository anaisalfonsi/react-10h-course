import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return jsx

function Greeting() {
  return (
    <div>
      <h4>Hi I'm Anaïs and this is my first component</h4>
    </div>
  );
}

/* const Greeting = () => {
  return React.createElement("h1", {}, "hello world");
}; */

ReactDom.render(<Greeting />, document.getElementById("root"));
