import React, { useState } from "react";
import "./Modal.css";
import NewBoardForm from "./home-components/NewBoardForm";
import NewCardForm from "./board-components/NewCardForm";
import ViewCard from "./board-components/ViewCard";
import { useTheme } from "../contexts/ThemeContext";

const Modal = ({ modalType, handleClose, boardId, cardData }) => {
  const { theme } = useTheme();
  return (
    <div onClick={() => handleClose(false)} className="modal-background">
      <article
        onClick={(event) => event.stopPropagation()}
        className="modal-container"
        style={{ ...theme }}
      >
        <span className="close-btn" onClick={() => handleClose(false)}>
          x
        </span>
        {modalType === "Home" ? (
          <NewBoardForm handleClose={handleClose} />
        ) : modalType === "NewCard" ? (
          <NewCardForm boardId={boardId} handleClose={handleClose} />
        ) : (
          <ViewCard cardData={cardData} />
        )}
      </article>
    </div>
  );
};

export default Modal;
