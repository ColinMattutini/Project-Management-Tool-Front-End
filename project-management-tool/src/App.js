import "./App.css";
import ProjectDashboard from "./components/ProjectTracker/ProjectDashboard";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import MembersPage from "./Pages/MembersPage";
import { Route, Routes } from "react-router-dom";
import UserTasksPage from "./Pages/UserTasksPage";
import HomePage from "./Pages/HomePage";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const fetchMembers = async () => {
    const response = await fetch("http://localhost:8080/api/users", {
      method: "GET",
    });
    const data = await response.json();
    const loadedUsers = [];
    for (const userKey in data) {
      loadedUsers.push({
        label: data[userKey].fullName,
      });
    }
    setUsers(loadedUsers);
    localStorage.setItem("users", JSON.stringify(loadedUsers));
  };

  useEffect(() => {
    fetchMembers();
    console.log("app js fetch ran");
  }, []);

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
