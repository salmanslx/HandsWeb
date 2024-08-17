import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Career from './Pages/Career';


function App() {
  return (
    <div className="background-container">

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/career' element={<Career />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
