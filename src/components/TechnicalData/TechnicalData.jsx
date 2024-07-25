/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './TechnicalData.css';
import AddButton from '../AddButton/AddButton';
import { TiDelete } from "react-icons/ti";

function TechnicalData({
  handleOpenModal,
  selectedIP,
  setSelectedIP,
}) {
  const deleteIp = ipCode => {
    const updatedIp = selectedIP.filter(ip => ip.code !== ipCode);
    setSelectedIP(updatedIp);
  };

  const onQuantityChange = (ipCode, quantity) => {
    const updatedIp = selectedIP.map(ip =>
      ip.code === ipCode ? { ...ip, quantity: quantity } : ip
    );
    setSelectedIP(updatedIp);
  };

  return (
    <>
      <Title text="Données techniques :" />
      <Content>
        <div>
          <p className="subtitle">IP ajoutés :</p>
          <ul>
            {selectedIP.map(ip => (
              <li className="ip" key={ip.code}>
                <div className="ip-details">
                  <TiDelete
                    onClick={() => {
                      deleteIp(ip.code);
                    }}
                    size={24}
                    className="delete-icon"
                  />
                  <span>
                    {ip.code} : {ip.description}
                  </span>
                </div>
                <input
                  className="input-description"
                  placeholder="veuillez saisir une quantité"
                  type="number"
                  onChange={e => onQuantityChange(ip.code, e.target.value)}
                  value={ip.quantity}
                />
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
