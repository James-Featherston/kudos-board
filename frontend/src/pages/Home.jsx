import React from "react";
import "./Home.css";
import BoardFilter from "./home-components/BoardFilter";
import BoardList from "./home-components/BoardList";

const Home = () => {
  // Need an initial list
  // Need a display list

  return (
    <div className="home-container">
      <BoardFilter />
      <BoardList />
    </div>
  );
};

export default Home;
