import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Board.css";
import CardList from "../components/board-components/CardList";
import Modal from "../components/Modal";
import ChevronLeft from "../assets/chevron-left.webp";

const boards = [
  { id: 1, title: "hello", type: "celebration" },
  { id: 2, title: "hello", type: "thank you" },
  { id: 3, title: "hello", type: "Inspiration" },
];

const Board = () => {
  const [modal, setModal] = useState(false);
  const [board, setBoard] = useState(null);
  const { id } = useParams();

  const getBoard = () => {
    setBoard(boards.find((board) => board.id === parseInt(id)));
  };

  useEffect(() => {
    getBoard();
  }, []);
  if (board === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="board-container">
      <a href="/">
        <img
          className="chevron-left"
          src={ChevronLeft}
          alt="Return to Home button"
        />
      </a>
      <h2>
        {board?.title} {id}
      </h2>
      <button onClick={() => setModal(true)}>Create a Card</button>
      <CardList />
      {modal ? <Modal handleClose={setModal} /> : <></>}
    </div>
  );
};

export default Board;
