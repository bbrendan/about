import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar/Navbar';

// pages
import Landing from './pages/Landing';
import About from './pages/About';
import Work from './pages/Work';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Landing />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Work />} />
        </Routes>
      </Router>
  );
}

export default App;
