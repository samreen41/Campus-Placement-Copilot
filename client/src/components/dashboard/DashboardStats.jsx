import { useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import ProgressCard from "../../components/dashboard/ProgressCard";
function DashboardStats() {

  const { applications } = useContext(ApplicationContext);

  const total = applications.length;

  const applied = applications.filter(
    (app) => app.status === "Applied"
  ).length;

  const interview = applications.filter(
    (app) => app.status === "Interview"
  ).length;

  const selected = applications.filter(
    (app) => app.status === "Selected"
  ).length;

  const rejected = applications.filter(
    (app) => app.status === "Rejected"
  ).length;

  const stats = [
    {
      title: "Total Applications",
      value: total,
      color: "bg-blue-500"
    },
    {
      title: "Applied",
      value: applied,
      color: "bg-yellow-500"
    },
    {
      title: "Interview",
      value: interview,
      color: "bg-purple-500"
    },
    {
      title: "Selected",
      value: selected,
      color: "bg-green-500"
    },
    {
      title: "Rejected",
      value: rejected,
      color: "bg-red-500"
    }
  ];

  return (

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

      {stats.map((item, index) => (

        <div
          key={index}
          className={`${item.color} text-white rounded-2xl p-6 shadow-lg`}
        >

          <h2 className="text-lg font-semibold">
            {item.title}
          </h2>

          <p className="text-4xl font-bold mt-4">
            {item.value}
          </p>

        </div>

      ))}

    </div>

  );

}
<ProgressCard
  title="Placement Readiness"
  value={85}
/>

export default DashboardStats;