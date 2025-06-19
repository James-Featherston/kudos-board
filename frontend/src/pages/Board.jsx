import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./Board.css";
import CardList from "../components/board-components/CardList";
import Modal from "../components/Modal";
import ChevronLeft from "../assets/chevron-left.webp";
import { getSingleBoard } from "../utils/services";
import { CardsProvider } from "../contexts/CardsContext";

const Board = () => {
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
      <img
        className="chevron-left"
        src={ChevronLeft}
        alt="Return to Home button"
        onClick={() => navigate("/")}
      />
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
