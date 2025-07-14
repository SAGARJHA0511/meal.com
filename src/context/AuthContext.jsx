import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  const [vendorId, setVendorId] = useState('');

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, vendorId, setVendorId }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
