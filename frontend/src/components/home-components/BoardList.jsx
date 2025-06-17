import React, { useContext, useEffect } from "react";
import BoardCard from "./BoardCard";
import "./BoardList.css";
import { useBoardsContext } from "../../contexts/BoardsContext";

const cards = [
  { id: 1, title: "hello", type: "celebration" },
  { id: 2, title: "hello", type: "thank you" },
  { id: 3, title: "hello", type: "Inspiration" },
];

const BoardList = () => {
  const { boards, setBoards } = useBoardsContext();

  useEffect(() => {
    setBoards(cards);
  }, []);
  if (!boards) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="board-list-container">
      {cards.map((card) => {
        return <BoardCard key={card.id} data={card} />;
      })}
    </div>
  );
};

export default BoardList;
