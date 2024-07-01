import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
}

const Notification: React.FC<NotificationProps> = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => setShow(false), 3000);
    }
  }, [message]);

  if (!show) return null;

  let bgColor = 'bg-green-500';
  if (message.includes('Update')) bgColor = 'bg-yellow-500';
  if (message.includes('Delete')) bgColor = 'bg-red-500';

  return (
    <div className={`fixed bottom-4 right-4 p-4 text-white rounded ${bgColor}`}>
      {message}
    </div>
  );
};

export default Notification;
