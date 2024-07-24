/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './TechnicalData.css';
import AddButton from '../AddButton/AddButton';
import { TiDelete } from "react-icons/ti";


function TechnicalData({ handleOpenModal, selectedIP }) {
  return (
    <>
      <Title text="Données techniques :" />
      <Content>
        <div>
          <p className="subtitle">IP ajoutés :</p>
          <ul>
            {selectedIP.map(ip => (
              <li className="ip" key={ip.code}>
                <TiDelete size={24} className="delete-icon" />
                <span>
                  {ip.code} : {ip.description}
                </span>
              </li>
            ))}
          </ul>
          <AddButton handleOpenModal={handleOpenModal} text="Ajouter un IP" />
        </div>
      </Content>
    </>
  );
}

export default TechnicalData;
