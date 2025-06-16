import React from "react";
import "./Home.css";
import BoardList from "../components/home-components/BoardList";
import ControlBar from "../components/home-components/ControlBar";
import Modal from "../components/Modal";

const Home = () => {
  // Need an initial list
  // Need a display list

  return (
    <div className="home-container">
      <ControlBar />
      <BoardList />
      <Modal modalType={"Home"} />
    </div>
  );
};

export default Home;
