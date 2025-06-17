import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";

// On a search or filter, the app should rerun the search/filter method using the allBoards value

const ControlBar = ({ openModal }) => {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");

  const changeData = () => {
    console.log("Changing display data");
  };
  return (
    <section>
      <Search changeData={changeData} query={query} setQuery={setQuery} />
      <Filter
        changeData={changeData}
        filterType={filterType}
        setFilterType={setFilterType}
      />
      <div>
        <button onClick={() => openModal(true)}>Create</button>
      </div>
    </section>
  );
};

export default ControlBar;
