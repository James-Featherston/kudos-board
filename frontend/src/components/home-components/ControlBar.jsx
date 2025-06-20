import React, { useState } from "react";
import Filter from "./Filter";
import Search from "./Search";
import { getAllBoards } from "../../utils/services";
import { useBoardsContext } from "../../contexts/BoardsContext";

// On a search or filter, the app should rerun the search/filter method using the allBoards value

const ControlBar = ({ openModal }) => {
  const [query, setQuery] = useState("");
  const [filterType, setFilterType] = useState("");
  const { setBoards } = useBoardsContext();
  const changeData = async () => {
    setBoards(await getAllBoards(query, filterType));
  };

  return (
    <section style={{ paddingTop: "10px" }}>
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
