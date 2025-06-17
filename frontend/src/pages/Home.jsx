import React, { useState } from "react";
import "./Home.css";
import BoardList from "../components/home-components/BoardList";
import ControlBar from "../components/home-components/ControlBar";
import Modal from "../components/Modal";
import { BoardsProvider } from "../contexts/BoardsContext";

const Home = () => {
  const [modal, setModal] = useState(false);
  // Need an initial list
  // Need a display list

  return (
    <div className="home-container">
      <BoardsProvider>
        <ControlBar openModal={setModal} />
        <BoardList />
        {modal ? <Modal modalType={"Home"} handleClose={setModal} /> : <></>}
      </BoardsProvider>
    </div>
  );
};

export default Home;
