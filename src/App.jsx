import './App.css';
import ContractualAspects from './components/ContractualAspects/ContractualAspects';
import EnvironmentalConstraints from './components/EnvironmentalConstraints/EnvironmentalConstraints';
import TechnicalData from './components/TechnicalData/TechnicalData';

function App() {
  return (
    <div className="app">
      <EnvironmentalConstraints />
      <ContractualAspects />
      <TechnicalData />
    </div>
  );
}

export default App;
