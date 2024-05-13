import React, { useState, useEffect } from 'react';
import './MyModal.css'; 

const Modal = ({ disableGlobalScroll, children }) => {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (disableGlobalScroll) {
      document.body.style.overflow = open ? 'hidden' : 'unset';
    }
  }, [open, disableGlobalScroll]);


  const closeModal = () => {
    setOpen(false);
  };

  return open ? (
    <div onClick={closeModal}>
      <div onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Modal;