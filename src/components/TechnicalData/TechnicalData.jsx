import React from 'react';
import Content from '../ContentComponent/Content';
import Title from '../Title/Title';
import './TechnicalData.css';
import AddButton from '../AddButton/AddButton';

function TechnicalData() {
  return (
    <>
      <Title text="Données techniques :" />
      <Content>
        <div>
          <p className="subtitle">IP ajoutés :</p>
          <AddButton text="Ajouter un IP" />
        </div>
      </Content>
    </>
  );
}
export default TechnicalData;
