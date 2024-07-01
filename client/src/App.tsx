import React from 'react'
import ProductList from './components/ProductList'  
import ShoppingCart from './components/ShoppingCart';

const App: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="grid grid-cols-2 gap-4">
        <ProductList />
        <ShoppingCart />
      </div>
    </div>
  );
};

export default App;