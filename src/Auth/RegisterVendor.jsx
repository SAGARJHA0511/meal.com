import { useState } from 'react';

export default function RegisterVendor() {
  const [vendorId, setVendorId] = useState('');

  const handleGenerateId = () => {
    const newId = Math.random().toString(36).substr(2, 6).toUpperCase();
    setVendorId(newId);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-black rounded shadow mt-10 space-y-4">
      <h1 className="text-2xl font-bold text-center">Register as Vendor</h1>
      <button onClick={handleGenerateId} className="w-full bg-green-600 text-white p-2 rounded">
        Generate Vendor ID
      </button>
      {vendorId && (
        <div className="mt-4 p-2 border rounded text-center bg-gray-50">
          <p className="font-bold">Your Vendor ID:</p>
          <p className="text-lg">{vendorId}</p>
        </div>
      )}
    </div>
  );
}
