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
      <button
        onClick={handleFilter}
        value={""}
        style={props.filterType === "" ? { backgroundColor: "tan" } : {}}
      >
        All
      </button>
      <button
        onClick={handleFilter}
        value={"Recent"}
        style={props.filterType === "Recent" ? { backgroundColor: "tan" } : {}}
      >
        Recent
      </button>
      <button
        onClick={handleFilter}
        value={"Celebration"}
        style={
          props.filterType === "Celebration" ? { backgroundColor: "tan" } : {}
        }
      >
        Celebration
      </button>
      <button
        onClick={handleFilter}
        value={"Thank You"}
        style={
          props.filterType === "Thank You" ? { backgroundColor: "tan" } : {}
        }
      >
        Thank You
      </button>
      <button
        onClick={handleFilter}
        value={"Inspiration"}
        style={
          props.filterType === "Inspiration" ? { backgroundColor: "tan" } : {}
        }
      >
        Inspiration
      </button>
    </div>
  );
};

export default Filter;
