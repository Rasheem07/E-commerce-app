import React from 'react';
import { categories } from './categorieslist';
import { topDeals } from './categorieslist';
import { trendings } from './categorieslist';
import "./categories.css"

export function Category() {
  return (
    <>
    <div className="card custom-card1">
      <h2 className='my-0'>Shop by Categories:</h2>
      <div className='category-row'>
        {categories.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0 product-name'>{category.name}</p>
              <p className="p-1 m-0 pricerange" >{category.priceRange}</p>
                <p className="p-0 m-0 des" style={{ fontSize: "12px" }}>
                  {category.description}
                </p>
            </div>
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
              <p className='p-0 pb-1 m-0 product-name'>{deal.product}</p>
              <p className="p-0 m-0 pricerange" >{deal.price}</p>
              <del className="p-0 m-0 totalamount">{deal.totalAmount}</del>
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
              <p className="p-0 m-0 pricerange" >{trending.price}</p>
              <del className="p-0 m-0 totalamount">{trending.totalAmount}</del>
                <p className="p-0 m-0 save-price">
                  Save:{trending.save}
                </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    <div className="card custom-card1 p-0">
      <h2 className='my-0'>Essentials:</h2>
      <div className='category-row'>
     {categories.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0 product-name'>{category.name}</p>
              <p className="p-1 m-0 pricerange" >{category.priceRange}</p>
                <p className="p-0 m-0 des" style={{ fontSize: "10px" }}>
                  {category.description}
                </p>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
}

