import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Spinner,
  Alert,
  Card,
  Button,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Response = () => {
  const [complaints, setComplaints] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("In Progress");
  const [submitted, setSubmitted] = useState(false);

  const { complaintId } = useParams();

  // Fetch complaint data based on ID
  useEffect(() => {
    if (complaintId) {
      setLoading(true);
      axios
        .get(`http://localhost:9999/api/getStdComplaint/${complaintId}`)
        .then((response) => {
          console.log("Fetched data:", response.data);
          console.log(complaints.department);
          setComplaints(response.data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError("Failed to load complaint. Please try again later.");
          setLoading(false);
        });
    }
  }, [complaintId]);

  // Log department when complaint data is ready
  useEffect(() => {
    if (complaints?.department) {
      console.log("Department:", complaints.department);
    }
  }, [complaints]);

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmitResponse = (complaintId) => {
    console.log("Submitted resolution for complaint ID:", complaintId);
    console.log("Resolution Status:", status);
    setSubmitted(true);
  };

  if (loading) {
    return (
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Spinner animation="border" role="status" variant="success" />
            <p>Loading complaint...</p>
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
          <h1 className="text-center mb-4">Complaint Details</h1>

          {complaints ? (
            <Card key={complaints.id} className="mb-4">
              <Card.Body>
                <p>
                  <strong>Department:</strong>{" "}
                  {complaints.department || "Not specified"}
                </p>
                <p>
                  <strong>Roll No:</strong> {complaints.rollno}
                </p>
                <p>
                  <strong>Complaint Type:</strong> {complaints.ComplaintType}
                </p>
                <p>
                  <strong>Description:</strong> {complaints.description}
                </p>

                {submitted && (
                  <Alert variant="success">
                    Resolution submitted successfully!
                  </Alert>
                )}

                {/* Resolution Status Dropdown */}
                <Form.Group controlId="resolutionStatus" className="mt-3">
                  <Form.Label>Resolution Status</Form.Label>
                  <Form.Control
                    as="select"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="In Progress">In Progress</option>
                    <option value="Complete">Complete</option>
                    <option value="Pending">Pending</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="outline-success"
                  className="mt-3"
                  onClick={() => handleSubmitResponse(complaints.id)}
                >
                  Submit Resolution
                </Button>
              </Card.Body>
            </Card>
          ) : (
            <Alert variant="warning" className="text-center">
              Complaint not found or still loading.
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Response;
