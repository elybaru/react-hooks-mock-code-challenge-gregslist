import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((resp) => setListings(resp))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListings = listings.filter((listing) => listing.id !== deletedListing.id);
    setListings(updatedListings);
  }

  const listingsDisplay = listings.filter((listing) => listing.description.includes(searchTerm) || searchTerm === "");

  // use includes
  // clear form

  // Find a way to submit to get text at app level
  // Once you have text at app level (state) should be updating listings to listingContainer
  // filter listings before passing down to ListingsContainer, filter with state

  // function filterSearch() {
  //   const listingsToDisplay = listings.filter((listing) => listing.description !== filterListings);
  //   setListings(filterListings); 



  return (
    <div className="app">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ListingsContainer listings={listingsDisplay} onDeleteListing={handleDeleteListing} />
    </div>
  );
}

export default App;
