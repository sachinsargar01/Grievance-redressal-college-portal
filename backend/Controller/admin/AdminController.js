import jwt from "jsonwebtoken";

import Admin from "../../Model/admin/AdminModel.js";

export const createAdmin = async (req, res) => {
  const { name, email, number, password } = req.body;

  try {
    const userExists = await Admin.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    const user = new Admin({
      name,
      email,
      number,
      password, // let the schema handle hashing
    });

    await user.save();

    res.status(201).json({ msg: "Admin registered successfully" });
  } catch (error) {
    console.error("Error during Admin registration:", error);

    res.status(500).json({ msg: "Server error" });
  }
};

//login
export const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await Admin.findOne({ email });

    if (!user) {
      console.log("Admin not found in the database");
      return res.status(400).json({ msg: "Admin not found" });
    }

    // Check if the password matches
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      console.log("Password does not match");
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Log password match success (you can remove this after testing)
    console.log("Password matched");

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET, // Ensure JWT_SECRET is set in your .env file
      { expiresIn: "1h" } // Adjust expiration as needed
    );

    // Send success response with token and user data
    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        name: user.name,
        email: user.email,
        number: user.number,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
// GET endpoint to retrieve all students (for admin or user viewing)
export const GetAdmin = async (req, res) => {
  try {
    const user = await Student.find(); // Fetch all students
    res.status(200).json({ msg: "admin access", user }); // Return students under the 'user' key
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve students." });
  }
};

// GET endpoint to retrieve a specific student (by ID)
export const AdminProfile = async (req, res) => {
  try {
    // Fetch the student with the given ID
    const user = await Student.findById(req.params.id);

    // Check if student was found
    if (user) {
      res.status(200).json({ msg: "Admin accessed successfully", user });
    } else {
      res.status(404).json({ msg: "Admin not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to retrieve student." });
  }
};
