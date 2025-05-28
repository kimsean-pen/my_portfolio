import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home';
import Projects from './projects';
import Resume from './resume'
import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/Resume" element={<Resume />} />

      </Routes>
    </Router>
  );
}

export default App;
