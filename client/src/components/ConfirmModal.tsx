import React from 'react';

interface ConfirmModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded">
        <h3 className="text-lg font-semibold">Xác nhận</h3>
        <p>Bạn có chắc chắn xóa sản phẩm khỏi giỏ hàng?</p>
        <div className="mt-4 flex justify-end">
          <button onClick={onCancel} className="p-2 bg-gray-300 rounded mr-2">Hủy</button>
          <button onClick={onConfirm} className="p-2 bg-red-500 text-white rounded">Xóa</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
