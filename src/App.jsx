import React, { useState } from 'react';
import './App.css';
import ContractualAspects from './components/ContractualAspects/ContractualAspects';
import EnvironmentalConstraints from './components/EnvironmentalConstraints/EnvironmentalConstraints';
import TechnicalData from './components/TechnicalData/TechnicalData';
import Modal from './components/Modal/Modal';
import AddIPModal from './components/AddIpModal/AddIpModal';
import OtherServices from './components/OtherServices/OtherServices';
import AddElementModal from './components/AddElementModal/AddElementModal';

function App() {
  const [showAddIPModal, setShowAddIPModal] = useState(false);
  const [showAddElementModal, setShowAddElementModal] = useState(false);
  const [selectedConstraints, setSelectedConstraints] = useState([]);
  const [projectType, setProjectType] = useState(
    'Sélectionner la nature du projet',
  );
  const [selectedIP, setSelectedIP] = useState([]);
  const [otherElements, setOtherElements] = useState([]);

  const handleOpenAddIPModal = () => {
    setShowAddIPModal(true);
  };

  const handleCloseAddIPModal = () => {
    setShowAddIPModal(false);
  };

  const handleOpenAddElementModal = () => {
    setShowAddElementModal(true);
  };

  const handleCloseAddElementModal = () => {
    setShowAddElementModal(false);
  };

  const printFormData = () => {
    console.log(
      `
      Contraintes environant le chantier :${selectedConstraints.join(',')}\n
      Aspects contractuels: ${projectType}\n
      Données techniques : ${JSON.stringify(selectedIP)}\n
      Autres éléments : ${JSON.stringify(otherElements)}
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
        handleOpenModal={handleOpenAddIPModal}
        selectedIP={selectedIP}
        setSelectedIP={setSelectedIP}
      />
      <Modal show={showAddIPModal} onClose={handleCloseAddIPModal}>
        <AddIPModal
          selectedIP={selectedIP}
          setSelectedIP={setSelectedIP}
          onClose={handleCloseAddIPModal}
        />
      </Modal>
      <OtherServices
        handleOpenModal={handleOpenAddElementModal}
        otherElements={otherElements}
        setOtherElements={setOtherElements}
      />
      <Modal show={showAddElementModal} onClose={handleCloseAddElementModal}>
        <AddElementModal
          otherElements={otherElements}
          setOtherElements={setOtherElements}
          onClose={handleCloseAddElementModal}
        />
      </Modal>
      <button className="dl-button" type="button" onClick={printFormData}>
        Finalisation et téléchargement
      </button>
    </div>
  );
}

export default App;
