import React from "react";

const ProductPage = ({ product }) => {
  return (
    <div className="page-view">
      <div>
        <img
          src="/path/to/image.jpg"
          alt="Product"
          style={{ width: "300px" }}
        />
      </div>
      <div>
        <h2 className="text-sky-700">{product.name}</h2>
        <p>{product.description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductPage;
