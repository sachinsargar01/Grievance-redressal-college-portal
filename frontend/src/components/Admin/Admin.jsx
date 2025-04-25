import { useState } from "react";
import {
  FaUser,
  FaClipboardList,
  FaRegCalendarAlt,
  FaBell,
  FaCog,
} from "react-icons/fa"; // Import icons

import GetStudentUser from "./student/GetStudentUser";
import GetStudentComplaint from "./student/GetStudentComplaint";
import AddNotice from "./AddNotice/AddNotice";
import ViewNotice from "./AddNotice/ViewNotice";
import ViewDeadLine from "./AddNotice/ViewDeadLine";
import AddDeadLine from "./AddNotice/AddDeadline";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("Student");

  const handleTabClick = (tab) => setActiveTab(tab);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 bg-dark text-white p-4 sidebar">
          <h2 className="text-center mb-4">Admin Dashboard</h2>
          <ul className="nav flex-column">
            {[
              { name: "Student", icon: <FaUser /> },
              { name: "StudentComplaint", icon: <FaClipboardList /> },
              { name: "Add Notice", icon: <FaBell /> },
              { name: "View Added Notice", icon: <FaClipboardList /> },
              { name: "Add DeadLine", icon: <FaRegCalendarAlt /> },
              { name: "View DeadLine", icon: <FaRegCalendarAlt /> },
              //{ name: "profile", icon: <FaCog /> },
            ].map((tab) => (
              <li
                key={tab.name}
                className={`nav-item mb-2 rounded ${
                  activeTab === tab.name ? "bg-success" : "bg-dark"
                }`}
                onClick={() => handleTabClick(tab.name)}
              >
                <span className={`nav-link p-2 text-white`}>
                  <span className="me-2">{tab.icon}</span>
                  {getTabTitle(tab.name)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Content Area */}
        <div className="col-12 col-md-9 p-4 content">
          <div className="content-body">
            {/* Conditionally render content based on activeTab */}
            {activeTab === "Student" && <GetStudentUser />}
            {activeTab === "StudentComplaint" && <GetStudentComplaint />}
            {activeTab === "Add Notice" && <AddNotice />}
            {activeTab === "View Added Notice" && <ViewNotice />}
            {activeTab === "Add DeadLine" && <AddDeadLine />}
            {activeTab === "View DeadLine" && <ViewDeadLine />}
            {/* {activeTab === "profile" && <p>Your Profile Details here.</p>} */}
          </div>
        </div>
      </div>
    </div>
  );

  // Helper function to get tab titles
  function getTabTitle(tab) {
    switch (tab) {
      case "Student":
        return "View Student Details";
      case "StudentComplaint":
        return "View Student Complaints";
      case "Add Notice":
        return "Add Notice";
      case "View Added Notice":
        return "View Added Notice";
      case "Add DeadLine":
        return "Add Deadline";
      case "View DeadLine":
        return "View Deadline";
      // case "profile":
      //   return "Profile";
      default:
        return "";
    }
  }
};

export default Admin;
