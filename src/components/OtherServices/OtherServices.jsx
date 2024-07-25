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

          {otherElements.length === 0 ? (
            <p className="no-elements">Aucun élément ajouté pour le moment.</p>
          ) : (
            <ul>
              {otherElements.map((element, index) => (
                <li className="element" key={index}>
                  {element}
                </li>
              ))}
            </ul>
          )}
          <AddButton
            handleOpenModal={handleOpenModal}
            text="Ajouter un élément"
          />
        </div>
      </Content>
    </>
  );
}

export default OtherServices;
