import { useEffect, useState } from "react";
import axios from "axios";

const ViewDeadLine = () => {
  const [deadline, setDeadLine] = useState([]); // Store the list of deadlines
  const [isLoading, setIsLoading] = useState(false); // Track the loading state
  const [error, setError] = useState(null); // Track any errors

  // Fetch deadlines
  useEffect(() => {
    const fetchDeadLine = async () => {
      setIsLoading(true);
      setError(null); // Reset any previous error
      try {
        const response = await axios.get(
          "http://localhost:9999/api/getAllDeadLine"
        );
        setDeadLine(response.data);
      } catch (error) {
        console.error("Error fetching deadlines", error);
        setError("Failed to fetch deadlines. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDeadLine();
  }, []); // Re-fetch if necessary

  return (
    <div className="custom-container mt-5">
      <div className="custom-card shadow-lg">
        <div className="custom-card-body">
          <h2 className="custom-title text-dark">View Deadlines</h2>

          {/* Show error message if there's an issue */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Show loading spinner if data is being fetched */}
          {isLoading ? (
            <div className="custom-spinner-container">
              <div className="custom-spinner"></div>
            </div>
          ) : (
            <div>
              {/* Table displaying deadlines */}
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>SR NO</th>
                    <th>Important Deadline 1</th>
                    <th>Important Deadline 2</th>
                    <th>Important Deadline 3</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Check if there are deadlines */}
                  {deadline.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No deadlines found
                      </td>
                    </tr>
                  ) : (
                    deadline.map((deadline, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{deadline.deadline1}</td>
                        <td>{deadline.deadline2}</td>
                        <td>{deadline.deadline3}</td>
                        <td>
                          {new Date(deadline.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewDeadLine;
