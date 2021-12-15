import React, { useState } from "react";

function ListingCard({ id, key, description, image, location, onDeleteListing }) {
  const [fav, setFav] = useState(false)

  function handleFavorite() {
    setFav(!fav);
  }
  function handleDeleteClick() {
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing({ id }));

  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {fav ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
            <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
          )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
