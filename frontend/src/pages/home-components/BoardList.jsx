import React from "react";
import BoardCard from "./BoardCard";
import "./BoardList.css";

const cards = [
  { id: 1, title: "hello", type: "celebration" },
  { id: 2, title: "hello", type: "thank you" },
  { id: 3, title: "hello", type: "Inspiration" },
];

const BoardList = () => {
  return (
    <div className="board-list-container">
      {cards.map((card) => {
        return <BoardCard key={card.id} data={card} />;
      })}
    </div>
  );
};

export default BoardList;
