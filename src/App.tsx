import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router';
import SignInPage from './pages/signInPage/signInPage';
import VulnerabilitiesPage from './pages/vulnerabilitiesPage/vulnerabilitiesPage';
import ProtectedRoute from './components/protected-route/protectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />

        <Route
          path="/vulnerabilities"
          element={
            <ProtectedRoute>
              <VulnerabilitiesPage />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
}

export default App;
