import React from "react";

const ItemDetails = ({ item }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <img src={item.image} alt={item.name} style={{ width: "300px" }} />
        </div>
        <div>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
