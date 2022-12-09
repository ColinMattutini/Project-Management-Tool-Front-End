import "./App.css";
import ProjectDashboard from "./components/ProjectTracker/ProjectDashboard";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import MembersPage from "./Pages/MembersPage";
import { Route, Routes } from "react-router-dom";
import UserTasksPage from "./Pages/UserTasksPage";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <SideNavBar />
      <Routes>
        <Route exact path="/*" element={<HomePage />} />
        <Route exact path="/Projects/:project" element={<ProjectDashboard />} />
        <Route exact path="/members" element={<MembersPage />} />
        <Route exact path="/usertasks" element={<UserTasksPage />} />
      </Routes>
    </div>
  );
}

export default App;
