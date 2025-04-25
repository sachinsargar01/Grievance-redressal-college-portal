import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
  const [notice, setNotice] = useState([]);
  const [deadline, setDeadline] = useState([]);

  useEffect(() => {
    const fetchNotice = async () => {
      try {
        const response = await axios.get("http://localhost:9999/api/getNotice");
        setNotice(response.data);
      } catch (error) {
        console.error("Error fetching notice", error);
      }
    };

    const fetchDeadline = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9999/api/getDeadLine"
        );
        setDeadline(response.data);
      } catch (error) {
        console.error("Error fetching deadline", error);
      }
    };

    fetchNotice();
    fetchDeadline();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Responsive Navbar */}
      <header className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4 py-3">
        <Link className="navbar-brand text-success fw-bold" to="/">
          DYPIMED
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Academics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </header>

      {/* Hero Section */}
      <section className="position-relative">
        <img
          src={require("../../assets/images/clg1.jpg")}
          alt="College"
          className="w-100"
          style={{ height: "450px", objectFit: "cover" }}
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center w-100">
          <h2 className="display-5 fw-bold">WELCOME TO DYPIMED PUNE</h2>
          <p className="fs-4">Grievance Portal</p>
        </div>
      </section>

      {/* Portal Cards */}
      <section className="container my-5 d-flex flex-wrap justify-content-between ">
        {[
          {
            icon: "fa-graduation-cap",
            title: "Student Portal",
            text: "Access your academic records, submit grievances, and track their status",
            login: "/Login",
            register: "/Register",
          },
          {
            icon: "fa-chalkboard-user",
            title: "Admin Portal",
            text: "Manage Grievance, view student grievances, and provide resolutions",
            login: "/AdminLogin",
            register: "/AdminRegister",
          },
        ].map((portal, idx) => (
          <div
            key={idx}
            className="p-4 shadow rounded text-center"
            style={{ width: "550px" }}
          >
            <div className="mb-3">
              <i className={`fa-solid ${portal.icon} fs-1 text-success`}></i>
            </div>
            <h4>{portal.title}</h4>
            <p>{portal.text}</p>
            <div className="d-flex justify-content-center gap-2">
              <Link to={portal.login} className="btn btn-success">
                Login
              </Link>
              <Link to={portal.register} className="btn btn-outline-success">
                Register
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Notices & Deadlines */}
      <section className="bg-light py-5">
        <div className="container d-flex flex-wrap justify-content-center gap-4">
          {/* Notices */}
          <div className="notice card p-4 shadow-sm w-100 w-md-25">
            <div className="text-center mb-2">
              <i className="fa-solid fa-chalkboard-user fs-2 text-success"></i>
            </div>
            <h5 className="text-center">Latest Notices</h5>
            {notice.map((item, idx) => (
              <div key={idx} className="mt-2">
                <strong>{item.notice1}</strong>
                <br />
                <div className="marquee-container">
                  <span className="marquee-text">{item.notice2}</span>
                </div>
                <p style={{ color: "red" }}>{item.notice3}</p>
              </div>
            ))}
          </div>

          {/* Deadlines */}
          <div className="notice card p-4 shadow-sm w-100 w-md-25">
            <div className="text-center mb-2">
              <i className="fa-solid fa-calendar-check fs-2 text-success"></i>
            </div>
            <h5 className="text-center">Important Deadlines</h5>
            {deadline.map((item, idx) => (
              <div key={idx} className="mt-2">
                <strong>{item.deadline1}</strong>
                <br />
                {item.deadline2}
                <br />
                <p style={{ color: "red" }}>{item.deadline3}</p>
              </div>
            ))}
          </div>

          {/* Contact Info */}
          <div className="notice card p-4 shadow-sm w-100 w-md-25">
            <div className="text-center mb-2">
              <i className="fa-solid fa-address-book fs-2 text-success"></i>
            </div>
            <h5 className="text-center">Contact Information</h5>
            Emergency: +1 (555) 123-4567 <br />
            Admin Office: +1 (555) 987-6543 <br />
            Email: dypmied@dypatil.edu
          </div>

          {/* FAQ */}
          <div className="notice card p-4 shadow-sm w-100 w-md-25">
            <div className="text-center mb-2">
              <i className="fa-solid fa-question-circle fs-2 text-success"></i>
            </div>
            <h5 className="text-center">FAQ Section</h5>
            How to Submit Grievance?
            <br />
            Track Resolution Status
            <br />
            Document Requirements
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="main-Features bg-info bg-opacity-10 py-5">
        <div className="container text-center">
          <h2 className="mb-5 fw-bold">Key Features</h2>
          <div className="row g-4">
            {[
              {
                icon: "fa-floppy-disk",
                title: "Online Grievance Submission",
                text: "Submit your concerns easily through our streamlined portal.",
              },
              {
                icon: "fa-bug",
                title: "Track Grievance Status",
                text: "Monitor the progress of your grievances with real-time updates.",
              },
              {
                icon: "fa-timeline",
                title: "Resolution Timeline",
                text: "Get estimates and notifications at each stage of resolution.",
              },
            ].map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="features p-4 bg-white shadow-sm rounded h-100">
                  <i
                    className={`fa-solid ${feature.icon} fs-1 text-success mb-3`}
                  ></i>
                  <h5>{feature.title}</h5>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container d-flex flex-wrap justify-content-between gap-4">
          <div>
            <h5 className="text-success">Contact Us</h5>
            123 College, Pune Varale, Talegaon <br />
            9881884005 <br />
            dyp@dypimed.edu
          </div>
          <div>
            <h5 className="text-success">Quick Links</h5>
            About Us <br />
            Academics <br />
            Admissions <br />
            Campus Life
          </div>
          <div>
            <h5 className="text-success">Follow Us</h5>
            <div className="d-flex gap-3 fs-5">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
        <div className="text-center mt-4 border-top pt-3 text-white">
          © 2025 DYPMIED College. All rights reserved | Privacy Policy | Terms
          of Service
        </div>
      </footer>
    </div>
  );
};

export default Home;
