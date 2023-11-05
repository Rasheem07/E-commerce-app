import React from 'react';
import { categories, topDeals, trendings, recommendedProducts } from './categorieslist';
import "./categories.css";
import { Link, useNavigate } from 'react-router-dom';

export function Category({ setselectedcategory, clickedCategory, setHandleClickOnCategory }) {
  const navigate = useNavigate();

  function handleClickOnCategories(category) {
    setselectedcategory(category);
    setHandleClickOnCategory(category);
    navigate(`/${category}`);
  }

  return (
    <>
      <div className="card custom-card1">
        <h2 className='my-0'>Shop by Categories:</h2>
        <div className='category-row'>
          {categories.map((category) => (
            <div className='col-md-3 col-lg-2 col-sm-6' key={category.id} onClick={() => handleClickOnCategories(category.name)}>
              <Link onClick={() => setHandleClickOnCategory(category.name)} to={`/E-commerece-app/${clickedCategory}`}>
                <div className='category-card'>
                  <img src={category.imageURL} alt={category.name} />
                  <p className='p-0 m-0 product-name'>{category.name}</p>
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
        <h2 className='my-0'>Top deals:</h2>
        <div className='category-row'>
          {topDeals.map((deal) => (
            <div className='col-md-3 col-lg-2 col-sm-6' key={deal.id}>
              <div className='category-card'>
                <img src={deal.imageURL} alt={deal.name} />
                <p className='p-0 m-0 product-name'>{deal.product}</p>
                <p className="p-0 m-0 pricerange">{deal.price}</p>
                <p className="p-0 m-0 save-price">
                  Save:{deal.save}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card custom-card1 p-0">
        <h2 className='my-0'>Trendings:</h2>
        <div className='category-row'>
          {trendings.map((trending) => (
            <div className='col-md-3 col-lg-2 col-sm-6' key={trending.id}>
              <div className='category-card'>
                <img src={trending.imageURL} alt={trending.name} />
                <p className='p-0 m-0 product-name'>{trending.product}</p>
                <p className="p-0 m-0 pricerange">{trending.price}</p>
                <p className="p-0 m-0 save-price">
                  Save:{trending.save}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="card custom-card1 p-0">
        <h2 className='my-0'>Most recommended:</h2>
        <div className='category-row'>
          {recommendedProducts.map((product) => (
            <div className='col-md-3 col-lg-2 col-sm-6' key={product.id}>
              <div className='category-card'>
                <img src={product.imageURL} alt={product.name} />
                <p className='p-0 m-0 product-name'>{product.product}</p>
                <p className="p-0 m-0 pricerange">${product.price}</p>
                <p className="p-0 m-0 save-price">
                  offer:{(((product.totalAmount - product.price) / product.totalAmount) * 100).toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
