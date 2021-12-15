import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDeleteListing }) {

  const listingsToDisplay = listings

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay.map((listing) => (
          <ListingCard id={listing.id} key={listing.id} description={listing.description} image={listing.image} location={listing.location} onDeleteListing={onDeleteListing} />

        ))}

      </ul>
    </main>
  );
}

export default ListingsContainer;
