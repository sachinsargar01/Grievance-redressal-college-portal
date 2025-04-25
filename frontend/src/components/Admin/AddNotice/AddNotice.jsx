import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

const AddNotice = () => {
  const [formData, setFormData] = useState({
    notice1: "",
    notice2: "",
    notice3: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Submitting Notice with data:", formData); // Debugging log to check form data

      const response = await axios.post(
        "http://localhost:9999/api/AddNotice",
        formData
      );
      console.log("Response:", response.data); // Log successful response

      // Handle success
      setSuccessMessage(response.data.msg);
      setError("");
      setFormData({
        notice1: "",
        notice2: "",
        notice3: "",
      });
    } catch (err) {
      console.error("Error submitting notice:", err); // Log error
      const errorMessage =
        err.response?.data?.msg ||
        "Failed to submit notice. Please try again later.";
      setError(errorMessage);
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container my-5 ">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg p-4 custom-card">
            <h2 className="text-center mb-4 custom-title">Add Notice</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="notice1" className="form-label custom-label">
                  Notice 1
                </label>
                <input
                  type="text"
                  name="notice1"
                  id="notice1"
                  value={formData.notice1}
                  onChange={handleChange}
                  placeholder="Enter First Notice"
                  required
                  className="form-control custom-input"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="notice2" className="form-label custom-label">
                  Notice 2
                </label>
                <input
                  type="text"
                  name="notice2"
                  id="notice2"
                  value={formData.notice2}
                  onChange={handleChange}
                  placeholder="Enter Second Notice"
                  required
                  className="form-control custom-input"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="notice3" className="form-label custom-label">
                  Notice 3
                </label>
                <input
                  type="text"
                  name="notice3"
                  id="notice3"
                  value={formData.notice3}
                  onChange={handleChange}
                  placeholder="Enter Third Notice"
                  required
                  className="form-control custom-input"
                />
              </div>

              {error && <div className="alert alert-danger">{error}</div>}
              {successMessage && (
                <div className="alert alert-success">{successMessage}</div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="btn btn-outline-success "
              >
                {isLoading ? "Submitting..." : "Submit Notice"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNotice;
