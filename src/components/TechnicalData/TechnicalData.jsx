/* eslint-disable react/prop-types */
import React from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './TechnicalData.css';
import AddButton from '../AddButton/AddButton';
import IpItem from '../IpItem/IpItem';  // Assurez-vous d'importer IpItem correctement

function TechnicalData({ handleOpenModal, selectedIP, setSelectedIP }) {
  const handleDeleteIp = ipCode => {
    const updatedIp = selectedIP.filter(ip => ip.code !== ipCode);
    setSelectedIP(updatedIp);
  };

  const onQuantityChange = (ipCode, quantity) => {
    const updatedIp = selectedIP.map(ip =>
      ip.code === ipCode ? { ...ip, quantity } : ip,
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
              <IpItem
                key={ip.code}
                ip={ip}
                handleDeleteIp={handleDeleteIp}
                onQuantityChange={onQuantityChange}
              />
            ))}
          </ul>
          <AddButton handleOpenModal={handleOpenModal} text="Ajouter un IP" />
        </div>
      </Content>
    </>
  );
}

export default TechnicalData;
