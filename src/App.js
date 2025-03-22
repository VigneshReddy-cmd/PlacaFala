import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import UploadPost from './components/UploadPost';
import CheckStatus from './components/CheckStatus';

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  
  const renderView = () => {
    switch(currentView) {
      case 'home':
        return <HomePage setView={setCurrentView} />;
      case 'upload':
        return <UploadPost setView={setCurrentView} />;
      case 'check':
        return <CheckStatus setView={setCurrentView} />;
      default:
        return <HomePage setView={setCurrentView} />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PLACA FALA</h1>
        <p>Plate Speaks - Report Vehicle Behavior</p>
      </header>
      <main>
        {renderView()}
      </main>
      <footer>
        <p>© 2025 PLACA FALA - For Entertainment Purposes Only</p>
      </footer>
    </div>
  );
};

export default App;