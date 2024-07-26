/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './AddIpModal.css';

function AddIPModal({ selectedIP, setSelectedIP, onClose }) {
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
      quantity: null,
    },
    {
      code: '1131',
      description:
        "Ouvrage de technicité Courante: Autres ouvrages courants de béton armé ou mixts acier-béton (à l'exclusion des ouvrages nautique)",
      quantity: null,
    },
    {
      code: '1141',
      description: 'Ouvrage de technicité moyenne à haute ou ouvrage groupés',
      quantity: null,
    },
  ];

  return (
    <>
      <Title text="Ajouter un IP :" />
      <Content>
        <div className="modal-dropdown">
          <div className="modal-dropdown-input" onClick={toggleDropdown}>
            1. Ouvrages d'art et de génie civile industriel (béton et
            acier-béton)
            <span className="modal-dropdown-arrow">&#9662;</span>
          </div>
          {isOpen && (
            <ul className="modal-dropdown-menu">
              {ipItems.map(ip => (
                <li key={ip.code} className="modal-item">
                  <p>{ip.code}</p>
                  <p className="ip-description">{ip.description}</p>
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
    </>
  );
}

export default AddIPModal;
