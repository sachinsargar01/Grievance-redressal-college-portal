import { useEffect, useState } from "react";
import axios from "axios";

const GetStudentUser = () => {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "http://localhost:9999/api/GetStudentUser"
        );

        const userData = response.data.user;

        if (Array.isArray(userData)) {
          setUser(userData);
        } else {
          throw new Error("API response is not an array");
        }
      } catch (error) {
        console.error("Error fetching users", error);
        setError("Failed to fetch users. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  // Pagination logic
  const usersPerPage = 9;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = Array.isArray(user)
    ? user.slice(indexOfFirstUser, indexOfLastUser)
    : [];

  // Handle page change (pagination)
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="custom-container mt-5">
      <div className="custom-card shadow-lg">
        <div className="custom-card-body">
          <h2 className="custom-title text-success">View All Students</h2>

          {/* Show error message if there's an issue */}
          {error && <div className="error-message">{error}</div>}

          {/* Show loading spinner if users are being fetched */}
          {isLoading ? (
            <div className="custom-spinner-container">
              <div className="custom-spinner"></div>
            </div>
          ) : (
            <div>
              {/* Table displaying users with Bootstrap responsive table */}
              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Sr No</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Check if there are users */}
                    {currentUsers.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="custom-no-complaints">
                          No Students found
                        </td>
                      </tr>
                    ) : (
                      currentUsers.map((user, index) => (
                        <tr key={user._id}>
                          <td>{index + 1}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.number}</td>
                          <td>
                            {new Date(user.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination Controls */}
              <div className="custom-pagination-container">
                <ul className="pagination justify-content-center">
                  {/* Loop to create pagination items */}
                  {Array.from({
                    length: Math.ceil(user.length / usersPerPage),
                  }).map((_, index) => (
                    <li
                      key={index + 1}
                      className={`page-item ${
                        index + 1 === currentPage ? "active" : ""
                      }`}
                      onClick={() => paginate(index + 1)}
                    >
                      <span
                        className={`page-link ${
                          index + 1 === currentPage
                            ? "bg-success text-white"
                            : ""
                        }`}
                      >
                        {index + 1}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStudentUser;
