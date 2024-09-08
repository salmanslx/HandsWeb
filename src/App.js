  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Home from './Components/Home';
  import Career from './Pages/Career';
  import { LanguageProvider } from './Components/LanguageContext';
  import Header from './Components/Header';

  function App() {
    return (
      <div className="background-container">
        <LanguageProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/career" element={<Career />} />
            </Routes>
          </Router>
        </LanguageProvider>
      </div>
    );
  }

  export default App;
