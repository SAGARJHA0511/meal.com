import VendorDashboardPanel from '../components/VendorDashboardPanel';

export default function VendorDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold mb-4">Vendor Dashboard</h1>
      <VendorDashboardPanel />
    </div>
  );
}
