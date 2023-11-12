import React from "react";
import {
  categories,
  topDeals,
  trendings,
  recommendedProducts,
} from "./categorieslist";
import "./categories.css";
import { Link, useNavigate } from "react-router-dom";

export function Category({
  setselectedcategory,
  setHandleClickOnCategory,
  setdeal,
  settrend,
  setrec,
}) {
  const navigate = useNavigate();

  function handleClickOnCategories(category) {
    setselectedcategory(category);
    setHandleClickOnCategory(category);
    navigate(`/${category}`);
  }

  return (
    <>
      <div className="card custom-card1">
        <h2 className="my-0">Shop by Categories:</h2>
        <div className="category-row">
          {categories.map((category) => (
            <div
              className="col-md-3 col-lg-2 col-sm-6"
              key={category.id}
              onClick={() => handleClickOnCategories(category.name)}
            >
              <Link
                onClick={() => setHandleClickOnCategory(category.name)}
                to={`/${category.name}`}
              >
                <div className="category-card">
                  <img src={category.imageURL} alt={category.name} />
                  <p className="p-0 m-0 product-name">{category.name}</p>
                  <p className="p-0 m-0 pricerange">{category.priceRange}</p>
                  <p className="p-0 m-0 des" style={{ fontSize: "12px" }}>
                    {category.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="card custom-card1 p-0">
        <h2 className="my-0">Top deals:</h2>
        <div className="category-row">
          {topDeals.map((deal) => (
            <div
              className="col-md-3 col-lg-2 col-sm-6"
              key={deal.id}
              onClick={() => setdeal(deal.product)}
            >
              <Link to={`/${deal.product}`} onClick={() => setdeal(deal.product)}>
                <div className="category-card">
                  <img src={deal.imageURL} alt={deal.name} />
                  <p className="p-0 m-0 product-name">{deal.product}</p>
                  <p className="p-0 m-0 pricerange">{deal.price}</p>
                  <p className="p-0 m-0 save-price">Save:{deal.save}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="card custom-card1 p-0">
        <h2 className="my-0">Trendings:</h2>
        <div className="category-row">
          {trendings.map((trending) => (
            <div
              className="col-md-3 col-lg-2 col-sm-6"
              key={trending.id}
              onClick={() => settrend(trending.product)}
            >
              <Link to={`/${trending.product}`} onClick={() => settrend(trending.product)}>
                <div className="category-card">
                  <img src={trending.imageURL} alt={trending.product} />
                  <p className="p-0 m-0 product-name">{trending.product}</p>
                  <p className="p-0 m-0 pricerange">{trending.price}</p>
                  <p className="p-0 m-0 save-price">Save:{trending.save}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="card custom-card1 p-0">
        <h2 className="my-0">Most recommended:</h2>
        <div className="category-row">
          {recommendedProducts.map((product) => (
            <div className="col-md-3 col-lg-2 col-sm-6" key={product.id} onClick={()=> setrec(product.product)}>
              <Link to={`/${product.product}`} onClick={()=> setrec(product.product)}>
              <div className="category-card">
                <img src={product.imageURL} alt={product.product} />
                <p className="p-0 m-0 product-name">{product.product}</p>
                <p className="p-0 m-0 pricerange">${product.price}</p>
                <p className="p-0 m-0 save-price">
                  offer:
                  {(
                    ((product.totalAmount - product.price) /
                      product.totalAmount) *
                    100
                  ).toFixed(2)}
                  %
                </p>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
