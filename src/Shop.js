import React from 'react';
import './Shop.css';
import Muffler from './Images/muffler.jpg';
import rims from './Images/rims.jpg';
import piston from './Images/piston.jpg';
import battery from './Images/battery.jpg';
import Exhaust from './Images/Exhaust.jpg';
import spoiler from './Images/Spoiler.jpg';

function ShoppingPage() {
  const products = [
    { id: 1, name: 'Muffler', price: 19.99, image: Muffler },
    { id: 2, name: 'Rims', price: 46.99, image: rims },
    { id: 3, name: 'Piston', price: 29.99, image: piston },
    { id: 4, name: 'Battery', price: 257.99, image: battery },
    { id: 5, name: 'Exhaust system', price: 2100.00, image: Exhaust },
    { id: 6, name: 'Spoiler', price: 300.00, image: spoiler },
    { id: 7, name: 'Product 7', price: 44.99, image: 'https://via.placeholder.com/200x200' },
    { id: 8, name: 'Product 8', price: 54.99, image: 'https://via.placeholder.com/200x200' },
    { id: 9, name: 'Product 9', price: 56.99, image: 'https://via.placeholder.com/200x200' },
  ];

  return (
    <div className="shopping-page">
      <h2>SHOPPING PAGE</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingPage;
