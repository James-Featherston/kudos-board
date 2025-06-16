import React from "react";

const Filter = (props) => {
  const handleFilter = (event) => {
    console.log(event.target.value);
    props.changeData();
  };

  return (
    <div className="filter-container">
      <button onClick={handleFilter} value={"All"}>
        All
      </button>
      <button onClick={handleFilter} value={"Recent"}>
        Recent
      </button>
      <button onClick={handleFilter} value={"Celebration"}>
        Celebration
      </button>
      <button onClick={handleFilter} value={"Clear"}>
        Clear
      </button>
    </div>
  );
};

export default Filter;
