import mongoose from "mongoose";

const ComplaintSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
  },

  department: {
    type: String,
  },

  rollno: {
    type: String,
  },

  ComplaintType: {
    type: String,
    required: true,
    enum: ["Academic", "Facilities", "Other"],
  },

  description: {
    type: String,
    minlength: 10,
    maxlength: 250,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const StudentComplaint = mongoose.model("StudentComplaint", ComplaintSchema);

export default StudentComplaint;
