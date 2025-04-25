import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import RoleBasedRoute from './RoleBasedRoute';
import { AuthProvider } from './AuthContext';

import Login from './Login';
import Home from './Home';
import AdminPanel from './AdminPanel';
import Unauthorized from './Unauthorized';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/unauthorized" element={<Unauthorized />} />

          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin"
            element={
              <RoleBasedRoute allowedRoles={['admin']}>
                <AdminPanel />
              </RoleBasedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
