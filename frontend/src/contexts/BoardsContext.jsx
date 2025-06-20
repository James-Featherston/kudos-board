import { createContext, useContext, useState } from "react";

const BoardsContext = createContext();

/* Creates a context for the boards */

const BoardsProvider = ({ children }) => {
  const [boards, setBoards] = useState(null);

  return (
    <BoardsContext.Provider value={{ boards, setBoards }}>
      {children}
    </BoardsContext.Provider>
  );
};

const useBoardsContext = () => {
  return useContext(BoardsContext);
};

export { BoardsProvider, useBoardsContext };
