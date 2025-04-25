import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home";
import Register from "./Pages/student/User/Register";
import Login from "./Pages/student/User/Login";
import StudentHome from "./Pages/student/StudentHome";
import Admin from "./components/Admin/Admin";
import AdminRegister from "./components/Admin/AdminUser/AdminRegister";
import AdminLogin from "./components/Admin/AdminUser/AdminLogin";
import GetUser from "./Pages/student/get/GetUser";
import AddComplaint from "./Pages/student/add/AddComplaint";
import GetComplaint from "./Pages/student/get/GetComplaint";
import TrackComplaint from "./Pages/student/track/TrackComplaint";
import GetStudentUser from "./components/Admin/student/GetStudentUser";
import GetStudentComplaint from "./components/Admin/student/GetStudentComplaint";
import AddNotice from "./components/Admin/AddNotice/AddNotice";
import ViewNotice from "./components/Admin/AddNotice/ViewNotice";
import AddDeadLine from "./components/Admin/AddNotice/AddDeadline";
import ViewDeadLine from "./components/Admin/AddNotice/ViewDeadLine";
import Profile from "./Pages/student/Profile";
import Response from "./components/Admin/Response/Response";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "Register/",
      element: <Register />,
    },

    {
      path: "Login/",
      element: <Login />,
    },

    {
      path: "studentHome/",
      element: <StudentHome />,
    },

    {
      path: "admin/",
      element: <Admin />,
    },

    {
      path: "adminregister/",
      element: <AdminRegister />,
    },

    {
      path: "adminlogin/",
      element: <AdminLogin />,
    },

    //response

    {
      path: "Response/:id",
      element: <Response />,
    },
    //user student get
    {
      path: "GetUser/",
      element: <GetUser />,
    },

    //student profile
    {
      path: "Profile/",
      element: <Profile />,
    },

    //submit stduent complaint

    {
      path: "AddComplaint/",
      element: <AddComplaint />,
    },
    //get stduent complaint

    {
      path: "GetComplaint",
      element: <GetComplaint />,
    },
    //get tract compalint for studnet

    {
      path: "TrackComplaint/",
      element: <TrackComplaint />,
    },

    //Admin
    //getstudnet
    {
      path: "GetStudentUser/",
      element: <GetStudentUser />,
    },
    //get student complaint
    {
      path: "GetStudentComplaint/:id",
      element: <GetStudentComplaint />,
    },
    //admin notice send
    {
      path: "AddNotice/",
      element: <AddNotice />,
    },

    {
      path: "ViewNotice/",
      element: <ViewNotice />,
    },

    {
      path: "AddDeadLine/",
      element: <AddDeadLine />,
    },
    {
      path: "ViewNotice/",
      element: <ViewNotice />,
    },
    {
      path: "ViewDeadLine/",
      element: <ViewDeadLine />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
