import './App.css';
import ContractualAspects from './components/ContractualAspects/ContractualAspects';
import EnvironmentalConstraints from './components/EnvironmentalConstraints/EnvironmentalConstraints';

function App() {
  return (
    <div className="app">
      <EnvironmentalConstraints />
      <ContractualAspects />
    </div>
  );
}

export default App;
