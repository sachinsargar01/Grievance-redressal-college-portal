import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

const GetStudentComplaint = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch complaints from the backend API
  useEffect(() => {
    // Replace with your actual backend URL
    fetch("http://localhost:9999/api/getComplaints")
      .then((response) => response.json())
      .then((data) => {
        setComplaints(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to load complaints. Please try again later.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Spinner animation="border" role="status" variant="primary" />
            <p>Loading complaints...</p>
          </Col>
        </Row>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <Alert variant="danger" className="text-center">
              {error}
            </Alert>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={10}>
          <h1 className="text-center mb-4">Student Complaints</h1>

          {complaints.length > 0 ? (
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th> Department</th>
                  <th> Roll no</th>
                  <th>Complaint Type</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map((complaint, index) => (
                  <tr key={index}>
                    <td>{complaint.department}</td>
                    <td>{complaint.rollno}</td>
                    <td>{complaint.ComplaintType}</td>
                    <td>{complaint.description}</td>
                    <td>
                      <Link
                        to={`/Response/${complaint._id}`}
                        className="btn btn-outline-danger btn-sm"
                      >
                        Resulation
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <Alert variant="warning" className="text-center">
              No complaints available.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default GetStudentComplaint;
