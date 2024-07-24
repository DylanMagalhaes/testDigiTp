import React, { useState } from 'react';
import './EnvironmentalConstraints.css';

function EnvironmentalConstraints() {
  const constraintsArray = [
    'Milieu urbain',
    'Milieu non urbain',
    'Circulation piétonne',
    'Circulation automobile',
    'Encombrement dû à des réseaux (eau, électricité ...)',
    "Exiguïté de l'espace réservé au chantier",
  ];

  const [selectedConstraints, setSelectedConstraints] = useState([]);

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
      <h2 className="title">Contraintes environnant le chantier :</h2>
      <div className="container">
        <p className="subtitle">Sélection de(s) contrainte(s):</p>
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
      </div>
    </>
  );
}

export default EnvironmentalConstraints;
