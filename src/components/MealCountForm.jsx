import { useState } from 'react';

export default function MealCountForm() {
  const [selected, setSelected] = useState('veg');
  const [submitted, setSubmitted] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const isCutoffPassed = false; // For now, always before cutoff (mock)

  const handleSubmit = () => {
    if (isCutoffPassed) {
      alert('Cutoff time has passed!');
      return;
    }
    const code = Math.floor(1000 + Math.random() * 9000);
    setCouponCode(code);
    setSubmitted(true);
  };

  return (
    <div className="bg-black p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-bold">Meal Count Form</h2>

      {submitted ? (
        <div className="text-center space-y-2">
          <p className="text-green-600 font-bold">You have opted for {selected} meal</p>
          <p className="text-gray-600">Your 4-digit coupon code:</p>
          <div className="text-2xl font-bold bg-gray-100 inline-block p-2 rounded">{couponCode}</div>
        </div>
      ) : (
        <>
          <div className="space-y-2">
            <label className="block font-medium">Select Meal Type</label>
            <div className="flex space-x-4">
              <button
                onClick={() => setSelected('veg')}
                className={`px-4 py-2 rounded ${selected === 'veg' ? 'bg-green-600 text-white' : 'bg-gray'}`}
              >
                Veg
              </button>
              <button
                onClick={() => setSelected('non-veg')}
                className={`px-4 py-2 rounded ${selected === 'non-veg' ? 'bg-red-600 text-white' : 'bg-gray-'}`}
              >
                Non-Veg
              </button>
            </div>
          </div>
          <button onClick={handleSubmit} className="w-full bg-blue-600 text-white p-2 rounded">
            Submit Preference
          </button>
        </>
      )}
    </div>
  );
}
