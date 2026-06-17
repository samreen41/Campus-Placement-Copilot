import { useContext, useState } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";
import ApplicationCard from "./ApplicationCard";

function ApplicationList() {

  const {
    applications,
    setApplications
  } = useContext(ApplicationContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const deleteApplication = (id) => {

    const updated = applications.filter(
      (app) => app.id !== id
    );

    setApplications(updated);

  };

  const filteredApplications = applications.filter((app) => {

    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || app.status === filter;

    return matchesSearch && matchesFilter;

  });

  return (

    <div className="mt-8">

      <div className="flex gap-4 mb-6">

        <input
          type="text"
          placeholder="Search company or role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border p-3 rounded-xl"
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-3 rounded-xl"
        >

          <option>All</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>

        </select>

      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredApplications.map((app) => (

          <ApplicationCard

            key={app.id}

            company={app.company}

            role={app.role}

            status={app.status}

            onDelete={() => deleteApplication(app.id)}

          />

        ))}

      </div>

    </div>

  );
}

export default ApplicationList;