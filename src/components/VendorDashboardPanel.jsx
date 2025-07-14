import { useState } from 'react';

const mockMealCounts = [
  { name: 'Amit', meal: 'veg', count: 2 },
  { name: 'Riya', meal: 'non-veg', count: 1 },
  { name: 'Rohan', meal: 'veg', count: 3 },
];

const mockFeedback = [
  { id: 1, employee: 'Amit', comment: 'Great meal!' },
  { id: 2, employee: 'Riya', comment: 'Could use more spice.' },
];

export default function VendorDashboardPanel() {
  const [menu, setMenu] = useState('');
  const [uploadedMenu, setUploadedMenu] = useState('');

  const handleUpload = () => {
    setUploadedMenu(menu);
    setMenu('');
    alert('Menu uploaded!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="border p-4 rounded-lg shadow bg-">
      <h2 className="text-xl font-bold mb-4">Vendor Dashboard</h2>

      {/* Upload Menu */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Upload Weekly Menu</h3>
        <textarea
          value={menu}
          onChange={(e) => setMenu(e.target.value)}
          rows={4}
          className="border p-2 w-full rounded mb-2"
          placeholder="Paste your menu here..."
        />
        <button
          onClick={handleUpload}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Upload Menu
        </button>
        {uploadedMenu && (
          <div className="mt-4 p-2 border rounded bg-gray-50">
            <h4 className="font-semibold">Uploaded Menu:</h4>
            <pre className="whitespace-pre-wrap">{uploadedMenu}</pre>
          </div>
        )}
      </div>

      {/* Meal Counts */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Total Meal Counts</h3>
        <table className="w-full mb-2">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Employee</th>
              <th className="text-left p-2">Meal</th>
              <th className="text-left p-2">Count</th>
            </tr>
          </thead>
          <tbody>
            {mockMealCounts.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="p-2">{item.name}</td>
                <td className="p-2 capitalize">{item.meal}</td>
                <td className="p-2">{item.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Feedback */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Employee Feedback</h3>
        <ul className="space-y-2">
          {mockFeedback.map((fb) => (
            <li key={fb.id} className="border p-2 rounded bg-">
              <strong>{fb.employee}:</strong> {fb.comment}
            </li>
          ))}
        </ul>
      </div>

      {/* Print Button */}
      <button
        onClick={handlePrint}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Print Meal Count List
      </button>
    </div>
  );
}
