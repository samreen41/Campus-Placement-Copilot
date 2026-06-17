import Sidebar from "../../components/layout/Sidebar";
import Navbar from "../../components/layout/Navbar";
import DashboardCard from "../../components/dashboard/DashboardCard";

function Dashboard() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Navbar />

        <div className="p-8">

          <h1 className="text-4xl font-bold mb-8">

            Welcome 👋

          </h1>

          <div className="grid grid-cols-3 gap-6">

            <DashboardCard
              title="Applications"
              value="12"
            />

            <DashboardCard
              title="Jobs Matched"
              value="45"
            />

            <DashboardCard
              title="Resume Score"
              value="92%"
            />

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;