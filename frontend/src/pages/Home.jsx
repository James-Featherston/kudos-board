import React, { useState } from "react";
import "./Home.css";
import BoardList from "../components/home-components/BoardList";
import ControlBar from "../components/home-components/ControlBar";
import Modal from "../components/Modal";
import { BoardsProvider } from "../contexts/BoardsContext";
import { useTheme } from "../contexts/ThemeContext";

/* The home page */
const Home = () => {
  const [modal, setModal] = useState(false);
  const { secondTheme } = useTheme();

  return (
    <div className="home-container" style={{ ...secondTheme }}>
      <BoardsProvider>
        <ControlBar openModal={setModal} />
        <BoardList />
        {modal ? <Modal modalType={"Home"} handleClose={setModal} /> : <></>}
      </BoardsProvider>
    </div>
  );
};

export default Home;
