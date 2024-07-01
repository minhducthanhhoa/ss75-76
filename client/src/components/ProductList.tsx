import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { setProducts, updateProductQuantity } from '../store/reducers/ProductsSlice';
import { addToCart } from '../store/reducers/CartSlice';
import axios from 'axios';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.products);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => {
        dispatch(setProducts(response.data));
      });
  }, [dispatch]);

  const handleAddToCart = (product:any) => {
    dispatch(addToCart(product));
    dispatch(updateProductQuantity({ id: product.id, quantity: product.quantity - 1 }));
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border rounded p-4">
            <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <button
              onClick={() => handleAddToCart(product)}
              disabled={product.quantity === 0}
              className={`mt-2 p-2 bg-blue-500 text-white rounded ${product.quantity === 0 ? 'bg-gray-500 cursor-not-allowed' : ''}`}
            >
              {product.quantity === 0 ? 'Out of stock' : 'Add to cart'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
