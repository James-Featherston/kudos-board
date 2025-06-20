import React, { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeContext";

const Filter = (props) => {
  const { theme } = useTheme();
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
        style={props.filterType === "" ? { ...theme } : {}}
      >
        All
      </button>
      <button
        onClick={handleFilter}
        value={"Recent"}
        style={props.filterType === "Recent" ? { ...theme } : {}}
      >
        Recent
      </button>
      <button
        onClick={handleFilter}
        value={"Celebration"}
        style={props.filterType === "Celebration" ? { ...theme } : {}}
      >
        Celebration
      </button>
      <button
        onClick={handleFilter}
        value={"Thank You"}
        style={props.filterType === "Thank You" ? { ...theme } : {}}
      >
        Thank You
      </button>
      <button
        onClick={handleFilter}
        value={"Inspiration"}
        style={props.filterType === "Inspiration" ? { ...theme } : {}}
      >
        Inspiration
      </button>
    </div>
  );
};

export default Filter;
