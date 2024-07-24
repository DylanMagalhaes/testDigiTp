import React, { useState } from 'react';
import './App.css';
import ContractualAspects from './components/ContractualAspects/ContractualAspects';
import EnvironmentalConstraints from './components/EnvironmentalConstraints/EnvironmentalConstraints';
import TechnicalData from './components/TechnicalData/TechnicalData';
import Modal from './components/Modal/Modal';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedIP, setSelectedIP] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <EnvironmentalConstraints />
      <ContractualAspects />
      <TechnicalData
        handleOpenModal={handleOpenModal}
        selectedIP={selectedIP}
      />
      <Modal
        setSelectedIP={setSelectedIP}
        selectedIP={selectedIP}
        show={showModal}
        onClose={handleCloseModal}
      >
        <h2>Voici la modale</h2>
        <p>Contenu de la modale.</p>
      </Modal>
    </div>
  );
}

export default App;
