import React, { useEffect } from "react";

const Filter = (props) => {
  const handleFilter = (event) => {
    props.setFilterType(event.target.value);
  };

  useEffect(() => {
    props.changeData();
  }, [props.filterType]);

  return (
    <div className="filter-container">
      <button onClick={handleFilter} value={""}>
        All
      </button>
      <button onClick={handleFilter} value={"Recent"}>
        Recent
      </button>
      <button onClick={handleFilter} value={"Celebration"}>
        Celebration
      </button>
      <button onClick={handleFilter} value={"Thank You"}>
        Thank You
      </button>
      <button onClick={handleFilter} value={"Inspiration"}>
        Inspiration
      </button>
    </div>
  );
};

export default Filter;
