import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EmployeeDashboard from './pages/EmployeeDashboard';
import AdminDashboard from './pages/AdminDashboard';
import VendorDashboard from './pages/VendorDashboard';
import Login from './Auth/Login';
import RegisterVendor from './Auth/RegisterVendor';
import RegisterClientAdmin from './Auth/RegisterClientAdmin';
import RegisterEmployee from './Auth/RegisterEmployee';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';
import { AuthProvider } from './context/AuthContext';


function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register/vendor" element={<RegisterVendor />} />
  <Route path="/register/client-admin" element={<RegisterClientAdmin />} />
  <Route path="/register/employee" element={<RegisterEmployee />} />
  <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
  <Route path="/admin/dashboard" element={<AdminDashboard />} />
  <Route path="/vendor/dashboard" element={<VendorDashboard />} />
  

  <Route path="/employee/dashboard" element={
    <ProtectedRoute allowedRoles={['client_employee']}>
      <EmployeeDashboard />
    </ProtectedRoute>
  } />

  <Route path="/admin/dashboard" element={
    <ProtectedRoute allowedRoles={['client_admin']}>
      <AdminDashboard />
    </ProtectedRoute>
  } />

  <Route path="/vendor/dashboard" element={
    <ProtectedRoute allowedRoles={['vendor']}>
      <VendorDashboard />
    </ProtectedRoute>
  } />
</Routes>
</BrowserRouter>
</AuthProvider>
  );
}

export default App;
