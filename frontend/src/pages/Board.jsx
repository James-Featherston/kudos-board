import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Board.css";
import CardList from "../components/board-components/CardList";
import Modal from "../components/Modal";
import { getSingleBoard } from "../utils/services";
import { CardsProvider } from "../contexts/CardsContext";
import { useTheme } from "../contexts/ThemeContext";

const Board = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [board, setBoard] = useState(null);
  const { id } = useParams();

  const fetchBoard = async () => {
    setBoard(await getSingleBoard(id));
  };

  useEffect(() => {
    fetchBoard();
  }, []);
  if (board === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="board-container">
      <span
        className="material-symbols-outlined chevron-left"
        onClick={() => navigate("/")}
        style={{ color: theme.color }}
      >
        chevron_left
      </span>
      <h2>
        {board?.title} {id}
      </h2>
      <button onClick={() => setModal(true)}>Create a Card</button>
      <CardsProvider>
        <CardList boardId={id} />
        {modal ? (
          <Modal handleClose={setModal} boardId={id} modalType={"NewCard"} />
        ) : (
          <></>
        )}
      </CardsProvider>
    </div>
  );
};

export default Board;
