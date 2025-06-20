import React, { useContext, useEffect } from "react";
import BoardCard from "./BoardCard";
import "./BoardList.css";
import { useBoardsContext } from "../../contexts/BoardsContext";
import { getAllBoards } from "../../utils/services";

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
  if (boards.length === 0) {
    return <h1>No results</h1>;
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
