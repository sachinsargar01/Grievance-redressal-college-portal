import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  // const { id } = useParams();
  const id = "67f7e951ef1ec68c70562535";
  const apiUrl = `http://localhost:9999/api/GetUserProfile/${id}`;

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json(); // Parse JSON

        if (response.ok) {
          setUser(data.user);
        } else {
          setError(data.msg || "Failed to load profile");
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError("Error loading profile data");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    sessionStorage.removeItem("userToken");

    toast.success("Logged out successfully!", { position: "top-right" });

    navigate("/login");
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return (
      <div className="alert alert-danger text-center" role="alert">
        {error}
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header text-center">
          <h3>Student Profile</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <strong>Name:</strong>
            </div>
            <div className="col-md-8">{user?.name || "N/A"}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <strong>Email:</strong>
            </div>
            <div className="col-md-8">{user?.email || "N/A"}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <strong>Roll No:</strong>
            </div>
            <div className="col-md-8">{user?.rollno || "N/A"}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <strong>Department:</strong>
            </div>
            <div className="col-md-8">{user?.department || "N/A"}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <strong>Phone:</strong>
            </div>
            <div className="col-md-8">{user?.number || "N/A"}</div>
          </div>
          <hr />
          <div className="text-center mt-4">
            <button onClick={handleLogout} className="btn btn-outline-danger">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
