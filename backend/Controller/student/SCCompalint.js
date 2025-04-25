import StudentComplaint from "./../../Model/student/SMComplaint.js";
import students from "./../../Model/student/StudentRegisterModel.js";

// POST endpoint to create a new complaint for a specific student
export const createComplaint = async (req, res) => {
  try {
    const { studentId, department, rollno, ComplaintType, description } =
      req.body;

    // Find the user by rollNo and email
    const user = await students.findOne({ rollno });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Create the complaint with user reference
    const complaint = new StudentComplaint({
      user: user._id,
      studentId,
      department,
      rollno,
      ComplaintType,
      description,
    });

    await complaint.save();

    res.status(201).json({ message: "Complaint submitted", complaint });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET endpoint to retrieve all complaints
export const getComplaints = async (req, res) => {
  try {
    const complaints = await StudentComplaint.find();

    if (complaints) {
      res.status(200).json(complaints);
    } else {
      res.status(500).json({ msg: "No Complaints Found" });
    }
  } catch (err) {
    console.error("Error fetching complaints:", err); // Log the error for better debugging
    res.status(500).json({ msg: "Failed to retrieve complaints." });
  }
};


export const getComplaint = async (req, res) => {
  try {
    const complaint = await StudentComplaint.findById(req.params.id);

    if (complaint) {
      res
        .status(200)
        .json({ msg: "complaint accessed successfully", complaint });
    } else {
      res.status(404).json({ msg: "complaint not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve compalint." });
  }
};


export const getStdComplaint = async (req, res) => {
  try {
    const complaint = await StudentComplaint.findById(req.params.complaintId);

    if (complaint) {
      res
        .status(200)
        .json({ msg: "complaint accessed successfully", complaint });
    } else {
      res.status(404).json({ msg: "complaint not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve compalint." });
  }
};
