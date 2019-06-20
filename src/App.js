import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CareerObjective from './components/CareerObjective/CareerObjective';
import ProfessionalExperience from './components/ProfessionalExperience/ProfessionalExperience';
import Education from './components/Education/Education';
import Technologies from './components/Technologies/Technologies';

function App() {
  return (
    <div className="App">
      <Header />
      <CareerObjective />
      <ProfessionalExperience />
      <Technologies />
      <Education />
    </div>
  );
}

export default App;
