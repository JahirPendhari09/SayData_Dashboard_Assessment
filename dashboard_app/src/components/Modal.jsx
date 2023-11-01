import React from 'react';
import '../App.css';


const Modal = ({ isOpen, onClose, children }) => {

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal" >
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div >{children}</div>
      </div>
    </div>
  );
};

export default Modal;