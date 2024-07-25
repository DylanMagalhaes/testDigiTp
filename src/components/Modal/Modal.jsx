/* eslint-disable react/prop-types */
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import './Modal.css';

function Modal({ show, onClose, children }) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <TiDelete onClick={onClose} size={24} className="delete-icon" />
        {children}
      </div>
    </div>
  );
}

export default Modal;
