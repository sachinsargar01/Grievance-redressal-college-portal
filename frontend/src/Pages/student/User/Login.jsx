import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
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
        "http://localhost:9999/api/login",
        credentials
      );
      toast.success(response.data.msg, { position: "top-right" });
      navigate("./../StudentHome"); // Redirect to the home page after successful login
    } catch (error) {
      console.error(error); // Log error for debugging
      toast.error("Login failed. Please check your credentials.", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row justify-content-center">
        <div className="col-12" style={{ maxWidth: "90%" }}>
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h2 className="text-center mb-4">Sign In</h2>
              <div className="row">
                <div className="col-12 col-md-6 mb-4 mb-md-0">
                  <img
                    src={require("../../../assets/images/Login.png")} // Adjust image path accordingly
                    alt="Login Illustration"
                    className="img-fluid"
                  />
                </div>
                <div className="col-12 col-md-6">
                  <form onSubmit={submitForm}>
                    <p className="text-center">Hello Student! Welcome Back</p>

                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        onChange={inputHandler}
                        name="email"
                        id="email"
                        autoComplete="off"
                        placeholder="Your Valid Email"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        onChange={inputHandler}
                        name="password"
                        id="password"
                        autoComplete="off"
                        placeholder="Enter Your Password"
                      />
                    </div>

                    <div className="mb-3 d-grid">
                      <button type="submit" className="btn btn-success">
                        Sign In
                      </button>
                    </div>

                    <div className="mb-3 text-center">
                      Don't have an Account? <br />
                      <Link to="/Register" className="btn btn-link">
                        Register Here
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
