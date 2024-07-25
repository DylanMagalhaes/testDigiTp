import React, { useState } from 'react';
import './App.css';
import ContractualAspects from './components/ContractualAspects/ContractualAspects';
import EnvironmentalConstraints from './components/EnvironmentalConstraints/EnvironmentalConstraints';
import TechnicalData from './components/TechnicalData/TechnicalData';
import Modal from './components/Modal/Modal';
import AddIPModal from './components/AddIpModal/AddIpModal';
import OtherServices from './components/OtherServices/OtherServices';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedConstraints, setSelectedConstraints] = useState([]);
  const [projectType, setProjectType] = useState('Sélectionner la nature du projet');
  const [selectedIP, setSelectedIP] = useState([]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const printFormData = () => {
    console.log(
      `
      Contraintes environant le chantier :${selectedConstraints.join(',')}\n
      Aspects contractuels: ${projectType}\n
      Données techniques : ${JSON.stringify(selectedIP)}
      `,
    );
  };

  return (
    <div className="app">
      <EnvironmentalConstraints
        selectedConstraints={selectedConstraints}
        setSelectedConstraints={setSelectedConstraints}
      />
      <ContractualAspects
        projectType={projectType}
        setProjectType={setProjectType}
      />
      <TechnicalData
        handleOpenModal={handleOpenModal}
        selectedIP={selectedIP}
        setSelectedIP={setSelectedIP}
      />
      <Modal show={showModal} onClose={handleCloseModal}>
        <AddIPModal
          selectedIP={selectedIP}
          setSelectedIP={setSelectedIP}
          onClose={handleCloseModal}
        />
      </Modal>
      <OtherServices handleOpenModal={handleOpenModal} />
      <button type="button" onClick={printFormData}>
        print
      </button>
    </div>
  );
}

export default App;
