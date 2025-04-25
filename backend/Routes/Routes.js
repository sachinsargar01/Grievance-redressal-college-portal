import express from "express";

import {
  createComplaint,
  getComplaint,
  getComplaints,
  getStdComplaint,
} from "../Controller/student/SCCompalint.js";
import {
  AddNotice,
  getAllNotice,
  getNotice,
} from "../Controller/admin/AddNoticeController.js";
import {
  AddDeadLine,
  getAllDeadLine,
  getDeadLine,
} from "../Controller/admin/DeadLineController.js";
import {
  createUser,
  GetStudentUser,
  GetUserProfile,
  loginUser,
} from "../Controller/student/StudentRegister.js";

import {
  createAdmin,
  loginAdmin,
} from "../Controller/admin/AdminController.js";
import { ResolutionController } from "../Controller/admin/ResolutionController.js";
const route = express.Router();

//student
route.post("/create", createUser);
route.post("/login", loginUser);
route.get("/GetStudentUser", GetStudentUser);
// route.get("/onestudent/:id", GetOneStudentUser);
route.get("/GetUserProfile/:id", GetUserProfile);

//studnet complaint
route.post("/createComplaint", createComplaint);
route.get("/getComplaints", getComplaints);

route.get("/get-Complaint/:id", getComplaint);

route.get("/getStdComplaint/:id", getStdComplaint);

//admin add notice
route.post("/AddNotice", AddNotice);
route.get("/getNotice", getNotice);
// route.get("/deleteNotice",deleteNotice)
// route.get("/update",update)
route.get("/getAllNotice", getAllNotice);

route.post("/AddDeadLine", AddDeadLine);
route.get("/getDeadLine", getDeadLine);
route.get("/getAllDeadLine", getAllDeadLine);

route.post("/createAdmin", createAdmin);
route.post("/loginAdmin", loginAdmin);

//resolution
route.post("/Resolution/:id", ResolutionController);

export default route;
