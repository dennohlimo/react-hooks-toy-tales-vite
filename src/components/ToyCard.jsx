import React from "react";

function ToyCard({ toy, removeToy, updateToy }) {
  const { id, name, image, likes } = toy;
  const url = "http://localhost:3001/toys";

  function handleDeleteClick() {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(() => removeToy(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn">Like {"<3"}</button>
      <button className="del-btn" onClick={handleDeleteClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
