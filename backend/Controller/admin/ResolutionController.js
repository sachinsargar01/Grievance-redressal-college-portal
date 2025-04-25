import express from "express";
import StudentComplaint from "../../Model/student/SMComplaint.js";
import Resolution from "../../Model/admin/ResolutionModel.js";

// POST: Create a new resolution
export const ResolutionController = async (req, res) => {
  const { complaintId } = req.params;
  const { status } = req.body;

  try {
    // Check if the complaint exists
    const complaint = await StudentComplaint.findById(complaintId);
    if (!complaint) {
      return res.status(404).json({ message: "Complaint not found" });
    }

    // Create a new resolution document
    const resolution = new Resolution({
      complaint: complaintId,
      status,
    });

    await resolution.save();

    res.status(201).json({
      message: "Resolution submitted successfully",
      data: resolution,
    });
  } catch (error) {
    console.error("Error submitting resolution:", error);
    res.status(500).json({ message: "Server error", error });
  }
};
