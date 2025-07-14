import { useState } from 'react';

export default function RegisterEmployee() {
  const [vendorId, setVendorId] = useState('');

  const handleRegister = () => {
    alert(`Registered as Employee for Vendor ID: ${vendorId}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black rounded shadow mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Register as Employee</h1>
      <input
        type="text"
        value={vendorId}
        onChange={(e) => setVendorId(e.target.value)}
        placeholder="Enter Vendor ID"
        className="border p-2 w-full rounded"
      />
      <button onClick={handleRegister} className="w-full bg-amber-600 text-white p-2 rounded">
        Register
      </button>
    </div>
  );
}
