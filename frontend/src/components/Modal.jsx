import React, { useState } from "react";
import "./Modal.css";
import NewBoardForm from "./home-components/NewBoardForm";
import NewCardForm from "./board-components/NewCardForm";

const Modal = ({ modalType }) => {
  const [modal, setModal] = useState(false);
  const handleClose = () => {
    setModal(false);
  };
  if (!modal) {
    return <></>;
  }
  return (
    <div onClick={handleClose} className="modal-background">
      <article
        onClick={(event) => event.stopPropagation()}
        className="modal-container"
      >
        <span className="close-btn" onClick={handleClose}>
          x
        </span>
        {modalType === "Home" ? <NewBoardForm /> : <NewCardForm />}
      </article>
    </div>
  );
};

export default Modal;
