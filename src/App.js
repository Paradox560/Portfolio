import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Project from './components/projects';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/project' element={<Project/>} />
      </Routes>
    </Router>
  );
}

export default App;
