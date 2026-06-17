import { useState, useContext } from "react";
import { ApplicationContext } from "../../context/ApplicationContext";

function AddApplication() {

  const { applications, setApplications } =
    useContext(ApplicationContext);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleAdd = () => {

    if (!company || !role) return;

    const newApplication = {

      id: Date.now(),

      company,

      role,

      status

    };

    setApplications([

      ...applications,

      newApplication

    ]);

    setCompany("");
    setRole("");
    setStatus("Applied");

  };

  return (

    <div className="bg-white p-6 rounded-2xl shadow mt-8">

      <h2 className="text-2xl font-bold mb-6">

        Add New Application

      </h2>

      <div className="grid md:grid-cols-3 gap-4">

        <input

          value={company}

          onChange={(e) => setCompany(e.target.value)}

          placeholder="Company"

          className="border p-3 rounded-xl"

        />

        <input

          value={role}

          onChange={(e) => setRole(e.target.value)}

          placeholder="Role"

          className="border p-3 rounded-xl"

        />

        <select

          value={status}

          onChange={(e) => setStatus(e.target.value)}

          className="border p-3 rounded-xl"

        >

          <option>Applied</option>
          <option>Interview</option>
          <option>Selected</option>
          <option>Rejected</option>

        </select>

      </div>

      <button

        onClick={handleAdd}

        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl"

      >

        Add Application

      </button>

    </div>

  );

}

export default AddApplication;