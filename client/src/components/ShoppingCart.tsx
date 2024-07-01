import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateCartItem, removeFromCart } from '../store/reducers/CartSlice';
import ConfirmModal from '../components/ConfirmModal';
import Notification from '../components/Notification';

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [showModal, setShowModal] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<number | null>(null); // Thay đổi ở đây
  const [notification, setNotification] = useState('');

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateCartItem({ id, quantity }));
    setNotification('Update product successfully');
  };

  const handleRemoveFromCart = (id: number) => {
    setItemToRemove(id);
    setShowModal(true);
  };

  const confirmRemove = () => {
    if (itemToRemove !== null) {
      dispatch(removeFromCart(itemToRemove));
      setNotification('Delete product successfully');
      setShowModal(false);
      setItemToRemove(null);
    }
  };

  return (
    <div className="p-4">
      {cartItems.map((item:any) => (
        <div key={item.id} className="border rounded p-4 mb-4 flex items-center">
          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
          <div className="ml-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>Price: ${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleUpdateQuantity(item.id, +e.target.value)}
              className="border p-1 w-16"
            />
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="ml-4 p-2 bg-red-500 text-white rounded"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="text-xl font-semibold">
        Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}
      </div>
      <Notification message={notification} />
      {showModal && (
        <ConfirmModal
          onConfirm={confirmRemove}
          onCancel={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default ShoppingCart;
