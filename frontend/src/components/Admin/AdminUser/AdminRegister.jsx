import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import registerImg from "../../../assets/images/registeradmin.png";

const AdminRegister = () => {
  const users = {
    name: "",
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
    const { name, email, number, password } = user;

    if (!name || !email || !number || !password) {
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
        "http://localhost:9999/api/createAdmin",
        user
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/AdminLogin");
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div
        className="row shadow-lg rounded-4 overflow-hidden w-100"
        style={{ maxWidth: "1000px" }}
      >
        {/* Left Side - Image */}
        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-success">
          <img
            src={registerImg}
            alt="Register Illustration"
            className="img-fluid p-4"
            style={{ maxHeight: "420px" }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 bg-white p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Admin Registration</h2>
            <p className="text-muted">Create your admin account</p>
          </div>

          <form onSubmit={submitForm}>
            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                onChange={inputHandler}
                placeholder="Admin Name"
                autoComplete="off"
              />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                onChange={inputHandler}
                placeholder="Admin Email"
                autoComplete="off"
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                className="form-control"
                name="number"
                id="number"
                onChange={inputHandler}
                placeholder="Contact Number"
                autoComplete="off"
              />
              <label htmlFor="number">Contact Number</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                onChange={inputHandler}
                placeholder="Create Password"
                autoComplete="off"
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-outline-success btn-lg">
                Sign Up
              </button>
            </div>

            <div className="text-center">
              <small>
                Already have an account?{" "}
                <Link
                  to="/AdminLogin"
                  className="text-decoration-none fw-semibold text-success"
                >
                  Login Here
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
