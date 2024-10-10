  import React from 'react';
  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  import './App.css';
  import Home from './Components/Home';
  import Career from './Pages/Career';
  import { LanguageProvider } from './Components/LanguageContext';
  import Header from './Components/Header';
  import Preloader from './Components/Preloader';
  import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


  function App() {
    return (
      <div className="background-container">
        <LanguageProvider>
          <Router>
          <Preloader />
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
