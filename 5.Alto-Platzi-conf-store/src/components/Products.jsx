import React, { useContext } from 'react';
import Product from './Product';
import '../styles/components/Products.css';

import AppContext from '../context/AppContext';

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleToCart = product => () => {
    const random = Math.floor(Math.random() * 1000);
    const newProduct = {...product, cartId : `${product.id}-${random}`};
    console.log(newProduct);
    addToCart(newProduct);
  };

  return (
    <div className="Products">
      <div className="Products-items">
        {products.map((product) => (
          <Product product={product} key={product.id} handleToCart={handleToCart}/>
        ))}
      </div>
    </div>
  );
};

export default Products;
