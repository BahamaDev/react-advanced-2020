import React, { useState } from "react";

const UseStateObject = () => {
  const changeMessage = () => {
    setMessage("mmmmm");
  };
  // const [person, setPerson] = useState({
  //   name: "peter",
  //   age: 24,
  //   message: "random message",
  // });

  // alternative can be to setup individual State Value
  const [name, setName] = useState("George");
  const [age, setAge] = useState(223);
  const [message, setMessage] = useState("I see you");

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        Change Person
      </button>
    </>
  );
};
export default UseStateObject;
