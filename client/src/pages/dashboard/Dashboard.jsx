import MainLayout from "../../components/layout/MainLayout";
import { Outlet } from "react-router-dom";

import StatCard from "../../components/dashboard/StatCard";
import QuickAction from "../../components/dashboard/QuickAction";
import ActivityCard from "../../components/dashboard/ActivityCard";
import DashboardStats from "../../components/dashboard/DashboardStats";
function Dashboard() {
  return (
    <MainLayout>

      <h1 className="text-4xl font-bold text-blue-600">
        Welcome 👋
      </h1>

      <p className="text-gray-500 mt-2">
        Campus Placement Copilot Dashboard
      </p>
<div className="mt-8">

  <DashboardStats />

</div>
     
      <h2 className="text-2xl font-bold mt-10 mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<QuickAction
  title="Find Jobs"
  icon="💼"
  path="/jobs"
/>

<QuickAction
  title="Resume Analyzer"
  icon="📄"
  path="/resume"
/>

<QuickAction
  title="Mock Interview"
  icon="🎤"
  path="/interview"
/>

<QuickAction
  title="Profile"
  icon="👤"
  path="/profile"
/>

      </div>

      <div className="mt-10">
        <ActivityCard />
      </div>

      {/* Nested pages will render here */}
      <Outlet />

    </MainLayout>
  );
}

export default Dashboard;