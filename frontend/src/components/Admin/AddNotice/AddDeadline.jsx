import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddDeadLine = () => {
  const [formData, setFormData] = useState({
    deadline1: "",
    deadline2: "",
    deadline3: "",
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
      const response = await axios.post(
        "http://localhost:9999/api/AddDeadLine",
        formData
      );
      toast.success(response.data.msg, { position: "top-right" });
      setError("");
      setFormData({
        deadline1: "",
        deadline2: "",
        deadline3: "",
      });
    } catch (err) {
      const errorMessage =
        err.response?.data?.msg ||
        "Failed to submit Deadline. Please try again later.";
      setError(errorMessage);
      setSuccessMessage("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mt-2">
      <div className="row justify-content-center">
        <div className="col-12" style={{ maxWidth: "50%" }}>
          <form
            onSubmit={handleSubmit}
            className="p-4   shadow-sm bg-white transition-all ease-in-out duration-300"
          >
            <h2 className="text-center mb-4">Important Deadlines</h2>

            <div className="mb-3">
              <label htmlFor="deadline1" className="form-label">
                Deadline 1
              </label>
              <input
                type="text"
                name="deadline1"
                id="deadline1"
                value={formData.deadline1}
                onChange={handleChange}
                placeholder="Enter First Deadline"
                required
                className="form-control transition-all ease-in-out duration-300 focus:ring-2 focus:ring-success"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="deadline2" className="form-label">
                Deadline 2
              </label>
              <input
                type="text"
                name="deadline2"
                id="deadline2"
                value={formData.deadline2}
                onChange={handleChange}
                placeholder="Enter Second Deadline"
                required
                className="form-control transition-all ease-in-out duration-300 focus:ring-2 focus:ring-success"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="deadline3" className="form-label">
                Deadline 3
              </label>
              <input
                type="text"
                name="deadline3"
                id="deadline3"
                value={formData.deadline3}
                onChange={handleChange}
                placeholder="Enter Third Deadline"
                required
                className="form-control transition-all ease-in-out duration-300 focus:ring-2 focus:ring-success"
              />
            </div>

            {error && <div className="alert alert-danger">{error}</div>}
            {successMessage && (
              <div className="alert alert-success">{successMessage}</div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="btn btn-outline-success  mt-3 transition-all ease-in-out duration-300 hover:bg-success hover:text-white"
            >
              {isLoading ? "Submitting..." : "Submit Deadline"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDeadLine;
