import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-700 text-white p-6">

      <h1 className="text-2xl font-bold mb-8">
        Campus Placement Copilot
      </h1>

      <nav className="flex flex-col gap-3">

        <NavLink
          to="/dashboard"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
        >
          🏠 Dashboard
        </NavLink>

        <NavLink
          to="/jobs"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
        >
          💼 Job Explorer
        </NavLink>

        <NavLink
          to="/resume"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
        >
          📄 Resume Analyzer
        </NavLink>

        <NavLink
          to="/interview"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
        >
          🎤 Mock Interview
        </NavLink>

        <NavLink
          to="/profile"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
        >
          👤 Profile
        </NavLink>
        <NavLink
          to="/ai"
          className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
>
          🤖 AI Assistant
        </NavLink>
        <NavLink
  to="/applications"
  className="p-3 rounded-lg hover:bg-blue-600 rounded-xl"
>
  📋 Applications
</NavLink>
      </nav>

    </div>
  );
}

export default Sidebar;