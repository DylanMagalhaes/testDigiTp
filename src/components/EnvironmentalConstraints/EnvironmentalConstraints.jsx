/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './EnvironmentalConstraints.css';
import Title from '../Title/Title';
import Content from '../ContentComponent/Content';

function EnvironmentalConstraints({
  selectedConstraints,
  setSelectedConstraints,
}) {
  const constraintsArray = [
    'Milieu urbain',
    'Milieu non urbain',
    'Circulation piétonne',
    'Circulation automobile',
    'Encombrement dû à des réseaux (eau, électricité ...)',
    "Exiguïté de l'espace réservé au chantier",
  ];

  const handleCheckboxChange = e => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedConstraints([...selectedConstraints, value]);
    } else {
      setSelectedConstraints(
        selectedConstraints.filter(constraint => constraint !== value),
      );
    }
    console.log(selectedConstraints);
  };

  return (
    <>
      <Title text="Contraintes environnant le chantier :" />
      <Content>
        <p className="subtitle">Sélection de(s) contrainte(s) :</p>
        <ul className="constraintsList">
          {constraintsArray.map((constraint, index) => (
            <li key={index}>
              <input
                onChange={handleCheckboxChange}
                className="checkbox"
                type="checkbox"
                value={constraint}
              />{' '}
              {constraint}
            </li>
          ))}
        </ul>
      </Content>
    </>
  );
}

export default EnvironmentalConstraints;
