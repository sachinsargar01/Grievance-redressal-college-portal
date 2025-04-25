import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../../../assets/images/Tablet login-bro.png";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9999/api/loginAdmin",
        credentials
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("/admin");
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded-4 overflow-hidden w-100" style={{ maxWidth: "1000px" }}>
        {/* Left Side - Image */}
        <div className="col-md-6 d-none d-md-flex bg-success align-items-center justify-content-center">
          <img
            src={loginImg}
            alt="Login illustration"
            className="img-fluid p-4"
            style={{ maxHeight: "400px" }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="col-md-6 bg-white p-5">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Admin Login</h2>
            <p className="text-muted">Welcome back, Admin 👋</p>
          </div>

          <form onSubmit={submitForm}>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="name@example.com"
                onChange={inputHandler}
                required
              />
              <label htmlFor="email">Email address</label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                onChange={inputHandler}
                required
              />
              <label htmlFor="password">Password</label>
            </div>

            <div className="d-grid mb-3">
              <button type="submit" className="btn btn-outline-success btn-lg">
                Sign In
              </button>
            </div>

            <div className="text-center">
              <small>
                Don’t have an account?{" "}
                <Link to="/AdminRegister" className="text-decoration-none fw-semibold text-success">
                  Register Here
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
