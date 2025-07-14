import { useState } from 'react';

const mockEmployees = [
  { id: 1, name: 'Alice', meal: 'veg', count: 1 },
  { id: 2, name: 'Bob', meal: 'non-veg', count: 1 },
  { id: 3, name: 'Charlie', meal: 'veg', count: 1 }
];

export default function AdminDashboard() {
  const [employees, setEmployees] = useState(mockEmployees);
  const [recommendation, setRecommendation] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleCountChange = (id, delta) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === id ? { ...emp, count: Math.max(0, emp.count + delta) } : emp
      )
    );
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="bg-black p-4 rounded shadow space-y-4">
      <h2 className="text-lg font-bold">Admin Dashboard</h2>

      {submitted ? (
        <div className="text-green-600">Meal counts submitted to vendor!</div>
      ) : (
        <>
          <div className="space-y-2">
            <h3 className="font-semibold">Employee Meal Counts</h3>
            <div className="space-y-2">
              {employees.map((emp) => (
                <div key={emp.id} className="border p-2 rounded flex justify-between items-center">
                  <div>
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-sm text-gray-500">{emp.meal}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      className="bg-black-200 px-2 rounded"
                      onClick={() => handleCountChange(emp.id, -1)}
                    >
                      -
                    </button>
                    <span className="font-bold">{emp.count}</span>
                    <button
                      className="bg-black-200 px-2 rounded"
                      onClick={() => handleCountChange(emp.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Recommendation for Vendor</label>
            <textarea
              className="w-full border p-2 rounded"
              rows={3}
              value={recommendation}
              onChange={(e) => setRecommendation(e.target.value)}
              placeholder="Add any notes or recommendations..."
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Submit Final Counts
          </button>
        </>
      )}
    </div>
  );
}
