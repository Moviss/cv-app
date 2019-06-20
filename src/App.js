import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CareerObjective from './components/CareerObjective/CareerObjective';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';

function App() {
  return (
    <div className="App">
      <Header />
      <CareerObjective />
      <ProfessionalExperience />
    </div>
  );
}

export default App;
