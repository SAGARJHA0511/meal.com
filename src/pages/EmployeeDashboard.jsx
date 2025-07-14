import MealCountForm from '../components/MealCountForm';
import WeeklyMenuView from '../components/WeeklyMenuView';
import FeedbackForm from '../components/FeedbackForm';

export default function EmployeeDashboard() {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">Employee Dashboard</h1>
      <MealCountForm />
      <WeeklyMenuView />
      <FeedbackForm />
    </div>
  );
}
