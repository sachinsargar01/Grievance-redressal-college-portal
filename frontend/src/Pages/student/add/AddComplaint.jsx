import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const AddComplaint = () => {
  const [formData, setFormData] = useState({
    ComplaintType: "Academic",
    description: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    if (name === "description" && value.length >= 10) {
      setError(""); // Clear error if description is valid
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if description is at least 10 characters
    if (formData.description.length < 10) {
      setError("Description must be at least 10 characters long.");
      return;
    }

    setIsLoading(true);
    try {
      console.log("Submitting complaint with data:", formData);
      const response = await axios.post(
        "http://localhost:9999/api/createComplaint",
        formData
      );
      console.log("Response:", response.data);
      setSuccessMessage(response.data.msg);
      setError(""); // Clear error message if successful
      setFormData({
        ComplaintType: "Academic",
        description: "",
      });
    } catch (err) {
      console.error("Error submitting complaint:", err);
      const errorMessage =
        err.response?.data?.msg ||
        "Failed to submit complaint. Please try again later.";
      setError(errorMessage);
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        className="col-md-6 mx-auto p-4 border rounded shadow-lg"
      >
        <h2 className="text-center mb-4">Student Complaint Form</h2>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Department
          </label>
          <input
            type="text"
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Your Department"
            rows="4"
            required
            className="form-control"
          />

          <label htmlFor="description" className="form-label">
            Roll no
          </label>
          <input
            type="text"
            name="rollno"
            id="rollno"
            value={formData.rollno}
            onChange={handleChange}
            placeholder="Your Roll No"
            rows="4"
            required
            className="form-control"
          />
        </div>
        {/* Complaint Type Dropdown */}
        <div className="mb-3">
          <label htmlFor="ComplaintType" className="form-label">
            Complaint Type
          </label>
          <select
            name="ComplaintType"
            id="ComplaintType"
            value={formData.ComplaintType}
            onChange={handleChange}
            required
            className="form-select"
          >
            <option value="Academic">Academic</option>
            <option value="Facilities">Facilities</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Complaint Description */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description of Complaint
          </label>
          <textarea
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe your complaint"
            rows="4"
            required
            className="form-control"
          />
        </div>

        {/* Error Message */}
        {error && <div className="alert alert-danger">{error}</div>}

        {/* Success Message */}
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="btn  btn-outline-success w-100"
        >
          {isLoading ? "Submitting..." : "Submit Complaint"}
        </button>
      </form>
    </div>
  );
};

export default AddComplaint;
