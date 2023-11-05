import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../main/categorieslist";
import "./listing.css";

function Listing() {
  const { category } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    // Simulate an asynchronous data fetch (replace with your actual data fetching code)
    // For example, using setTimeout to simulate a delay
    setTimeout(() => {
      try {
        // Filter the products based on the selected category or show all products
        const filtered = categories.find((cat) => cat.category === category);

        if (filtered) {
          setFilteredProducts(filtered.products);
        } else {
          // Handle the case when the selected category is not found
          setError("Category not found");
        }

        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    }, 1000); // Simulated data fetching delay (1 second)
  }, [category]);

  if (loading) {
    return (
      <div className="text-center loader" style={{ fontSize: "32px", minHeight: "85vh", display: "grid", placeItems: "center" }}>
        Loading...
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mt-3 card p-3" style={{minWidth: "92vw"}}>
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
          <div className="filter-sidebar">
            <h4>Filter by Category</h4>
            <select className="form-select" value={category || "All"}>
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
                <div className="pt-2 card product-card">
                  <img
                    src={product.imageURL}
                    className="card-img-top"
                    alt={product.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.price}</p>
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
