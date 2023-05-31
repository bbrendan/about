import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// styles
import './App.css';

// components
import Navbar from './components/Navbar/Navbar';
import PageContent from './components/PageContent/PageContent';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageContent style={{ padding: '16px' }} />} />
      </Routes>
    </Router>
  );
}

export default App;
