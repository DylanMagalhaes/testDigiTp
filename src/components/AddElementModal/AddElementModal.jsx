/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './AddElementModal.css';
import AddButton from '../AddButton/AddButton';

function AddElementModal({ otherElements, setOtherElements, onClose }) {
  const [newElement, setNewElement] = useState('');

  const handleInputChange = event => {
    setNewElement(event.target.value);
  };

  const handleAddElement = () => {
    if (newElement.trim()) {
      setOtherElements([...otherElements, newElement]);
      setNewElement('');
      onClose();
    }
  };

  return (
    <>
      <Title text="Ajouter un élément :" />
      <Content>
        <input
          placeholder="Ecrivez l'element à ajouter..."
          onChange={handleInputChange}
          value={newElement}
          className="add-element-input"
          type="text"
        />
        <AddButton
          text="Ajouter"
          type="button"
          onClick={handleAddElement}
          className="add-element-button"
        >
          Ajouter
        </AddButton>
      </Content>
    </>
  );
}

export default AddElementModal;
