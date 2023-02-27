import React from "react";

const Search = ({ searchTerm, handleSearchTerm }) => {
  return (
    <form>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchTerm}
        placeholder="Ara"
        className="input input-bordered w-full"
      />
    </form>
  );
};

export default Search;
