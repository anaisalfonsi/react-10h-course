import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return jsx

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
  return <p>this is my message</p>;
}

ReactDom.render(<Greeting />, document.getElementById("root"));
