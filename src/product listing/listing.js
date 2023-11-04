import React from "react";
import { useParams } from "react-router-dom";
import { categories } from "../main/categorieslist";
import "./listing.css"; // Import a CSS file for custom styles

function Listing({ selectedCategory }) {
  const { category } = useParams();

  const filteredProducts = categories.filter(
    (product) =>
      selectedCategory === "All" || product.category === selectedCategory
  );

  return (
    <div className="container mt-5 card p-3">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="filter-sidebar">
            <h4>Filter by Category</h4>
            <select className="form-select" value={selectedCategory}>
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Furniture">Furniture</option>
              <option value="Fashion">Fashion</option>
            </select>
          </div>
        </div>
        <div className="col-lg-9 col-md-8 col-sm-12">
          <div className="row">
            {filteredProducts.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6 col-sm-6 col-6 mb-4">
                <div className="card product-card">
                  <img
                    src={product.imageURL}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">${product.priceRange}</p>
                    <p className="card-text">
                      <small className="text-muted">Discount: $100</small>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Listing;
