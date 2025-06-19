import React, { useState } from "react";
import "./Modal.css";
import NewBoardForm from "./home-components/NewBoardForm";
import NewCardForm from "./board-components/NewCardForm";
import ViewCard from "./board-components/ViewCard";

const Modal = ({ modalType, handleClose, boardId, cardData }) => {
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
        ) : modalType === "NewCard" ? (
          <NewCardForm boardId={boardId} />
        ) : (
          <ViewCard cardData={cardData} />
        )}
      </article>
    </div>
  );
};

export default Modal;
