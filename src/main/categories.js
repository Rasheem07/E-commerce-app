import React from 'react';
import { categories_row1 } from './categorieslist';
import "./categories.css"

export function Category() {
  return (
    <>
    <div className="card custom-card1">
      <h2 className='my-0'>Essentials:</h2>
      <div className='category-row'>
        {categories_row1.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0'>{category.name}</p>
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
      <h2 className='my-0'>Essentials:</h2>
      <div className='category-row'>
        {categories_row1.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0'>{category.name}</p>
              <p className="p-1 m-0 pricerange" >{category.priceRange}</p>
                <p className="p-0 m-0 des" style={{ fontSize: "10px" }}>
                  {category.description}
                </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    <div className="card custom-card1 p-0">
      <h2 className='my-0'>Essentials:</h2>
      <div className='category-row'>
        {categories_row1.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0'>{category.name}</p>
              <p className="p-1 m-0 pricerange" >{category.priceRange}</p>
                <p className="p-0 m-0 des" style={{ fontSize: "10px" }}>
                  {category.description}
                </p>
            </div>
          </div>
        ))}
      </div>
      </div>
    <div className="card custom-card1 p-0">
      <h2 className='my-0'>Essentials:</h2>
      <div className='category-row'>
        {categories_row1.map((category) => (
          <div className='col-md-3 col-lg-2 col-sm-6' key={category.id}>
            <div className='category-card'>
              <img src={category.imageURL} alt={category.name} />
              <p className='p-0 m-0'>{category.name}</p>
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

