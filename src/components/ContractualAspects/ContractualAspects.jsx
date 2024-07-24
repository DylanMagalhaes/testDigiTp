import React, { useState } from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './ContractualAspects.css';

function ContractualAspects() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(
    'Sélectionner la nature du projet',
  );

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <>
      <Title text="Aspects contractuels :" />
      <Content>
        <p className="subtitle">Nature du projet :</p>
        <div className="dropdown">
          <div className="dropdown-input" onClick={toggleDropdown}>
            {selectedItem} <span className="dropdown-arrow">&#9662;</span>
          </div>
          {isOpen && (
            <ul className="dropdown-menu">
              <li onClick={() => handleItemClick('Signalisation Horizontale')}>
                Signalisation Horizontale
              </li>
              <li onClick={() => handleItemClick('Signalisation Verticale')}>
                Signalisation Verticale
              </li>
              <li
                onClick={() =>
                  handleItemClick('Dispositifs de retenue métal, bois, mixte')
                }
              >
                Dispositifs de retenue métal, bois, mixte
              </li>
            </ul>
          )}
        </div>
      </Content>
    </>
  );
}

export default ContractualAspects;
