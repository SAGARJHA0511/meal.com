// import AdminDashboardPanel from '../components/AdminDashboardPanel';

// export default function AdminDashboard() {
//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       <h1 className="text-3xl font-bold mb-4">Client Admin Dashboard</h1>
//       <AdminDashboardPanel />
//     </div>
//   );
// }

import AdminDashboardPanel from '../components/AdminDashboardPanel';

export default function AdminDashboardPage() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Client Admin Dashboard</h1>
      <AdminDashboardPanel/>
    </div>
  );
}
