/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './Modal.css';

function Modal({ show, selectedIP, setSelectedIP, onClose }) {
  if (!show) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleIPClick = ip => {
    setSelectedIP([...selectedIP, ip]);
    setIsOpen(false);
    onClose();
  };

  const ipItems = [
    {
      code: '1121',
      description: 'Ouvrage de technicité moyenne à haute ou ouvrage groupés',
    },
    {
      code: '1131',
      description:
        "Ouvrage de technicité Courante: Autres ouvrages courants de béton armé ou mixts acier-béton (à l'exclusion des ouvrages nautique)",
    },
    {
      code: '1141',
      description: 'Ouvrage de technicité moyenne à haute ou ouvrage groupés',
    },
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Title text="Ajouter un IP" />
        <Content>
          <div className="modal-dropdown">
            <div className="modal-dropdown-input" onClick={toggleDropdown}>
              1. Ouvrages d'art et de génie civile industriel (béton et acier-béton)<span className="modal-dropdown-arrow">&#9662;</span>
            </div>
            {isOpen && (
              <ul className="modal-dropdown-menu">
                {ipItems.map(ip => (
                  <li key={ip.code} className="modal-item">
                    <p>{ip.code}</p>
                    <p>{ip.description}</p>
                    <button
                      type="button"
                      className="littleAddButton"
                      onClick={() => handleIPClick(ip)}
                    >
                      +
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Content>
      </div>
    </div>
  );
}

export default Modal;
