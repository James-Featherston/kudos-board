import React from "react";
const Search = (props) => {
  const onSearch = (event) => {
    event.preventDefault();
    props.changeData();
  };
  const handleSearchChange = (event) => {
    props.setQuery(event.target.value);
  };
  const handleClear = () => {
    props.setQuery("");
  };
  return (
    <form onSubmit={onSearch}>
      <input
        type="text"
        value={props.query}
        onChange={handleSearchChange}
        placeholder="Search Boards..."
        className="submit-input"
        style={{ width: "400px", minWidth: "100px" }}
      />
      <button className="search-button" type="submit">
        Search
      </button>
      <button className="search-button" onClick={handleClear}>
        Clear
      </button>
    </form>
  );
};

export default Search;
