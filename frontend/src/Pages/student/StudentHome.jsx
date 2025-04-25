import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import AddComplaint from "./add/AddComplaint";
import GetComplaint from "./get/GetComplaint";
import TrackComplaint from "./track/TrackComplaint";
import {
  FaClipboardList,
  FaRegClock,
  FaUserAlt,
  FaSignOutAlt,
} from "react-icons/fa";

import "./studentHome.css"; // Custom CSS for styling
import Profile from "./Profile";

const StudentHome = () => {
  const [activeTab, setActiveTab] = useState("register");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div className="col-12 col-md-3 bg-dark text-white p-4 sidebar">
          <h3 className="text-center">Student Dashboard</h3>
          <ul className="nav flex-column">
            {["register", "manage", "track", "profile", "logout"].map((tab) => (
              <li
                key={tab}
                className={`nav-item ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                <span className="nav-link text-white">{getTabTitle(tab)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content */}
        <div className="col-12 col-md-9 p-4 content">
          {activeTab === "register" && <AddComplaint />}
          {activeTab === "manage" && <GetComplaint />}
          {activeTab === "track" && <TrackComplaint />}
          {activeTab === "profile" && <Profile />}
        </div>
      </div>
    </div>
  );

  function getTabTitle(tab) {
    switch (tab) {
      case "register":
        return (
          <>
            <FaClipboardList /> Register Complaint
          </>
        );
      case "manage":
        return (
          <>
            <FaClipboardList /> View Complaints
          </>
        );
      case "track":
        return (
          <>
            <FaRegClock /> Track Status
          </>
        );
      case "profile":
        return (
          <>
            <FaUserAlt /> Your Profile
          </>
        );

      default:
        return "";
    }
  }
};

export default StudentHome;
