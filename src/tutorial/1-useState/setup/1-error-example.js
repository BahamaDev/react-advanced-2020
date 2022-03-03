import React from "react";

const ErrorExample = () => {
  let title = "randomness";
  let handleClick = () => {
    title = "Pomp";
    console.log(title);
  };

  return (
    <React.Fragment>
      <h2>{title}</h2>;
      <button type="button" className="btn" onClick={handleClick}>
        Change Info
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
