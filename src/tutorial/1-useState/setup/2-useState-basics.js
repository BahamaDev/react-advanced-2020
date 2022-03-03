import React, { useState } from "react";

const UseStateBasics = () => {
  console.log(useState("hello world"));
  console.log(useState);
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        {"Big Button "}
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
