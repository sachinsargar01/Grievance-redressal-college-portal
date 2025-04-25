import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = () => {
  const users = {
    name: "",
    department: "",
    rollno: "",
    email: "",
    number: "",
    password: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validateForm = () => {
    const { name, department, rollno, email, number, password } = user;

    if (!name || !email || !number || !password || !department || !rollno) {
      toast.error("Please fill in all fields", { position: "top-right" });
      return false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      toast.error("Invalid email format", { position: "top-right" });
      return false;
    }

    const numberPattern = /^[0-9]{10}$/;
    if (!numberPattern.test(number)) {
      toast.error("Contact number must be 10 digits", {
        position: "top-right",
      });
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters", {
        position: "top-right",
      });
      return false;
    }

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://localhost:9999/api/create",
        user
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/Login");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center bg-light">
      <div className="container">
        <div className="row shadow rounded overflow-hidden">
          {/* Image Section */}
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-white">
            <img
              src={require("../../../assets/images/Sign up-cuate.png")}
              alt="Register illustration"
              className="img-fluid p-4"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Form Section */}
          <div className="col-md-6 bg-white p-5">
            <h3 className="mb-4 text-center">Create an Account</h3>
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  onChange={inputHandler}
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="department" className="form-label">
                  Department
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  onChange={inputHandler}
                  placeholder="Your Department"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="rollno" className="form-label">
                  Roll Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="rollno"
                  onChange={inputHandler}
                  placeholder="Your Roll No"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={inputHandler}
                  placeholder="Your Email"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="number" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="number"
                  onChange={inputHandler}
                  placeholder="10-digit Number"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  onChange={inputHandler}
                  placeholder="Create a password"
                />
              </div>

              <div className="d-grid mb-3">
                <button type="submit" className="btn btn-success">
                  Sign Up
                </button>
              </div>

              <div className="text-center">
                <small>
                  Already have an account?{" "}
                  <Link to="/Login" className="text-decoration-none">
                    Login here
                  </Link>
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
