import React from "react";
import { useParams } from "react-router-dom";
import "./Board.css";

const Board = () => {
  const { id } = useParams();
  return <div className="board-container"> Board {id} </div>;
};

export default Board;
