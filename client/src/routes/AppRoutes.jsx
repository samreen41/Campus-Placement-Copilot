import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import Jobs from "../pages/jobs/Jobs";
import Resume from "../pages/resume/Resume";
import Interview from "../pages/interview/Interview";
import Profile from "../pages/profile/Profile";
import AIAssistant from "../pages/ai/AIAssistant";
import ProtectedRoutes from "./ProtectedRoutes";
import Applications from "../pages/applications/Applications";
function AppRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoutes>
            <Dashboard />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoutes>
            <Jobs />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/resume"
        element={
          <ProtectedRoutes>
            <Resume />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/interview"
        element={
          <ProtectedRoutes>
            <Interview />
          </ProtectedRoutes>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoutes>
            <Profile />
          </ProtectedRoutes>
        }
      />
      <Route
        path="/ai"
        element={
         <ProtectedRoutes>
           <AIAssistant />
        </ProtectedRoutes>
        }
      />
      <Route
  path="/applications"
  element={
    <ProtectedRoutes>
      <Applications />
    </ProtectedRoutes>
  }
/>
    </Routes>
  );
}

export default AppRoutes;