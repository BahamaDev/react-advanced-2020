import React, { useEffect } from "react";

const Modal = ({ modalContent }) => {
  return (
    <div className="modal">
      <div>{modalContent}</div>
    </div>
  );
};

export default Modal;
