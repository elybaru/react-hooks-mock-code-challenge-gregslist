import React, { useState } from "react";

function Search({ searchTerm, setSearchTerm }) {
  const [search, setSearch] = useState("")
  console.log(search)

  function handleSearch(event) {
    setSearch(event.target.value)
  }


  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearchTerm(search);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
