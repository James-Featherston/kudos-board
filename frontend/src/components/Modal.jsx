import React, { useState } from "react";
import "./Modal.css";
import NewBoardForm from "./home-components/NewBoardForm";
import NewCardForm from "./board-components/NewCardForm";

const Modal = ({ modalType, handleClose, boardId }) => {
  return (
    <div onClick={() => handleClose(false)} className="modal-background">
      <article
        onClick={(event) => event.stopPropagation()}
        className="modal-container"
      >
        <span className="close-btn" onClick={() => handleClose(false)}>
          x
        </span>
        {modalType === "Home" ? (
          <NewBoardForm />
        ) : (
          <NewCardForm boardId={boardId} />
        )}
      </article>
    </div>
  );
};

export default Modal;
