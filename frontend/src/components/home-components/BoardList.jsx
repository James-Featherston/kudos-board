import React, { useContext, useEffect } from "react";
import BoardCard from "./BoardCard";
import "./BoardList.css";
import { useBoardsContext } from "../../contexts/BoardsContext";
import { getAllBoards } from "../../utils/services";

const cards = [
  { id: 1, title: "hello", type: "celebration" },
  { id: 2, title: "hello", type: "thank you" },
  { id: 3, title: "hello", type: "Inspiration" },
];

const BoardList = () => {
  const { boards, setBoards } = useBoardsContext();

  const fetchBoards = async () => {
    setBoards(await getAllBoards());
  };

  useEffect(() => {
    fetchBoards();
  }, []);
  if (!boards) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="board-list-container">
      {boards.map((board) => {
        return <BoardCard key={board.id} data={board} />;
      })}
    </div>
  );
};

export default BoardList;
