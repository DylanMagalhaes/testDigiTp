/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { TiDelete } from 'react-icons/ti';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import AddButton from '../AddButton/AddButton';
import './OtherServices.css';

function OtherServices({ handleOpenModal, otherElements, setOtherElements }) {
  const deleteElement = index => {
    const newElements = otherElements.filter((_, i) => i !== index);
    setOtherElements(newElements);
  };

  return (
    <>
      <Title text="Autres prestations non comprises dans les rubriques ci-dessus :" />
      <Content>
        <div>
          <p className="subtitle">Elements ajoutés :</p>
          <ul>
            {otherElements.map((element, index) => (
              <li className="element" key={index}>
                <button
                  type="button"
                  onClick={() => deleteElement(index)}
                  className="delete-icon-button"
                  aria-label={`Supprimer ${element}`}
                >
                  <TiDelete size={24} className="delete-icon" />
                </button>
                {element}
              </li>
            ))}
          </ul>
          <AddButton handleOpenModal={handleOpenModal} text="Ajouter un élément" />
        </div>
      </Content>
    </>
  );
}

export default OtherServices;
