import { useEffect, useState } from "react";
import axios from "axios";

const ViewNotice = () => {
  const [notice, setNotice] = useState([]); // Store the list of notices
  const [isLoading, setIsLoading] = useState(false); // Track the loading state
  const [error, setError] = useState(null); // Track any errors

  // Fetch notices for the logged-in user
  useEffect(() => {
    const fetchNotice = async () => {
      setIsLoading(true);
      setError(null); // Reset any previous error
      try {
        const response = await axios.get(
          "http://localhost:9999/api/getAllNotice"
        );
        setNotice(response.data);
      } catch (error) {
        console.error("Error fetching notices", error);
        setError("Failed to fetch notices. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotice();
  }, []); // Re-fetch if necessary

  return (
    <div className="custom-container mt-5">
      <div className="custom-card shadow-lg">
        <div className="custom-card-body">
          <h2 className="custom-title text-dark">View Notices</h2>

          {/* Show error message if there's an issue */}
          {error && <div className="alert alert-danger">{error}</div>}

          {/* Show loading spinner if notices are being fetched */}
          {isLoading ? (
            <div className="custom-spinner-container">
              <div className="custom-spinner"></div>
            </div>
          ) : (
            <div>
              {/* Table displaying notices */}
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>SR NO</th>
                    <th>Notice 1</th>
                    <th>Notice 2</th>
                    <th>Notice 3</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Check if there are notices */}
                  {notice.length === 0 ? (
                    <tr>
                      <td colSpan="5" className="text-center text-muted">
                        No notices found
                      </td>
                    </tr>
                  ) : (
                    notice.map((noticeItem, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{noticeItem.notice1}</td>
                        <td>{noticeItem.notice2}</td>
                        <td>{noticeItem.notice3}</td>
                        <td>
                          {new Date(noticeItem.createdAt).toLocaleDateString()}
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

export default ViewNotice;
