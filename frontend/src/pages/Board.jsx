import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Board.css";
import CardList from "../components/board-components/CardList";

const boards = [
  { id: 1, title: "hello", type: "celebration" },
  { id: 2, title: "hello", type: "thank you" },
  { id: 3, title: "hello", type: "Inspiration" },
];

const cards_temp = [
  { id: 1, title: "title", descrition: "Description", votes: 0 },
  { id: 2, title: "title", descrition: "Description", votes: 0 },
];

const Board = () => {
  const [cards, setCards] = useState(null);
  const [board, setBoard] = useState(null);
  const { id } = useParams();

  const getBoard = () => {
    setBoard(boards.find((board) => board.id === parseInt(id)));
  };
  const getCards = () => {
    setCards(cards_temp);
  };

  useEffect(() => {
    getBoard();
    getCards();
  }, []);
  if (cards === null || board === null) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="board-container">
      <h2>{board?.title} </h2>
      <button>Create a Card</button>
      <CardList />
    </div>
  );
};

export default Board;
