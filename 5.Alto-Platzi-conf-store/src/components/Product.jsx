import React from 'react';

const Product = ({ product, handleToCart }) => (
      <div className="Products-item">
        <img src={product.image} alt={product.title} />
        <div className="Product-item-info">
          <h2>
            {product.title}
            <span>
              $
              {' '}
              {product.price}
            </span>
          </h2>
          <p>{product.description}</p>
        </div>
        <button type="button" onClick={handleToCart(product)}>Comprar</button>
      </div>
    )

export default Product;
