import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Login() {
  const { setUserRole } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    setUserRole(role);
    if (role === 'vendor') navigate('/vendor/dashboard');
    else if (role === 'client_admin') navigate('/admin/dashboard');
    else if (role === 'client_employee') navigate('/employee/dashboard');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black rounded shadow mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Login</h1>
      <button onClick={() => handleLogin('vendor')} className="w-full bg-blue-600 text-white p-2 rounded">
        Vendor Login
      </button>
      <button onClick={() => handleLogin('client_admin')} className="w-full bg-green-600 text-white p-2 rounded">
        Client Admin Login
      </button>
      <button onClick={() => handleLogin('client_employee')} className="w-full bg-amber-600 text-white p-2 rounded">
        Client Employee Login
      </button>
    </div>
  );
}
