import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import VulnerabilitiesPage from './pages/vulnerabilitiesPage/vulnerabilitiesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<div />} />

        <Route path="/vulnerabilities" element={<VulnerabilitiesPage />} />

        <Route path="*" element={<Navigate to="/vulnerabilities" />} />
      </Routes>
    </Router>
  );
}

export default App;
