import React from "react";

const Search = ({ sortedData, setFilteredData }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    if (!e.target.value) return setFilteredData(sortedData);

    const filterResults = sortedData.filter((project) => {
      return Object.values(project).some((val) =>
        String(val)
          .toLocaleLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
    });

    if (filterResults?.length) setFilteredData(filterResults);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        onChange={handleSearchChange}
        placeholder="Ara..."
        className="input input-bordered w-full"
      />
    </form>
  );
};

export default Search;
