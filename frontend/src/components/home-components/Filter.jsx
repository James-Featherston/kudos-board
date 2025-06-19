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
        style={
          props.filterType === ""
            ? { backgroundColor: theme.bgColor, color: theme.color }
            : {}
        }
      >
        All
      </button>
      <button
        onClick={handleFilter}
        value={"Recent"}
        style={
          props.filterType === "Recent"
            ? { backgroundColor: theme.bgColor, color: theme.color }
            : {}
        }
      >
        Recent
      </button>
      <button
        onClick={handleFilter}
        value={"Celebration"}
        style={
          props.filterType === "Celebration"
            ? { backgroundColor: theme.bgColor, color: theme.color }
            : {}
        }
      >
        Celebration
      </button>
      <button
        onClick={handleFilter}
        value={"Thank You"}
        style={
          props.filterType === "Thank You"
            ? { backgroundColor: theme.bgColor, color: theme.color }
            : {}
        }
      >
        Thank You
      </button>
      <button
        onClick={handleFilter}
        value={"Inspiration"}
        style={
          props.filterType === "Inspiration"
            ? { backgroundColor: theme.bgColor, color: theme.color }
            : {}
        }
      >
        Inspiration
      </button>
    </div>
  );
};

export default Filter;
